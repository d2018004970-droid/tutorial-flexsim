
document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');
  const counter = document.getElementById('lightbox-counter');

  let currentGallery = [];
  let currentIndex = 0;
  let currentZoom = 1;

  function updateImage() {
    if (!currentGallery.length) return;
    const img = currentGallery[currentIndex];
    lightboxImg.src = img.currentSrc || img.src;
    lightboxImg.alt = img.alt || '';
    currentZoom = 1;
    lightboxImg.style.transform = 'scale(1)';
    lightboxImg.style.cursor = 'zoom-in';
    if (prevBtn) {
      prevBtn.disabled = currentIndex === 0;
      prevBtn.classList.toggle('is-disabled', currentIndex === 0);
    }
    if (nextBtn) {
      nextBtn.disabled = currentIndex === currentGallery.length - 1;
      nextBtn.classList.toggle('is-disabled', currentIndex === currentGallery.length - 1);
    }
    if (counter) counter.textContent = `${currentIndex + 1} / ${currentGallery.length}`;
  }

  function openImage(img, gallery) {
    currentGallery = gallery;
    currentIndex = Math.max(0, gallery.indexOf(img));
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    updateImage();
  }

  function closeImage() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImg.src = '';
    currentGallery = [];
    currentIndex = 0;
    currentZoom = 1;
    lightboxImg.style.transform = 'scale(1)';
  }

  function previousImage() {
    if (currentIndex > 0) { currentIndex -= 1; updateImage(); }
  }
  function nextImage() {
    if (currentIndex < currentGallery.length - 1) { currentIndex += 1; updateImage(); }
  }

  document.querySelectorAll('.instruction-card').forEach(card => {
    const images = [...card.querySelectorAll('.media img')];
    images.forEach(img => img.addEventListener('click', e => {
      e.preventDefault(); e.stopPropagation(); openImage(img, images);
    }));
  });

  prevBtn?.addEventListener('click', e => { e.stopPropagation(); previousImage(); });
  nextBtn?.addEventListener('click', e => { e.stopPropagation(); nextImage(); });
  closeBtn?.addEventListener('click', closeImage);
  lightbox?.addEventListener('click', e => { if (e.target === lightbox) closeImage(); });

  lightboxImg?.addEventListener('click', e => {
    e.stopPropagation();
    currentZoom = currentZoom === 1 ? 1.5 : 1;
    lightboxImg.style.transform = `scale(${currentZoom})`;
    lightboxImg.style.cursor = currentZoom > 1 ? 'zoom-out' : 'zoom-in';
  });
  lightboxImg?.addEventListener('wheel', e => {
    e.preventDefault();
    currentZoom += e.deltaY < 0 ? 0.2 : -0.2;
    currentZoom = Math.min(3, Math.max(1, currentZoom));
    lightboxImg.style.transform = `scale(${currentZoom})`;
    lightboxImg.style.cursor = currentZoom > 1 ? 'zoom-out' : 'zoom-in';
  }, {passive:false});

  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeImage();
    else if (e.key === 'ArrowLeft') { e.preventDefault(); previousImage(); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); nextImage(); }
  });

  // ---------- Navegação dos modelos ----------
  const allModels = [...document.querySelectorAll('.model')];
  const allViews = [...document.querySelectorAll('.model-view')];
  const allModelLinks = [...document.querySelectorAll('.model-link[data-model-target]')];
  const allCourses = [...document.querySelectorAll('.course-section')];
  const allCourseNav = [...document.querySelectorAll('.sidebar-course-group[data-course-id]')];

  function selectModel(id) {
    if (!document.getElementById(id)) return;
    allModelLinks.forEach(link => link.classList.toggle('active', link.dataset.modelTarget === id));
    const selected = document.getElementById(id);
    if (!selected) return;
    const course = selected.closest('.course-section');
    if (course) course.open = true;
    selected.open = true;
    selected.querySelectorAll('.stage, .results').forEach(item => {
      // Do not force stages open; the model controls only its own state.
    });
    selected.classList.add('nav-focus');
    window.setTimeout(() => selected.classList.remove('nav-focus'), 900);
    selected.scrollIntoView({behavior:'smooth', block:'start'});
  }
  allModelLinks.forEach(link => link.addEventListener('click', () => selectModel(link.dataset.modelTarget)));

  // O menu lateral da aula apenas expande/recolhe a própria aula no menu.
  document.querySelectorAll('[data-course-toggle]').forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.closest('.sidebar-course-group');
      const nav = group?.querySelector('[data-course-model-nav]');
      if (!nav) return;
      const hidden = nav.classList.toggle('future-hidden');
      const caret = btn.querySelector('.course-caret');
      if (caret) caret.textContent = hidden ? '▸' : '▾';
    });
  });

  // ---------- Modelos: recolher o modelo recolhe todas as etapas ----------
  allModels.forEach(model => {
    model.addEventListener('toggle', () => {
      if (!model.open) {
        model.querySelectorAll('.stage, .results').forEach(item => item.open = false);
      }
    });
  });

  // ---------- Pesquisa ----------
  const search = document.getElementById('search');
  const clearSearch = document.getElementById('clear-search');
  const status = document.getElementById('search-status');
  const stages = [...document.querySelectorAll('.stage')];

  function doSearch() {
    const q = (search?.value || '').trim().toLowerCase();
    if (clearSearch) clearSearch.style.display = q ? 'block' : 'none';
    if (!q) {
      stages.forEach(s => s.classList.remove('search-hidden','search-hit'));
      status.textContent = '';
      return;
    }

    let hits = 0;
    let firstMatchModel = null;
    stages.forEach(stage => {
      const model = stage.closest('.model');
      const match = !!model && stage.innerText.toLowerCase().includes(q);
      stage.classList.toggle('search-hidden', !match);
      stage.classList.toggle('search-hit', match);
      if (match) {
        stage.open = true;
        if (model) model.open = true;
        hits++;
        if (!firstMatchModel) firstMatchModel = model;
      }
    });
    if (firstMatchModel) selectModel(firstMatchModel.id);
    status.textContent = hits ? `${hits} etapa(s) encontrada(s).` : 'Nenhum resultado encontrado.';
  }
  search?.addEventListener('input', doSearch);
  clearSearch?.addEventListener('click', () => { search.value=''; doSearch(); search.focus(); });

  // ---------- PDF ----------
  const pdfDialog = document.getElementById('pdf-dialog');
  const openPdfDialog = document.getElementById('open-pdf-dialog');
  const closePdfDialog = document.getElementById('close-pdf-dialog');
  const pdfModelSelection = document.getElementById('pdf-model-selection');
  const confirmPdf = document.getElementById('confirm-pdf');
  const pdfSelectAll = document.getElementById('pdf-select-all');
  const pdfClearAll = document.getElementById('pdf-clear-all');
  const pdfRadios = [...document.querySelectorAll('input[name="pdf-scope"]')];

  function getAvailableModels() {
    return allModels.filter(model => model.querySelector('.stage, .results, .instruction-card'));
  }

  function buildPdfModelList() {
    if (!pdfModelSelection) return;
    pdfModelSelection.innerHTML = '';
    getAvailableModels().forEach(model => {
      const label = document.createElement('label');
      label.className = 'pdf-model-check';
      const input = document.createElement('input');
      input.type = 'checkbox'; input.value = model.id; input.checked = true;
      const span = document.createElement('span');
      span.textContent = model.querySelector('summary')?.innerText?.trim() || model.id;
      label.append(input, span);
      pdfModelSelection.appendChild(label);
    });
  }

  function selectedPdfScope() {
    return document.querySelector('input[name="pdf-scope"]:checked')?.value || 'all';
  }

  function openPdfDialogBox() {
    buildPdfModelList();
    pdfDialog?.classList.add('open');
    pdfDialog?.setAttribute('aria-hidden','false');
    document.body.classList.add('pdf-dialog-open');
    const selected = selectedPdfScope() === 'selected';
    pdfModelSelection?.classList.toggle('disabled', !selected);
    pdfModelSelection?.querySelectorAll('input').forEach(cb => cb.disabled = !selected);
  }

  function closePdfDialogBox() {
    pdfDialog?.classList.remove('open');
    pdfDialog?.setAttribute('aria-hidden','true');
    document.body.classList.remove('pdf-dialog-open');
  }

  openPdfDialog?.addEventListener('click', openPdfDialogBox);
  closePdfDialog?.addEventListener('click', closePdfDialogBox);
  pdfDialog?.querySelectorAll('[data-close-pdf]').forEach(el => el.addEventListener('click', closePdfDialogBox));

  pdfRadios.forEach(radio => radio.addEventListener('change', () => {
    const selected = selectedPdfScope() === 'selected';
    pdfModelSelection?.classList.toggle('disabled', !selected);
    pdfModelSelection?.querySelectorAll('input').forEach(cb => cb.disabled = !selected);
  }));

  pdfSelectAll?.addEventListener('click', () => {
    pdfModelSelection?.querySelectorAll('input').forEach(cb => cb.checked = true);
  });
  pdfClearAll?.addEventListener('click', () => {
    pdfModelSelection?.querySelectorAll('input').forEach(cb => cb.checked = false);
  });

  function collapseEverything() {
    allCourses.forEach(course => course.open = true);
    allModels.forEach(model => {
      model.open = false;
      model.querySelectorAll('.stage, .results').forEach(item => item.open = false);
    });
  }

  function expandForPrint(ids) {
    const idSet = new Set(ids);
    allCourses.forEach(course => {
      const selectedInCourse = [...course.querySelectorAll('.model')].some(m => idSet.has(m.id));
      course.classList.toggle('print-selected-course', selectedInCourse);
    });
    allModels.forEach(model => {
      const shouldPrint = idSet.has(model.id);
      const view = document.getElementById(`${model.id}-view`);
      if (view) view.classList.toggle('print-selected', shouldPrint);
      if (shouldPrint) {
        model.open = true;
        model.querySelectorAll('.stage, .results').forEach(item => item.open = true);
      } else {
        model.open = false;
        model.querySelectorAll('.stage, .results').forEach(item => item.open = false);
      }
    });
  }

  async function preparePrintImages() {
    const images = [...document.images];
    await Promise.all(images.map(img => {
      img.loading='eager'; img.setAttribute('decoding','sync');
      if (img.complete) return Promise.resolve();
      return new Promise(resolve => {
        img.addEventListener('load', resolve, {once:true});
        img.addEventListener('error', resolve, {once:true});
      });
    }));
    document.querySelectorAll('.instruction-card').forEach(card => {
      card.classList.remove('print-large-card');
      const media = card.querySelector('.media');
      if (!media) return;
      const images = [...media.querySelectorAll('img')];
      const large = images.some(img => img.naturalWidth >= 1200 || img.naturalHeight >= 900);
      if (large && !media.classList.contains('print-grid')) card.classList.add('print-large-card');
      images.forEach(img => img.classList.toggle('print-image-large', img.naturalWidth >= 1200 || img.naturalHeight >= 900));
    });
  }

  confirmPdf?.addEventListener('click', async () => {
    const models = getAvailableModels();
    let ids = selectedPdfScope() === 'all'
      ? models.map(m => m.id)
      : [...pdfModelSelection.querySelectorAll('input:checked')].map(cb => cb.value);

    if (!ids.length) {
      alert('Selecione pelo menos um modelo para gerar o PDF.');
      return;
    }

    expandForPrint(ids);
    document.body.dataset.printModels = ids.join(',');
    closePdfDialogBox();

    await preparePrintImages();
    requestAnimationFrame(() => requestAnimationFrame(() => window.print()));
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && pdfDialog?.classList.contains('open')) closePdfDialogBox();
  });

  // Entrada inicial: aulas visíveis ficam abertas, modelos e etapas recolhidos.
  collapseEverything();

  window.addEventListener('afterprint', () => {
    delete document.body.dataset.printModels;
    allViews.forEach(view => view.classList.remove('print-selected'));
    allCourses.forEach(course => course.classList.remove('print-selected-course'));
    collapseEverything();
  });
});
