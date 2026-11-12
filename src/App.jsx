import './App.css'
import profile from './assets/profile.jpeg'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { Typewriter } from 'react-simple-typewriter'
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiBootstrap,
  SiPhp,
  SiLaravel,
  SiDjango,
  SiNodedotjs,
  SiPython,
  SiC,
  SiCplusplus,
  SiMysql,
  SiGit,
  SiGithub,
} from 'react-icons/si'

import kalindeeHome from './assets/kalindee-home.png';
import kalindeeProducts from './assets/kalindee-products.png';
import kalindeeCart from './assets/kalindee-cart.png';

import foodHome from './assets/food-home.png';
import foodMenu from './assets/food-menu.png';
import foodCart from './assets/food-cart.png';

import React, { useState } from 'react';

import frontendNielit from './assets/frontend-nielit.png';
import pythonTraining from './assets/python-training.png';
import pythonTopper from './assets/python-ai-topper.png';
import pythonScholiverse from './assets/python-scholiverse.png';
import generativeAI from './assets/generative-ai.png';
import customerCare from './assets/customer-care.png';
import aiCyberSecurity from './assets/AI-and-cyber-cecurity.png';
import resumePDF from './assets/Sachchidanand-Resume.pdf';

function App() {

  const [activeImage, setActiveImage] = useState(null);
  const [activeCertificate, setActiveCertificate] = useState(null);

  return (
    <>
      {/* Navigation Bar */}
      <header className="navbar">
        <div className="logo">
          <a href="#home" className="footer-logo">
            {"{ "}Sachchi<span>.dev</span>{" }"}
          </a>
        </div>

        <nav className="nav-links">
          <a href="#home" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#certificates">Certificates</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="menu-btn">☰</button>
      </header>

      {/* Hero Section */}
      <main>
        <section id="home" className="hero">

          {/* Left Content */}
          <div className="hero-content">

            <p className="welcome-text">
              WELCOME TO MY PORTFOLIO
            </p>

            <h1>
              Hi, I'm <span>Sachchidanand</span>
            </h1>

            <h2>
              I'm a <span className="typing-text">
                <Typewriter
                  words={[
                    'Full Stack Developer',
                    'Web Developer',
                    'React.js Developer',
                    'Software Developer',
                    'PHP|Laravel Developer'
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h2>

            <p className="hero-description">
              I am a passionate Web Developer and Computer Science
              student. I enjoy building modern, responsive and
              user-friendly web applications.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-btn">
                View My Work
              </a>

              <a href="#contact" className="secondary-btn">
                Contact Me
              </a>
            </div>

            <div className="social-links">

              <a
                href="https://github.com/Sachchidanand-19"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/sachchida-nand-a28134427"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.instagram.com/sachchi.dev/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

            </div>

          </div>

          {/* Right Profile Image */}
          <div className="hero-image">
            <div className="image-glow">
              <img src={profile} alt="Sachchidanand Profile" />
            </div>
          </div>

        </section>

        {/* About Section */}
        <section id="about" className="about-section">

          <div className="section-heading">
            <p>GET TO KNOW ME</p>
            <h2>About <span>Me</span></h2>
            <div className="heading-line"></div>
          </div>

          <div className="about-container">

            {/* About Content */}
            <div className="about-content">

              <h3>
                I'm Sachchidanand, a
                <span> Passionate Developer</span>
              </h3>

              <p>
                I am a Computer Science and Engineering student
                with a strong interest in Full-Stack Web Development and
                Software Development.
              </p>

              <p>
                I enjoy creating modern, responsive and
                user-friendly web applications using technologies
                like HTML, CSS, JavaScript, React.js and backend
                technologies.
              </p>

              <p>
                I continuously work on improving my programming
                skills, learning new technologies and building
                practical projects. My goal is to become a skilled
                Full Stack Developer and contribute to real-world
                software projects.
              </p>

              <a href="#contact" className="primary-btn">
                Let's Connect
              </a>

            </div>

            {/* About Information Cards */}
            <div className="about-cards">

              <div className="about-card">
                <div className="about-card-icon">🎓</div>
                <h3>Education</h3>
                <p>Computer Science & Engineering</p>
                <span>Diploma Student</span>
              </div>

              <div className="about-card">
                <div className="about-card-icon">💻</div>
                <h3>Development</h3>
                <p>Frontend & Backend</p>
                <span>Web Development</span>
              </div>

              <div className="about-card">
                <div className="about-card-icon">🚀</div>
                <h3>Career Goal</h3>
                <p>Full Stack Developer</p>
                <span>Continuous Learning</span>
              </div>

              <div className="about-card">
                <div className="about-card-icon">📍</div>
                <h3>Location</h3>
                <p>Azamgarh</p>
                <span>Uttar Pradesh, India</span>
              </div>

            </div>

          </div>

        </section>

        {/* Skills Section */}
        <section id="skills" className="skills-section">

          <div className="section-heading">
            <p>MY TECHNICAL EXPERTISE</p>
            <h2>My <span>Skills</span></h2>
            <div className="heading-line"></div>
          </div>

          <div className="skills-container">

            {/* Frontend */}
            <div className="skill-category">
              <h3>Frontend Development</h3>

              <div className="skills-grid">
                <div className="skill-card">
                  <SiHtml5 className="skill-icon html-icon" />
                  <h4>HTML5</h4>
                </div>

                <div className="skill-card">
                  <SiCss className="skill-icon css-icon" />
                  <h4>CSS3</h4>
                </div>

                <div className="skill-card">
                  <SiJavascript className="skill-icon js-icon" />
                  <h4>JavaScript</h4>
                </div>

                <div className="skill-card">
                  <SiReact className="skill-icon react-icon" />
                  <h4>React.js</h4>
                </div>

                <div className="skill-card">
                  <SiNextdotjs className="skill-icon next-icon" />
                  <h4>Next.js</h4>
                </div>

                <div className="skill-card">
                  <SiBootstrap className="skill-icon bootstrap-icon" />
                  <h4>Bootstrap</h4>
                </div>
              </div>
            </div>

            {/* Backend */}
            <div className="skill-category">
              <h3>Backend Development</h3>

              <div className="skills-grid">
                <div className="skill-card">
                  <SiPhp className="skill-icon php-icon" />
                  <h4>PHP</h4>
                </div>

                <div className="skill-card">
                  <SiLaravel className="skill-icon laravel-icon" />
                  <h4>Laravel</h4>
                </div>

                <div className="skill-card">
                  <SiDjango className="skill-icon django-icon" />
                  <h4>Django</h4>
                </div>

                <div className="skill-card">
                  <SiNodedotjs className="skill-icon node-icon" />
                  <h4>Node.js</h4>
                </div>
              </div>
            </div>

            {/* Programming */}
            <div className="skill-category">
              <h3>Programming Languages</h3>

              <div className="skills-grid">
                <div className="skill-card">
                  <SiPython className="skill-icon python-icon" />
                  <h4>Python</h4>
                </div>

                <div className="skill-card">
                  <span className="skill-text-icon">JAVA</span>
                  <h4>Java</h4>
                </div>

                <div className="skill-card">
                  <SiC className="skill-icon c-icon" />
                  <h4>C</h4>
                </div>

                <div className="skill-card">
                  <SiCplusplus className="skill-icon cpp-icon" />
                  <h4>C++</h4>
                </div>
              </div>
            </div>

            {/* Database and Tools */}
            <div className="skill-category">
              <h3>Database & Tools</h3>

              <div className="skills-grid">
                <div className="skill-card">
                  <SiMysql className="skill-icon mysql-icon" />
                  <h4>MySQL</h4>
                </div>

                <div className="skill-card">
                  <SiGit className="skill-icon git-icon" />
                  <h4>Git</h4>
                </div>

                <div className="skill-card">
                  <SiGithub className="skill-icon github-icon" />
                  <h4>GitHub</h4>
                </div>

                <div className="skill-card">
                  <span className="skill-text-icon vscode-text">VS</span>
                  <h4>VS Code</h4>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="education-section">

          <div className="section-heading">
            <h2>My Education</h2>
            <p>My academic background and learning journey</p>
          </div>

          <div className="education-container">

            {/* Diploma */}
            <div className="education-card">
              <div className="education-icon">🎓</div>
              <span className="education-year">2024 – Present</span>
              <h3>Diploma in Computer Science & Engineering</h3>
              <h4>Government Polytechnic, Mau</h4>
              <p>Board: BTEUP</p>
              <span className="education-status">3rd Year Ongoing</span>
            </div>

            {/* B.Sc. */}
            <div className="education-card">
              <div className="education-icon">📚</div>
              <span className="education-year">2024</span>
              <h3>B.Sc. Mathematics & Physics</h3>
              <h4>Maharaja Suhel Dev State University, Azamgarh</h4>
              <p>First Division</p>
              <span className="education-status">CGPA: 7.98</span>
            </div>

            {/* Intermediate */}
            <div className="education-card">
              <div className="education-icon">📖</div>
              <span className="education-year">2021</span>
              <h3>Intermediate (Science)</h3>
              <h4>Shibli National Inter College, Azamgarh</h4>
              <p>Board: UP Board</p>
              <span className="education-status">Completed</span>
            </div>

            {/* High School */}
            <div className="education-card">
              <div className="education-icon">🏫</div>
              <span className="education-year">2019</span>
              <h3>High School</h3>
              <h4>Navneet International School of Science, Tahirpur, Azamgarh</h4>
              <p>Board: CBSE</p>
              <span className="education-status">Completed</span>
            </div>

          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="certificates-section">

          <div className="section-heading">
            <h2>My Certificates</h2>
            <p>Professional certifications and achievements</p>
          </div>

          <div className="certificates-container">

            {[
              {
                image: frontendNielit,
                year: '2026',
                title: 'Front-End Development',
                institute: 'NIELIT Virtual Academy',
                detail: 'Self-Paced Course · 30 Hours',
                grade: 'Grade S'
              },
              {
                image: pythonTraining,
                year: '2025',
                title: 'Programming in Python with AI',
                institute: 'Internshala Trainings',
                detail: '6-Week Online Training',
                grade: '95% · Top Performer'
              },
              {
                image: pythonScholiverse,
                year: '2025',
                title: 'Programming with Python',
                institute: 'Scholiverse Educare Private Limited',
                detail: 'Python Programming Training',
                grade: 'Grade A'
              },
              {
                image: generativeAI,
                year: '2026',
                title: 'Generative AI Essentials',
                institute: 'TCS iON / TCS Foundation',
                detail: 'Artificial Intelligence',
                grade: 'Completed'
              },
              {
                image: aiCyberSecurity,
                year: '2026',
                title: 'AI and Cybersecurity Awareness',
                institute: 'TCS iON / TCS Foundation',
                detail: 'AI & Cybersecurity Awareness',
                grade: 'Completed'
              },
              {
                image: customerCare,
                year: '2026',
                title: 'Customer Care Executive',
                institute: 'Skill India Digital Hub',
                detail: 'Domestic – Non-Voice',
                grade: 'Completed'
              }
            ].map((certificate, index) => (

              <div className="certificate-card" key={index}>

                <div
                  className="certificate-image-box"
                  onClick={() =>
                    certificate.image &&
                    setActiveCertificate(certificate.image)
                  }
                >
                  {certificate.image ? (
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="certificate-image"
                    />
                  ) : (
                    <div className="certificate-image-placeholder">
                      🔐
                      <span>Certificate Image</span>
                    </div>
                  )}

                  {certificate.image && (
                    <span className="certificate-view-text">
                      Click to Preview
                    </span>
                  )}
                </div>

                <div className="certificate-info">
                  <span className="certificate-year">
                    {certificate.year}
                  </span>

                  <h3>{certificate.title}</h3>
                  <h4>{certificate.institute}</h4>
                  <p>{certificate.detail}</p>

                  <span className="certificate-grade">
                    {certificate.grade}
                  </span>
                </div>

              </div>

            ))}

          </div>

          {/* Certificate Full Screen Preview */}
          {activeCertificate && (
            <div
              className="certificate-modal"
              onClick={() => setActiveCertificate(null)}
            >
              <button
                className="certificate-modal-close"
                onClick={() => setActiveCertificate(null)}
              >
                &times;
              </button>

              <img
                src={activeCertificate}
                alt="Certificate Preview"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}

        </section>

        {/* Projects Section */}
        <section id="projects" className="projects-section">
          <div className="section-heading">
            <h2>My Projects</h2>
            <p>Some of the projects I have worked on</p>
          </div>

          <div className="projects-container">

            {/* Project 1 */}
            <div className="project-card">
              <img
                src={kalindeeHome}
                alt="Kalindee-Mart Homepage"
                className="project-image"
              />

              <div className="project-gallery">
                <img
                  src={kalindeeHome}
                  alt="Kalindee-Mart Home"
                  onClick={() => setActiveImage(kalindeeHome)}
                />

                <img
                  src={kalindeeProducts}
                  alt="Kalindee-Mart Products"
                  onClick={() => setActiveImage(kalindeeProducts)}
                />

                <img
                  src={kalindeeCart}
                  alt="Kalindee-Mart Cart"
                  onClick={() => setActiveImage(kalindeeCart)}
                />
              </div>

              <div className="project-content">
                <span className="project-number">01</span>
                <h3>Kalindee-Mart</h3>
                <p className="project-type">Full Stack E-commerce Website</p>

                <p>
                  A responsive e-commerce platform with product management,
                  user authentication, shopping cart, wishlist and order
                  management features.
                </p>

                <div className="project-tech">
                  <span>React.js</span>
                  <span>Laravel</span>
                  <span>PHP</span>
                  <span>MySQL</span>
                  <span>REST API</span>
                </div>

                <span className="private-label">
                  Private Repository
                </span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card">
              <img
                src={foodHome}
                alt="Kalindi Food Delivery Homepage"
                className="project-image"
              />

              <div className="project-gallery">
                <img
                  src={foodHome}
                  alt="Food Delivery Home"
                  onClick={() => setActiveImage(foodHome)}
                />

                <img
                  src={foodMenu}
                  alt="Food Delivery Menu"
                  onClick={() => setActiveImage(foodMenu)}
                />

                <img
                  src={foodCart}
                  alt="Food Delivery Cart"
                  onClick={() => setActiveImage(foodCart)}
                />
              </div>

              <div className="project-content">
                <span className="project-number">02</span>
                <h3>Kalindi Food Delivery</h3>
                <p className="project-type">Frontend Website</p>

                <p>
                  A food delivery website with an attractive responsive
                  interface, food cards and interactive user experience.
                </p>

                <div className="project-tech">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                </div>

                <a
                  href="https://github.com/Sachchidanand-19/Kalindi-Food-Delivery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Source Code ↗
                </a>
              </div>
            </div>

          </div>


          {activeImage && (
            <div
              className="image-modal"
              onClick={() => setActiveImage(null)}
            >
              <button
                className="modal-close"
                onClick={() => setActiveImage(null)}
              >
                ×
              </button>

              <img
                src={activeImage}
                alt="Project Screenshot Preview"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}

        </section>

        {/* Resume Section */}
        <section id="resume" className="resume-section">

          <div className="resume-content">

            <div className="resume-icon">📄</div>

            <h2>My Resume</h2>

            <p>
              Interested in my profile? Download my resume to explore
              my education, technical skills, projects and achievements.
            </p>

            <a
              href={resumePDF}
              download="Sachchidanand-Resume.pdf"
              className="resume-download-btn"
            >
              <span>⬇</span> Download My Resume
            </a>

          </div>

        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">

          <div className="section-heading">
            <h2>Get In Touch</h2>
            <p>Feel free to connect with me</p>
          </div>

          <div className="contact-container">

            <a href="mailto:sachitanand900@gmail.com" className="contact-card">
              <div className="contact-icon">📧</div>
              <h3>Email Me</h3>
              <p>sachitanand900@gmail.com</p>
            </a>

            <a href="tel:+918934987461" className="contact-card">
              <div className="contact-icon">📞</div>
              <h3>Call Me</h3>
              <p>+91-8934987461</p>
            </a>

            <a href="https://www.google.com/maps/search/?api=1&query=Azamgarh+Uttar+Pradesh"
              target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="contact-icon">📍</div>
              <h3>Location</h3>
              <p>Azamgarh, Uttar Pradesh</p>
            </a>

            <a href="https://github.com/Sachchidanand-19"
              target="_blank" rel="noopener noreferrer"
              className="contact-card">

              <div className="contact-icon github-icon">
                <FaGithub />
              </div>

              <h3>GitHub</h3>
              <p>Explore My Projects</p>
            </a>

            <a href="https://www.linkedin.com/in/sachchida-nand-a28134427"
              target="_blank" rel="noopener noreferrer"
              className="contact-card">

              <div className="contact-icon linkedin-icon">
                <FaLinkedin />
              </div>

              <h3>LinkedIn</h3>
              <p>Connect Professionally</p>
            </a>

            <a href="https://www.instagram.com/sachchi.dev/"
              target="_blank" rel="noopener noreferrer"
              className="contact-card">

              <div className="contact-icon instagram-icon">
                <FaInstagram />
              </div>

              <h3>Instagram</h3>
              <p>Follow Me</p>
            </a>

          </div>
        </section>

      </main>

      {/* Footer Section */}
      <footer className="footer-section">

        <div className="footer-content">

          <a href="#home" className="footer-logo">
            {"{ "}Sachchi<span>.dev</span>{" }"}
          </a>

          <p className="footer-text">
            Building creative and modern web experiences.
          </p>

          <div className="footer-socials">

            <a
              href="https://github.com/Sachchidanand-19"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sachchida-nand-a28134427"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/sachchi.dev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

          </div>

          <a href="#home" className="back-to-top">
            ↑ Back to Top
          </a>

        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Sachchidanand.
            All Rights Reserved.
          </p>
          <p>Designed & Developed with ❤️</p>
        </div>

      </footer>

    </>
  )
}

export default App