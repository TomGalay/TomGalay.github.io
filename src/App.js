import './App.css';
import { useState } from 'react';

function App() {
  const [activeNav, setActiveNav] = useState('home');

  const scrollToSection = (id) => {
    setActiveNav(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">Isaiah Thomas Galay</div>
          <ul className="nav-menu">
            <li><a href="#home" onClick={() => scrollToSection('home')} className={activeNav === 'home' ? 'active' : ''}>Home</a></li>
            <li><a href="#about" onClick={() => scrollToSection('about')} className={activeNav === 'about' ? 'active' : ''}>About</a></li>
            <li><a href="#experience" onClick={() => scrollToSection('experience')} className={activeNav === 'experience' ? 'active' : ''}>Experience</a></li>
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
          
          <p className="hero-subtitle">Full Stack Developer | Mobile & Web Specialist</p>
          
          <p className="hero-description">
            Transforming ideas into elegant digital solutions. Specializing in scalable web applications, 
            modern mobile development, and enterprise solutions.
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">6+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Technologies</span>
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
              I'm a passionate full-stack developer with expertise in mobile app development, WordPress, and web technologies. 
              With experience working on enterprise-level projects for Australian NDIS organizations and international clients, 
              I bring a blend of technical excellence and problem-solving skills.
            </p>
            <p>
              Currently focused on modernizing Flutter applications while maintaining a strong foundation in WordPress development. 
              I excel at building scalable solutions that integrate multiple technologies and platforms, from REST APIs to cloud services.
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
                  <li>Remade Flutter mobile app from ground up to modernize and improve performance</li>
                  <li>Implemented features: bookings, reports management, and document viewing</li>
                  <li>Integrated Firebase for user authentication and REST APIs for data handling</li>
                  <li>Enhanced web compatibility and platform support</li>
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
                  <li>Developed core business processes for Australian NDIS Organization</li>
                  <li>Built multi-step, multi-form intake system integrated with Firebase and Google products</li>
                  <li>Implemented REST APIs, authentication, validation, rate limiting, and caching</li>
                  <li>Created dashboards for user management, incident reports, and support plans</li>
                  <li>Features: PDF generation, booking system, SMTP, push notifications, SEO</li>
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
                  <li>Implemented modules: login/registration, dashboards, store management, payments</li>
                  <li>Integrated email notifications and matrix management features</li>
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
                  <li>Developed website for International Ophthalmologist symposium</li>
                  <li>Created: login/registration, doctor verification, email notifications</li>
                  <li>Implemented: certificate generator, evaluation forms, admin dashboards</li>
                  <li>Managed website maintenance and hosting via cPanel</li>
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
                  <li>Utilized Jetpack for custom post types and dynamic content</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skills-list">
                <span className="skill-tag">HTML</span>
                <span className="skill-tag">CSS</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">Vue.js</span>
                <span className="skill-tag">Bootstrap</span>
                <span className="skill-tag">Responsive Design</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Backend & Databases</h3>
              <div className="skills-list">
                <span className="skill-tag">PHP</span>
                <span className="skill-tag">WordPress</span>
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">REST APIs</span>
                <span className="skill-tag">Firebase</span>
                <span className="skill-tag">Authentication</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Mobile Development</h3>
              <div className="skills-list">
                <span className="skill-tag">Flutter</span>
                <span className="skill-tag">Mobile UI/UX</span>
                <span className="skill-tag">App Optimization</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Cloud & DevOps</h3>
              <div className="skills-list">
                <span className="skill-tag">Google Cloud Platform</span>
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">Azure</span>
                <span className="skill-tag">Firebase</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Tools & Platforms</h3>
              <div className="skills-list">
                <span className="skill-tag">Elementor</span>
                <span className="skill-tag">Bricks</span>
                <span className="skill-tag">Divi</span>
                <span className="skill-tag">Jetpack</span>
                <span className="skill-tag">cPanel</span>
                <span className="skill-tag">API Integration</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Google Services</h3>
              <div className="skills-list">
                <span className="skill-tag">Google Sheets</span>
                <span className="skill-tag">Google Maps</span>
                <span className="skill-tag">Google Drive</span>
                <span className="skill-tag">Google Messaging</span>
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
              <p className="achievement">✓ Graduated Summa Cum Laude</p>
              <p className="achievement">✓ Internal Vice President of Junior Philippine Computer Society (JPCS)</p>
              <p className="achievement">✓ Active participant in programming competitions</p>
            </div>

            <div className="awards-section">
              <h3>Awards & Recognition</h3>
              <div className="awards-list">
                <div className="award-item">
                  <div className="award-icon">🏆</div>
                  <div className="award-content">
                    <h4>Most Outstanding ITE Student</h4>
                    <p>Philippine Society of Information Technology Educators (PSITE) · 2022</p>
                  </div>
                </div>
                <div className="award-item">
                  <div className="award-icon">⭐</div>
                  <div className="award-content">
                    <h4>Academic Excellence Award</h4>
                    <p>Junior Philippine Computer Society (JPCS) · 2022</p>
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
        <p>&copy; 2026 Isaiah Thomas Galay. All rights reserved. | Full Stack Developer | Mobile & Web Specialist</p>
      </footer>
    </div>
  );
}

export default App;
