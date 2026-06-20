'use strict';

/* =====================================================
   Portfolio — main.js
   Vanilla JS, no dependencies beyond Bootstrap 5.3
   ===================================================== */

/* ─── Navbar: add shadow class on scroll ──────────── */
(function initNavbar() {
  const nav = document.getElementById('mainNav');
  if (!nav) return;

  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ─── Offcanvas: close on any side-nav link click ─── */
(function initSideMenu() {
  const offcanvasEl = document.getElementById('sideMenu');
  if (!offcanvasEl) return;

  const closeBtn = offcanvasEl.querySelector('[data-bs-dismiss="offcanvas"]');
  const links    = offcanvasEl.querySelectorAll('.side-nav-link, .side-nav-cta');

  links.forEach(link => {
    link.addEventListener('click', () => {
      // Prefer Bootstrap API if available, fall back to clicking the close button
      if (window.bootstrap && window.bootstrap.Offcanvas) {
        const instance = window.bootstrap.Offcanvas.getInstance(offcanvasEl)
          || window.bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl);
        instance.hide();
      } else if (closeBtn) {
        closeBtn.click();
      }
    });
  });
})();

/* ─── Active nav-link on scroll (IntersectionObserver) */
(function initActiveLinks() {
  const sections = document.querySelectorAll('section[id], footer[id]');
  // Desktop nav links + offcanvas side links
  const links = document.querySelectorAll('#mainNav .nav-link, #sideMenu .side-nav-link');
  if (!sections.length || !links.length) return;

  const sectionMap = new Map();
  sections.forEach(s => {
    const matched = [...links].filter(l => l.getAttribute('href') === `#${s.id}`);
    if (matched.length) sectionMap.set(s, matched);
  });

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        const matched = sectionMap.get(entry.target);
        if (matched) matched.forEach(l => l.classList.toggle('active', entry.isIntersecting));
      });
    },
    { rootMargin: '-50% 0px -50% 0px' }
  );

  sections.forEach(s => observer.observe(s));
})();



/* ─── Animate progress bars when visible ─────────── */
(function initProgressBars() {
  const bars = document.querySelectorAll('.progress-bar');
  if (!bars.length) return;

  // Store target widths then reset to 0 so we can animate
  bars.forEach(bar => {
    bar.dataset.target = bar.style.width;
    bar.style.width    = '0%';
  });

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const bar = entry.target;
        bar.style.width = bar.dataset.target;
        observer.unobserve(bar);
      });
    },
    { threshold: 0.3 }
  );

  bars.forEach(bar => observer.observe(bar));
})();

/* ─── Scroll-to-top button ────────────────────────── */
(function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  if (!btn) return;

  window.addEventListener(
    'scroll',
    () => btn.classList.toggle('visible', window.scrollY > 400),
    { passive: true }
  );

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

/* ─── Footer year ─────────────────────────────────── */
(function setYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
})();

/* ─── Fade-in cards on first load ─────────────────── */
(function initCardReveal() {
  const items = document.querySelectorAll('.project-card');
  if (!items.length) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.1 }
  );

  items.forEach(item => observer.observe(item));
})();

/* ─── Contact form ────────────────────────────────── */
(function initContactForm() {
  const form      = document.getElementById('contactForm');
  const success   = document.getElementById('cf-success');
  const resetBtn  = document.getElementById('cf-reset');
  const submitBtn = document.getElementById('cf-submit');
  const textarea  = document.getElementById('cf-message');
  const charCount = document.getElementById('cf-char-count');

  if (!form) return;

  // Live character counter for textarea
  if (textarea && charCount) {
    textarea.setAttribute('maxlength', '1000');
    textarea.addEventListener('input', () => {
      const len = textarea.value.length;
      charCount.textContent = len;
      charCount.style.color = len > 900 ? '#f87171' : '';
    });
  }

  // Submit handler (demo — logs to console; swap fetch() for real endpoint)
  form.addEventListener('submit', e => {
    e.preventDefault();

    alert('Coming soon!');
    return;

    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      // Focus the first invalid field for accessibility
      const firstInvalid = form.querySelector(':invalid');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // Show loading state
    const btnText    = submitBtn.querySelector('.cf-btn-text');
    const btnLoading = submitBtn.querySelector('.cf-btn-loading');
    btnText.classList.add('d-none');
    btnLoading.classList.remove('d-none');
    submitBtn.disabled = true;

    // Simulate async send (replace with real fetch in production)
    setTimeout(() => {
      form.classList.add('d-none');
      success.classList.remove('d-none');
    }, 1200);
  });

  // "Send another" resets the form
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      form.reset();
      form.classList.remove('was-validated', 'd-none');
      success.classList.add('d-none');

      const btnText    = submitBtn.querySelector('.cf-btn-text');
      const btnLoading = submitBtn.querySelector('.cf-btn-loading');
      btnText.classList.remove('d-none');
      btnLoading.classList.add('d-none');
      submitBtn.disabled = false;

      if (charCount) charCount.textContent = '0';
    });
  }
})();

