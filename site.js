// Theme toggle (respects system setting until the visitor picks one) and mobile menu.
(function () {
  var root = document.documentElement;
  var toggle = document.querySelector('.theme-toggle');
  var media = window.matchMedia('(prefers-color-scheme: dark)');

  function currentTheme() {
    return root.getAttribute('data-theme') || (media.matches ? 'dark' : 'light');
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  var menuBtn = document.querySelector('.menu-btn');
  var links = document.querySelector('.nav-links');
  if (menuBtn && links) {
    menuBtn.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        links.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }
})();
