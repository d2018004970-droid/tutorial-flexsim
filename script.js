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
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === currentGallery.length - 1;
    prevBtn.classList.toggle('is-disabled', currentIndex === 0);
    nextBtn.classList.toggle('is-disabled', currentIndex === currentGallery.length - 1);
    counter.textContent = `${currentIndex + 1} / ${currentGallery.length}`;
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
    images.forEach(img => img.addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();
      openImage(img, images);
    }));
  });

  prevBtn?.addEventListener('click', e => { e.stopPropagation(); previousImage(); });
  nextBtn?.addEventListener('click', e => { e.stopPropagation(); nextImage(); });
  closeBtn?.addEventListener('click', closeImage);
  lightbox.addEventListener('click', event => { if (event.target === lightbox) closeImage(); });

  lightboxImg.addEventListener('click', event => {
    event.stopPropagation();
    currentZoom = currentZoom === 1 ? 1.5 : 1;
    lightboxImg.style.transform = `scale(${currentZoom})`;
    lightboxImg.style.cursor = currentZoom > 1 ? 'zoom-out' : 'zoom-in';
  });

  lightboxImg.addEventListener('wheel', event => {
    event.preventDefault();
    event.stopPropagation();
    currentZoom += event.deltaY < 0 ? 0.25 : -0.25;
    currentZoom = Math.max(1, Math.min(3, currentZoom));
    lightboxImg.style.transform = `scale(${currentZoom})`;
    lightboxImg.style.cursor = currentZoom > 1 ? 'zoom-out' : 'zoom-in';
  }, { passive:false });

  document.addEventListener('keydown', event => {
    if (!lightbox.classList.contains('open')) return;
    if (event.key === 'Escape') closeImage();
    else if (event.key === 'ArrowLeft') { event.preventDefault(); previousImage(); }
    else if (event.key === 'ArrowRight') { event.preventDefault(); nextImage(); }
  });

  // Navegação: o menu lateral NÃO oculta modelos. Ele apenas leva o usuário
  // até o modelo correspondente no conteúdo central e o destaca.
  const modelViews = [...document.querySelectorAll('.model-view')];
  const modelLinks = [...document.querySelectorAll('.model-link[data-model-target]')];

  function selectModel(id) {
    modelLinks.forEach(link => link.classList.toggle('active', link.dataset.modelTarget === id));
    const selected = document.getElementById(id);
    if (!selected) return;
    const course = document.getElementById('aula01');
    if (course) course.open = true;
    selected.open = true;
    const view = document.getElementById(`${id}-view`);
    if (view) view.scrollIntoView({ behavior: 'smooth', block: 'start' });
    selected.classList.add('nav-focus');
    window.setTimeout(() => selected.classList.remove('nav-focus'), 900);
  }

  modelLinks.forEach(link => link.addEventListener('click', () => selectModel(link.dataset.modelTarget)));

  // Pesquisa: não remove modelos inteiros da página. Apenas oculta etapas sem
  // correspondência, mantendo a estrutura dos modelos disponível.
  const search = document.getElementById('search');
  const clearSearch = document.getElementById('clear-search');
  const status = document.getElementById('search-status');
  const stages = [...document.querySelectorAll('.stage')];

  function doSearch() {
    const q = search.value.trim().toLowerCase();
    clearSearch.style.display = q ? 'block' : 'none';
    if (!q) {
      stages.forEach(stage => stage.classList.remove('search-hidden','search-hit'));
      status.textContent = '';
      return;
    }

    let hits = 0;
    let firstMatchModel = null;
    stages.forEach(stage => {
      const match = stage.innerText.toLowerCase().includes(q);
      stage.classList.toggle('search-hidden', !match);
      stage.classList.toggle('search-hit', match);
      if (match) {
        stage.open = true;
        hits++;
        const model = stage.closest('.model');
        if (model && !firstMatchModel) firstMatchModel = model;
      }
    });

    if (firstMatchModel) selectModel(firstMatchModel.id);
    status.textContent = hits ? `${hits} etapa(s) encontrada(s).` : 'Nenhum resultado encontrado.';
  }

  search?.addEventListener('input', doSearch);
  clearSearch?.addEventListener('click', () => { search.value = ''; doSearch(); search.focus(); });

  // Comportamento dos modelos na área central:
  // ao recolher um modelo, todas as etapas dele são recolhidas também.
  // Ao abrir novamente, as etapas permanecem recolhidas até o usuário abri-las.
  document.querySelectorAll('.model').forEach(model => {
    model.addEventListener('toggle', () => {
      if (!model.open) {
        model.querySelectorAll('.stage, .results').forEach(item => {
          item.open = false;
        });
      }
    });
  });

  // Impressão/PDF: um único painel escalável para qualquer quantidade de modelos.
  const pdfDialog = document.getElementById('pdf-dialog');
  const openPdfDialog = document.getElementById('open-pdf-dialog');
  const closePdfDialog = document.getElementById('close-pdf-dialog');
  const pdfModelSelection = document.getElementById('pdf-model-selection');
  const confirmPdf = document.getElementById('confirm-pdf');
  const pdfSelectAll = document.getElementById('pdf-select-all');
  const pdfClearAll = document.getElementById('pdf-clear-all');
  const pdfRadios = [...document.querySelectorAll('input[name="pdf-scope"]')];
  let pendingPrintIds = [];

  function getAvailableModels() {
    return [...document.querySelectorAll('.model')].filter(model => {
      const placeholder = model.classList.contains('model-placeholder');
      return !placeholder && model.querySelector('.stage, .results, .instruction-card');
    });
  }

  function buildPdfModelList() {
    if (!pdfModelSelection) return;
    pdfModelSelection.innerHTML = '';
    getAvailableModels().forEach(model => {
      const label = document.createElement('label');
      label.className = 'pdf-model-check';
      label.innerHTML = `<input type="checkbox" value="${model.id}" checked><span>${model.querySelector('summary')?.innerText?.trim() || model.id}</span>`;
      pdfModelSelection.appendChild(label);
    });
  }

  function selectedPdfScope() {
    return document.querySelector('input[name="pdf-scope"]:checked')?.value || 'all';
  }

  function openPdfDialogBox() {
    buildPdfModelList();
    pdfDialog?.classList.add('open');
    pdfDialog?.setAttribute('aria-hidden', 'false');
    document.body.classList.add('pdf-dialog-open');
  }

  function closePdfDialogBox() {
    pdfDialog?.classList.remove('open');
    pdfDialog?.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('pdf-dialog-open');
  }

  openPdfDialog?.addEventListener('click', openPdfDialogBox);
  closePdfDialog?.addEventListener('click', closePdfDialogBox);
  pdfDialog?.querySelectorAll('[data-close-pdf]').forEach(el => el.addEventListener('click', closePdfDialogBox));

  pdfRadios.forEach(radio => radio.addEventListener('change', () => {
    const selected = selectedPdfScope() === 'selected';
    pdfModelSelection?.classList.toggle('disabled', !selected);
    if (pdfModelSelection) {
      pdfModelSelection.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.disabled = !selected);
    }
  }));

  pdfSelectAll?.addEventListener('click', () => {
    pdfModelSelection?.querySelectorAll('input[type="checkbox"]').forEach(cb => { cb.checked = true; });
  });

  pdfClearAll?.addEventListener('click', () => {
    pdfModelSelection?.querySelectorAll('input[type="checkbox"]').forEach(cb => { cb.checked = false; });
  });

  function collapseEverythingAfterPrint() {
    const course = document.getElementById('aula01');
    if (course) course.open = false;
    document.querySelectorAll('.model').forEach(model => {
      model.open = false;
      model.querySelectorAll('.stage, .results').forEach(item => item.open = false);
    });
  }

  function collapseModelsAndStagesOnly() {
    document.querySelectorAll('.model').forEach(model => {
      model.open = false;
      model.querySelectorAll('.stage, .results').forEach(item => item.open = false);
    });
  }

  function expandForPrint(ids) {
    const course = document.getElementById('aula01');
    if (course) course.open = true;

    const idSet = new Set(ids);
    getAvailableModels().forEach(model => {
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

  function printContent(ids) {
    if (!ids.length) return;
    pendingPrintIds = ids;
    expandForPrint(ids);
    document.body.dataset.printModels = ids.join(',');

    closePdfDialogBox();

    requestAnimationFrame(() => requestAnimationFrame(async () => {
      await preparePrintImages();
      window.print();
    }));
  }

  confirmPdf?.addEventListener('click', () => {
    const models = getAvailableModels();
    let ids;
    if (selectedPdfScope() === 'all') {
      ids = models.map(model => model.id);
    } else {
      ids = [...pdfModelSelection.querySelectorAll('input[type="checkbox"]:checked')].map(cb => cb.value);
    }

    if (!ids.length) {
      alert('Selecione pelo menos um modelo para gerar o PDF.');
      return;
    }
    printContent(ids);
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && pdfDialog?.classList.contains('open')) closePdfDialogBox();
  });

  // Ao carregar o site, tudo começa recolhido. A aula pode permanecer visível
  // no cabeçalho, mas os modelos e suas etapas ficam minimizados.
  collapseModelsAndStagesOnly();

  window.addEventListener('afterprint', () => {
    delete document.body.dataset.printModels;
    document.querySelectorAll('.model-view.print-selected').forEach(view => view.classList.remove('print-selected'));
    pendingPrintIds = [];
    collapseModelsAndStagesOnly();
  });

  function markLargePrintImages() {
    document.querySelectorAll('.instruction-card').forEach(card => {
      card.classList.remove('print-large-card');
      const media = card.querySelector('.media');
      if (!media) return;
      const images = [...media.querySelectorAll('img')];
      if (!images.length) return;
      const hasLargeSingle = !media.classList.contains('print-grid') && images.some(img => img.naturalWidth >= 1200 || img.naturalHeight >= 900);
      if (hasLargeSingle) card.classList.add('print-large-card');
      images.forEach(img => img.classList.toggle('print-image-large', img.naturalWidth >= 1200 || img.naturalHeight >= 900));
    });
  }

  async function preparePrintImages() {
    const images = [...document.images];
    await Promise.all(images.map(img => {
      img.loading = 'eager';
      img.setAttribute('decoding', 'sync');
      if (img.complete) return Promise.resolve();
      return new Promise(resolve => {
        img.addEventListener('load', resolve, {once:true});
        img.addEventListener('error', resolve, {once:true});
      });
    }));
    markLargePrintImages();
  }

  window.addEventListener('beforeprint', markLargePrintImages);
  window.addEventListener('afterprint', markLargePrintImages);
  window.addEventListener('load', preparePrintImages);
});
