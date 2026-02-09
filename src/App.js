import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [activeNav, setActiveNav] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Scroll animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach((section) => {
      if (section.id !== 'home') {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    setActiveNav(id);
    setMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">Isaiah Thomas Galay</div>
          <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={() => scrollToSection('home')} className={activeNav === 'home' ? 'active' : ''}>Home</a></li>
            <li><a href="#about" onClick={() => scrollToSection('about')} className={activeNav === 'about' ? 'active' : ''}>About</a></li>
            <li><a href="#experience" onClick={() => scrollToSection('experience')} className={activeNav === 'experience' ? 'active' : ''}>Experience</a></li>
            <li><a href="#projects" onClick={() => scrollToSection('projects')} className={activeNav === 'projects' ? 'active' : ''}>Projects</a></li>
            <li><a href="#skills" onClick={() => scrollToSection('skills')} className={activeNav === 'skills' ? 'active' : ''}>Skills</a></li>
            <li><a href="#education" onClick={() => scrollToSection('education')} className={activeNav === 'education' ? 'active' : ''}>Education</a></li>
            <li><a href="#contact" onClick={() => scrollToSection('contact')} className={activeNav === 'contact' ? 'active' : ''}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        {/* Animated background elements */}
        <div className="hero-bg-elements">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
          <div className="animated-lines">
            <svg viewBox="0 0 1200 600" preserveAspectRatio="none">
              <polyline points="0,200 150,150 300,200 450,100 600,180 750,130 900,190 1050,140 1200,200" 
                        className="line-1" fill="none" stroke="rgba(152, 215, 220, 0.15)" strokeWidth="2"/>
              <polyline points="0,350 120,300 240,330 360,280 480,320 600,270 720,310 840,260 960,300 1080,250 1200,290" 
                        className="line-2" fill="none" stroke="rgba(152, 215, 220, 0.1)" strokeWidth="2"/>
            </svg>
          </div>
          <div className="tech-dots">
            <span className="dot dot-1"></span>
            <span className="dot dot-2"></span>
            <span className="dot dot-3"></span>
            <span className="dot dot-4"></span>
            <span className="dot dot-5"></span>
          </div>
        </div>

        <div className="hero-content">
          <div className="hero-label">Welcome to my portfolio</div>
          
          <h1 className="hero-title">
            <span className="title-word">Isaiah</span>
            <span className="title-word">Thomas</span>
            <span className="title-highlight">Galay</span>
          </h1>
          
          <p className="hero-subtitle">Full Stack Developer | Web and Mobile Developer</p>
          
          <p className="hero-description">
            Are you looking to streamline your processes? Automate your work functions? Modernize your business through web development with excellent quality and reliability?
			Let's connect and take your digital footprint to the next level!
		  </p>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-label" style={{fontSize: '1.2rem', fontWeight: '600'}}>Full Stack Expertise</span>
            </div>
            <div className="stat-item">
              <span className="stat-label" style={{fontSize: '1.2rem', fontWeight: '600'}}>Cross-Platform Development</span>
            </div>
          </div>

          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
              <span>Get In Touch</span>
              <span className="btn-arrow">→</span>
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('experience')}>
              <span>View My Work</span>
              <span className="btn-arrow">↓</span>
            </button>
          </div>

          <div className="hero-scroll">
            <span>Scroll to explore</span>
            <div className="scroll-indicator">
              <span></span>
            </div>
          </div>
        </div>

        {/* Tech icons floating */}
        <div className="tech-icons">
          <div className="tech-icon icon-1">
            <span>{ }</span>
          </div>
          <div className="tech-icon icon-2">
            <span>&lt;/&gt;</span>
          </div>
          <div className="tech-icon icon-3">
            <span>◆</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-content">
            <p>
              I'm a passionate full stack developer with expertise in WordPress with a focus on custom PHP and javascript solutions and mobile development with Flutter. 
			</p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <h2>Work Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Mobile Developer</h3>
                <p className="company">Mycarehub · Remote</p>
                <p className="date">Nov 2025 – Present</p>
                <ul>
                  <li>Remade the flutter mobile app almost from scratch to modernize, improve performance, and add make it more compatible with the web</li>
                  <li>Implemented features: bookings, reports management, and document viewing</li>
                  <li>Integrated Firebase for user authentication and REST APIs for data handling</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>WordPress Developer</h3>
                <p className="company">Mycarehub · Remote</p>
                <p className="date">Nov 2023 – Present</p>
                <ul>
                  <li>Developed core business processes for an Australian NDIS Organization</li>
                  <li>Built multi-step, multi-form intake system integrated with Firebase and Google products</li>
                  <li>Implemented REST APIs, authentication, validation, rate limiting, and caching</li>
                  <li>Created multiple dashboards for managing users, reports for incidents/complaints/feedback, and other crucial information such as support plans</li>
                  <li>Other features: automated PDF generation for documents, booking system, SMTP and emails for announcements and automated reminders, SEO, push notifications for mobile</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>WordPress Developer</h3>
                <p className="company">Freelance · Remote</p>
                <p className="date">May 2023 – Aug 2023</p>
                <ul>
                  <li>Developed matrix-based multilevel marketing system with e-commerce storefront</li>
                  <li>Implemented modules: user and membership management, store management, product and inventory management, matrix management, payments, and PayMongo integration</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Lead Developer</h3>
                <p className="company">Freelance · Remote</p>
                <p className="date">Mar 2023 – Apr 2023</p>
                <ul>
                  <li>Deployed a website for an international Ophthalmologist conference/symposium of more than 2500 registrants</li>
                  <li>Created systems for login and registration, profile and account management, PayPal and PayMongo integration, abstract submission and management, admin dashboards, and email notifications</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Web Developer Intern</h3>
                <p className="company">Qadra Studio & JLCG · Remote</p>
                <p className="date">Apr 2022 – Dec 2022</p>
                <ul>
                  <li>Created responsive web pages for WordPress websites using Elementor and Bricks</li>
                  <li>Translated Figma designs into functional web pages</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2>Projects & Showcases</h2>
          <p className="section-subtitle">My works created on personal time or for academic purposes</p>

          <div className="projects-grid featured">
            {/* Featured Projects */}
            <div className="project-card featured-project">
              <div className="project-image">
                <img src="/projects/CryptSim.webp" alt="CryptSim" />
                <div className="project-overlay">
                  <a href="https://www.youtube.com/watch?v=FqipOo7wO6k" target="_blank" rel="noopener noreferrer" className="project-link">
                    View Demo
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3>CryptSim</h3>
                <p className="project-description">
                  An advanced cryptocurrency trading simulator for mobile devices. Our Capstone Project; Won Best Research in Eureka 2022. I mainly developed the login/registration and profiles but also helped on the trading, transaction, and backtesting modules with Kotlin. I managed the mySQL database hosted in Azure. I created APIs to connect the cloud database and mobile application/admin website using nodeJS in Microsoft Serverless Functions.
                </p>
                <div className="project-tags">
                  <span className="tag">Android</span>
                  <span className="tag">Kotlin</span>
                  <span className="tag">nodeJS</span>
                  <span className="tag">Azure</span>
                  <span className="tag">mySQL</span>
                </div>
              </div>
            </div>

            <div className="project-card featured-project">
              <div className="project-image">
                <img src="/projects/Chronicles.webp" alt="Chronicles of Elijah" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="/chronicles-of-elijah/StartUp.html" target="_blank" rel="noopener noreferrer" className="project-link">
                      Play Game
                    </a>
                    <a href="https://github.com/TomGalay/Chronicles-of-Elijah" target="_blank" rel="noopener noreferrer" className="project-link">
                      View Code
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>Chronicles of Elijah</h3>
                <p className="project-description">
                  I created a turn-based RPG game with three levels and with random monster encounters with a boss monster for each level. I used classes to create and control the user and enemy entities with their levels and attributes. Functions were used for most of the mechanics of the game as well as the animations and audio. XP gain, XP requirements, and gold gain are scaled using a custom formula.
                </p>
                <div className="project-tags">
                  <span className="tag">HTML</span>
                  <span className="tag">CSS</span>
                  <span className="tag">JS</span>
                  <span className="tag">jQuery</span>
                </div>
              </div>
            </div>

            <div className="project-card featured-project">
              <div className="project-image">
                <img src="/projects/Vapour.webp" alt="Vapour" />
                <div className="project-overlay">
                  <a href="https://github.com/TomGalay/Vapour" target="_blank" rel="noopener noreferrer" className="project-link">
                    View Code
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3>Vapour.</h3>
                <p className="project-description">
                  I created a video game digital distribution platform in a Web Development subject. On frontend development, I helped in creating the market, library, and purchase modules. For the backend, I helped in developing the login/registration, purchase/add to library process, and error validations
                </p>
                <div className="project-tags">
                  <span className="tag">HTML</span>
                  <span className="tag">CSS</span>
                  <span className="tag">PHP</span>
                  <span className="tag">mySQL</span>
                </div>
              </div>
            </div>
          </div>

          <div className="other-projects">
            <h3>Other Learning Projects</h3>
            <p className="projects-subtitle">Additional projects I've created for learning and skill development</p>
            
            <div className="projects-grid other">
              <div className="project-card other-project">
                <div className="project-image">
                  <img src="/projects/Portfolio-first.webp" alt="Portfolio V1" />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href="https://github.com/TomGalay/TomGalay.github.io" target="_blank" rel="noopener noreferrer" className="project-link">Github</a>
                      <a href="https://isaiahgalay.github.io/" target="_blank" rel="noopener noreferrer" className="project-link">View</a>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h4>Portfolio</h4>
                  <p>My first portfolio created with HTML, CSS, and JS for animations.</p>
                  <div className="project-tags">
                    <span className="tag small">HTML</span>
                    <span className="tag small">CSS</span>
                    <span className="tag small">JS</span>
                  </div>
                </div>
              </div>

              <div className="project-card other-project">
                <div className="project-image">
                  <img src="/projects/Laragigs.webp" alt="Laragigs" />
                  <div className="project-overlay">
                    <a href="https://github.com/TomGalay/Laragigs" target="_blank" rel="noopener noreferrer" className="project-link">Github</a>
                  </div>
                </div>
                <div className="project-content">
                  <h4>Laragigs</h4>
                  <p>Job listing platform with login, registration, and CRUD functions for job listings, category filters.</p>
                  <div className="project-tags">
                    <span className="tag small">Laravel</span>
                    <span className="tag small">PHP</span>
                  </div>
                </div>
              </div>

              <div className="project-card other-project">
                <div className="project-image">
                  <img src="/projects/WordPress-Demo.webp" alt="WordPress Demo" />
                  <div className="project-overlay">
                    <a href="https://github.com/TomGalay/wordpress-demo" target="_blank" rel="noopener noreferrer" className="project-link">Github</a>
                  </div>
                </div>
                <div className="project-content">
                  <h4>WordPress Demo</h4>
                  <p>WordPress site with custom plugin and themes. Features registration with profiles and admin dashboard.</p>
                  <div className="project-tags">
                    <span className="tag small">WordPress</span>
                    <span className="tag small">PHP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2>Technical Skills</h2>
          <div className="skills-container">
            <div className="skill-category-card languages">
              <div className="category-header">
                <div className="category-icon">&lt;&gt;</div>
                <h3>Languages & Markup</h3>
              </div>
              <div className="skills-list">
                <span className="skill-tag">HTML</span>
                <span className="skill-tag">CSS</span>
                <span className="skill-tag">JS</span>
                <span className="skill-tag">PHP</span>
                <span className="skill-tag">Sass</span>
              </div>
            </div>

            <div className="skill-category-card frontend">
              <div className="category-header">
                <div className="category-icon">◇</div>
                <h3>Frontend Frameworks</h3>
              </div>
              <div className="skills-list">
                <span className="skill-tag">Vue</span>
                <span className="skill-tag">Tailwind</span>
                <span className="skill-tag">Bootstrap</span>
              </div>
            </div>

            <div className="skill-category-card backend">
              <div className="category-header">
                <div className="category-icon">⚙</div>
                <h3>Backend & CMS</h3>
              </div>
              <div className="skills-list">
                <span className="skill-tag">WordPress</span>
                <span className="skill-tag">Laravel</span>
                <span className="skill-tag">REST APIs</span>
              </div>
            </div>

            <div className="skill-category-card database">
              <div className="category-header">
                <div className="category-icon">▬</div>
                <h3>Databases</h3>
              </div>
              <div className="skills-list">
                <span className="skill-tag">MySQL</span>
              </div>
            </div>

            <div className="skill-category-card mobile">
              <div className="category-header">
                <div className="category-icon">◻</div>
                <h3>Mobile Development</h3>
              </div>
              <div className="skills-list">
                <span className="skill-tag">Flutter</span>
              </div>
            </div>

            <div className="skill-category-card cloud">
              <div className="category-header">
                <div className="category-icon">▲</div>
                <h3>Cloud & Services</h3>
              </div>
              <div className="skills-list">
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">GCP</span>
                <span className="skill-tag">Google Apps</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education">
        <div className="container">
          <h2>Education & Achievements</h2>
          <div className="education-content">
            <div className="education-item">
              <h3>BS Information Technology</h3>
              <p className="school">Far Eastern University (FEU) Alabang</p>
              <p className="location">Muntinlupa, Philippines</p>
              <p className="date">2018 – 2022</p>
              <p className="highlight">Specialization: Web and Mobile Applications</p>
              <p className="achievement">Graduated Summa Cum Laude</p>
              <p className="achievement">Internal Vice President of Junior Philippine Computer Society (JPCS)</p>
              <p className="achievement">Active participant in programming competitions</p>
            </div>

            <div className="awards-section">
              <h3>Awards & Recognition</h3>
              <div className="awards-list">
                <div className="award-item">
                  <div className="award-icon">🏆</div>
                  <div className="award-content">
                    <h4>Summa Cum Laude</h4>
                    <p>Issued by FEU Alabang · Jan 2023</p>
                    <a href="https://www.facebook.com/FEUAlabang/photos/a.1304249696289861/5460492983998824/" target="_blank" rel="noopener noreferrer" className="view-link">View</a>
                  </div>
                </div>
                <div className="award-item">
                  <div className="award-icon">⭐</div>
                  <div className="award-content">
                    <h4>Academic Excellence Award</h4>
                    <p>Issued by Junior Philippine Computer Society (JPCS) · Aug 2022</p>
                    <a href="https://www.facebook.com/FEUAlabang/photos/a.1304249696289861/5460492983998824/" target="_blank" rel="noopener noreferrer" className="view-link">View</a>
                  </div>
                </div>
                <div className="award-item">
                  <div className="award-icon">🎖</div>
                  <div className="award-content">
                    <h4>Most Outstanding ITE Student</h4>
                    <p>Philippine Society of Information Technology Educators (PSITE) - NCR · Jun 2022</p>
                    <a href="https://www.facebook.com/FEUAlabang/posts/tamaraw-spotlight-congratulations-to-our-bsit-wma-student-isaiah-thomas-a-galay-/5346110262103764/?paipv=0&eav=AfbtE0EuiMMTtPbJl1VL0-HkkwxQeNTenjL55aQMxfDipn_BGyZgas7ilUynrZh_Zhg&_rdr" target="_blank" rel="noopener noreferrer" className="view-link">View</a>
                  </div>
                </div>
                <div className="award-item">
                  <div className="award-icon">📚</div>
                  <div className="award-content">
                    <h4>Best Research</h4>
                    <p>Issued by FEU Alabang · Aug 2022</p>
                    <a href="https://www.facebook.com/Eureka2022/posts/pfbid0xSqN8hugqB3RwYx3PWAYtMVaTbBYFPnV9aTfc4MueuizXSYBC4BoTWX6fzdZ4eqnl" target="_blank" rel="noopener noreferrer" className="view-link">View</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="competitions-section">
              <h3>Competitions</h3>
              <div className="competitions-list">
                <div className="award-item">
                  <div className="award-icon">🥇</div>
                  <div className="award-content">
                    <h4>Microsoft Azure Fundamentals Challenge</h4>
                    <p>(Microsoft Cloud Skills Challenge 2021) · Champion</p>
                    <a href="https://www.facebook.com/FEUAlabang/posts/pfbid038M4S1smQvnA2BqsG5w5dAv4KQJPpQfymBivm8qLk244Qfn48wGYjzwZnY2kZFF6pl" target="_blank" rel="noopener noreferrer" className="view-link">View</a>
                  </div>
                </div>
                <div className="award-item">
                  <div className="award-icon">🥇</div>
                  <div className="award-content">
                    <h4>Ideathon Competition 2021</h4>
                    <p>UP Cursor's Computer Science Summit · Champion</p>
                    <a href="https://www.facebook.com/JPCSFEUA/posts/pfbid02TbBuBbhN8o1hwFcHVpz2Rqo1UXPeEQ3vLKQuTapMFrg9oD6s5CEVtmmX8Hhheoiyl" target="_blank" rel="noopener noreferrer" className="view-link">View</a>
                  </div>
                </div>
                <div className="award-item">
                  <div className="award-icon">🥇</div>
                  <div className="award-content">
                    <h4>Java Programming Competition</h4>
                    <p>10th IT Skills Olympics 2021 · Champion</p>
                    <a href="https://www.facebook.com/FEUAlabang/photos/basw.AbraUoWYpgNEpr7Tv2bRu-gzPx16ebXrGPwCQHTfo1qMWySghGGr3qoHc7dMWW-bka-zstVQQt-gwy0-ni75snKyi7BgW1mHHRQb3ln3Sb5tODDQddN91gzeO2I5n9wDzIcyIzdXEXoCKI2ocqNx3hrl/4514163658631766/?opaqueCursor=AbqpxaGd-bs2C3IMDLTjz4pRE1flzClY2dgjjxYa5k0DRi5c7ZQv_VA4wXGjqsQGOERPvtZRw8jKPrg_p35SnT2NVhgKlGHUFarvPrMh11jZLnTBKaa0TS7rr7IjVLZLw9dcjAaQgQU10Z51U2m0ypElbQoFsq_ji38AzKkWWPD9m3o3dtKXr87Os8-lLF0QjHg88p5DSKEqN3WgZzHqJDeRFTgQf364A-DY5x8dzV-lX83PKoc_V0L3ZiR6UneE69kRB8pcVtl1E96S2mV04mqz_GW40OYowvS_uyfPqGKEDXysEE7IaZi7GBVRD0oj82HTs8UaWGfM_lSSGvPAFworgh2ybUcTnmJxlMh3mWV5w9karl45rf13PwEJ_eq4F2ejkHyK8mjRwey6XoBKHfJKsxYBFXfeufQpYMI4VqLX7AxS6DcTsIJ8AFSlZtcWFekGRxFZHNhrYebkJ8U3-DdRcYq_b-aCmBtL8Hlwcq_58u_DGb9xLqXuFI7Vrb3SyTBNI6-a5XGFEffII_bAc0qspjRxgO7OR1h9Lglz_uecAn4weKUGMilpiiw7HZC-7VN-C7sfgk1aTgOK40OkK9BTF5vKZAUOZHWbnQ6bHm1JasyjbGijTxggdkBAP800katYCXGdNvfY-4dPr_yk1jBMJQ-yPG6NDnMtg5Fh_6RM6tA5ZcXp9Cc2FQ_g8m6r450m3YaBWxYSBWw0BYsRUgfG3lvqv6YSxDQTfmUaTlIEhQ" target="_blank" rel="noopener noreferrer" className="view-link">View</a>
                  </div>
                </div>
                <div className="award-item">
                  <div className="award-icon">🥇</div>
                  <div className="award-content">
                    <h4>Young Software Engineering Coding Competition</h4>
                    <p>UP Los Banos, 2021 · Champion</p>
                    <a href="https://feualabang.edu.ph/features/feu-alabang-continues-to-charge-further-emerges-as-new-champions-in-local-coding-competition" target="_blank" rel="noopener noreferrer" className="view-link">View</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="organizations-section">
              <h3>Organizations</h3>
              <div className="organizations-list">
                <div className="award-item">
                  <div className="award-icon">👥</div>
                  <div className="award-content">
                    <h4>Vice President · 2018 – 2020</h4>
                    <p>Junior Philippine Computer Society</p>
                  </div>
                </div>
                <div className="award-item">
                  <div className="award-icon">🎨</div>
                  <div className="award-content">
                    <h4>Creatives Member · 2019 – 2020</h4>
                    <p>Tertiary Honor Society</p>
                  </div>
                </div>
                <div className="award-item">
                  <div className="award-icon">💻</div>
                  <div className="award-content">
                    <h4>Member · 2018 – 2020</h4>
                    <p>Association of Computing Machinery</p>
                  </div>
                </div>
                <div className="award-item">
                  <div className="award-icon">🔧</div>
                  <div className="award-content">
                    <h4>Member · 2019 – 2020</h4>
                    <p>Google Developers Student Club</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Let's Connect</h2>
          <p className="contact-intro">I'm always open to new opportunities and interesting projects. Feel free to reach out!</p>
          <div className="contact-info">
            <div className="contact-item">
              <h3>Email</h3>
              <a href="mailto:tomgalay@gmail.com">tomgalay@gmail.com</a>
            </div>
            <div className="contact-item">
              <h3>Phone</h3>
              <a href="tel:+639568313208">+63 956 831 3208</a>
            </div>
            <div className="contact-item">
              <h3>Location</h3>
              <p>Sta. Rosa, Laguna, Philippines</p>
            </div>
          </div>
          <div className="social-links">
            <a href="https://linkedin.com/in/tomgalay" target="_blank" rel="noopener noreferrer" className="social-btn">LinkedIn</a>
            <a href="https://github.com/tomgalay" target="_blank" rel="noopener noreferrer" className="social-btn">GitHub</a>
            <a href="mailto:tomgalay@gmail.com" className="social-btn">Email</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 Isaiah Thomas Galay. All rights reserved. | WordPress | Web and Mobile Developer</p>
      </footer>
    </div>
  );
}

export default App;
