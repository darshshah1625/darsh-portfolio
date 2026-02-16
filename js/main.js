// ============================================================
// Profile Banner Content (matches netflix_portfolio DatoCMS data)
// ============================================================
const profileContent = {
  recruiter: {
    headline: 'Software Engineer Who Ships Fast and Scales Faster',
    description: 'SDE II @ Amazon Web Services | 4+ Years | M.S. Computer Science (3.82 GPA) | AWS Certified Solutions Architect',
    aboutContent: `
      <p><strong>Current Role:</strong> Software Development Engineer II at Amazon Web Services (Promoted 2024)</p>
      <p><strong>What I Bring:</strong></p>
      <ul>
        <li>4+ years building production backend services, cloud infrastructure, and AI-powered tooling at enterprise scale</li>
        <li>Promoted to SDE II in 2.5 years — consistently delivered high-impact projects across distributed systems, CI/CD, and full-stack development</li>
        <li>Reduced critical database restore times by 98.8% through automation and smart architecture</li>
        <li>Maintained 99.99% uptime managing 12+ P1 incidents weekly as on-call engineer</li>
        <li>Built and shipped mobile apps, data pipelines, and cloud-native services across multiple teams and tech stacks</li>
      </ul>
      <p><strong>Education:</strong> M.S. Computer Science - UT Dallas (3.82 GPA) | B.E. Computer Engineering - GTU (8.46/10)</p>
      <p><strong>Certifications:</strong> AWS Certified Solutions Architect (Dec 2024)</p>
    `,
    profileColor: 'blue'
  },
  developer: {
    headline: 'I Write Backend Systems That Don\'t Break at 3 AM',
    description: 'SDE II @ AWS | Java, Python, TypeScript | Distributed Systems, Cloud Infra, AI/ML | Full-Stack Problem Solver',
    aboutContent: `
      <p>Hey, I'm Darsh. I'm a Software Development Engineer II at AWS who genuinely enjoys building things that work at scale.</p>
      <p><strong>Day to Day:</strong> I design and build backend services, automate infrastructure with CDK, write CI/CD pipelines, and occasionally wrangle LLMs into doing useful things. I've worked across Java, Python, TypeScript, and Scala — whatever the problem needs.</p>
      <p><strong>Things I've Built:</strong> Database automation tools that cut restore times from hours to minutes. CI/CD architectures serving multiple enterprise projects. EC2 lifecycle management saving 50% on infra costs. Mobile apps with React Native. Data pipelines processing 100+ TB with PySpark.</p>
      <p><strong>How I Work:</strong> I care about clean APIs, reliable systems, and code that the next person can actually read. I write tests, I review PRs thoroughly, and I don't shy away from on-call.</p>
      <p><strong>Stack:</strong> Java, Python, TypeScript, Scala | AWS (CDK, ECS, Lambda, Bedrock) | Spring Boot, FastAPI, React Native | PostgreSQL, Oracle, DynamoDB | Docker, Kubernetes | Kafka, Spark</p>
    `,
    profileColor: 'grey'
  },
  stalker: {
    headline: 'The Guy Who Deploys on Fridays — And Lives to Tell',
    description: 'Production Survivor | On-Call Veteran | Coffee-Powered Code Machine',
    aboutContent: `
      <p>Alright, you caught me. Let me tell you who I really am...</p>
      <p><strong>The Real Deal:</strong> I'm that engineer who gets paged at 2 AM and actually fixes the issue before going back to sleep. Production incidents? Handled 12 a week. Database down? I built a tool that restores it in 3 minutes instead of 4 hours.</p>
      <p><strong>War Stories:</strong></p>
      <ul>
        <li>Reduced DB restore from 4 hours to 3 minutes (yes, really)</li>
        <li>Automated infra provisioning so hard my team forgot what manual deployment felt like</li>
        <li>Handle 12 P1 incidents per week and still have time for memes</li>
        <li>Deployed to production on a Friday (and lived to tell the tale)</li>
        <li>Built mobile apps, data pipelines, and cloud services — sometimes in the same sprint</li>
      </ul>
      <p><strong>Daily Routine:</strong></p>
      <ul>
        <li>Coffee consumption: Industrial levels</li>
        <li>Slack status: "In a meeting" (actually coding)</li>
        <li>Debugging method: console.log() everywhere (don't judge)</li>
        <li>GitHub contributions: Green squares for days</li>
        <li>Stack Overflow: Read-only mode (I answer in production)</li>
      </ul>
      <p><strong>Location:</strong> Dallas, TX (but my code runs everywhere)</p>
      <p><strong>Mission:</strong> Build reliable systems, automate everything, and never let production go down on my watch.</p>
    `,
    profileColor: 'red'
  },
  adventurer: {
    headline: 'Level 99 Engineer — Main Quest: Ship or Be Shipped',
    description: 'Quest: Build Unbreakable Systems | Class: Full-Stack Engineer | Guild: Amazon Web Services | Level: 99',
    aboutContent: `
      <p><strong>Welcome, Traveler! This is the epic saga of a code warrior...</strong></p>

      <p><strong>Chapter I: The Origin (2015-2019)</strong></p>
      <p>Born in the ancient lands of Gujarat, India. Trained for 4 years in the sacred arts of Computer Engineering at Gujarat Technological University. Defeated the final boss: Bachelor's Degree (8.46/10). Unlocked skills: Algorithms, Data Structures, Problem Solving.</p>

      <p><strong>Chapter II: The Crossing (2020-2022)</strong></p>
      <p>Journeyed across the seas to Dallas, Texas. Entered the legendary University of Texas at Dallas. Mastered advanced Computer Science techniques — distributed systems, AI, and cloud computing. Boss defeated: Master's Thesis (Critical Hit: 3.82 GPA).</p>

      <p><strong>Side Quests Completed:</strong></p>
      <ul>
        <li><strong>AT&T Labs (Summer 2021):</strong> Tamed PySpark dragons to process 100+ TB of 5G network data. Accelerated pipeline speed by 30x.</li>
        <li><strong>Copart (2021-2022):</strong> Forged React Native mobile apps wielded by thousands of daily users. Cut load times by 40%.</li>
      </ul>

      <p><strong>Chapter III: The AWS Saga (2022-Present)</strong></p>
      <p>Joined the elite guild of Amazon Web Services. Rose from SDE I to SDE II in 2.5 years. Now building distributed systems and AI-powered tools that serve Fortune 500 clients.</p>

      <p><strong>Legendary Achievements Unlocked:</strong></p>
      <ul>
        <li><strong>Speed Demon:</strong> Reduced dungeon clear time by 98.8% (4 hours to 3 minutes)</li>
        <li><strong>Cloud Master:</strong> Conquered the AWS realm (Certified Solutions Architect)</li>
        <li><strong>Infrastructure Mage:</strong> Automated CI/CD pipelines reducing manual deployment by 90%</li>
        <li><strong>Guardian:</strong> Maintained 99.99% uptime defending production servers</li>
        <li><strong>Multi-Class:</strong> Backend, mobile, data pipelines, cloud infra — no quest refused</li>
        <li><strong>Mentor:</strong> Leveled up teammates through code reviews across 6+ enterprise projects</li>
      </ul>

      <p><strong>Inventory (Tech Stack):</strong></p>
      <ul>
        <li>Legendary Weapons: Java, Python, TypeScript, Scala</li>
        <li>Armor: AWS CDK, Docker, Kubernetes, Terraform</li>
        <li>Spells: Spring Boot, FastAPI, React Native</li>
        <li>Scrolls: PostgreSQL, Oracle, DynamoDB</li>
        <li>Potions: Kafka, Spark, Airflow</li>
      </ul>

      <p><strong>Current Quest:</strong> Building reliable, scalable systems and shipping code that matters. The adventure continues...</p>
      <p><strong>Power Level:</strong> Over 9000 (and counting)</p>
    `,
    profileColor: 'yellow'
  }
};

