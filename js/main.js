// ===== CODE RAIN =====
(function() {
  const canvas = document.getElementById('codeRain');
  const ctx = canvas.getContext('2d');
  const keywords = ['AWS','Lambda','Java','Python','def','class','import','async','await','const','let','func','return','if','for','try','catch','deploy','build','agent','LLM','API','CDK','VPC','IAM','EC2','ECS','S3','RDS','DynamoDB','Docker','K8s','git','push','merge','CI/CD','SELECT','FROM','WHERE','JOIN','INSERT','index','query','scale','node','pipe','flow','DAG','transform','reforge','migrate','scan','test','run'];
  let columns, drops;

  function init() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const fontSize = 13;
    columns = Math.floor(canvas.width / (fontSize * 3));
    drops = Array.from({length: columns}, () => Math.random() * -100);
  }
  init();
  window.addEventListener('resize', init);

  function draw() {
    ctx.fillStyle = 'rgba(11, 11, 20, 0.08)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = '12px JetBrains Mono, monospace';

    for (let i = 0; i < drops.length; i++) {
      const word = keywords[Math.floor(Math.random() * keywords.length)];
      const x = i * (canvas.width / columns);
      const y = drops[i] * 18;
      const alpha = 0.03 + Math.random() * 0.06;
      ctx.fillStyle = `rgba(56, 189, 248, ${alpha})`;
      ctx.fillText(word, x, y);
      if (y > canvas.height && Math.random() > 0.98) drops[i] = 0;
      drops[i] += 0.4 + Math.random() * 0.3;
    }
    requestAnimationFrame(draw);
  }
  draw();
})();

// ===== LOADING SCREEN =====
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loadingScreen').classList.add('hidden');
  }, 2000);
});

// ===== THEME TOGGLE =====
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'light') document.body.classList.add('light-mode');

themeToggle?.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  const theme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
  localStorage.setItem('theme', theme);
});

