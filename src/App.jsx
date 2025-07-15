// App.jsx
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    // Define the scroll function when component mounts
    window.scrollTimeline = function(direction) {
      const wrapper = document.getElementById('timeline-wrapper');
      const scrollAmount = 200;
      
      if (!wrapper) return;
      
      if (direction === 'left') {
        wrapper.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        wrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    };
  }, []);

  return (
    <div className="portfolio-container">
      <div className="header-section">
        <div className="header-content">
          <div className="header-text">
            <h1>Eraycan Çoban</h1>
            <h2>
              <u>Web Developer</u>
            </h2>
          </div>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/eraycan-çoban-a17460200"
              target="_blank"
            >
              <img
                src="https://img.icons8.com/?size=100&id=67570&format=png&color=000000"
                alt="linkedin"
              />
            </a>
            <a href="https://github.com/eraycancoban" target="_blank">
              <img
                src="https://img.icons8.com/?size=100&id=iEBcQcM9rnZ9&format=png&color=000000"
                alt="github"
              />
            </a>
            <a
              href="https://drive.google.com/file/d/1Kgg1YqkF9g-y6hWLN9Y4c8LhqLj_2GgS/view?usp=sharing"
              target="_blank"
            >
              <img
                src="https://img.icons8.com/?size=100&id=67353&format=png&color=000000"
                alt="cv"
              />
            </a>
            <a href="mailto:eraycanvoban@gmail.com">
              <img
                src="https://img.icons8.com/?size=100&id=68248&format=png&color=000000"
                alt="email"
              />
            </a>
            <a href="tel:+905350257636">
              <img
                src="https://img.icons8.com/?size=100&id=124196&format=png&color=000000"
                alt="phone"
              />
            </a>
          </div>
        </div>
        <hr />
      </div>

      <div className="content-section">
        <div className="two-column-grid">
          <div className="summary-section">
            <h3 id="summary-heading">Summary</h3>
            <p>
              I have experience in backend development with PHP, Node.js, MySQL, and
              Neo4j. I also possess frontend knowledge. Worked projects that required machine and deep learning.
              Additionally, I am
              proficient in computer engineering skills such as algorithms and data
              structures. Although I have some experience in AR development and
              image processing, it is not extensive. However, given the time, I can
              tackle any project.
            </p>
          </div>
          <div className="content-card" id="education-card">
            <h3 id="education-heading">Education</h3>
            <p>
              Kocaeli University
              <ul>
                <li>German Preparation Class 2019-2020</li>
                <li>Mechatronics Engineering 2020-2022(Dropped out)</li>
                <li>Information Systems Engineering 2022-Continues</li>
              </ul>
            </p>
          </div>
        </div>

        <div className="three-column-grid">
          <div className="content-card" id="skills-card">
            <h3 id="skills-heading">Skills</h3>
            <p>
              <ul>
                <li>Web Development</li>
                <li>Backend Developing</li>
                <li>Graph and Relational Database</li>
                <li>Web Design</li>
                <li>AR Development</li>
                <li>Image Processing</li>
                <li>Office Programs</li>
              </ul>
            </p>
          </div>
          <div className="content-card" id="programming-languages-card">
            <h3 id="programming-languages-heading">Programming Languages</h3>
            <p>
              <ul>
                <li>JavaScript(Node.js,React)</li>
                <li>Php(Laravel)</li>
                <li>Python</li>
                <li>SQL</li>
                <li>Flutter</li>
                <li>C,C++</li>
                <li>Java</li>
                <li>C#</li>
                <li>Rust</li>
                <li>React Native</li>
              </ul>
            </p>
          </div>
          <div className="content-card">
            <h3>Languages & Hobies</h3>
            <p>
              Languages
              <ul>
                <li>English | B2-C1</li>
                <li>German | A2</li>
                <li>Turkish | Native Speaker</li>
              </ul>
              Hobies
              <ul>
                <li>Boxing</li>
                <li>Swimming</li>
                <li>Drawing & Painting</li>
                <li>Carpentery</li>
                <li>Video Games</li>
              </ul>
            </p>
          </div>
        </div>

        <div className="content-card" id="projects-gallery">
          <h2>Projects</h2>
          <div className="projects-container">
            <div className="project-card">
              <h3 className="project-title">Biletlik</h3>
              <div className="project-image-container">
                <a href="https://github.com/kagantemizkan/biletlik-react-app">
                  <img
                    src="https://i.imgur.com/Wr8Mjlv.jpeg"
                    alt="Biletlik Project"
                    className="project-image"
                  />
                </a>
              </div>
              <div className="project-description">
                Ticket Sale Site React,Node.js, MySQL
              </div>
            </div>
            <div className="project-card">
              <h3 className="project-title">Kou Sylabuss</h3>
              <div className="project-image-container">
                <a href="https://github.com/kagantemizkan/kou-syllabus">
                  <img
                    src="https://i.imgur.com/dj0ckIz.png"
                    alt="Kou Syllabus Project"
                    className="project-image"
                  />
                </a>
              </div>
              <div className="project-description">
                Welsh-Powell Timetable React,Node.js,MySQL
              </div>
            </div>
            <div className="project-card">
              <h3 className="project-title">Kou Turizm</h3>
              <div className="project-image-container">
                <a href="https://github.com/kagantemizkan/kocaeli-turizm">
                  <img
                    src="https://i.imgur.com/KUxSnYY.jpeg"
                    alt="Kou Turizm Project"
                    className="project-image"
                  />
                </a>
              </div>
              <div className="project-description">Bus Ticket Php,MySql,React</div>
            </div>
            <div className="project-card">
              <h3 className="project-title">iFridge</h3>
              <div className="project-image-container">
                <a href="https://github.com/eraycancoban/ifridge?tab=readme-ov-file">
                  <img
                    src="https://imgur.com/VXr7LiY.png"
                    alt="iFridge Project"
                    className="project-image"
                  />
                </a>
              </div>
              <div className="project-description">Item list and recipe Flutter,Firebase</div>
            </div>
          </div>
        </div>

        <div className="content-card" id="timeline-section">
          <h2>Timeline</h2>
          <div className="timeline-container">
            <div className="timeline-scroll-btn left" onClick={() => window.scrollTimeline('left')}></div>
            <div className="timeline-scroll-btn right" onClick={() => window.scrollTimeline('right')}></div>
            <div className="timeline-wrapper" id="timeline-wrapper">
              <div className="timeline-item">
                <div className="timeline-year">2019</div>
                <div className="timeline-content">
                  <h4>German Preparation Class</h4>
                  <p>Kocaeli University</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">2020</div>
                <div className="timeline-content">
                  <h4>Mechatronics Engineering</h4>
                  <p>Kocaeli University (2020-2022)</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">2022</div>
                <div className="timeline-content">
                  <h4>Information Systems Engineering</h4>
                  <p>Kocaeli University (Current)</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">2023</div>
                <div className="timeline-content">
                  <h4>Web Development Projects</h4>
                  <p>Biletlik, Kou Syllabus, Various full-stack applications</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">2024</div>
                <div className="timeline-content">
                  <h4>Mobile Development</h4>
                  <p>iFridge Flutter application, React Native projects</p>
                </div>
              </div>

               <div className="timeline-item">
                <div className="timeline-year">2025</div>
                <div className="timeline-content">
                  <h4>Internship</h4>
                  <p>Internship at CarrefourSA</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
