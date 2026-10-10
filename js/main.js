/* ============================================================
   LÓGICA DO SITE
   - Renderiza cards a partir de content.js
   - Ícones SVG inline dos pilares
   - Menu mobile, reveal on scroll, QR do brinde
   ============================================================ */

/* ---------- Ícones SVG dos pilares (traço dourado) ---------- */
const PILLAR_ICONS = {
  curiosidade: '<svg viewBox="0 0 24 24" fill="none" stroke="#c99a3b" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',
  sistemico:   '<svg viewBox="0 0 24 24" fill="none" stroke="#c99a3b" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="8.5" y="14" width="7" height="7" rx="1"/><path d="M6.5 10v2.5h11V10M12 14v-1.5"/></svg>',
  comunicacao: '<svg viewBox="0 0 24 24" fill="none" stroke="#c99a3b" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4L3 21l1.1-3.3A8.4 8.4 0 1 1 21 11.5z"/><path d="M8 11h8M8 14h5"/></svg>',
  dono:        '<svg viewBox="0 0 24 24" fill="none" stroke="#c99a3b" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"/><path d="M9.5 12l1.8 1.8 3.4-3.6"/></svg>',
  polimata:    '<svg viewBox="0 0 24 24" fill="none" stroke="#c99a3b" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="9"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/></svg>'
};

/* ---------- Helpers de render ---------- */
function el(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

function renderPillars() {
  const grid = document.getElementById('pillarsGrid');
  if (!grid) return;
  CONTENT.pillars.forEach(p => {
    grid.appendChild(el(`
      <article class="pillar reveal">
        <div class="pillar__icon">${PILLAR_ICONS[p.icon] || ''}</div>
        <h3 class="pillar__name">${p.name}</h3>
        <p class="pillar__tag">${p.tag}</p>
        <p class="pillar__desc">${p.desc}</p>
      </article>
    `));
  });
}

function renderBridge() {
  const list = document.getElementById('bridgeList');
  if (!list) return;
  CONTENT.bridge.forEach(b => {
    list.appendChild(el(`
      <li class="reveal">
        <span class="bridge__pillar">${b.pillar}</span>
        <span class="bridge__action">→ ${b.action}</span>
      </li>
    `));
  });
}

function renderFeatures() {
  const grid = document.getElementById('featuresGrid');
  if (!grid) return;
  CONTENT.features.forEach(f => {
    grid.appendChild(el(`
      <article class="feature reveal">
        <h4 class="feature__name">${f.name}</h4>
        <p class="feature__desc">${f.desc}</p>
      </article>
    `));
  });
}

function renderProfiles() {
  const grid = document.getElementById('profilesGrid');
  if (!grid) return;
  CONTENT.profiles.forEach(p => {
    grid.appendChild(el(`
      <article class="profile reveal">
        <div class="profile__emoji">${p.emoji}</div>
        <h4 class="profile__name">${p.name}</h4>
        <p class="profile__desc">${p.desc}</p>
      </article>
    `));
  });
}

function renderRisks() {
  const grid = document.getElementById('risksGrid');
  if (!grid) return;
  CONTENT.risks.forEach(r => {
    grid.appendChild(el(`
      <article class="risk reveal">
        <span class="risk__emoji">${r.emoji}</span>
        <div>
          <h4 class="risk__name">${r.name}</h4>
          <p class="risk__desc">${r.desc}</p>
        </div>
      </article>
    `));
  });
}

function renderAnswers() {
  const grid = document.getElementById('answersGrid');
  if (!grid) return;
  CONTENT.answers.forEach(a => {
    grid.appendChild(el(`
      <div class="answer reveal">
        <span class="answer__check">✔</span>
        <div>
          <h4 class="answer__name">${a.name}</h4>
          <p class="answer__desc">${a.desc}</p>
        </div>
      </div>
    `));
  });
}

/* ---------- Menu mobile ---------- */
function setupNav() {
  const toggle = document.getElementById('navToggle');
  const links = document.querySelector('.nav__links');
  if (!toggle || !links) return;
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  links.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      links.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    })
  );
}

/* ---------- Reveal on scroll ---------- */
function setupReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach(i => i.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach(i => io.observe(i));
}

/* ---------- QR Code do brinde ----------
   Usa um serviço público de geração de QR. Para o palco,
   gere e salve o PNG em assets/qr-brinde.png e troque o src. */
function makeQr(imgId, link, fallbackText) {
  const img = document.getElementById(imgId);
  if (!img) return;
  img.src = 'https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=0&data=' + encodeURIComponent(link);
  img.onerror = () => {
    // fallback: mostra o link em texto caso o gerador esteja offline
    img.replaceWith(el('<p style="font-weight:700;color:#9c5a2e">' + fallbackText + '</p>'));
  };
}

function setupQrCodes() {
  makeQr('giftQr', 'https://s12d.com/kiroemsalvador', 's12d.com/kiroemsalvador');
  makeQr('communityQr', 'https://chat.whatsapp.com/GMh1xszpjoj71jPpuRHFx7?s=sh&p=a&mlu=4&ilr=4', 'Entre no grupo do WhatsApp');
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  renderPillars();
  renderBridge();
  renderFeatures();
  renderProfiles();
  renderRisks();
  renderAnswers();
  setupNav();
  setupReveal();
  setupQrCodes();
});
