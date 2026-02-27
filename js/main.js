/* ===========================================================
   SoloKit — JavaScript
   FAQ accordion, mobile menu, scroll animations, sticky nav
   =========================================================== */

(function () {
  'use strict';

  // ─── DOM References ──────────────────────────────────────
  const nav         = document.getElementById('nav');
  const navLinks    = document.getElementById('nav-links');
  const hamburger   = document.getElementById('nav-hamburger');
  const faqItems    = document.querySelectorAll('.faq-item');
  const scrollEls   = document.querySelectorAll('.animate-on-scroll');
  const allNavLinks = document.querySelectorAll('.nav-link, .nav-cta, .nav-logo');
  const sections    = document.querySelectorAll('section[id]');

  // ─── Mobile Menu ─────────────────────────────────────────
  function toggleMenu() {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  function closeMenu() {
    navLinks.classList.remove('open');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);
  }

  // Close mobile menu on nav link click
  navLinks.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) {
      closeMenu();
    }
  });

  // ─── Sticky Nav Background ──────────────────────────────
  var lastScrollY = 0;

  function handleNavScroll() {
    var scrollY = window.scrollY;
    if (scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    lastScrollY = scrollY;
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll(); // Initial check

  // ─── Active Nav Link on Scroll ───────────────────────────
  function updateActiveNav() {
    var scrollPos = window.scrollY + window.innerHeight * 0.35;
    var currentId = '';

    sections.forEach(function (section) {
      if (section.offsetTop <= scrollPos) {
        currentId = section.getAttribute('id');
      }
    });

    document.querySelectorAll('.nav-link').forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + currentId) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });

  // ─── FAQ Accordion ──────────────────────────────────────
  faqItems.forEach(function (item) {
    var question = item.querySelector('.faq-question');
    var answer   = item.querySelector('.faq-answer');

    question.addEventListener('click', function () {
      var isActive = item.classList.contains('active');

      // Close all other items
      faqItems.forEach(function (other) {
        if (other !== item) {
          other.classList.remove('active');
          var otherAnswer = other.querySelector('.faq-answer');
          var otherBtn    = other.querySelector('.faq-question');
          otherAnswer.style.maxHeight = null;
          otherBtn.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current item
      if (isActive) {
        item.classList.remove('active');
        answer.style.maxHeight = null;
        question.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // ─── Scroll Animations (Intersection Observer) ──────────
  if ('IntersectionObserver' in window) {
    var observerOptions = {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1
    };

    var scrollObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          scrollObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    scrollEls.forEach(function (el) {
      scrollObserver.observe(el);
    });
  } else {
    // Fallback: show everything immediately
    scrollEls.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // ─── Smooth Scroll for Anchor Links ─────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;

      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        closeMenu();

        var navHeight = nav ? nav.offsetHeight : 0;
        var targetPos = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;

        window.scrollTo({
          top: targetPos,
          behavior: 'smooth'
        });
      }
    });
  });

})();
