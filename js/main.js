// ===== THEME TOGGLE =====
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme') || 'dark';

if (savedTheme === 'light') {
  document.body.classList.add('light');
}

themeToggle?.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const theme = document.body.classList.contains('light') ? 'light' : 'dark';
  localStorage.setItem('theme', theme);
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===== ACTIVE SECTION TRACKING =====
const sections = document.querySelectorAll('.section');
const navDots = document.querySelectorAll('.nav-dot');

const observerOptions = {
  root: null,
  rootMargin: '-50% 0px -50% 0px',
  threshold: 0
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const sectionId = entry.target.id;
      
      // Update nav dots
      navDots.forEach(dot => {
        dot.classList.remove('active');
        if (dot.dataset.section === sectionId) {
          dot.classList.add('active');
        }
      });
    }
  });
}, observerOptions);

sections.forEach(section => observer.observe(section));

// ===== SCROLL ANIMATIONS =====
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.timeline-item, .project-card, .skill-category, .contact-card, .highlight-card');
  
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight * 0.85;
    
    if (isVisible) {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }
  });
};

// Initial setup for scroll animations
document.querySelectorAll('.timeline-item, .project-card, .skill-category, .contact-card, .highlight-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// ===== COUNTER ANIMATION =====
const animateCounter = (element, target) => {
  const duration = 2000;
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
};

// Trigger counter animation when hero section is visible
const heroObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const statValues = entry.target.querySelectorAll('.stat-value');
      statValues.forEach(stat => {
        const text = stat.textContent;
        const number = parseInt(text.match(/\d+/)?.[0] || 0);
        if (number > 0) {
          const span = document.createElement('span');
          span.textContent = '0';
          stat.textContent = '';
          stat.appendChild(span);
          stat.append(text.replace(/\d+/, ''));
          animateCounter(span, number);
        }
      });
      heroObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
  heroObserver.observe(heroStats);
}

// ===== KEYBOARD SHORTCUTS =====
document.addEventListener('keydown', (e) => {
  // Press 'T' to toggle theme
  if (e.key === 't' || e.key === 'T') {
    if (document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      themeToggle.click();
    }
  }
  
  // Press numbers 1-6 to navigate sections
  const num = parseInt(e.key);
  if (num >= 1 && num <= 6) {
    const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
    const section = document.getElementById(sections[num - 1]);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
});

// ===== PERFORMANCE OPTIMIZATION =====
// Debounce scroll events
let scrollTimeout;
const originalScrollHandler = window.onscroll;
window.addEventListener('scroll', () => {
  if (scrollTimeout) {
    window.cancelAnimationFrame(scrollTimeout);
  }
  scrollTimeout = window.requestAnimationFrame(() => {
    animateOnScroll();
  });
}, { passive: true });

// ===== CONSOLE EASTER EGG =====
console.log('%c👋 Hey there!', 'font-size: 20px; font-weight: bold; color: #3b82f6;');
console.log('%cLooking at the code? I like your style!', 'font-size: 14px; color: #a1a1aa;');
console.log('%cFeel free to reach out: darshshah1816@gmail.com', 'font-size: 14px; color: #10b981;');
console.log('%c\nKeyboard shortcuts:\n• Press T to toggle theme\n• Press 1-6 to navigate sections', 'font-size: 12px; color: #71717a; font-family: monospace;');
