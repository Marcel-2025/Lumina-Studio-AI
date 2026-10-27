(() => {
  'use strict';
  const themes = ['aurora','neon','clean','gold','mono'];
  const iconNames = ['aurora','gold','silver','light'];
  const themeLabels = {aurora:'Aurora',neon:'Neon',clean:'Clean',gold:'Gold',mono:'Silver'};
  const iconDescriptions = {
    aurora:['Lumina Aurora','Das aktuelle Lumina Signature-Icon: samtige Violetttöne, sanfte Lichtreflexe und eine irisierende Kameralinse.'],
    gold:['Lumina Gold','Edle Goldkonturen auf mattem Schwarz. Für einen luxuriösen, warmen Look.'],
    silver:['Lumina Silver','Silberne Kamerakonturen und eine ruhige, elegante Dunkelheit.'],
    light:['Lumina Light','Klares, helles Design mit kühlem Blau und einer ruhigen Kameralinse.']
  };
  const pick = (id) => document.getElementById(id);
  const getSaved = (key) => { try { return localStorage.getItem(key); } catch { return null; } };
  const store = (key,val) => { try { localStorage.setItem(key,val); } catch { /* optional preference */ } };
  const setTheme = (theme) => {
    if (!themes.includes(theme)) return;
    document.documentElement.dataset.theme = theme;
    document.querySelectorAll('[data-set-theme]').forEach(btn => {
      const selected = btn.dataset.setTheme === theme;
      btn.classList.toggle('is-active',selected);
      btn.setAttribute('aria-pressed',String(selected));
    });
    const label = document.querySelector('.theme-trigger-label');
    if (label) label.textContent = themeLabels[theme];
    store('lumina_landing_theme',theme);
  };
  const setIcon = (icon) => {
    if (!iconNames.includes(icon)) return;
    document.querySelectorAll('[data-brand-icon]').forEach(img => img.src = `assets/icon-${icon}.webp`);
    const spotlight = pick('spotlight-icon');
    if (spotlight) spotlight.src = `assets/icon-${icon}.webp`;
    const name = pick('spotlight-name'), copy = pick('spotlight-copy');
    if (name) name.textContent = iconDescriptions[icon][0];
    if (copy) copy.textContent = iconDescriptions[icon][1];
    document.querySelectorAll('[data-icon]').forEach(btn => {
      const selected = btn.dataset.icon === icon;
      btn.classList.toggle('is-selected', selected);
      btn.setAttribute('aria-pressed',String(selected));
    });
    store('lumina_landing_icon',icon);
  };
  setTheme(themes.includes(getSaved('lumina_landing_theme')) ? getSaved('lumina_landing_theme') : 'aurora');
  setIcon(iconNames.includes(getSaved('lumina_landing_icon')) ? getSaved('lumina_landing_icon') : 'aurora');

  const trigger = pick('theme-trigger'), menu = pick('theme-menu');
  const closeTheme = () => { if(menu) menu.hidden = true; if(trigger) trigger.setAttribute('aria-expanded','false'); };
  trigger?.addEventListener('click',() => {
    if(!menu) return;
    menu.hidden = !menu.hidden;
    trigger.setAttribute('aria-expanded',String(!menu.hidden));
  });
  document.querySelectorAll('[data-set-theme]').forEach(btn => btn.addEventListener('click',() => {setTheme(btn.dataset.setTheme);closeTheme();}));
  document.querySelectorAll('[data-icon]').forEach(btn => btn.addEventListener('click',() => setIcon(btn.dataset.icon)));
  document.addEventListener('click', e => { if(menu && trigger && !menu.hidden && !pick('theme-picker')?.contains(e.target)) closeTheme(); });
  document.addEventListener('keydown', e => { if(e.key === 'Escape') {closeTheme(); closeMobile();} });

  const mobileToggle = pick('menu-toggle'), mobileNav = pick('mobile-nav');
  const closeMobile = () => {if(mobileNav) mobileNav.hidden = true;mobileToggle?.setAttribute('aria-expanded','false');};
  mobileToggle?.addEventListener('click',() => { if(!mobileNav)return;mobileNav.hidden = !mobileNav.hidden;mobileToggle.setAttribute('aria-expanded',String(!mobileNav.hidden)); });
  mobileNav?.querySelectorAll('a').forEach(link => link.addEventListener('click',closeMobile));

  const previews = {
    studio:['assets/studio-dark.webp','AI Photo Editor','Vorschau des Lumina AI Foto-Editors'],
    profile:['assets/profile-dark.webp','Creative Profile','Vorschau der Lumina AI Profilübersicht'],
    settings:['assets/settings-dark.webp','Personalize Lumina','Vorschau der Lumina AI Einstellungen']
  };
  document.querySelectorAll('[data-preview]').forEach((btn, index) => btn.addEventListener('click',() => {
    const chosen = btn.dataset.preview;
    if(!previews[chosen]) return;
    const img = pick('preview-image');
    if(img){img.src=previews[chosen][0];img.alt=previews[chosen][2];}
    const title = pick('preview-title'); if(title) title.textContent = previews[chosen][1];
    document.querySelectorAll('[data-preview]').forEach(tab => {tab.classList.toggle('is-active',tab === btn);tab.setAttribute('aria-pressed',String(tab === btn));});
    document.querySelectorAll('[data-preview-description]').forEach(p => p.hidden = p.dataset.previewDescription !== chosen);
    document.querySelectorAll('.stage-dot').forEach((dot,i) => dot.classList.toggle('is-active',i===index));
  }));


  // Seasonal motif preview. Never alters the website's persistent primary brand icon.
  const seasonal = {
    halloween: ['🎃 Halloween','Mystische Nacht, violette Schatten & warmes Kürbislicht.'],
    autumn: ['🍂 Autumn','Goldene Blätter, Cozy-Outfits und warme Filmlooks.'],
    winter: ['❄️ Winter','Eisblau, Frost-Effekte und klare Winterstimmung.'],
    spring: ['🌸 Spring','Pastell, Blütenzauber und frische Lichtakzente.'],
    summer: ['☀️ Summer','Sonnenlicht, blaue Weite und sommerliche Looks.'],
    christmas: ['🎄 Christmas','Festliches Rot, Tannengrün und goldene Lichtpunkte.']
  };
  document.querySelectorAll('[data-season]').forEach(btn => btn.addEventListener('click', () => {
    const season = btn.dataset.season;
    if (!Object.prototype.hasOwnProperty.call(seasonal, season)) return;
    const pic = pick('season-selected-img'), title=pick('season-selected-name'), desc=pick('season-selected-description');
    if(pic){pic.src=`assets/icon-season-${season}.webp`;pic.alt=`Lumina ${season} Icon als große Vorschau`;}
    if(title)title.textContent=seasonal[season][0];
    if(desc)desc.textContent=seasonal[season][1];
    document.querySelectorAll('[data-season]').forEach(el=>{el.classList.toggle('is-selected',el===btn);el.setAttribute('aria-pressed',String(el===btn));});
  }));
  const recipeFields=['recipe-outfit','recipe-light','recipe-style'];
  const updateRecipe=()=>{
    const labels=recipeFields.map(id=>pick(id)?.selectedOptions?.[0]?.textContent||'');
    const result=pick('recipe-result');if(result)result.textContent=labels.join(' · ');
  };
  recipeFields.forEach(id=>pick(id)?.addEventListener('change',updateRecipe));
  pick('recipe-copy')?.addEventListener('click', async ()=>{
    const values=recipeFields.map(id=>pick(id)?.value||'');
    const prompt=`Edit the supplied photo. Preserve the subject's facial features, identity and natural proportions. Create ${values[0]} with ${values[1]} and a visual style of ${values[2]}. Keep details coherent and realistic unless a clearly artistic result is requested.`;
    try{
      if(!navigator.clipboard?.writeText)throw new Error('clipboard unavailable');
      await navigator.clipboard.writeText(prompt);
      if(pick('recipe-feedback'))pick('recipe-feedback').textContent='Prompt-Idee in die Zwischenablage kopiert.';
    }catch{
      const output=pick('recipe-feedback');if(output)output.textContent='Kopieren nicht möglich. Bitte verwende einen Browser über HTTPS oder localhost.';
    }
  });
  const year = pick('current-year'); if(year)year.textContent=String(new Date().getFullYear());
  if('IntersectionObserver' in window){
    const observer=new IntersectionObserver(entries => {entries.forEach(entry => {if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}});},{rootMargin:'0px 0px -30px 0px',threshold:.06});
    document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
  }else{document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));}
  // Only one marketing teaser playing at a time.
  document.querySelectorAll('video').forEach(video => video.addEventListener('play',() => document.querySelectorAll('video').forEach(other=>{if(other!==video)other.pause();})));
})();
