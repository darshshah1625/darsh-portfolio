// Profile-based content
const content = {
  developer: {
    heroTitle: 'Building AI Systems That Transform Enterprise Software',
    heroDescription: 'Software Development Engineer II @ AWS | Architecting agentic AI platforms that modernize 20M+ lines of legacy code',
    projectsTitle: 'Technical Projects',
    skillsTitle: 'Tech Stack',
    aboutContent: `
      <p>Hey fellow developer! 👋 I'm Darsh, an SDE II at AWS working on some pretty cool AI stuff.</p>
      <p>I build multi-agent systems using Claude AI that autonomously refactor millions of lines of legacy enterprise code. Think COBOL to Java transformations at scale.</p>
      <p>My tech stack: Java, Python, TypeScript, AWS (CDK, Lambda, Bedrock), FastAPI, PostgreSQL, Docker, Kubernetes. I'm all about distributed systems, cloud architecture, and now agentic AI.</p>
      <p>Currently obsessed with: LLM orchestration, DAG-based workflows, and making legacy code modernization actually work in production.</p>
    `,
    icon: '👨‍💻'
  },
  recruiter: {
    heroTitle: 'Proven Track Record in Enterprise AI & Cloud Infrastructure',
    heroDescription: 'SDE II @ Amazon Web Services | 4+ years experience | M.S. Computer Science (3.82 GPA) | AWS Certified',
    projectsTitle: 'Key Achievements',
    skillsTitle: 'Core Competencies',
    aboutContent: `
      <p><strong>Experience:</strong> 4+ years at Amazon Web Services, promoted to SDE II in 2024</p>
      <p><strong>Impact:</strong> Led development of AWS Transform, the first agentic AI platform for mainframe modernization. Delivered 20M+ lines of code transformations for 23+ Fortune 500 clients.</p>
      <p><strong>Education:</strong> M.S. Computer Science from UT Dallas (GPA: 3.82/4.0), B.E. Computer Engineering from GTU (GPA: 8.46/10)</p>
      <p><strong>Certifications:</strong> AWS Certified Solutions Architect - Associate (Dec 2024)</p>
      <p><strong>Key Skills:</strong> Agentic AI, Distributed Systems, Cloud Architecture, Java, Python, AWS, LLM Integration</p>
      <p><strong>Notable Achievements:</strong> Reduced database restore time by 98.8% (4 hours → 3 minutes), Built production LLM-based refactoring service, Designed multi-region AWS infrastructure</p>
    `,
    icon: '💼'
  },
  stalker: {
    heroTitle: 'The Guy Who Turns Coffee Into Code at 2 AM',
    heroDescription: 'Professional bug creator and occasional fixer | Master of Stack Overflow copy-paste | AWS employee #redacted',
    projectsTitle: 'Things I Actually Built (No Cap)',
    skillsTitle: 'Skills (According to My Resume)',
    aboutContent: `
      <p>Okay, you found me. 🕵️</p>
      <p><strong>Real talk:</strong> I'm that engineer who debugs production issues at 3 AM while everyone else is asleep. My Slack status is permanently "In a meeting" but I'm actually just avoiding meetings.</p>
      <p><strong>Fun facts:</strong></p>
      <ul style="margin-left: 2rem; margin-top: 1rem; line-height: 2;">
        <li>I've written more code comments than actual code (jk, who writes comments?)</li>
        <li>My GitHub contribution graph looks like a heartbeat monitor</li>
        <li>I once spent 6 hours debugging only to find a missing semicolon (we don't talk about that)</li>
        <li>Coffee consumption: ~5 cups/day (rookie numbers, I know)</li>
        <li>Favorite debugging technique: console.log("HERE") everywhere</li>
      </ul>
      <p><strong>Current location:</strong> Dallas, TX (but mentally still in the cloud)</p>
      <p><strong>Relationship status:</strong> It's complicated (with my code)</p>
    `,
    icon: '🕵️'
  },
  adventurer: {
    heroTitle: 'From COBOL Dungeons to AI Kingdoms',
    heroDescription: 'Quest: Transform legacy systems | Level: SDE II | Guild: Amazon Web Services',
    projectsTitle: 'Epic Quests Completed',
    skillsTitle: 'Skill Tree',
    aboutContent: `
      <p>🗺️ <strong>The Journey So Far:</strong></p>
      <p><strong>Chapter 1: The Beginning (2015-2019)</strong><br>
      Started in Gujarat, India. Learned the ancient arts of Computer Engineering. Unlocked achievement: Bachelor's Degree.</p>
      
      <p><strong>Chapter 2: The Quest for Knowledge (2020-2022)</strong><br>
      Traveled to Dallas, Texas. Mastered advanced Computer Science at UT Dallas. Boss defeated: Master's Thesis. GPA: 3.82/4.0.</p>
      
      <p><strong>Chapter 3: The AWS Saga (2022-Present)</strong><br>
      Joined the legendary guild of Amazon Web Services. Current level: SDE II. Main quest: Building AI systems that transform enterprise software.</p>
      
      <p><strong>🏆 Achievements Unlocked:</strong></p>
      <ul style="margin-left: 2rem; margin-top: 1rem; line-height: 2;">
        <li>⚔️ Slayed 20M+ lines of legacy code</li>
        <li>🛡️ Protected 23+ enterprise fortresses</li>
        <li>🔮 Mastered the dark arts of LLM orchestration</li>
        <li>☁️ Conquered the AWS cloud realm</li>
        <li>🎓 Earned the AWS Solutions Architect badge</li>
      </ul>
      
      <p><strong>Current Quest:</strong> Building agentic AI systems that make legacy code modernization actually fun (yes, it's possible!).</p>
    `,
    icon: '🚀'
  }
};