/* ─── Blog: fetch posts from local JSON (swap for WP API later) ── */
(function initBlog() {
  const grid = document.getElementById('blogGrid');
  if (!grid) return;

  const API_URL = 'https://blog.imran.link/wp-json/wp/v2/posts?_embed&per_page=3';

  const viewAll = document.getElementById('blogViewAll');

  // Render three skeleton placeholder cards while loading
  function renderSkeletons() {
    grid.innerHTML = Array.from({ length: 3 }, () => `
      <div class="col">
        <div class="card blog-card h-100">
          <div class="blog-skeleton blog-skeleton--thumb"></div>
          <div class="card-body">
            <div class="blog-skeleton blog-skeleton--badge mb-2"></div>
            <div class="blog-skeleton blog-skeleton--title mb-1"></div>
            <div class="blog-skeleton blog-skeleton--title mb-3" style="width:65%"></div>
            <div class="blog-skeleton blog-skeleton--text mb-1"></div>
            <div class="blog-skeleton blog-skeleton--text mb-1"></div>
            <div class="blog-skeleton blog-skeleton--text" style="width:50%"></div>
          </div>
        </div>
      </div>`).join('');
  }

  function stripHtml(html) {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  }

  function formatDate(iso) {
    return new Date(iso).toLocaleDateString('en-US', {
      year: 'numeric', month: 'short', day: 'numeric'
    });
  }

  function buildCard(post) {
    const title   = post.title?.rendered || 'Untitled';
    const link    = post.link || '#';
    const date    = formatDate(post.date);
    const excerpt = stripHtml(post.excerpt?.rendered || '').slice(0, 115).trimEnd() + '\u2026';
    const imgSrc  = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '';
    const cat     = post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Article';

    const imgHtml = imgSrc
      ? `<img src="${imgSrc}" class="card-img-top blog-thumb" alt="${title}" loading="lazy" />`
      : `<div class="blog-thumb-placeholder d-flex align-items-center justify-content-center">
           <i class="bi bi-file-text fs-1 text-secondary opacity-50"></i>
         </div>`;

    return `
      <div class="col">
        <a href="${link}" target="_blank" rel="noopener noreferrer"
           class="text-decoration-none blog-post-link d-block h-100" aria-label="Read: ${title}">
          <div class="card blog-card h-100">
            ${imgHtml}
            <div class="card-body d-flex flex-column">
              <span class="badge rounded-pill badge-blog mb-2 align-self-start">${cat}</span>
              <h5 class="blog-title mb-2">${title}</h5>
              <p class="card-text text-secondary small flex-grow-1 mb-3">${excerpt}</p>
              <div class="d-flex align-items-center justify-content-between mt-auto">
                <span class="blog-date text-secondary">
                  <i class="bi bi-calendar3 me-1"></i>${date}
                </span>
                <span class="blog-read-more small">
                  Read more <i class="bi bi-arrow-right"></i>
                </span>
              </div>
            </div>
          </div>
        </a>
      </div>`;
  }

  function renderError() {
    grid.innerHTML = `
      <div class="col-12 text-center py-5 text-secondary">
        <i class="bi bi-wifi-off fs-1 opacity-50 d-block mb-3"></i>
        <p class="mb-0">Could not load posts.</p>
      </div>`;
  }

  renderSkeletons();

  fetch(API_URL)
    .then(res => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    })
    .then(posts => {
      if (!Array.isArray(posts) || !posts.length) {
        grid.innerHTML = '<div class="col-12 text-center text-secondary py-5">No posts found.</div>';
        return;
      }
      grid.innerHTML = posts.map(buildCard).join('');
    })
    .catch(() => renderError());
})();
