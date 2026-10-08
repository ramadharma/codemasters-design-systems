// Renders the pages in window.DS. Markdown comes from export.js. No build step, no dependencies.
(() => {
  const { meta, components, foundations, applications, overview, esc, icon, snippet, tokens } = DS;
  const { usedTokens, componentMd, systemMd } = DS.md; // export.js: Markdown shared with build.mjs
  const pages = [overview, ...foundations, ...components, ...applications];
  const $ = (sel, el = document) => el.querySelector(sel);
  const $$ = (sel, el = document) => [...el.querySelectorAll(sel)];

  $('.brand-version').textContent = `v${meta.version.split('.').slice(0, 2).join('.')}`; // 1.0.0 shows as v1.0

  const fmtDate = iso => new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

  // ---- Inline Markdown subset: `code`, **bold**, [text](url). Colour tokens in code get a swatch.
  const swatch = name => {
    const colour = /^#[0-9a-f]{6}$/i.test(name) ? name : (tokens[`--${name}`] || '').startsWith('#') && `var(--${name})`;
    return colour ? `<i class="sw" style="background:${colour}"></i>` : '';
  };
  const inline = s =>
    esc(s)
      .replace(/`([^`]+)`/g, (_, c) => `<code>${swatch(c)}${c}</code>`)
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, t, u) => `<a href="${u}"${u.startsWith('http') ? ' target="_blank" rel="noopener"' : ''}>${t}</a>`);

  // Minimal highlighter: one pass, so tokens never nest.
  const highlight = (code, lang) => {
    const s = esc(code);
    if (lang === 'html')
      return s.replace(/(&lt;!--[\s\S]*?--&gt;)|(&lt;\/?)([\w-]+)|(\s)([\w:-]+)(=)(&quot;[^&]*?&quot;)/g, (m, c, lt, tag, sp, attr, eq, val) =>
        c ? `<i class="c">${c}</i>` : tag ? `${lt}<b class="t">${tag}</b>` : `${sp}<b class="a">${attr}</b>${eq}<b class="s">${val}</b>`);
    if (lang === 'css')
      return s.replace(/(\/\*[\s\S]*?\*\/)|(&quot;[^&]*?&quot;)|(--?[\w-]+|[a-z-]+)(?=:\s)/g, (m, c, str, prop) =>
        c ? `<i class="c">${c}</i>` : str ? `<b class="s">${str}</b>` : `<b class="a">${prop}</b>`);
    return s;
  };

  // One span per line so CSS can number rows. A highlight token that runs across lines (a multi-line comment)
  // is closed at the line end and reopened on the next line. Lines stay joined by \n, so copy keeps them.
  const numbered = (code, lang) => {
    let open = '';
    return highlight(code.trim(), lang).split('\n').map(line => {
      const start = open;
      for (const m of line.matchAll(/<([bi]) class="\w">|<\/[bi]>/g)) open = m[1] ? m[0] : '';
      return `<span class="ln">${start}${line}${open ? `</${open[1]}>` : ''}</span>`;
    }).join('\n');
  };
  const gutter = code => `--ln-w: ${String(code.trim().split('\n').length).length}ch`;

  // Code longer than 3 lines starts collapsed behind a "View Code" button (shadcn pattern); Copy works either way.
  const codeBox = (code, lang, filename) => {
    const long = code.trim().split('\n').length > 3;
    return `<div class="code${long ? ' is-collapsed' : ''}">
    ${filename ? `<div class="code-head"><span>${filename}</span><button class="sb-btn" type="button" data-hierarchy="tertiary-gray" data-size="sm" data-download="${filename}">${icon('download')}Download</button></div>` : ''}
    <div class="code-body"><pre tabindex="0"><code style="${gutter(code)}">${numbered(code, lang)}</code></pre>
    <button class="sb-btn copy" type="button" data-hierarchy="tertiary-gray" data-size="sm" data-icon="only" aria-label="Copy code" data-copy>${icon('copy')}${icon('check')}</button>
    ${long ? '<button class="sb-btn code-expand" type="button" data-hierarchy="secondary-gray" data-size="sm" data-expand>View Code</button>' : ''}</div>
  </div>`;
  };

  // Page status as a Badge (sm): In progress = Warning, anything finished = Success.
  const statusBadge = status => `<span class="sb-badge" data-size="sm" data-color="${status === 'In progress' ? 'warning' : 'success'}">${status}</span>`;


  // ---- Block renderers (HTML)
  // Playground controls are design-system components: Toggle, Input field, Slider, Button group (short option
  // lists that fit the 240 px column) and Input dropdown (longer ones). Every control carries data-key.
  const svgClass = (name, cls) => icon(name).replace('<svg ', `<svg class="${cls}" `);
  const fitsGroup = opts => opts.reduce((w, [, l]) => w + l.length * 7.5 + 34, 0) <= 240; // ponytail: estimated text width, no measuring
  const field = (id, label, html, forInput = false) =>
    `<div class="ctl sb-field">${forInput ? `<label class="sb-field-label" for="${id}">${label}</label>` : `<span class="sb-field-label" id="${id}-l">${label}</span>`}${html}</div>`;
  const control = (c, value, id) => {
    if (c.type === 'toggle')
      return `<div class="ctl ctl-row"><div class="sb-toggle" data-size="sm"><input class="sb-toggle-input" type="checkbox" role="switch" id="${id}" data-key="${c.key}"${value ? ' checked' : ''}><div class="sb-toggle-text"><label class="sb-toggle-label" for="${id}">${c.label}</label></div></div></div>`;
    if (c.type === 'text')
      return field(id, c.label, `<div class="sb-input"><input id="${id}" type="text" data-key="${c.key}" value="${esc(value)}" autocomplete="off"></div>`, true);
    if (c.type === 'range') {
      const pct = ((value - c.min) / (c.max - c.min)) * 100;
      return field(id, c.label, `<div class="sb-slider" data-label="bottom" role="group" aria-labelledby="${id}-l" style="--lo: 0%; --hi: ${pct}%"><div class="sb-slider-rail"><input class="sb-slider-input" type="range" min="${c.min}" max="${c.max}" step="${c.step}" value="${value}" aria-labelledby="${id}-l" aria-valuetext="${value}" data-key="${c.key}"><output class="sb-slider-value" data-for="hi">${value}</output></div></div>`);
    }
    if (fitsGroup(c.options))
      return field(id, c.label, `<div class="sb-btn-group" role="radiogroup" aria-labelledby="${id}-l" data-key="${c.key}" data-demo>${c.options
        .map(([v, l]) => `<button type="button" role="radio" aria-checked="${v === value}" tabindex="${v === value ? 0 : -1}" data-value="${esc(v)}">${l}</button>`)
        .join('')}</div>`);
    const current = (c.options.find(([v]) => v === value) || c.options[0])[1];
    return field(id, c.label, `<div class="sb-dd" data-key="${c.key}">
      <button class="sb-dd-trigger" type="button" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="${id}-list" aria-labelledby="${id}-l ${id}-v"><span class="sb-dd-value" id="${id}-v"><span class="sb-dd-label">${current}</span></span>${svgClass('chevron-down', 'sb-dd-chevron')}</button>
      <div class="sb-dd-menu" id="${id}-list" role="listbox" aria-labelledby="${id}-l" hidden>${c.options
        .map(([v, l], k) => `<div class="sb-dd-opt" id="${id}-o${k}" role="option" aria-selected="${v === value}" data-value="${esc(v)}"><span class="sb-dd-main"><span class="sb-dd-label">${l}</span></span>${svgClass('check', 'sb-dd-check')}</div>`)
        .join('')}</div>
    </div>`);
  };

  const HTML = {
    p: b => `<p>${inline(b.text)}</p>`,
    h3: b => `<h3 id="${b.id}">${inline(b.text)}</h3>`,
    list: b => {
      const tag = b.ordered ? 'ol' : 'ul';
      return `<${tag}>${b.items.map(i => `<li>${inline(i)}</li>`).join('')}</${tag}>`;
    },
    table: b => `<div class="tbl"><table><thead><tr>${b.head.map(h => `<th scope="col">${inline(h)}</th>`).join('')}</tr></thead><tbody>${b.rows
      .map(r => `<tr>${r.map(c => `<td>${inline(c)}</td>`).join('')}</tr>`)
      .join('')}</tbody></table></div>`,
    note: b => `<div class="note" data-tone="${b.tone || 'info'}">${icon(b.tone === 'warning' ? 'alert' : 'info')}<div>${inline(b.text)}</div></div>`,
    example: b => `<figure class="ex"><div class="ex-preview ${b.layout || ''}">${b.html}</div>${b.caption ? `<figcaption>${inline(b.caption)}</figcaption>` : ''}${
      b.code === false ? '' : codeBox(b.code || snippet(b.html), 'html')
    }</figure>`,
    code: b => codeBox(b.code, b.lang, b.filename),
    dodont: b => `<div class="dd">${b.items
      .map(i => `<figure class="dd-card" data-kind="${i.kind}"><div class="dd-preview">${i.html}</div><figcaption><strong>${icon(i.kind === 'do' ? 'check' : 'x')}${
        i.kind === 'do' ? 'Do' : 'Don’t'
      }</strong>${inline(i.text)}</figcaption></figure>`)
      .join('')}</div>`,
    playground: (b, page, i) => `<div class="pg" data-block="${i}">
      <div class="pg-stage" aria-live="polite"></div>
      <form class="pg-controls">${b.controls.map(c => control(c, b.initial[c.key], `pg-${i.replace(/\W/g, '-')}-${c.key}`)).join('')}</form>
      ${codeBox(b.code ? b.code(b.initial) : snippet(b.render(b.initial)), 'html')}
    </div>`, // rendered once here so long code starts collapsed
    tokens: (b, page) => codeBox(usedTokens(page.css), 'css'),
    components: b => `<div class="cards">${(b.of === 'foundations' ? foundations : b.of === 'applications' ? applications : components)
      .map(c => `<a class="card" href="#/${c.slug}"><span class="card-name">${c.name}</span><span class="card-desc">${c.description}</span>${statusBadge(c.status)}</a>`)
      .join('')}</div>`,
  };

  const pageMd = p => (p === overview ? systemMd(new Date()) : componentMd(p));
  const pageFile = p => (p === overview ? 'DESIGN.md' : `${p.slug}.md`);

  // ---- Feedback, clipboard, files
  const toastEl = $('.toast');
  let toastTimer;
  const toast = msg => {
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('show'), 3500);
  };
  const copyText = async (text, what = 'Copied') => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // ponytail: execCommand fallback for sandboxed frames without clipboard permission; deprecated but universal.
      const ta = Object.assign(document.createElement('textarea'), { value: text });
      document.body.append(ta);
      ta.select();
      const ok = document.execCommand('copy');
      ta.remove();
      if (!ok) {
        toast('Copy failed. Use Download instead.');
        return false;
      }
    }
    toast(`${what} to clipboard`);
    return true;
  };
  const download = (name, text) => {
    const type = name.endsWith('.css') ? 'text/css' : name.endsWith('.html') ? 'text/html' : 'text/markdown';
    const a = Object.assign(document.createElement('a'), { href: URL.createObjectURL(new Blob([text], { type })), download: name });
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    toast(`Downloaded ${name}`);
  };

  // ---- Rendering
  let current = null;
  const side = $('#side');
  const main = $('#main');
  const toc = $('.toc');

  function renderSide() {
    const groups = {};
    for (const p of pages) (groups[p.category] ||= []).push(p);
    side.innerHTML = Object.entries(groups)
      .map(([g, ps]) => `<h2>${g}</h2><ul>${ps.map(p => `<li><a href="#/${p.slug}"${p === current ? ' aria-current="page"' : ''}>${p.name}</a></li>`).join('')}</ul>`)
      .join('');
  }

  function renderPage(p) {
    current = p;
    document.title = p === overview ? meta.name : `${p.name} · ${meta.name}`;
    const i = pages.indexOf(p);
    const [prev, next] = [pages[i - 1], pages[i + 1]];
    const file = pageFile(p);

    main.innerHTML = `
      <header class="head">
        <div class="head-text">
          <p class="crumb">${p.category}</p>
          <h1>${p === overview ? meta.name : p.name}</h1>
          <p class="lead">${inline(p.description)}</p>
        </div>
        <div class="split sb-menu-wrap">
          <button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="xs" data-md="copy">${icon('copy')}Copy Markdown</button>
          <button class="sb-btn" type="button" data-hierarchy="secondary-gray" data-size="xs" data-icon="only" aria-label="More export options" aria-haspopup="menu" aria-expanded="false" aria-controls="export-menu">${icon('chevron-down')}</button>
          <div class="sb-menu" id="export-menu" role="menu" aria-label="Export" hidden>
            <div class="sb-menu-group" role="group">
              <button class="sb-menu-item" type="button" role="menuitem" tabindex="-1" data-md="download">${icon('download')}<span class="sb-menu-label">Download ${file}</span></button>
              <button class="sb-menu-item" type="button" role="menuitem" tabindex="-1" data-md="preview">${icon('eye')}<span class="sb-menu-label">Preview Markdown</span></button>
            </div>
          </div>
        </div>
      </header>
      ${p.status ? `<div class="meta">${statusBadge(p.status)}<span>Updated ${fmtDate(p.updated)}</span></div>` : ''}
      ${p.sections.map(s => `<section><h2 id="${s.id}">${s.title}</h2>${s.blocks.map(b => HTML[b.type](b, p, `${s.id}:${s.blocks.indexOf(b)}`)).join('')}</section>`).join('')}
      <nav class="pager" aria-label="Pages">
        ${prev ? `<a class="sb-btn" data-hierarchy="secondary-gray" data-size="sm" href="#/${prev.slug}">${icon('arrow-left')}${prev.name}</a>` : '<span></span>'}
        ${next ? `<a class="sb-btn" data-hierarchy="secondary-gray" data-size="sm" href="#/${next.slug}">${next.name}${icon('arrow-right')}</a>` : ''}
      </nav>`;

    $$('.pg', main).forEach(mountPlayground);

    const heads = $$('h2[id], h3[id]', main);
    toc.innerHTML = `<h2>On this page</h2>${heads.map(h => `<a href="#/${p.slug}/${h.id}" data-to="${h.id}"${h.tagName === 'H3' ? ' class="sub"' : ''}>${h.textContent}</a>`).join('')}`;
    spy(heads);
    renderSide();
  }

  function mountPlayground(el) {
    const [sid, bi] = el.dataset.block.split(':');
    const block = current.sections.find(s => s.id === sid).blocks[bi];
    const form = $('form', el);
    const stage = $('.pg-stage', el);
    const code = $('pre code', el);
    const read = c => {
      const el = $(`[data-key="${c.key}"]`, form);
      if (c.type === 'toggle') return el.checked;
      if (c.type === 'text' || c.type === 'range') return el.value;
      return $('[aria-checked="true"], [aria-selected="true"]', el)?.dataset.value ?? block.initial[c.key];
    };
    const update = () => {
      const state = { ...block.initial, ...Object.fromEntries(block.controls.map(c => [c.key, read(c)])) };
      const html = block.render(state);
      stage.innerHTML = html;
      const src = block.code ? block.code(state) : snippet(html); // block.code: the preview is a docs specimen, not the markup to copy
      code.innerHTML = numbered(src, 'html');
      code.style.cssText = gutter(src);
    };
    // Button group and dropdown picks are applied by their own document listeners, so read after them.
    for (const type of ['input', 'click', 'keydown']) form.addEventListener(type, () => setTimeout(update));
    form.addEventListener('submit', e => e.preventDefault());
    update();
  }

  // Table of contents highlight: the last heading above the sticky header line.
  let heads = [];
  const markToc = () => {
    const id = (heads.filter(h => h.getBoundingClientRect().top < 120).pop() || heads[0])?.id;
    $$('a', toc).forEach(a => (a.dataset.to === id ? a.setAttribute('aria-current', 'true') : a.removeAttribute('aria-current')));
  };
  const spy = list => {
    heads = list;
    markToc();
  };
  addEventListener('scroll', () => requestAnimationFrame(markToc), { passive: true });

  // Routes: #/ , #/button , #/button/sizes
  function route() {
    const [slug = '', section] = location.hash.replace(/^#\/?/, '').split('/');
    const p = pages.find(x => x.slug === slug) || overview;
    if (p !== current) renderPage(p);
    document.body.classList.remove('nav-open');
    $('.nav-toggle').setAttribute('aria-expanded', 'false');
    if (section) document.getElementById(section)?.scrollIntoView();
    else window.scrollTo(0, 0);
  }

  // ---- Events
  const dialog = $('.md-dialog');

  document.addEventListener('click', async e => {
    const t = e.target.closest('button, a');
    if (!t) return;

    if (t.matches('[data-copy-text]')) {
      if (await copyText(t.dataset.copyText, `Copied ${t.dataset.copyText}`)) { // swatches, icons, tokens on Foundations pages
        t.classList.add('is-copied');
        setTimeout(() => t.classList.remove('is-copied'), 1500);
      }
    } else if (t.matches('[data-copy]')) {
      if (await copyText($('pre', t.closest('.code')).textContent, 'Code copied')) {
        t.classList.add('done');
        setTimeout(() => t.classList.remove('done'), 1500);
      }
    } else if (t.matches('[data-expand]')) {
      const box = t.closest('.code');
      box.classList.remove('is-collapsed');
      t.remove();
      $('pre', box).focus({ preventScroll: true }); // keep keyboard focus in the block that just opened
    } else if (t.matches('[data-download]')) {
      download(t.dataset.download, $('pre', t.closest('.code')).textContent);
    } else if (t.matches('[data-md]')) {
      const md = pageMd(current); // the export menu itself opens and closes via dropdown-menu.js
      const action = t.dataset.md;
      if (action === 'copy') copyText(md, 'Markdown copied');
      if (action === 'download') download(pageFile(current), md);
      if (action === 'preview') {
        $('#md-title').textContent = pageFile(current);
        $('pre', dialog).textContent = md;
        dialog.showModal();
      }
    } else if (t.matches('[data-dialog="copy"]')) {
      copyText($('pre', dialog).textContent, 'Markdown copied');
    } else if (t.matches('[data-dialog="download"]')) {
      download($('#md-title').textContent, $('pre', dialog).textContent);
    } else if (t.matches('[data-dialog="close"]')) {
      dialog.close();
    } else if (t.matches('[data-export]')) {
      download('DESIGN.md', systemMd(new Date()));
    } else if (t.matches('.nav-toggle')) {
      const open = document.body.classList.toggle('nav-open');
      t.setAttribute('aria-expanded', String(open));
    } else if (t.matches('[data-demo][aria-expanded]')) {
      t.setAttribute('aria-expanded', String(t.getAttribute('aria-expanded') !== 'true'));
    } else if (t.matches('.sb-badge-x[data-demo]')) {
      const chip = t.closest('.sb-badge');
      toast(`${chip.textContent.trim()} removed`);
      chip.remove();
    } else if (t.matches('.sb-btn-group[data-demo] > [role="radio"]:not(:disabled)')) {
      selectSegment(t);
    } else if (t.matches('.sb-btn-group[data-demo] > [aria-pressed]:not(:disabled)')) {
      t.setAttribute('aria-pressed', String(t.getAttribute('aria-pressed') !== 'true'));
    } else if (t.matches('.toc a') && t.dataset.to === location.hash.split('/')[2]) {
      document.getElementById(t.dataset.to)?.scrollIntoView(); // same hash: hashchange will not fire
    }
  });

  // Click on the backdrop closes the dialog.
  dialog.addEventListener('click', e => e.target === dialog && dialog.close());

  // Button group switch demos: same behaviour as the documented button-group-switch.js.
  const selectSegment = seg => {
    for (const b of seg.parentElement.children) {
      b.setAttribute('aria-checked', String(b === seg));
      b.tabIndex = b === seg ? 0 : -1;
    }
  };
  document.addEventListener('keydown', e => {
    const seg = e.target.closest?.('.sb-btn-group[data-demo] > [role="radio"]');
    const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
    if (!seg || !step) return;
    e.preventDefault();
    const segs = [...seg.parentElement.children].filter(b => !b.disabled);
    const next = segs[(segs.indexOf(seg) + step + segs.length) % segs.length];
    selectSegment(next);
    next.focus();
  });

  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (document.body.classList.contains('nav-open')) { // menus close themselves (dropdown-menu.js)
      document.body.classList.remove('nav-open');
      $('.nav-toggle').setAttribute('aria-expanded', 'false');
      $('.nav-toggle').focus();
    }
  });

  // ---- Search palette (⌘K / Ctrl K). Index: every page, plus every h2/h3 section of every page.
  const searchDialog = $('.search-dialog');
  const searchInput = $('input', searchDialog);
  const searchList = $('#search-list');
  const isMac = /Mac|iPhone|iPad/.test(navigator.platform);
  $('.search-trigger kbd').textContent = isMac ? '⌘K' : 'Ctrl K';
  const searchIndex = pages.flatMap(p => [
    { group: 'Pages', label: p.name, text: `${p.name} ${p.description}`, href: `#/${p.slug}`, glyph: 'arrow-right' },
    ...p.sections.flatMap(s => [
      { id: s.id, text: s.title },
      ...s.blocks.filter(b => b.type === 'h3').map(b => ({ id: b.id, text: b.text })),
    ]).map(h => ({ group: 'Sections', label: h.text, sub: p.name, text: `${h.text} ${p.name}`, href: `#/${p.slug}/${h.id}`, glyph: 'hash' })),
  ]);
  let hits = [];
  let active = 0;

  function renderSearch() {
    const q = searchInput.value.trim().toLowerCase();
    // ponytail: substring match over ~100 entries; swap in fuzzy ranking if the index grows into the thousands.
    // Every word must match; a section also needs one word in its own title, so "badge" lists the page, not all its sections.
    const words = q.split(/\s+/).filter(Boolean);
    hits = q
      ? searchIndex.filter(e => words.every(w => e.text.toLowerCase().includes(w)) && (e.group === 'Pages' || words.some(w => e.label.toLowerCase().includes(w))))
      : searchIndex.filter(e => e.group === 'Pages');
    active = Math.min(active, Math.max(hits.length - 1, 0));
    let group = '';
    searchList.innerHTML = hits.length
      ? hits.map((e, i) => {
          const head = e.group !== group ? `<div class="search-group" role="presentation">${(group = e.group)}</div>` : '';
          return `${head}<a class="search-opt" id="search-opt-${i}" role="option" href="${e.href}" aria-selected="${i === active}" data-i="${i}">${icon(e.glyph)}<span>${esc(e.label)}</span>${e.sub ? `<small>${esc(e.sub)}</small>` : ''}</a>`;
        }).join('')
      : `<p class="search-empty">No results for “${esc(searchInput.value.trim())}”. Try a component name such as Button or Badge.</p>`;
    searchInput.setAttribute('aria-activedescendant', hits.length ? `search-opt-${active}` : '');
  }
  function moveSearch(i) {
    active = (i + hits.length) % hits.length;
    $$('.search-opt', searchList).forEach(o => o.setAttribute('aria-selected', String(Number(o.dataset.i) === active)));
    $(`#search-opt-${active}`)?.scrollIntoView({ block: 'nearest' });
    searchInput.setAttribute('aria-activedescendant', `search-opt-${active}`);
  }
  function openSearch() {
    if (searchDialog.open) return;
    searchInput.value = '';
    active = 0;
    renderSearch();
    searchDialog.showModal();
    searchInput.focus();
  }
  const goSearch = e => {
    searchDialog.close();
    if (location.hash === e.href) route();
    else location.hash = e.href;
  };

  searchInput.addEventListener('input', () => {
    active = 0;
    renderSearch();
  });
  searchInput.addEventListener('keydown', e => {
    if (!hits.length) return;
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      moveSearch(active + (e.key === 'ArrowDown' ? 1 : -1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      goSearch(hits[active]);
    }
  });
  searchList.addEventListener('mousemove', e => {
    const o = e.target.closest('.search-opt');
    if (o && Number(o.dataset.i) !== active) moveSearch(Number(o.dataset.i));
  });
  searchList.addEventListener('click', e => {
    const o = e.target.closest('.search-opt');
    if (!o) return;
    e.preventDefault();
    goSearch(hits[Number(o.dataset.i)]);
  });
  searchDialog.addEventListener('click', e => e.target === searchDialog && searchDialog.close());
  $('[data-search]').addEventListener('click', openSearch);
  document.addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      searchDialog.open ? searchDialog.close() : openSearch();
    }
  });

  // Dropdown menu demos: show what was picked.
  document.addEventListener('sb-menu-select', e => toast(`${e.detail} dipilih`));

  // Static header icons are placeholders until here.
  $$('svg[data-i]:empty').forEach(s => (s.outerHTML = icon(s.dataset.i)));

  window.addEventListener('hashchange', route);
  route();
})();