// Netflix "Tudum" sound using Web Audio API
function playTudumSound() {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  
  // First "TU" sound
  const oscillator1 = audioContext.createOscillator();
  const gainNode1 = audioContext.createGain();
  
  oscillator1.connect(gainNode1);
  gainNode1.connect(audioContext.destination);
  
  oscillator1.frequency.setValueAtTime(220, audioContext.currentTime); // A3
  oscillator1.type = 'sine';
  
  gainNode1.gain.setValueAtTime(0, audioContext.currentTime);
  gainNode1.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.01);
  gainNode1.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
  
  oscillator1.start(audioContext.currentTime);
  oscillator1.stop(audioContext.currentTime + 0.5);
  
  // Second "DUM" sound
  const oscillator2 = audioContext.createOscillator();
  const gainNode2 = audioContext.createGain();
  
  oscillator2.connect(gainNode2);
  gainNode2.connect(audioContext.destination);
  
  oscillator2.frequency.setValueAtTime(165, audioContext.currentTime + 0.15); // E3
  oscillator2.type = 'sine';
  
  gainNode2.gain.setValueAtTime(0, audioContext.currentTime + 0.15);
  gainNode2.gain.linearRampToValueAtTime(0.4, audioContext.currentTime + 0.16);
  gainNode2.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1.2);
  
  oscillator2.start(audioContext.currentTime + 0.15);
  oscillator2.stop(audioContext.currentTime + 1.2);
}

// Play sound on page load
window.addEventListener('load', () => {
  // Small delay to ensure everything is loaded
  setTimeout(() => {
    playTudumSound();
  }, 100);
});

// Intro animation
setTimeout(() => {
  document.getElementById('intro').style.display = 'none';
}, 3000);

// Profile selection
const profileCards = document.querySelectorAll('.profile-card');
const profileSelection = document.getElementById('profileSelection');
const mainContent = document.getElementById('mainContent');
const profileIconSmall = document.getElementById('profileIconSmall');

profileCards.forEach(card => {
  card.addEventListener('click', () => {
    const profile = card.dataset.profile;
    const profileContent = content[profile];
    
    // Update content
    document.getElementById('heroTitle').textContent = profileContent.heroTitle;
    document.getElementById('heroDescription').textContent = profileContent.heroDescription;
    document.getElementById('projectsTitle').textContent = profileContent.projectsTitle;
    document.getElementById('skillsTitle').textContent = profileContent.skillsTitle;
    document.getElementById('aboutContent').innerHTML = profileContent.aboutContent;
    profileIconSmall.textContent = profileContent.icon;
    
    // Hide profile selection, show main content
    profileSelection.style.display = 'none';
    mainContent.classList.add('active');
  });
});

// Header scroll effect
const header = document.querySelector('.netflix-header');
window.addEventListener('scroll', () => {
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
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Button actions
document.getElementById('btnPlay')?.addEventListener('click', () => {
  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('btnInfo')?.addEventListener('click', () => {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

// Profile icon click - back to selection
profileIconSmall.addEventListener('click', () => {
  mainContent.classList.remove('active');
  setTimeout(() => {
    mainContent.style.display = 'none';
    profileSelection.style.display = 'flex';
  }, 300);
});
