// Profile content
const content = {
  developer: {
    heroTitle: 'Building AI Systems That Transform Enterprise Software',
    heroDescription: 'SDE II @ AWS | Architecting agentic AI platforms that modernize 20M+ lines of legacy code',
    projectsTitle: 'Technical Projects',
    aboutContent: `
      <p>Hey fellow developer! 👋 I'm Darsh, an SDE II at AWS working on cutting-edge AI systems.</p>
      <p>I build multi-agent orchestration platforms using Claude AI that autonomously refactor millions of lines of legacy enterprise code. My tech stack includes Java, Python, TypeScript, AWS (CDK, Lambda, Bedrock), FastAPI, PostgreSQL, Docker, and Kubernetes.</p>
      <p>Currently obsessed with: LLM orchestration, DAG-based workflows, and distributed systems at scale.</p>
    `,
    icon: '👨‍💻'
  },
  recruiter: {
    heroTitle: 'Proven Track Record in Enterprise AI & Cloud Infrastructure',
    heroDescription: 'SDE II @ AWS | 4+ years experience | M.S. CS (3.82 GPA) | AWS Certified Solutions Architect',
    projectsTitle: 'Key Achievements',
    aboutContent: `
      <p><strong>Experience:</strong> 4+ years at Amazon Web Services, promoted to SDE II in 2024</p>
      <p><strong>Impact:</strong> Led AWS Transform development - first agentic AI platform for mainframe modernization. Delivered 20M+ LOC transformations for 23+ Fortune 500 clients.</p>
      <p><strong>Education:</strong> M.S. Computer Science from UT Dallas (3.82 GPA), B.E. Computer Engineering from GTU (8.46/10)</p>
      <p><strong>Certifications:</strong> AWS Certified Solutions Architect - Associate (Dec 2024)</p>
      <p><strong>Key Achievements:</strong> 98.8% DB restore time reduction, Production LLM service, Multi-region AWS infrastructure</p>
    `,
    icon: '💼'
  },
  stalker: {
    heroTitle: 'The Guy Who Turns Coffee Into Code at 2 AM',
    heroDescription: 'Professional bug creator and occasional fixer | Master of Stack Overflow | AWS employee #redacted',
    projectsTitle: 'Things I Actually Built',
    aboutContent: `
      <p>Okay, you found me. 🕵️</p>
      <p><strong>Real talk:</strong> I debug production at 3 AM while everyone sleeps. My Slack status is permanently "In a meeting" but I'm avoiding meetings.</p>
      <p><strong>Fun facts:</strong></p>
      <ul style="margin-left:2rem;margin-top:1rem;line-height:2">
        <li>Coffee consumption: ~5 cups/day</li>
        <li>Favorite debugging: console.log("HERE")</li>
        <li>GitHub contribution graph = heartbeat monitor</li>
        <li>Once spent 6 hours debugging a missing semicolon</li>
      </ul>
      <p><strong>Location:</strong> Dallas, TX (mentally in the cloud)</p>
    `,
    icon: '🕵️'
  },
  adventurer: {
    heroTitle: 'From COBOL Dungeons to AI Kingdoms',
    heroDescription: 'Quest: Transform legacy systems | Level: SDE II | Guild: Amazon Web Services',
    projectsTitle: 'Epic Quests Completed',
    aboutContent: `
      <p>🗺️ <strong>The Journey:</strong></p>
      <p><strong>Chapter 1 (2015-2019):</strong> Started in Gujarat. Learned Computer Engineering. Achievement: Bachelor's Degree.</p>
      <p><strong>Chapter 2 (2020-2022):</strong> Traveled to Dallas. Mastered CS at UT Dallas. Boss defeated: Master's Thesis (3.82 GPA).</p>
      <p><strong>Chapter 3 (2022-Present):</strong> Joined AWS guild. Current level: SDE II. Main quest: Building AI systems.</p>
      <p><strong>🏆 Achievements:</strong></p>
      <ul style="margin-left:2rem;margin-top:1rem;line-height:2">
        <li>⚔️ Slayed 20M+ lines of legacy code</li>
        <li>🛡️ Protected 23+ enterprise fortresses</li>
        <li>🔮 Mastered LLM orchestration</li>
        <li>☁️ Conquered AWS cloud realm</li>
      </ul>
    `,
    icon: '🚀'
  }
};

