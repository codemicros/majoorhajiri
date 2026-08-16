(function () {
  const cfg = window.MAJDOOR_HAJIRI_CONFIG || {};

  document.querySelectorAll('[data-store]').forEach((link) => {
    const type = link.getAttribute('data-store');
    const url = type === 'play' ? cfg.playStoreUrl : cfg.appStoreUrl;
    if (url) {
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.classList.remove('is-disabled');
      link.removeAttribute('aria-disabled');
      link.removeAttribute('title');
    } else {
      link.href = '#download';
      link.classList.add('is-disabled');
      link.setAttribute('aria-disabled', 'true');
      link.setAttribute('title', type === 'play' ? 'Google Play link will be added after launch' : 'App Store link will be added after launch');
      link.addEventListener('click', (e) => e.preventDefault());
    }
  });

  document.querySelectorAll('[data-support-email]').forEach((el) => {
    if (cfg.supportEmail) {
      el.textContent = cfg.supportEmail;
      if (el.tagName === 'A') el.href = 'mailto:' + cfg.supportEmail;
    }
  });

  const navShell = document.querySelector('.nav-shell');
  const toggle = document.querySelector('.mobile-toggle');
  if (navShell && toggle) {
    toggle.addEventListener('click', () => {
      const open = navShell.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  document.querySelectorAll('.faq-question').forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq-item');
      const nowOpen = !item.classList.contains('open');
      item.classList.toggle('open', nowOpen);
      button.setAttribute('aria-expanded', nowOpen ? 'true' : 'false');
    });
  });

  const track = document.querySelector('.screenshot-track');
  document.querySelectorAll('.carousel-btn').forEach((button) => {
    button.addEventListener('click', () => {
      if (!track) return;
      const amount = Math.min(track.clientWidth * 0.78, 620);
      track.scrollBy({ left: button.classList.contains('next') ? amount : -amount, behavior: 'smooth' });
    });
  });

  // Set the current year without making the page dependent on a framework.
  document.querySelectorAll('[data-current-year]').forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
})();
