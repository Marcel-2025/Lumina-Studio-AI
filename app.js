(() => {
  'use strict';
  const themes = ['aurora','neon','clean','gold','mono'];
  const iconNames = ['aurora','dark','light','gold','silver','flare','neon'];
  const themeLabels = {aurora:'Aurora',neon:'Neon',clean:'Clean',gold:'Gold',mono:'Silver'};
  const iconDescriptions = {
    aurora:['Lumina Aurora','Lebendige Lichtreflexe, violette Tiefen und ein cineastischer Charakter.'],
    dark:['Lumina Dark','Dunkles, fokussiertes Design mit klaren Cyan-Akzenten.'],
    light:['Lumina Light','Minimalistisch, weich und hell – mit dezentem Blau und Violett.'],
    gold:['Lumina Gold','Warmes Metallic-Finish für einen besonders eleganten Look.'],
    silver:['Lumina Silver','Reduzierte silberne Konturen auf tiefem Schwarz.'],
    flare:['Lumina Flare','Grafische Formen und dynamische Blau-Violett-Energie.'],
    neon:['Lumina Neon','Ein elektrischer Lichtimpuls in Cyan und Blau.']
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

  const year = pick('current-year'); if(year)year.textContent=String(new Date().getFullYear());
  if('IntersectionObserver' in window){
    const observer=new IntersectionObserver(entries => {entries.forEach(entry => {if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}});},{rootMargin:'0px 0px -30px 0px',threshold:.06});
    document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
  }else{document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));}
  // Only one marketing teaser playing at a time.
  document.querySelectorAll('video').forEach(video => video.addEventListener('play',() => document.querySelectorAll('video').forEach(other=>{if(other!==video)other.pause();})));
})();