// ============================================================
// Top Picks Config (matches netflix_portfolio TopPicksRow)
// ============================================================
const topPicksConfig = {
  recruiter: [
    { title: 'Skills', img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop', target: 'skills' },
    { title: 'Experience', img: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=400&h=300&fit=crop', target: 'work-experience' },
    { title: 'Projects', img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop', target: 'projects' },
    { title: 'Certifications', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop', target: 'certifications' },
    { title: 'Contact Me', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop', target: 'contact' }
  ],
  developer: [
    { title: 'Skills', img: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&h=300&fit=crop', target: 'skills' },
    { title: 'Projects', img: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=300&fit=crop', target: 'projects' },
    { title: 'Certifications', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop', target: 'certifications' },
    { title: 'Experience', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop', target: 'work-experience' },
    { title: 'Contact Me', img: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=400&h=300&fit=crop', target: 'contact' }
  ],
  stalker: [
    { title: 'Contact Me', img: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=400&h=300&fit=crop', target: 'contact' },
    { title: 'Projects', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop', target: 'projects' },
    { title: 'Experience', img: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=400&h=300&fit=crop', target: 'work-experience' },
    { title: 'Certifications', img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop', target: 'certifications' }
  ],
  adventurer: [
    { title: 'Projects', img: 'https://images.unsplash.com/photo-1537432376149-e84978e48784?w=400&h=300&fit=crop', target: 'projects' },
    { title: 'About', img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop', target: 'about' },
    { title: 'Contact Me', img: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop', target: 'contact' },
    { title: 'Certifications', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop', target: 'certifications' }
  ]
};

// ============================================================
// Continue Watching Config (matches netflix_portfolio ContinueWatching)
// ============================================================
const continueWatchingConfig = {
  recruiter: [
    { title: 'About', img: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?w=300&h=200&fit=crop', target: 'about' },
    { title: 'Certifications', img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=200&fit=crop', target: 'certifications' },
    { title: 'Contact Me', img: 'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=300&h=200&fit=crop', target: 'contact' }
  ],
  developer: [
    { title: 'About', img: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=300&h=200&fit=crop', target: 'about' },
    { title: 'Certifications', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&h=200&fit=crop', target: 'certifications' },
    { title: 'Contact Me', img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=300&h=200&fit=crop', target: 'contact' }
  ],
  stalker: [
    { title: 'About', img: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=300&h=200&fit=crop', target: 'about' },
    { title: 'Contact Me', img: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=300&h=200&fit=crop', target: 'contact' }
  ],
  adventurer: [
    { title: 'About', img: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=300&h=200&fit=crop', target: 'about' },
    { title: 'Skills', img: 'https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=300&h=200&fit=crop', target: 'skills' },
    { title: 'Contact Me', img: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=300&h=200&fit=crop', target: 'contact' }
  ]
};

// ============================================================
// Skills Data (matches netflix_portfolio Skills page)
// ============================================================
const skillsData = {
  'Languages': [
    { name: 'Java', description: 'Enterprise & distributed systems' },
    { name: 'Python', description: 'AI/ML & scripting' },
    { name: 'TypeScript', description: 'Full-stack development' },
    { name: 'Scala', description: 'Data processing' },
    { name: 'JavaScript', description: 'Web development' }
  ],
  'Frameworks': [
    { name: 'Spring Boot', description: 'Java microservices' },
    { name: 'FastAPI', description: 'Python APIs' },
    { name: 'React', description: 'Frontend UI' },
    { name: 'Node.js', description: 'Server-side JS' }
  ],
  'Cloud & DevOps': [
    { name: 'AWS CDK', description: 'Infrastructure as code' },
    { name: 'Lambda', description: 'Serverless compute' },
    { name: 'ECS', description: 'Container orchestration' },
    { name: 'Docker', description: 'Containerization' },
    { name: 'Kubernetes', description: 'Container management' },
    { name: 'Terraform', description: 'Multi-cloud IaC' }
  ],
  'AI & ML': [
    { name: 'Claude AI', description: 'LLM integration' },
    { name: 'Amazon Bedrock', description: 'Foundation models' },
    { name: 'LLM Orchestration', description: 'Multi-agent systems' }
  ],
  'Databases': [
    { name: 'PostgreSQL', description: 'Relational DB' },
    { name: 'Oracle', description: 'Enterprise DB' },
    { name: 'DynamoDB', description: 'NoSQL DB' }
  ],
  'Data Engineering': [
    { name: 'Apache Kafka', description: 'Event streaming' },
    { name: 'Spark', description: 'Data processing' },
    { name: 'Airflow', description: 'Workflow orchestration' }
  ]
};

// ============================================================
// Projects Data (matches netflix_portfolio Projects page)
// ============================================================
const projectsData = [
  {
    title: 'ATX Reforge',
    description: 'Agentic AI Platform for enterprise mainframe modernization. Led architecture of multi-agent system processing 10M+ lines of code for 23+ Fortune 500 companies.',
    tech: ['Java', 'Python', 'AWS', 'Claude AI', 'FastAPI'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop'
  },
  {
    title: 'RTS Manager',
    description: 'Database restoration automation tool that reduced restore time by 98.8% — from 4 hours to just 3 minutes.',
    tech: ['Java', 'AWS', 'PostgreSQL', 'Docker'],
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&h=400&fit=crop'
  },
  {
    title: 'AWS Blu Age SDE',
    description: 'Cloud infrastructure platform achieving 50% cost reduction with multi-region deployment capabilities.',
    tech: ['TypeScript', 'AWS CDK', 'Lambda', 'ECS'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop'
  },
  {
    title: 'A2A Protocol',
    description: 'Multi-agent system with real-time synchronization enabling distributed AI agent communication.',
    tech: ['Python', 'FastAPI', 'Kafka', 'Docker'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop'
  }
];

// ============================================================
// Timeline Data (matches netflix_portfolio WorkExperience page)
// ============================================================
const timelineData = [
  {
    type: 'work',
    title: 'Software Development Engineer II',
    company: 'Amazon Web Services',
    date: '2024 - Present',
    tech: 'Java, Python, Claude AI, AWS CDK, FastAPI',
    description: 'Leading agentic AI platform for enterprise mainframe modernization. Architected multi-agent systems processing 20M+ LOC for 23+ enterprises.'
  },
  {
    type: 'work',
    title: 'Software Development Engineer I',
    company: 'Amazon Web Services',
    date: '2022 - 2024',
    tech: 'Java, TypeScript, AWS, PostgreSQL, Docker',
    description: 'Built RTS Manager reducing DB restore time by 98.8%. Managed 12+ P1 incidents/week as on-call engineer with 99.99% uptime.'
  },
  {
    type: 'work',
    title: 'Software Development Intern',
    company: 'Copart',
    date: 'Aug 2021 - Jan 2022',
    tech: 'React Native, TypeScript, iOS, Android',
    description: 'Developed and scaled React Native apps serving thousands of daily users with 100% feature parity across iOS and Android. Reduced app load times by 40% through lazy loading and image caching.'
  },
  {
    type: 'work',
    title: 'Software Development Intern',
    company: 'AT&T Labs',
    date: 'Jun 2021 - Aug 2021',
    tech: 'PySpark, Python, Data Pipelines',
    description: 'Architected scalable data processing infrastructure for 5G network monitoring. Streamlined pipelines for 100+ TB of data, accelerating processing speed by 30x (15 hours to 30 minutes).'
  },
  {
    type: 'education',
    title: 'M.S. Computer Science',
    company: 'University of Texas at Dallas',
    date: '2020 - 2022',
    tech: '',
    description: 'GPA: 3.82/4.0. Focus on Distributed Systems, Artificial Intelligence, and Cloud Computing.'
  },
  {
    type: 'education',
    title: 'B.E. Computer Engineering',
    company: 'Gujarat Technological University',
    date: '2015 - 2019',
    tech: '',
    description: 'GPA: 8.46/10. Foundation in algorithms, data structures, and software engineering.'
  }
];

// ============================================================
// Certifications Data (matches netflix_portfolio Certifications page)
// ============================================================
const certificationsData = [
  {
    title: 'AWS Certified Solutions Architect - Associate',
    issuer: 'Amazon Web Services',
    date: 'December 2024',
    icon: '&#x2601;'
  }
];

// ============================================================
// Play Netflix TUDUM sound
// ============================================================
function playNetflixSound() {
  const audio = new Audio('netflix-sound.mp3');
  audio.volume = 0.5;
  audio.play().catch(() => {});
}

// ============================================================
// Render Skills Section
// ============================================================
function renderSkills() {
  const container = document.getElementById('skillsContent');
  let html = '';
  Object.keys(skillsData).forEach((category, catIdx) => {
    html += `<div class="skill-category">`;
    html += `<h3 class="category-title" style="animation-delay: ${catIdx * 0.2}s">${category}</h3>`;
    html += `<div class="skills-grid">`;
    skillsData[category].forEach((skill) => {
      const letters = skill.name.split('').map((letter, i) =>
        `<span class="letter" style="animation-delay: ${i * 0.05}s">${letter === ' ' ? '&nbsp;' : letter}</span>`
      ).join('');
      html += `
        <div class="skill-card">
          <h3 class="skill-name">${letters}</h3>
          <p class="skill-description">${skill.description}</p>
        </div>`;
    });
    html += `</div></div>`;
  });
  container.innerHTML = html;
}

// ============================================================
// Render Projects Section
// ============================================================
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = projectsData.map((project, index) => `
    <div class="project-card" style="animation-delay: ${index * 0.1}s">
      <img src="${project.image}" alt="${project.title}" class="project-image" />
      <div class="project-details">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="tech-used">
          ${project.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

// ============================================================
// Render Timeline Section
// ============================================================
function renderTimeline() {
  const container = document.getElementById('timeline');
  let html = '';
  timelineData.forEach((item, index) => {
    const side = index % 2 === 0 ? 'left' : 'right';
    html += `
      <div class="timeline-item ${side} ${item.type}">
        <div class="timeline-item-content">
          <h3>${item.type === 'work' ? item.title : item.company}</h3>
          <h4>${item.type === 'work' ? item.company : item.title}</h4>
          ${item.tech ? `<p class="timeline-tech">${item.tech}</p>` : ''}
          <p>${item.description}</p>
          <span class="timeline-date">${item.date}</span>
        </div>
      </div>`;
  });
  html += `<div class="timeline-star">&#x2605;</div>`;
  container.innerHTML = html;
}

// ============================================================
// Render Certifications Section
// ============================================================
function renderCertifications() {
  const grid = document.getElementById('certificationsGrid');
  grid.innerHTML = certificationsData.map((cert, index) => `
    <div class="certification-card" style="--delay: ${index * 0.2}s">
      <div class="certification-content">
        <div class="certification-icon">${cert.icon}</div>
        <h3>${cert.title}</h3>
        <p>${cert.issuer}</p>
        <span class="issued-date">Issued ${cert.date}</span>
      </div>
      <div class="certification-link-icon">&#x2197;</div>
    </div>
  `).join('');
}

// ============================================================
// Render Top Picks Row
// ============================================================
function renderTopPicks(profile) {
  const picks = topPicksConfig[profile] || topPicksConfig.recruiter;
  document.getElementById('topPicksTitle').textContent = `Today's Top Picks for ${profile}`;
  const container = document.getElementById('topPicksCards');
  container.innerHTML = picks.map((pick, index) => `
    <div class="pick-card" data-target="${pick.target}" style="animation-delay: ${index * 0.2}s">
      <img src="${pick.img}" alt="${pick.title}" class="pick-image" />
      <div class="pick-overlay">
        <div class="pick-label">${pick.title}</div>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.pick-card').forEach(card => {
    card.addEventListener('click', () => {
      const target = document.getElementById(card.dataset.target);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

// ============================================================
// Render Continue Watching Row
// ============================================================
function renderContinueWatching(profile) {
  const items = continueWatchingConfig[profile] || continueWatchingConfig.recruiter;
  document.getElementById('continueWatchingTitle').textContent = `Continue Watching for ${profile}`;
  const container = document.getElementById('continueWatchingCards');
  container.innerHTML = items.map((item) => `
    <div class="cw-card" data-target="${item.target}">
      <img src="${item.img}" alt="${item.title}" class="cw-image" />
      <div class="cw-overlay">
        <div class="cw-label">${item.title}</div>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.cw-card').forEach(card => {
    card.addEventListener('click', () => {
      const target = document.getElementById(card.dataset.target);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

// ============================================================
// Go back to profile selection
// ============================================================
function goBackToProfiles() {
  const mainContent = document.getElementById('mainContent');
  const profileSelection = document.getElementById('profileSelection');

  mainContent.style.opacity = '0';
  mainContent.style.transform = 'scale(0.95)';
  mainContent.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

  setTimeout(() => {
    mainContent.classList.remove('active');
    mainContent.style.display = 'none';
    mainContent.style.opacity = '';
    mainContent.style.transform = '';
    mainContent.style.transition = '';
    profileSelection.style.display = '';
    profileSelection.classList.add('active');
    window.scrollTo(0, 0);
  }, 300);
}

// ============================================================
// Toggle sidebar (mobile hamburger menu)
// ============================================================
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('sidebarOverlay').classList.toggle('open');
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarOverlay').classList.remove('open');
}

// ============================================================
// Initialize
// ============================================================
window.addEventListener('DOMContentLoaded', () => {
  const intro = document.getElementById('netflixIntro');
  const logoElement = document.getElementById('logoElement');
  const profileSelection = document.getElementById('profileSelection');

  // Render static sections
  renderSkills();
  renderProjects();
  renderTimeline();
  renderCertifications();

  // Netflix intro - click to start
  intro.addEventListener('click', () => {
    playNetflixSound();
    logoElement.classList.add('animate');

    setTimeout(() => {
      intro.style.display = 'none';
      profileSelection.classList.add('active');
    }, 3500);
  }, { once: true });

  // Profile selection
  document.querySelectorAll('.profile-card').forEach(card => {
    card.addEventListener('click', () => {
      const profile = card.dataset.profile;
      const bgUrl = card.dataset.bg;
      const data = profileContent[profile];

      // Update banner
      document.getElementById('bannerHeadline').textContent = data.headline;
      document.getElementById('bannerDescription').textContent = data.description;

      // Update about
      document.getElementById('aboutContent').innerHTML = data.aboutContent;

      // Set background GIF on profile page
      document.getElementById('profilePage').style.backgroundImage = `url('${bgUrl}')`;

      // Update profile icon color in navbar
      const profileIcon = document.getElementById('profileIcon');
      const colorMap = { blue: '#1e3a8a, #3b82f6', grey: '#374151, #6b7280', red: '#7f1d1d, #dc2626', yellow: '#78350f, #f59e0b' };
      profileIcon.style.background = `linear-gradient(135deg, ${colorMap[data.profileColor]})`;

      // Render rows
      renderTopPicks(profile);
      renderContinueWatching(profile);

      // Show main content
      profileSelection.classList.remove('active');
      profileSelection.style.display = 'none';
      const mainContent = document.getElementById('mainContent');
      mainContent.classList.add('active');
      window.scrollTo(0, 0);
    });
  });

  // Header scroll effect
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        closeSidebar();
      }
    });
  });

  // "Home" links -> go back to profiles
  document.querySelectorAll('.nav-home').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      closeSidebar();
      goBackToProfiles();
    });
  });

  // Profile icon click -> go back to profiles
  document.getElementById('profileIcon').addEventListener('click', goBackToProfiles);

  // Hamburger menu toggle
  document.getElementById('hamburger').addEventListener('click', toggleSidebar);
  document.getElementById('sidebarOverlay').addEventListener('click', closeSidebar);

  // Sidebar links close sidebar
  document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', () => {
      closeSidebar();
    });
  });
});