// ===== PARTICLE CURSOR =====
(function() {
  const canvas = document.getElementById('particleCursor');
  const ctx = canvas.getContext('2d');
  const particles = [];
  const maxParticles = 30;
  let mouse = { x: -100, y: -100 };

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  document.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    
    // Create particle
    if (particles.length < maxParticles) {
      particles.push({
        x: mouse.x,
        y: mouse.y,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
        life: 1,
        decay: Math.random() * 0.02 + 0.01
      });
    }
  });

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.speedX;
      p.y += p.speedY;
      p.life -= p.decay;
      
      if (p.life <= 0) {
        particles.splice(i, 1);
        continue;
      }
      
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(56, 189, 248, ${p.life * 0.5})`;
      ctx.fill();
    }
    
    requestAnimationFrame(animate);
  }
  animate();
})();

// ===== SCROLL PROGRESS =====
const scrollProgress = document.getElementById('scrollProgress');
window.addEventListener('scroll', () => {
  const h = document.documentElement.scrollHeight - window.innerHeight;
  scrollProgress.style.width = (window.scrollY / h * 100) + '%';
});

// ===== TEXT SCRAMBLE =====
class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#_ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.originalText = el.dataset.text;
  }
  scramble() {
    const text = this.originalText;
    let iteration = 0;
    const interval = setInterval(() => {
      this.el.textContent = text.split('').map((char, i) => {
        if (i < iteration) return text[i];
        return this.chars[Math.floor(Math.random() * this.chars.length)];
      }).join('');
      iteration += 1/2;
      if (iteration >= text.length) clearInterval(interval);
    }, 40);
  }
}

const scrambleEls = document.querySelectorAll('.scramble-text');
scrambleEls.forEach(el => {
  const fx = new TextScramble(el);
  // Initial scramble on load
  setTimeout(() => fx.scramble(), 500);
  // Re-scramble on hover
  el.addEventListener('mouseenter', () => fx.scramble());
});

// ===== COMMAND PALETTE =====
const cmdPalette = document.getElementById('cmdPalette');
const cmdInput = document.getElementById('cmdInput');
const cmdItems = document.querySelectorAll('.cmd-item');

function openCmd() {
  cmdPalette.classList.add('open');
  setTimeout(() => cmdInput.focus(), 100);
}
function closeCmd() {
  cmdPalette.classList.remove('open');
  cmdInput.value = '';
  filterCmd('');
}

document.addEventListener('keydown', (e) => {
  if (e.key === '/' && !cmdPalette.classList.contains('open') && document.activeElement.tagName !== 'INPUT') {
    e.preventDefault();
    openCmd();
  }
  if (e.key === 'Escape') closeCmd();
});

document.getElementById('navCmd')?.addEventListener('click', openCmd);
document.querySelector('.cmd-backdrop')?.addEventListener('click', closeCmd);

cmdInput.addEventListener('input', (e) => filterCmd(e.target.value));

function filterCmd(query) {
  const q = query.toLowerCase();
  cmdItems.forEach(item => {
    const label = (item.dataset.label || '').toLowerCase();
    const text = item.textContent.toLowerCase();
    item.style.display = (!q || label.includes(q) || text.includes(q)) ? 'flex' : 'none';
  });
}

cmdItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    closeCmd();
    const target = document.querySelector(item.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ===== NAV =====
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// Active nav
const sections = document.querySelectorAll('.section, .hero');
const navLinks = document.querySelectorAll('.nav-link');
const sectionObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + id));
    }
  });
}, { threshold: 0.2 });
sections.forEach(s => sectionObs.observe(s));

// Mobile
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
navToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  navToggle.classList.toggle('active');
});
document.querySelectorAll('.mobile-link').forEach(l => {
  l.addEventListener('click', (e) => {
    e.preventDefault();
    mobileMenu.classList.remove('open');
    navToggle.classList.remove('active');
    const target = document.querySelector(l.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Smooth scroll for all anchors
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    e.preventDefault();
    const t = document.querySelector(this.getAttribute('href'));
    if (t) t.scrollIntoView({ behavior: 'smooth' });
  });
});

// ===== SCROLL REVEAL =====
const animIns = document.querySelectorAll('.anim-in');
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
animIns.forEach(el => revealObs.observe(el));

// ===== COUNTER =====
const counters = document.querySelectorAll('.counter');
const counterObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.target);
      let current = 0;
      const inc = target / 50;
      const timer = setInterval(() => {
        current += inc;
        if (current >= target) { el.textContent = target; clearInterval(timer); }
        else el.textContent = Math.floor(current);
      }, 30);
      counterObs.unobserve(el);
    }
  });
}, { threshold: 0.5 });
counters.forEach(el => counterObs.observe(el));

// ===== METRIC BARS =====
const metricFills = document.querySelectorAll('.metric-fill');
const metricObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      metricObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });
metricFills.forEach(el => metricObs.observe(el));

// ===== SPOTLIGHT EFFECT =====
document.querySelectorAll('.spotlight-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--spot-x', x + 'px');
    card.style.setProperty('--spot-y', y + 'px');
    if (card.style.cssText.indexOf('--spot-x') === -1) return;
    const before = card.querySelector('::before');
  });
  // Use CSS custom properties for the spotlight position
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--spot-x', (e.clientX - rect.left) + 'px');
    card.style.setProperty('--spot-y', (e.clientY - rect.top) + 'px');
  });
});

// Inject dynamic spotlight positioning
const spotlightStyle = document.createElement('style');
spotlightStyle.textContent = `.spotlight-card::before{left:var(--spot-x,50%);top:var(--spot-y,50%)}`;
document.head.appendChild(spotlightStyle);

// ===== MAGNETIC BUTTONS =====
document.querySelectorAll('.btn-magnetic').forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'translate(0, 0)';
  });
});

// ===== HORIZONTAL SCROLL DRAG =====
const expWrap = document.querySelector('.exp-horizontal-wrap');
if (expWrap) {
  let isDown = false, startX, scrollLeft;
  expWrap.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - expWrap.offsetLeft;
    scrollLeft = expWrap.scrollLeft;
  });
  expWrap.addEventListener('mouseleave', () => isDown = false);
  expWrap.addEventListener('mouseup', () => isDown = false);
  expWrap.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - expWrap.offsetLeft;
    expWrap.scrollLeft = scrollLeft - (x - startX) * 1.5;
  });
}

// ===== EDUCATION FLIP CARDS =====
document.querySelectorAll('.edu-card-flip').forEach(card => {
  card.addEventListener('click', () => card.classList.toggle('flipped'));
});

// ===== BACK TO TOP =====
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});
backToTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== SKILL CONSTELLATION =====
(function() {
  const canvas = document.getElementById('skillConstellation');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, mouse = { x: -1000, y: -1000 };
  let hoveredNode = null;

  const skillData = [
    { name: 'Java', cat: 'lang', size: 28 },
    { name: 'Python', cat: 'lang', size: 26 },
    { name: 'TypeScript', cat: 'lang', size: 20 },
    { name: 'Scala', cat: 'lang', size: 16 },
    { name: 'SQL', cat: 'lang', size: 22 },
    { name: 'Spring Boot', cat: 'backend', size: 24 },
    { name: 'Microservices', cat: 'backend', size: 22 },
    { name: 'REST APIs', cat: 'backend', size: 20 },
    { name: 'System Design', cat: 'backend', size: 22 },
    { name: 'Dist. Systems', cat: 'backend', size: 26 },
    { name: 'AWS', cat: 'cloud', size: 30 },
    { name: 'Docker', cat: 'cloud', size: 22 },
    { name: 'Kubernetes', cat: 'cloud', size: 20 },
    { name: 'DynamoDB', cat: 'cloud', size: 18 },
    { name: 'CloudWatch', cat: 'cloud', size: 16 },
    { name: 'Terraform', cat: 'data', size: 20 },
    { name: 'Airflow', cat: 'data', size: 18 },
    { name: 'PySpark', cat: 'data', size: 18 },
    { name: 'Beam', cat: 'data', size: 16 },
    { name: 'dbt', cat: 'data', size: 16 },
    { name: 'Git', cat: 'backend', size: 18 },
    { name: 'SonarQube', cat: 'cloud', size: 14 },
  ];

  const catColors = {
    lang: '#38bdf8',
    backend: '#818cf8',
    cloud: '#f472b6',
    data: '#34d399'
  };

  class SkillNode {
    constructor(data, i, total) {
      this.name = data.name;
      this.cat = data.cat;
      this.baseSize = data.size;
      this.size = data.size;
      this.color = catColors[data.cat];
      // Distribute in a loose grid pattern with randomness
      const cols = Math.ceil(Math.sqrt(total));
      const row = Math.floor(i / cols);
      const col = i % cols;
      this.x = (col + 0.5) / cols * 0.8 + 0.1;  // 0.1 to 0.9
      this.y = (row + 0.5) / Math.ceil(total / cols) * 0.7 + 0.15;
      this.x += (Math.random() - 0.5) * 0.08;
      this.y += (Math.random() - 0.5) * 0.08;
      this.vx = (Math.random() - 0.5) * 0.15;
      this.vy = (Math.random() - 0.5) * 0.15;
      this.hovered = false;
    }
    update() {
      // Gentle floating
      this.x += this.vx / W;
      this.y += this.vy / H;
      // Bounds
      if (this.x < 0.05 || this.x > 0.95) this.vx *= -1;
      if (this.y < 0.05 || this.y > 0.95) this.vy *= -1;
      // Mouse interaction
      const dx = mouse.x / W - this.x;
      const dy = mouse.y / H - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      this.hovered = dist < 0.06;
      if (this.hovered) {
        this.size += (this.baseSize * 1.6 - this.size) * 0.1;
        hoveredNode = this;
      } else {
        this.size += (this.baseSize - this.size) * 0.1;
      }
    }
    draw() {
      const px = this.x * W;
      const py = this.y * H;
      // Glow
      if (this.hovered) {
        const grad = ctx.createRadialGradient(px, py, 0, px, py, this.size * 3);
        grad.addColorStop(0, this.color + '30');
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(px, py, this.size * 3, 0, Math.PI * 2);
        ctx.fill();
      }
      // Node
      ctx.beginPath();
      ctx.arc(px, py, this.size / 2, 0, Math.PI * 2);
      ctx.fillStyle = this.hovered ? this.color : this.color + '40';
      ctx.fill();
      // Ring
      ctx.strokeStyle = this.color + (this.hovered ? '80' : '20');
      ctx.lineWidth = 1;
      ctx.stroke();
      // Label
      ctx.fillStyle = this.hovered ? '#fff' : '#888';
      ctx.font = `${this.hovered ? '600' : '400'} ${this.hovered ? 13 : 11}px JetBrains Mono, monospace`;
      ctx.textAlign = 'center';
      ctx.fillText(this.name, px, py + this.size / 2 + 16);
    }
  }

  let nodes = [];

  function initConstellation() {
    const rect = canvas.parentElement.getBoundingClientRect();
    W = canvas.width = rect.width;
    H = canvas.height = rect.height;
    nodes = skillData.map((d, i) => new SkillNode(d, i, skillData.length));
  }
  initConstellation();
  window.addEventListener('resize', initConstellation);

  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });
  canvas.addEventListener('mouseleave', () => { mouse.x = -1000; mouse.y = -1000; });

  function drawConnections() {
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        // Connect nodes of same category
        if (nodes[i].cat !== nodes[j].cat) continue;
        const dx = (nodes[i].x - nodes[j].x) * W;
        const dy = (nodes[i].y - nodes[j].y) * H;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 250) {
          const alpha = (1 - dist / 250) * (nodes[i].hovered || nodes[j].hovered ? 0.3 : 0.06);
          ctx.beginPath();
          ctx.strokeStyle = nodes[i].color + Math.round(alpha * 255).toString(16).padStart(2, '0');
          ctx.lineWidth = nodes[i].hovered || nodes[j].hovered ? 1.5 : 0.5;
          ctx.moveTo(nodes[i].x * W, nodes[i].y * H);
          ctx.lineTo(nodes[j].x * W, nodes[j].y * H);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, W, H);
    hoveredNode = null;
    drawConnections();
    nodes.forEach(n => { n.update(); n.draw(); });

    // Draw tooltip for hovered node
    if (hoveredNode) {
      const catNames = { lang: 'Language', backend: 'Backend & Systems', cloud: 'Cloud & DevOps', data: 'Data Pipeline' };
      const px = hoveredNode.x * W;
      const py = hoveredNode.y * H - hoveredNode.size - 20;
      ctx.fillStyle = '#1a1a2e';
      ctx.strokeStyle = hoveredNode.color + '40';
      ctx.lineWidth = 1;
      const label = catNames[hoveredNode.cat];
      const tw = ctx.measureText(label).width + 20;
      const rx = px - tw / 2, ry = py - 12;
      ctx.beginPath();
      ctx.roundRect(rx, ry, tw, 24, 6);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = hoveredNode.color;
      ctx.font = '500 10px JetBrains Mono, monospace';
      ctx.textAlign = 'center';
      ctx.fillText(label, px, py + 2);
    }

    requestAnimationFrame(animate);
  }

  // Only animate when visible
  const constWrap = document.querySelector('.constellation-wrap');
  const constObs = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) animate();
  }, { threshold: 0.1 });
  constObs.observe(constWrap);
})();