// Particles animation for start screen
function initParticles() {
  const canvas = document.getElementById('particlesCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const particles = [];
  for (let i = 0; i < 100; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2
    });
  }
  
  function animate() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      
      ctx.fillStyle = 'rgba(229, 9, 20, 0.5)';
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    });
    
    requestAnimationFrame(animate);
  }
  animate();
}

// Profile background animation
function initProfileBg() {
  const canvas = document.getElementById('profileBg');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  let time = 0;
  function animate() {
    ctx.fillStyle = 'rgba(20, 20, 20, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < 3; i++) {
      const x = canvas.width / 2 + Math.sin(time * 0.001 + i) * 200;
      const y = canvas.height / 2 + Math.cos(time * 0.001 + i) * 200;
      
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, 200);
      gradient.addColorStop(0, 'rgba(229, 9, 20, 0.1)');
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    
    time++;
    requestAnimationFrame(animate);
  }
  animate();
}

// Netflix tudum sound
function playTudum() {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  
  // First note
  const osc1 = audioContext.createOscillator();
  const gain1 = audioContext.createGain();
  osc1.connect(gain1);
  gain1.connect(audioContext.destination);
  osc1.frequency.setValueAtTime(220, audioContext.currentTime);
  osc1.type = 'sine';
  gain1.gain.setValueAtTime(0, audioContext.currentTime);
  gain1.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.01);
  gain1.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
  osc1.start(audioContext.currentTime);
  osc1.stop(audioContext.currentTime + 0.5);
  
  // Second note
  const osc2 = audioContext.createOscillator();
  const gain2 = audioContext.createGain();
  osc2.connect(gain2);
  gain2.connect(audioContext.destination);
  osc2.frequency.setValueAtTime(165, audioContext.currentTime + 0.15);
  osc2.type = 'sine';
  gain2.gain.setValueAtTime(0, audioContext.currentTime + 0.15);
  gain2.gain.linearRampToValueAtTime(0.4, audioContext.currentTime + 0.16);
  gain2.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1.2);
  osc2.start(audioContext.currentTime + 0.15);
  osc2.stop(audioContext.currentTime + 1.2);
}

// Initialize
initParticles();

// Start button
document.getElementById('startButton').addEventListener('click', () => {
  playTudum();
  document.getElementById('startScreen').style.display = 'none';
  document.getElementById('intro').classList.add('active');
  
  setTimeout(() => {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('profileSelection').classList.add('active');
    initProfileBg();
  }, 3500);
});

// Profile selection
document.querySelectorAll('.profile-card').forEach(card => {
  card.addEventListener('click', () => {
    const profile = card.dataset.profile;
    const data = content[profile];
    
    document.getElementById('heroTitle').textContent = data.heroTitle;
    document.getElementById('heroDescription').textContent = data.heroDescription;
    document.getElementById('projectsTitle').textContent = data.projectsTitle;
    document.getElementById('aboutContent').innerHTML = data.aboutContent;
    document.getElementById('profileIconSmall').textContent = data.icon;
    
    document.getElementById('profileSelection').style.display = 'none';
    document.getElementById('mainContent').classList.add('active');
  });
});

// Header scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('.netflix-header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Button actions
document.querySelector('.btn-play')?.addEventListener('click', () => {
  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.btn-info')?.addEventListener('click', () => {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

// Profile icon - back to selection
document.getElementById('profileIconSmall')?.addEventListener('click', () => {
  document.getElementById('mainContent').classList.remove('active');
  setTimeout(() => {
    document.getElementById('mainContent').style.display = 'none';
    document.getElementById('profileSelection').style.display = 'flex';
  }, 300);
});
