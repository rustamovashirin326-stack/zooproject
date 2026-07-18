// ============ MOBIL MENYU ============
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// ============ HUDUD KARTALARINI SICHQONCHA G'ILDIRAGI BILAN GORIZONTAL AYLANTIRISH ============
const habitatScroll = document.querySelector('.habitat-scroll');

if (habitatScroll) {
  habitatScroll.addEventListener('wheel', (e) => {
    if (e.deltaY === 0) return;
    e.preventDefault();
    habitatScroll.scrollBy({ left: e.deltaY * 1.2, behavior: 'smooth' });
  }, { passive: false });
}

// ============ FAOL NAV HAVOLASINI BO'LIM BO'YICHA YANGILASH ============
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');

if (sections.length && navLinks.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach((section) => observer.observe(section));
}