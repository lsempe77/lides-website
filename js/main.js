// ===== LIDES Website JavaScript =====

document.addEventListener('DOMContentLoaded', () => {

  // --- Mobile Navigation Toggle ---
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  // --- Header scroll effect ---
  const header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  // --- Fade-in animations on scroll ---
  const fadeElements = document.querySelectorAll('.fade-in');

  if (fadeElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    fadeElements.forEach(el => observer.observe(el));
  }

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerHeight = document.querySelector('.header')?.offsetHeight || 72;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // --- Contact form handling (Formspree or similar) ---
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      const action = this.getAttribute('action');
      // If form action still has placeholder, prevent submission
      if (action && action.includes('YOUR_FORM_ID')) {
        e.preventDefault();
        const email = this.querySelector('[name="email"]')?.value || '';
        const name = this.querySelector('[name="name"]')?.value || '';
        const message = this.querySelector('[name="message"]')?.value || '';

        // Fallback: open mailto
        const subject = encodeURIComponent(`Mensaje de ${name} desde lides.pe`);
        const body = encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`);
        window.location.href = `mailto:info@lides.pe?subject=${subject}&body=${body}`;
      }
    });
  }

  // --- Newsletter form handling ---
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      const action = this.getAttribute('action');
      if (action && action.includes('YOUR_FORM_ID')) {
        e.preventDefault();
        const email = this.querySelector('[name="email"]')?.value || '';
        const subject = encodeURIComponent('Suscripción al newsletter LIDES');
        const body = encodeURIComponent(`Quiero suscribirme al newsletter.\nEmail: ${email}`);
        window.location.href = `mailto:info@lides.pe?subject=${subject}&body=${body}`;
      }
    });
  }

});
