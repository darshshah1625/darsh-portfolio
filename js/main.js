// ===== CUSTOM CURSOR =====
const cursorDot = document.querySelector('[data-cursor-dot]');
const cursorOutline = document.querySelector('[data-cursor-outline]');

window.addEventListener('mousemove', (e) => {
  const posX = e.clientX;
  const posY = e.clientY;
  
  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;
  
  cursorOutline.animate({
    left: `${posX}px`,
    top: `${posY}px`
  }, { duration: 500, fill: 'forwards' });
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== COUNTER ANIMATION =====
const animateCounter = (element) => {
  const target = parseInt(element.dataset.count);
  const duration = 2000;
  const increment = target / (duration / 16);
  let current = 0;
  
  const updateCounter = () => {
    current += increment;
    if (current < target) {
      element.textContent = Math.floor(current);
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target;
    }
  };
  
  updateCounter();
};

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = {
  threshold: 0.2,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      
      // Animate counters when hero stats are visible
      if (entry.target.classList.contains('hero-stats')) {
        const counters = entry.target.querySelectorAll('[data-count]');
        counters.forEach(counter => animateCounter(counter));
      }
      
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.work-card, .expertise-item, .skill-group, .contact-card, .hero-stats').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// ===== WORK CARD HOVER EFFECT =====
document.querySelectorAll('[data-work-card]').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  });
});

// ===== PARALLAX SCROLL EFFECT =====
let ticking = false;

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const scrolled = window.pageYOffset;
      
      // Parallax for hero elements
      const heroTitle = document.querySelector('.hero-title');
      const heroSubtitle = document.querySelector('.hero-subtitle');
      
      if (heroTitle && heroSubtitle) {
        heroTitle.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroSubtitle.style.transform = `translateY(${scrolled * 0.2}px)`;
      }
      
      ticking = false;
    });
    
    ticking = true;
  }
});

// ===== NAV BACKGROUND ON SCROLL =====
const nav = document.querySelector('.nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    nav.style.background = 'rgba(0, 0, 0, 0.95)';
    nav.style.borderBottom = '1px solid rgba(99, 102, 241, 0.2)';
  } else {
    nav.style.background = 'rgba(0, 0, 0, 0.8)';
    nav.style.borderBottom = '1px solid rgba(255, 255, 255, 0.05)';
  }
  
  lastScroll = currentScroll;
});

// ===== GRADIENT ANIMATION =====
const gradientTexts = document.querySelectorAll('.gradient-text');
gradientTexts.forEach(text => {
  text.addEventListener('mouseenter', () => {
    text.style.backgroundSize = '200% 200%';
    text.style.animation = 'gradientShift 2s ease infinite';
  });
  
  text.addEventListener('mouseleave', () => {
    text.style.animation = 'none';
  });
});

// Add gradient animation keyframes
const style = document.createElement('style');
style.textContent = `
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;
document.head.appendChild(style);

// ===== PERFORMANCE OPTIMIZATION =====
// Disable cursor on mobile
if (window.matchMedia('(max-width: 768px)').matches) {
  document.body.style.cursor = 'default';
  if (cursorDot) cursorDot.style.display = 'none';
  if (cursorOutline) cursorOutline.style.display = 'none';
}

// ===== CONSOLE MESSAGE =====
console.log('%c👋 Hey there!', 'font-size: 24px; font-weight: bold; color: #6366f1;');
console.log('%cInterested in the code? Let\'s talk!', 'font-size: 14px; color: #8b5cf6;');
console.log('%cdarshshah1816@gmail.com', 'font-size: 14px; color: #10b981; font-weight: bold;');
