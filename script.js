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
    if (currentIndex > 0) {
      currentIndex -= 1;
      updateImage();
    }
  }

  function nextImage() {
    if (currentIndex < currentGallery.length - 1) {
      currentIndex += 1;
      updateImage();
    }
  }

  // Cada instruction-card é uma galeria independente.
  document.querySelectorAll('.instruction-card').forEach(card => {
    const images = [...card.querySelectorAll('.media img')];
    images.forEach(img => {
      img.addEventListener('click', event => {
        event.preventDefault();
        event.stopPropagation();
        openImage(img, images);
      });
    });
  });

  if (prevBtn) prevBtn.addEventListener('click', e => {
    e.stopPropagation();
    previousImage();
  });

  if (nextBtn) nextBtn.addEventListener('click', e => {
    e.stopPropagation();
    nextImage();
  });

  if (closeBtn) closeBtn.addEventListener('click', closeImage);

  lightbox.addEventListener('click', event => {
    if (event.target === lightbox) closeImage();
  });

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
  }, {passive:false});

  document.addEventListener('keydown', event => {
    if (!lightbox.classList.contains('open')) return;

    if (event.key === 'Escape') {
      closeImage();
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      previousImage();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      nextImage();
    }
  });

  // Navegação entre modelos.
  const modelViews = [...document.querySelectorAll('.model-view')];
  const modelLinks = [...document.querySelectorAll('.model-link')];

  function selectModel(id) {
    modelViews.forEach(view => {
      view.classList.toggle('is-hidden', view.id !== `${id}-view`);
    });

    modelLinks.forEach(link => {
      link.classList.toggle('active', link.dataset.modelTarget === id);
    });

    const selected = document.getElementById(id);
    if (selected) selected.open = true;

    window.scrollTo({
      top: document.querySelector('.page-layout').offsetTop - 10,
      behavior: 'smooth'
    });
  }

  modelLinks.forEach(link => {
    link.addEventListener('click', () => selectModel(link.dataset.modelTarget));
  });

  // Pesquisa.
  const search = document.getElementById('search');
  const clearSearch = document.getElementById('clear-search');
  const status = document.getElementById('search-status');
  const stages = [...document.querySelectorAll('.stage')];

  function doSearch() {
    const q = search.value.trim().toLowerCase();
    clearSearch.style.display = q ? 'block' : 'none';

    if (!q) {
      stages.forEach(stage => stage.classList.remove('search-hidden','search-hit'));
      modelViews.forEach(view => view.classList.remove('search-hidden'));
      status.textContent = '';
      return;
    }

    let hits = 0;
    let firstMatchModel = null;

    modelViews.forEach(view => view.classList.add('search-hidden'));

    stages.forEach(stage => {
      const match = stage.innerText.toLowerCase().includes(q);
      stage.classList.toggle('search-hidden', !match);
      stage.classList.toggle('search-hit', match);

      if (match) {
        stage.open = true;
        hits++;
        const model = stage.closest('.model-view');
        if (model && !firstMatchModel) firstMatchModel = model;
      }
    });

    if (firstMatchModel) {
      firstMatchModel.classList.remove('search-hidden');
      const modelId = firstMatchModel.id.replace('-view','');
      modelLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.modelTarget === modelId);
      });
    }

    status.textContent = hits
      ? `${hits} etapa(s) encontrada(s).`
      : 'Nenhum resultado encontrado.';
  }

  search.addEventListener('input', doSearch);
  clearSearch.addEventListener('click', () => {
    search.value = '';
    doSearch();
    search.focus();
  });
});
