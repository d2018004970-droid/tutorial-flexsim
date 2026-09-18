/* ============================================================
   Tutorial FlexSim — Renderer + ferramentas
   Le window.TUTORIAL_CONTENT (gerado por build/build.ps1) e monta
   toda a pagina. Nao ha HTML de conteudo hardcoded neste arquivo.
   ============================================================ */
(function () {
  'use strict';

  var DATA = window.TUTORIAL_CONTENT || { courses: [], glossary: [], shortcuts: [], warnings: [], meta: {} };

  // ---------------------------------------------------------------
  // Helpers
  // ---------------------------------------------------------------
  function qs(sel, root) { return (root || document).querySelector(sel); }
  function qsa(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function el(tag, className, html) {
    var e = document.createElement(tag);
    if (className) e.className = className;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }
  function escapeHtml(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function debounce(fn, ms) {
    var t;
    return function () { var a = arguments, ctx = this; clearTimeout(t); t = setTimeout(function () { fn.apply(ctx, a); }, ms); };
  }
  function webImagePath(file) {
    var base = file.replace(/\.[^.]+$/, '');
    return 'images/web/' + base + '.jpg';
  }
  function originalImagePath(file) { return 'images/' + file; }

  // ---------------------------------------------------------------
  // Tokens inline: [CHECK] [UNCHECK] [PLUS] [LETRA_VERMELHA]..[FIM_LETRA_VERMELHA]
  // [algumicone.png] [IMG:arquivo]
  // ---------------------------------------------------------------
  var ICON_FILE_RE = /\[([A-Za-z0-9_\-]+\.(?:png|bmp|ico|jpe?g|svg))\]/gi;
  var IMG_TOKEN_RE = /\[IMG:([^\]]+)\]/g;

  function renderInline(raw) {
    if (raw == null) return '';
    var s = String(raw);
    s = s.replace(IMG_TOKEN_RE, function (_, file) {
      return '<img class="flexsim-icon" src="images/word-media/' + file + '" alt="' + file + '">';
    });
    s = s.replace(ICON_FILE_RE, function (_, file) {
      return '<img class="flexsim-icon" src="' + originalImagePath(file) + '" alt="' + file + '">';
    });
    s = s.replace(/\[CHECK\]/g, '<span class="check-box" aria-hidden="true">&#10003;</span>');
    s = s.replace(/\[UNCHECK\]/g, '<span class="check-box empty" aria-hidden="true">&#9633;</span>');
    s = s.replace(/\[PLUS\]/g, '<span class="plus-badge green" aria-hidden="true">+</span>');
    s = s.replace(/\[LETRA_VERMELHA\]([\s\S]*?)\[FIM_LETRA_VERMELHA\]/g, '<span class="alert-text">$1</span>');
    return s;
  }

  // Uma lista de linhas (strings) vira paragrafos <p>, separados por linhas vazias.
  function linesToHtml(lines) {
    if (!lines || !lines.length) return '';
    var groups = [[]];
    lines.forEach(function (ln) {
      if (ln == null || ln.trim() === '') {
        if (groups[groups.length - 1].length) groups.push([]);
      } else {
        groups[groups.length - 1].push(ln);
      }
    });
    groups = groups.filter(function (g) { return g.length; });
    return groups.map(function (g) {
      return '<p>' + g.map(renderInline).join('<br>') + '</p>';
    }).join('');
  }

  function titleText(model) {
    var m = /Modelo\s*0*(\d+)\)?\s*(.*)$/i.exec(model.label || '');
    return model.label;
  }

  // ---------------------------------------------------------------
  // Descricoes curadas para o glossario e atalhos
  // ---------------------------------------------------------------
  var OBJECT_DESCRIPTIONS = {
    'Source': 'Gera a chegada de itens (flowitems) no modelo, conforme um padrao de tempo entre chegadas.',
    'Queue': 'Armazena itens aguardando a proxima etapa do processo; pode ter capacidade limitada ou infinita.',
    'Processor': 'Executa uma operacao sobre o item com um tempo de processamento definido.',
    'Sink': 'Remove os itens do modelo, representando a saida do sistema.',
    'Operator': 'Executor de tarefas (transporte, setup, processamento) que pode ser alocado a outros objetos.',
    'Conveyor': 'Esteira que transporta itens fisicamente entre dois pontos do modelo.',
    'Decision Point': 'Direciona o fluxo de um item entre diferentes caminhos, com base em uma regra.',
    'Combiner': 'Junta multiplos itens (ex.: produto + componentes) em uma unica entidade.',
    'Separator': 'Separa uma entidade combinada de volta em seus itens originais.',
    'Global Table': 'Tabela de dados acessivel por todo o modelo, usada em regras e logicas.',
    'A* Navigation': 'Sistema de navegacao que permite a operadores desviar de obstaculos no Mapa 3D.'
  };
  var SHORTCUT_DESCRIPTIONS = {
    'A': 'Conectar objetos (Input/Output Ports) — clique no objeto de origem e depois no de destino.',
    'S': 'Conectar na Porta Central (Central Port) — usado para associar um Operator a um objeto.',
    'Q': 'Desconectar objetos (Disconnect Object).',
    'Ctrl+C / Ctrl+V': 'Copiar e colar um objeto já configurado, mantendo suas propriedades.',
    'Ctrl + clique': 'Selecionar múltiplos objetos ao mesmo tempo para editar juntos.',
    'Shift + clique': 'Limpar a seleção atual clicando em uma área vazia do Mapa 3D.'
  };

  // ---------------------------------------------------------------
  // Estado global de navegacao (para presentation mode / trilha)
  // ---------------------------------------------------------------
  var FLAT_STAGES = []; // {stageId, modelId, courseId, number, title, type}
  var STAGE_INDEX = {}; // stageId -> index em FLAT_STAGES
  var MODEL_BY_ID = {};
  var COURSE_BY_ID = {};

  // ==================================================================
  // RENDER
  // ==================================================================
  function renderAll() {
    if (DATA.meta && DATA.meta.title) {
      document.title = DATA.meta.title;
      var st = qs('#site-title'); if (st) st.textContent = DATA.meta.title;
    }
    var courseList = qs('#course-list');
    var sidebarNav = qs('#sidebar-nav');
    courseList.innerHTML = '';
    sidebarNav.innerHTML = '';

    if (!DATA.courses || !DATA.courses.length) {
      qs('#empty-state').hidden = false;
      return;
    }

    var globalResults = collectGlobalResults();

    DATA.courses.forEach(function (course, ci) {
      COURSE_BY_ID[course.id] = course;
      sidebarNav.appendChild(buildSidebarCourse(course, ci === 0));
      courseList.appendChild(buildCourseSection(course, ci === 0, globalResults));
    });

    buildFlatStages();
    buildGlossaryPanel();
    wireNavigation();
    wireSearch();
    wireLightbox();
    wireTheme();
    wirePdfDialog();
    wirePresentation();
    wireStageTrailScrollSpy();
    applyHashRoute();
  }

  function collectGlobalResults() {
    var arr = [];
    DATA.courses.forEach(function (course) {
      course.models.forEach(function (model) {
        var rs = model.stages.filter(function (s) { return s.results && s.results.throughput; });
        if (rs.length) {
          var last = rs[rs.length - 1];
          arr.push({ modelId: model.id, label: model.label, throughput: parseFloat(String(last.results.throughput).replace(/\./g, '').replace(',', '.')) });
        }
      });
    });
    return arr;
  }

  function buildSidebarCourse(course, openByDefault) {
    var wrap = el('div', 'nav-course');
    var btn = el('button', 'nav-course-toggle' + (openByDefault ? '' : ' collapsed'), '');
    btn.type = 'button';
    btn.innerHTML = '<span class="caret">&#9662;</span><span>' + escapeHtml(course.title ? ('Aula ' + pad2(course.number) + ' - ' + course.title) : ('Aula ' + pad2(course.number))) + '</span>';
    var modelsNav = el('div', 'nav-models' + (openByDefault ? '' : ' collapsed'));
    course.models.forEach(function (model) {
      var b = el('button', 'model-link', '');
      b.type = 'button';
      b.dataset.modelTarget = model.id;
      b.innerHTML = '<span class="model-link-icon">&#9635;</span><span>' + escapeHtml(model.label) + '</span><span class="model-link-arrow">&rsaquo;</span>';
      b.addEventListener('click', function () { selectModel(model.id); closeSidebarMobile(); });
      modelsNav.appendChild(b);
    });
    btn.addEventListener('click', function () {
      var collapsed = modelsNav.classList.toggle('collapsed');
      btn.classList.toggle('collapsed', collapsed);
    });
    wrap.appendChild(btn);
    wrap.appendChild(modelsNav);
    return wrap;
  }

  function pad2(n) { n = String(n); return n.length < 2 ? '0' + n : n; }

  function buildCourseSection(course, openByDefault, globalResults) {
    var details = el('details', 'course-section');
    details.id = course.id;
    if (openByDefault) details.open = true;
    var summary = el('summary', 'course-heading');
    summary.innerHTML =
      '<div><div class="section-kicker">AULA ' + pad2(course.number) + '</div>' +
      '<h2>' + (course.title ? escapeHtml(course.title) : ('Aula ' + pad2(course.number))) + '</h2></div>' +
      '<span class="course-chevron">&#9660;</span>';
    details.appendChild(summary);

    course.models.forEach(function (model) {
      MODEL_BY_ID[model.id] = model; model.courseId = course.id;
      var view = el('div', 'model-view');
      view.id = model.id + '-view';
      view.dataset.modelId = model.id;
      view.appendChild(buildModel(model, globalResults));
      details.appendChild(view);
    });
    return details;
  }

  function buildModel(model, globalResults) {
    var details = el('details', 'model');
    details.id = model.id;
    var summary = el('summary', '', '<span class="model-caret">&#9660;</span><span>' + escapeHtml(model.label) + '</span>');
    details.appendChild(summary);
    var content = el('div', 'model-content');

    if (model.stages.length > 1) content.appendChild(buildStageTrail(model));
    if (model.layout && model.layout.objects && model.layout.objects.length) content.appendChild(buildMiniMap(model));

    model.stages.forEach(function (stage, si) {
      stage.modelId = model.id;
      content.appendChild(buildStage(stage, model, si, globalResults));
    });
    details.appendChild(content);

    details.addEventListener('toggle', function () {
      if (!details.open) qsa('.stage', content).forEach(function (s) { s.open = false; });
    });
    return details;
  }

  function stageIconLabel(stage) {
    if (stage.type === 'results') return '&#10003;';
    if (stage.type === 'final') return '&#9733;';
    return stage.number;
  }

  function buildStageTrail(model) {
    var wrap = el('div', 'stage-trail');
    model.stages.forEach(function (stage) {
      var chip = el('button', 'trail-chip', '');
      chip.type = 'button';
      chip.dataset.stageTarget = stage.id;
      var label = stage.type === 'results' ? 'Resultados' : (stage.type === 'final' ? 'Final' : ('Etapa ' + parseInt(stage.number, 10)));
      chip.innerHTML = '<span class="trail-num">' + stageIconLabel(stage) + '</span><span>' + escapeHtml(label) + '</span>';
      chip.addEventListener('click', function () {
        var target = document.getElementById(stage.id);
        if (target) { target.open = true; target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      });
      wrap.appendChild(chip);
    });
    return wrap;
  }

  // ---------------- Mini-mapa ----------------
  var TYPE_GLYPH = {
    'Source': 'rect', 'Queue': 'rect', 'Processor': 'rect', 'Sink': 'rect',
    'Combiner': 'rect', 'Separator': 'rect', 'Global Table': 'rect', 'A* Navigation': 'rect',
    'Operator': 'circle', 'Decision Point': 'diamond'
  };

  function buildMiniMap(model) {
    var outer = el('div', 'model-map-outer');
    var toggle = el('button', 'map-toggle', 'Mapa do modelo &#9662;');
    toggle.type = 'button';
    var wrap = el('div', 'model-map-wrap');
    toggle.addEventListener('click', function () {
      var open = wrap.classList.toggle('open');
      toggle.innerHTML = open ? 'Mapa do modelo &#9652;' : 'Mapa do modelo &#9662;';
      if (open && !wrap.dataset.built) {
        var head = el('div', 'model-map-head', '<h4>Mapa do modelo</h4><span class="model-map-legend">gerado automaticamente — cinza = já existente, cor = novo neste modelo</span>');
        wrap.appendChild(head);
        wrap.appendChild(buildMapSvg(model, false));
        wrap.dataset.built = '1';
      }
    });
    outer.appendChild(toggle);
    outer.appendChild(wrap);
    return outer;
  }

  function computeBounds(objects) {
    var xs = [], ys = [];
    objects.forEach(function (o) {
      if (o.type === 'Conveyor' || o.x1 !== undefined) { xs.push(o.x1, o.x2); ys.push(o.y1, o.y2); }
      else { xs.push(o.x); ys.push(o.y); }
    });
    if (!xs.length) return { minX: 0, maxX: 10, minY: 0, maxY: 10 };
    return { minX: Math.min.apply(null, xs), maxX: Math.max.apply(null, xs), minY: Math.min.apply(null, ys), maxY: Math.max.apply(null, ys) };
  }

  function buildMapSvg(model, big) {
    var objs = model.layout.objects;
    var b = computeBounds(objs);
    var pad = Math.max(4, (b.maxX - b.minX) * 0.12);
    var minX = b.minX - pad, maxX = b.maxX + pad, minY = b.minY - pad, maxY = b.maxY + pad;
    var w = Math.max(1, maxX - minX), h = Math.max(1, maxY - minY);
    var vbW = 480, vbH = Math.max(140, vbW * (h / w));
    function sx(x) { return ((x - minX) / w) * vbW; }
    function sy(y) { return vbH - ((y - minY) / h) * vbH; } // inverte Y (FlexSim Y+ = topo)

    var svgNs = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(svgNs, 'svg');
    svg.setAttribute('viewBox', '0 0 ' + vbW + ' ' + vbH);
    svg.setAttribute('class', 'model-map-svg');
    svg.style.maxHeight = big ? '78vh' : '260px';

    objs.forEach(function (o) {
      if (o.type === 'Conveyor' || o.x1 !== undefined) {
        var line = document.createElementNS(svgNs, 'line');
        line.setAttribute('x1', sx(o.x1)); line.setAttribute('y1', sy(o.y1));
        line.setAttribute('x2', sx(o.x2)); line.setAttribute('y2', sy(o.y2));
        line.setAttribute('class', 'map-conveyor ' + (o.isNew ? 'map-conveyor-new' : 'map-conveyor-old'));
        var tt = document.createElementNS(svgNs, 'title'); tt.textContent = 'Conveyor — (' + o.x1 + ',' + o.y1 + ') -> (' + o.x2 + ',' + o.y2 + ')';
        line.appendChild(tt);
        if (o.stageId) { line.style.cursor = 'pointer'; line.addEventListener('click', function () { goToStage(o.stageId); }); }
        svg.appendChild(line);
      }
    });

    objs.forEach(function (o) {
      if (o.type === 'Conveyor' || o.x === undefined) return;
      var g = document.createElementNS(svgNs, 'g');
      g.setAttribute('class', o.isNew ? 'map-node-new' : 'map-node-old');
      var cx = sx(o.x), cy = sy(o.y);
      var glyph = TYPE_GLYPH[o.type] || 'rect';
      var shape;
      if (glyph === 'circle') {
        shape = document.createElementNS(svgNs, 'circle');
        shape.setAttribute('cx', cx); shape.setAttribute('cy', cy); shape.setAttribute('r', 7);
      } else if (glyph === 'diamond') {
        shape = document.createElementNS(svgNs, 'polygon');
        shape.setAttribute('points', [cx + ',' + (cy - 8), (cx + 8) + ',' + cy, cx + ',' + (cy + 8), (cx - 8) + ',' + cy].join(' '));
      } else {
        shape = document.createElementNS(svgNs, 'rect');
        shape.setAttribute('x', cx - 8); shape.setAttribute('y', cy - 7); shape.setAttribute('width', 16); shape.setAttribute('height', 14); shape.setAttribute('rx', 3);
      }
      shape.setAttribute('fill', 'currentColor');
      var tt = document.createElementNS(svgNs, 'title'); tt.textContent = o.name + ' (' + (o.type || '?') + ')  X=' + o.x + ' Y=' + o.y;
      g.appendChild(shape); g.appendChild(tt);
      if (big) {
        var label = document.createElementNS(svgNs, 'text');
        label.setAttribute('x', cx); label.setAttribute('y', cy + 18);
        label.setAttribute('text-anchor', 'middle'); label.setAttribute('class', 'map-label');
        label.textContent = o.name;
        g.appendChild(label);
      }
      if (o.stageId) { g.style.cursor = 'pointer'; g.addEventListener('click', function () { goToStage(o.stageId); closeLightbox(); }); }
      svg.appendChild(g);
    });

    return svg;
  }

  function goToStage(stageId) {
    var stage = document.getElementById(stageId);
    if (!stage) return;
    var model = stage.closest('.model'); if (model) model.open = true;
    var course = stage.closest('.course-section'); if (course) course.open = true;
    stage.open = true;
    stage.scrollIntoView({ behavior: 'smooth', block: 'start' });
    stage.classList.add('search-hit');
    setTimeout(function () { stage.classList.remove('search-hit'); }, 1200);
  }

  // ---------------- Etapa ----------------
  function buildStage(stage, model, index, globalResults) {
    var details = el('details', 'stage');
    details.id = stage.id;
    var summary = el('summary', '', '');
    var numClass = 'stage-number' + (stage.type === 'results' || stage.type === 'final' ? ' type-' + stage.type : '');
    summary.innerHTML = '<span class="' + numClass + '">' + stageIconLabel(stage) + '</span><span>' + escapeHtml(stage.title) + '</span><span class="stage-caret">&#9660;</span>';
    details.appendChild(summary);

    var content = el('div', 'stage-content ' + (stage.columns.length >= 2 ? 'cols-2' : 'cols-1'));
    stage.columns.forEach(function (col) { content.appendChild(buildColumn(col, stage)); });
    details.appendChild(content);

    if (stage.results) {
      details.appendChild(buildResultsPanel(stage, model, globalResults));
    }

    var wrapper = el('div', '');
    wrapper.appendChild(details);
    wrapper.appendChild(buildStageFooterNav(stage, model, index));
    return wrapper;
  }

  function buildStageFooterNav(stage, model, index) {
    var nav = el('div', 'stage-footer-nav');
    var prevA = el('a', 'nav-prev', '&larr; Etapa anterior');
    var nextA = el('a', 'nav-next', 'Próxima etapa &rarr;');
    prevA.href = 'javascript:void(0)'; nextA.href = 'javascript:void(0)';
    prevA.addEventListener('click', function () { navRelative(stage.id, -1); });
    nextA.addEventListener('click', function () { navRelative(stage.id, 1); });
    nav.appendChild(prevA); nav.appendChild(nextA);
    return nav;
  }

  function navRelative(stageId, dir) {
    var idx = STAGE_INDEX[stageId];
    if (idx === undefined) return;
    var target = FLAT_STAGES[idx + dir];
    if (!target) return;
    goToStage(target.id);
    location.hash = '#' + target.modelId + '/' + target.id.split('-etapa-')[1];
  }

  function buildColumn(col, stage) {
    var card = el('article', 'instruction-card');
    card.appendChild(el('div', 'card-accent'));
    var body = el('div', 'card-body');
    if (col.title) body.appendChild(el('h3', 'card-title', renderInline(col.title)));

    if (col.prints && col.prints.length) {
      var media = el('div', 'media' + (col.prints.length > 1 ? ' print-grid' : ''));
      col.prints.forEach(function (pr) {
        var img = document.createElement('img');
        img.loading = 'lazy'; img.decoding = 'async';
        img.src = webImagePath(pr.file);
        img.alt = pr.file;
        img.dataset.full = originalImagePath(pr.file);
        if (pr.w) img.width = pr.w;
        if (pr.h) img.height = pr.h;
        img.addEventListener('error', function () { img.src = originalImagePath(pr.file); });
        media.appendChild(img);
      });
      body.appendChild(media);
    }

    if (col.roteiro && col.roteiro.length) {
      var rot = el('div', 'roteiro');
      rot.appendChild(el('div', 'roteiro-label', 'ROTEIRO'));
      rot.innerHTML += linesToHtml(col.roteiro);
      body.appendChild(rot);
    }

    if (col.objeto && col.objeto.length) body.appendChild(buildField('Objeto', col.objeto));
    if (col.caminho && col.caminho.length) body.appendChild(buildField('Caminho onde encontrar objeto', col.caminho));
    if (col.acao && col.acao.length) body.appendChild(buildField('Ação do mouse', col.acao));

    if (col.properties && col.properties.length) body.appendChild(buildProperties(col.properties));

    if (col.observacoes && col.observacoes.length) {
      col.observacoes.forEach(function (block) {
        if (!block.length) return;
        var note = el('div', 'note');
        note.appendChild(el('b', '', 'Observação'));
        note.appendChild(el('span', '', linesToHtml(block)));
        body.appendChild(note);
      });
    }

    card.appendChild(body);
    return card;
  }

  function buildField(label, lines) {
    var stacked = lines.length > 1 || (lines[0] && lines[0].length > 60);
    var f = el('div', 'field' + (stacked ? ' stacked' : ''));
    f.appendChild(el('b', '', label));
    f.appendChild(el('span', '', linesToHtml(lines)));
    return f;
  }

  function buildProperties(props) {
    var wrap = el('div', 'properties');
    props.forEach(function (p) {
      var row = el('div', 'property');
      var t = el('div', 'property-title', '<span class="plus-badge" aria-hidden="true">+</span>' + escapeHtml(p.title));
      row.appendChild(t);
      row.appendChild(el('div', 'property-content', linesToHtml(p.lines)));
      wrap.appendChild(row);
    });
    return wrap;
  }

  // ---------------- Resultados ----------------
  function buildResultsPanel(stage, model, globalResults) {
    var r = stage.results;
    var panel = el('div', 'results-panel');
    panel.appendChild(el('h4', '', 'Painel de resultados'));

    var grid = el('div', 'kpi-grid');
    if (r.throughput) {
      var t = el('div', 'kpi-tile throughput');
      t.innerHTML = '<div class="kpi-label">QUANTIDADE EXPEDIDA</div><div class="kpi-value">' + escapeHtml(r.throughput) + '</div>';
      grid.appendChild(t);
    }
    (r.processing || []).forEach(function (p) {
      var t = el('div', 'kpi-tile');
      t.innerHTML = '<div class="kpi-label">' + escapeHtml(p.name) + '</div><div class="kpi-value">' + p.pct.toFixed(2).replace('.', ',') + '%</div>' +
        '<div class="kpi-bar-track"><div class="kpi-bar-fill" style="width:' + Math.min(100, p.pct) + '%"></div></div>';
      grid.appendChild(t);
    });
    panel.appendChild(grid);

    if (globalResults && globalResults.length > 1) {
      panel.appendChild(buildEvolutionChart(globalResults, model.id));
    }
    return panel;
  }

  function buildEvolutionChart(globalResults, currentModelId) {
    var wrap = el('div', 'results-evolution');
    wrap.appendChild(el('div', 'roteiro-label', 'EVOLUÇÃO DA QUANTIDADE EXPEDIDA ENTRE MODELOS'));
    var svgNs = 'http://www.w3.org/2000/svg';
    var w = 480, h = 130, padB = 22, padT = 10, barGap = 14;
    var max = Math.max.apply(null, globalResults.map(function (g) { return g.throughput || 0; })) || 1;
    var barW = (w - (globalResults.length + 1) * barGap) / globalResults.length;
    var svg = document.createElementNS(svgNs, 'svg');
    svg.setAttribute('viewBox', '0 0 ' + w + ' ' + h);
    globalResults.forEach(function (g, i) {
      var bh = ((g.throughput || 0) / max) * (h - padB - padT);
      var x = barGap + i * (barW + barGap);
      var y = h - padB - bh;
      var rect = document.createElementNS(svgNs, 'rect');
      rect.setAttribute('x', x); rect.setAttribute('y', y); rect.setAttribute('width', barW); rect.setAttribute('height', bh);
      rect.setAttribute('rx', 4);
      rect.setAttribute('fill', g.modelId === currentModelId ? 'url(#gradAccent)' : 'var(--line-strong)');
      var tt = document.createElementNS(svgNs, 'title'); tt.textContent = g.label + ': ' + g.throughput;
      rect.appendChild(tt);
      svg.appendChild(rect);
      var label = document.createElementNS(svgNs, 'text');
      label.setAttribute('x', x + barW / 2); label.setAttribute('y', h - 6);
      label.setAttribute('text-anchor', 'middle'); label.setAttribute('class', 'map-label');
      label.textContent = 'M' + (i + 1);
      svg.appendChild(label);
    });
    var defs = document.createElementNS(svgNs, 'defs');
    defs.innerHTML = '<linearGradient id="gradAccent" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0%" stop-color="var(--accent-2)"/><stop offset="100%" stop-color="var(--accent)"/></linearGradient>';
    svg.insertBefore(defs, svg.firstChild);
    wrap.appendChild(svg);
    return wrap;
  }

  // ==================================================================
  // NAVEGACAO
  // ==================================================================
  function buildFlatStages() {
    DATA.courses.forEach(function (course) {
      course.models.forEach(function (model) {
        model.stages.forEach(function (stage) {
          STAGE_INDEX[stage.id] = FLAT_STAGES.length;
          FLAT_STAGES.push({ id: stage.id, modelId: model.id, courseId: course.id, number: stage.number, title: stage.title, type: stage.type });
        });
      });
    });
  }

  function selectModel(id) {
    var el2 = document.getElementById(id);
    if (!el2) return;
    qsa('.model-link').forEach(function (l) { l.classList.toggle('active', l.dataset.modelTarget === id); });
    var course = el2.closest('.course-section'); if (course) course.open = true;
    el2.open = true;
    el2.classList.add('search-hit');
    setTimeout(function () { el2.classList.remove('search-hit'); }, 900);
    el2.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', '#' + id);
  }

  function closeSidebarMobile() {
    qs('#sidebar').classList.remove('open');
    qs('#sidebar-backdrop').classList.remove('open');
  }

  function wireNavigation() {
    qsa('.model').forEach(function (m) {
      m.addEventListener('toggle', function () { if (!m.open) qsa('.stage', m).forEach(function (s) { s.open = false; }); });
    });
    var toggle = qs('#sidebar-toggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        var open = qs('#sidebar').classList.toggle('open');
        qs('#sidebar-backdrop').classList.toggle('open', open);
        toggle.setAttribute('aria-expanded', open);
      });
      qs('#sidebar-backdrop').addEventListener('click', closeSidebarMobile);
    }
    // colapsa tudo por padrao (aulas abertas, modelos/etapas fechados)
    qsa('.model').forEach(function (m) { m.open = false; });
  }

  function applyHashRoute() {
    var h = location.hash.replace('#', '');
    if (!h) return;
    if (h.indexOf('/') > -1) {
      var parts = h.split('/');
      var modelId = parts[0], stageId = modelId + '-etapa-' + parts[1];
      selectModel(modelId);
      setTimeout(function () { goToStage(stageId); }, 60);
    } else if (document.getElementById(h)) {
      selectModel(h);
    }
  }

  function wireStageTrailScrollSpy() {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var stage = e.target;
        var model = stage.closest('.model'); if (!model) return;
        var trail = model.querySelector('.stage-trail'); if (!trail) return;
        qsa('.trail-chip', trail).forEach(function (c) { c.classList.toggle('current', c.dataset.stageTarget === stage.id); });
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    qsa('.stage').forEach(function (s) { io.observe(s); });
  }

  // ==================================================================
  // BUSCA
  // ==================================================================
  function wireSearch() {
    var input = qs('#search'), clearBtn = qs('#clear-search'), status = qs('#search-status');
    var stages = qsa('.stage');

    function clearHighlights() {
      qsa('mark.search-mark').forEach(function (m) {
        var parent = m.parentNode;
        parent.replaceChild(document.createTextNode(m.textContent), m);
        parent.normalize();
      });
    }

    function highlight(node, re) {
      if (node.nodeType === 3) {
        var text = node.nodeValue;
        var m = re.exec(text);
        re.lastIndex = 0;
        if (!m) return;
        var frag = document.createDocumentFragment();
        var last = 0, match;
        while ((match = re.exec(text))) {
          frag.appendChild(document.createTextNode(text.slice(last, match.index)));
          var mark = document.createElement('mark');
          mark.className = 'search-mark';
          mark.textContent = match[0];
          frag.appendChild(mark);
          last = match.index + match[0].length;
        }
        frag.appendChild(document.createTextNode(text.slice(last)));
        node.parentNode.replaceChild(frag, node);
      } else if (node.nodeType === 1 && node.tagName !== 'SCRIPT' && node.tagName !== 'STYLE') {
        Array.prototype.slice.call(node.childNodes).forEach(function (c) { highlight(c, re); });
      }
    }

    function doSearch() {
      var q = (input.value || '').trim();
      clearBtn.hidden = !q;
      clearHighlights();
      if (!q) { stages.forEach(function (s) { s.classList.remove('search-hidden'); }); status.textContent = ''; return; }
      var qLower = q.toLowerCase();
      var re = new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
      var hits = 0, firstModel = null;
      stages.forEach(function (stage) {
        var text = stage.textContent.toLowerCase();
        var match = text.indexOf(qLower) > -1;
        stage.classList.toggle('search-hidden', !match);
        if (match) {
          hits++;
          stage.open = true;
          var model = stage.closest('.model'); if (model) { model.open = true; if (!firstModel) firstModel = model.id; }
          var course = stage.closest('.course-section'); if (course) course.open = true;
          highlight(stage.querySelector('.stage-content'), re);
          if (stage.querySelector('.results-panel')) highlight(stage.querySelector('.results-panel'), re);
        }
      });
      status.textContent = hits ? (hits + ' etapa(s) encontrada(s).') : 'Nenhum resultado encontrado.';
    }

    input.addEventListener('input', debounce(doSearch, 150));
    clearBtn.addEventListener('click', function () { input.value = ''; doSearch(); input.focus(); });
  }

  // ==================================================================
  // LIGHTBOX
  // ==================================================================
  var LB = {};
  function wireLightbox() {
    LB.root = qs('#lightbox'); LB.img = qs('#lightbox-img'); LB.caption = qs('#lightbox-caption'); LB.counter = qs('#lightbox-counter');
    LB.prevBtn = qs('#lightbox-prev'); LB.nextBtn = qs('#lightbox-next'); LB.closeBtn = qs('#lightbox-close');
    LB.gallery = []; LB.index = 0; LB.zoom = 1; LB.pan = { x: 0, y: 0 }; LB.dragging = false;

    qsa('.instruction-card').forEach(function (card) {
      var imgs = qsa('.media img', card);
      imgs.forEach(function (img) {
        img.addEventListener('click', function () { openLightbox(imgs, imgs.indexOf(img), card.querySelector('.card-title')); });
      });
    });

    LB.prevBtn.addEventListener('click', function () { moveLightbox(-1); });
    LB.nextBtn.addEventListener('click', function () { moveLightbox(1); });
    LB.closeBtn.addEventListener('click', closeLightbox);
    LB.root.addEventListener('click', function (e) { if (e.target === LB.root) closeLightbox(); });

    LB.img.addEventListener('click', function (e) {
      e.stopPropagation();
      LB.zoom = LB.zoom === 1 ? 2 : 1; LB.pan = { x: 0, y: 0 };
      applyZoom();
    });
    LB.img.addEventListener('wheel', function (e) {
      e.preventDefault();
      LB.zoom = Math.min(4, Math.max(1, LB.zoom + (e.deltaY < 0 ? 0.25 : -0.25)));
      if (LB.zoom === 1) LB.pan = { x: 0, y: 0 };
      applyZoom();
    }, { passive: false });
    LB.img.addEventListener('mousedown', function (e) {
      if (LB.zoom === 1) return;
      LB.dragging = true; LB.dragStart = { x: e.clientX - LB.pan.x, y: e.clientY - LB.pan.y };
      e.preventDefault();
    });
    window.addEventListener('mousemove', function (e) {
      if (!LB.dragging) return;
      LB.pan = { x: e.clientX - LB.dragStart.x, y: e.clientY - LB.dragStart.y };
      applyZoom();
    });
    window.addEventListener('mouseup', function () { LB.dragging = false; });

    document.addEventListener('keydown', function (e) {
      if (!LB.root.classList.contains('open')) return;
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowLeft') moveLightbox(-1);
      else if (e.key === 'ArrowRight') moveLightbox(1);
    });
  }

  function applyZoom() {
    LB.img.style.cursor = LB.zoom > 1 ? 'grab' : 'zoom-in';
    LB.img.style.transform = 'translate(' + LB.pan.x + 'px,' + LB.pan.y + 'px) scale(' + LB.zoom + ')';
  }

  function openLightbox(gallery, index, captionEl) {
    LB.gallery = gallery; LB.index = index; LB.captionEl = captionEl;
    LB.root.classList.add('open'); LB.root.setAttribute('aria-hidden', 'false');
    updateLightbox();
  }
  function closeLightbox() {
    LB.root.classList.remove('open'); LB.root.setAttribute('aria-hidden', 'true');
    LB.img.src = ''; LB.zoom = 1; LB.pan = { x: 0, y: 0 };
  }
  function moveLightbox(dir) {
    var next = LB.index + dir;
    if (next < 0 || next >= LB.gallery.length) return;
    LB.index = next; updateLightbox();
  }
  function updateLightbox() {
    var img = LB.gallery[LB.index];
    LB.img.src = img.dataset.full || img.src;
    LB.img.alt = img.alt || '';
    LB.zoom = 1; LB.pan = { x: 0, y: 0 }; applyZoom();
    LB.prevBtn.classList.toggle('is-disabled', LB.index === 0);
    LB.nextBtn.classList.toggle('is-disabled', LB.index === LB.gallery.length - 1);
    LB.counter.textContent = (LB.index + 1) + ' / ' + LB.gallery.length;
    LB.caption.textContent = LB.captionEl ? LB.captionEl.textContent : '';
  }

  // ==================================================================
  // TEMA
  // ==================================================================
  function wireTheme() {
    var btn = qs('#theme-toggle'), sun = qs('.icon-sun', btn), moon = qs('.icon-moon', btn);
    var saved = null;
    try { saved = localStorage.getItem('flexsim-theme'); } catch (e) {}
    if (saved) document.documentElement.setAttribute('data-theme', saved);
    updateIcons();
    btn.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme');
      var isDark = current ? current === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
      var next = isDark ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('flexsim-theme', next); } catch (e) {}
      updateIcons();
    });
    function updateIcons() {
      var current = document.documentElement.getAttribute('data-theme');
      var isDark = current ? current === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
      sun.hidden = isDark; moon.hidden = !isDark;
    }
  }

  // ==================================================================
  // GLOSSARIO
  // ==================================================================
  function buildGlossaryPanel() {
    var objPane = qs('#tab-objects'), shortPane = qs('#tab-shortcuts');
    objPane.innerHTML = ''; shortPane.innerHTML = '';

    (DATA.glossary || []).forEach(function (g) {
      var item = el('div', 'glossary-item');
      item.innerHTML = '<div class="glossary-item-head"><span>' + escapeHtml(g.type) + '</span><span class="glossary-item-count">' + g.count + ' uso(s)</span></div>' +
        '<div class="glossary-item-desc">' + escapeHtml(OBJECT_DESCRIPTIONS[g.type] || '') + '</div>';
      var links = el('div', 'glossary-links');
      (g.stages || []).forEach(function (stageId) {
        var b = el('button', '', stageLabel(stageId));
        b.type = 'button';
        b.addEventListener('click', function () { closeGlossary(); goToStage(stageId); });
        links.appendChild(b);
      });
      item.appendChild(links);
      objPane.appendChild(item);
    });

    (DATA.shortcuts || []).forEach(function (s) {
      var item = el('div', 'shortcut-item');
      item.innerHTML = '<span class="shortcut-key">' + escapeHtml(s.key) + '</span><span class="shortcut-desc">' + escapeHtml(SHORTCUT_DESCRIPTIONS[s.key] || '') + '</span>';
      var links = el('div', 'glossary-links');
      (s.contexts || []).slice(0, 6).forEach(function (stageId) {
        var b = el('button', '', stageLabel(stageId));
        b.type = 'button';
        b.addEventListener('click', function () { closeGlossary(); goToStage(stageId); });
        links.appendChild(b);
      });
      item.appendChild(links);
      shortPane.appendChild(item);
    });

    qsa('.panel-tab').forEach(function (tab) {
      tab.addEventListener('click', function () {
        qsa('.panel-tab').forEach(function (t) { t.classList.toggle('active', t === tab); });
        qsa('.panel-pane').forEach(function (p) { p.classList.toggle('active', p.id === 'tab-' + tab.dataset.tab); });
      });
    });

    qs('#open-glossary').addEventListener('click', openGlossary);
    qs('#close-glossary').addEventListener('click', closeGlossary);
    qs('#glossary-backdrop').addEventListener('click', closeGlossary);
  }

  function stageLabel(stageId) {
    var idx = STAGE_INDEX[stageId];
    var s = FLAT_STAGES[idx];
    if (!s) return stageId;
    var model = MODEL_BY_ID[s.modelId];
    return (model ? model.label.replace(/^\d+\.\d+\)\s*/, '') : '') + ' · ' + (s.type === 'results' ? 'Resultados' : 'Etapa ' + parseInt(s.number, 10));
  }
  function openGlossary() { qs('#glossary-panel').classList.add('open'); qs('#glossary-backdrop').classList.add('open'); }
  function closeGlossary() { qs('#glossary-panel').classList.remove('open'); qs('#glossary-backdrop').classList.remove('open'); }

  // ==================================================================
  // MODO APRESENTACAO
  // ==================================================================
  var PRES = { index: 0 };
  function wirePresentation() {
    qs('#open-presentation').addEventListener('click', function () { openPresentation(0); });
    qs('#presentation-exit').addEventListener('click', closePresentation);
    qs('#presentation-prev').addEventListener('click', function () { presentationStep(-1); });
    qs('#presentation-next').addEventListener('click', function () { presentationStep(1); });
    qs('#presentation-fullscreen').addEventListener('click', function () {
      if (document.fullscreenElement) document.exitFullscreen();
      else qs('#presentation-overlay').requestFullscreen().catch(function () {});
    });
    document.addEventListener('keydown', function (e) {
      var overlay = qs('#presentation-overlay');
      if (!overlay.classList.contains('open')) return;
      if (e.key === 'Escape') closePresentation();
      else if (e.key === 'ArrowLeft') presentationStep(-1);
      else if (e.key === 'ArrowRight') presentationStep(1);
      else if (e.key === 'f' || e.key === 'F') qs('#presentation-fullscreen').click();
    });
  }

  function openPresentation(startIndex) {
    PRES.index = startIndex || 0;
    qs('#presentation-overlay').classList.add('open');
    renderPresentationSlide();
  }
  function closePresentation() {
    qs('#presentation-overlay').classList.remove('open');
    if (document.fullscreenElement) document.exitFullscreen();
  }
  function presentationStep(dir) {
    var next = PRES.index + dir;
    if (next < 0 || next >= FLAT_STAGES.length) return;
    PRES.index = next; renderPresentationSlide();
  }
  function renderPresentationSlide() {
    var meta = FLAT_STAGES[PRES.index];
    var stageEl = document.getElementById(meta.id);
    var content = qs('#presentation-content');
    content.innerHTML = '';
    var h2 = el('h2', '', escapeHtml(meta.title));
    content.appendChild(h2);
    var clone = stageEl.querySelector('.stage-content').cloneNode(true);
    content.appendChild(clone);
    var resultsClone = stageEl.parentElement.querySelector('.results-panel');
    if (resultsClone) content.appendChild(resultsClone.cloneNode(true));
    qsa('img[data-full]', clone).forEach(function (img) {
      var original = qsa('.media img', stageEl).filter(function (i) { return i.alt === img.alt; })[0];
      img.addEventListener('click', function () {
        var gallery = qsa('img', clone);
        openLightbox(gallery, gallery.indexOf(img), h2);
      });
    });
    var model = MODEL_BY_ID[meta.modelId];
    qs('#presentation-crumb').textContent = model.label + ' · Etapa ' + (indexWithinModel(meta) + 1) + '/' + model.stages.length;
    qs('#presentation-prev').disabled = PRES.index === 0;
    qs('#presentation-next').disabled = PRES.index === FLAT_STAGES.length - 1;
    location.hash = '#' + meta.modelId + '/' + meta.id.split('-etapa-')[1];
  }
  function indexWithinModel(meta) {
    var model = MODEL_BY_ID[meta.modelId];
    for (var i = 0; i < model.stages.length; i++) if (model.stages[i].id === meta.id) return i;
    return 0;
  }

  // ==================================================================
  // PDF
  // ==================================================================
  function wirePdfDialog() {
    var dialog = qs('#pdf-dialog'), modelSelection = qs('#pdf-model-selection');
    function availableModels() { return Object.keys(MODEL_BY_ID).map(function (k) { return MODEL_BY_ID[k]; }); }

    function buildList() {
      modelSelection.innerHTML = '';
      availableModels().forEach(function (model) {
        var label = el('label', 'pdf-model-check');
        var input = document.createElement('input');
        input.type = 'checkbox'; input.value = model.id; input.checked = true;
        var span = el('span', '', escapeHtml(model.label));
        label.appendChild(input); label.appendChild(span);
        modelSelection.appendChild(label);
      });
    }
    function scope() { return qs('input[name="pdf-scope"]:checked').value; }
    function openDialog() {
      buildList();
      dialog.classList.add('open'); dialog.setAttribute('aria-hidden', 'false');
      var sel = scope() === 'selected';
      modelSelection.classList.toggle('disabled', !sel);
      qsa('input', modelSelection).forEach(function (cb) { cb.disabled = !sel; });
    }
    function closeDialog() { dialog.classList.remove('open'); dialog.setAttribute('aria-hidden', 'true'); }

    qs('#open-pdf-dialog').addEventListener('click', openDialog);
    qs('#close-pdf-dialog').addEventListener('click', closeDialog);
    qsa('[data-close-pdf]', dialog).forEach(function (elx) { elx.addEventListener('click', closeDialog); });
    qsa('input[name="pdf-scope"]').forEach(function (r) { r.addEventListener('change', function () {
      var sel = scope() === 'selected';
      modelSelection.classList.toggle('disabled', !sel);
      qsa('input', modelSelection).forEach(function (cb) { cb.disabled = !sel; });
    }); });
    qs('#pdf-select-all').addEventListener('click', function () { qsa('input', modelSelection).forEach(function (cb) { cb.checked = true; }); });
    qs('#pdf-clear-all').addEventListener('click', function () { qsa('input', modelSelection).forEach(function (cb) { cb.checked = false; }); });

    function expandForPrint(ids) {
      var idSet = {}; ids.forEach(function (i) { idSet[i] = true; });
      qsa('.course-section').forEach(function (course) {
        var has = qsa('.model', course).some(function (m) { return idSet[m.id]; });
        course.classList.toggle('print-selected-course', has);
      });
      qsa('.model-view').forEach(function (view) {
        var should = idSet[view.dataset.modelId];
        view.classList.toggle('print-selected', should);
        var model = document.getElementById(view.dataset.modelId);
        model.open = should;
        qsa('.stage', model).forEach(function (s) { s.open = should; });
      });
    }
    function preparePrintImages() {
      var imgs = qsa('img');
      return Promise.all(imgs.map(function (img) {
        img.loading = 'eager';
        if (img.complete) return Promise.resolve();
        return new Promise(function (res) { img.addEventListener('load', res, { once: true }); img.addEventListener('error', res, { once: true }); });
      }));
    }

    qs('#confirm-pdf').addEventListener('click', function () {
      var ids = scope() === 'all' ? availableModels().map(function (m) { return m.id; }) : qsa('input:checked', modelSelection).map(function (cb) { return cb.value; });
      if (!ids.length) { alert('Selecione pelo menos um modelo para gerar o PDF.'); return; }
      expandForPrint(ids);
      document.body.dataset.printModels = ids.join(',');
      closeDialog();
      preparePrintImages().then(function () {
        requestAnimationFrame(function () { requestAnimationFrame(function () { window.print(); }); });
      });
    });

    window.addEventListener('afterprint', function () {
      delete document.body.dataset.printModels;
      qsa('.model-view').forEach(function (v) { v.classList.remove('print-selected'); });
      qsa('.course-section').forEach(function (c) { c.classList.remove('print-selected-course'); });
      qsa('.model').forEach(function (m) { m.open = false; qsa('.stage', m).forEach(function (s) { s.open = false; }); });
    });

    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && dialog.classList.contains('open')) closeDialog(); });
  }

  // ==================================================================
  // INIT
  // ==================================================================
  document.addEventListener('DOMContentLoaded', renderAll);
})();
