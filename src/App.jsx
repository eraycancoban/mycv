// App.jsx
import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="plate">

        <div className="tPlate">
          <div className="res">
            <div>
              <h1>Eraycan Çoban</h1>
              <h2><u>Web Developer</u></h2>

            </div>
            <div>
              <a href="https://www.linkedin.com/in/eraycan-çoban-a17460200" target="_blank"><img src="https://img.icons8.com/?size=100&id=67570&format=png&color=000000" alt="linkedin" /></a>
              <a href="https://github.com/eraycancoban" target="_blank"><img src="https://img.icons8.com/?size=100&id=iEBcQcM9rnZ9&format=png&color=000000" alt="github" /></a>
              <a href="https://drive.google.com/file/d/1Kgg1YqkF9g-y6hWLN9Y4c8LhqLj_2GgS/view?usp=sharing" target="_blank"><img src="https://img.icons8.com/?size=100&id=67353&format=png&color=000000" alt="cv" download /></a>
              <a href="mailto:eraycanvoban@gmail.com"><img src="https://img.icons8.com/?size=100&id=68248&format=png&color=000000" alt="email" /></a>
              <a href="tel:+905350257636"><img src="https://img.icons8.com/?size=100&id=124196&format=png&color=000000" alt="phone" /></a>
            </div>

          </div>

          <hr />
        </div>

        <div className="plateT">
          <div className="grid">
            <div className="summary" >
              <h3 id="summary">Summary</h3>
              <p>
                I have experience in backend development with PHP, Node.js, MySQL, and
                Neo4j. I also possess frontend knowledge. Additionally, I am
                proficient in computer engineering skills such as algorithms and data
                structures. Although I have some experience in AR development and
                image processing, it is not extensive. However, given the time, I can
                tackle any project.
              </p>
            </div>
            <div className="sPlate" id="eSplate">
              <h3 id="education">Education</h3>
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

          <div className="gridTwo">
            <div className="sPlate" id="skillsP">
              <h3 id="skills">Skills</h3>
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
            <div className="sPlate" id="pLangP">
              <h3 id="pLang">Programming Languages</h3>
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
            <div className="sPlate">
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

          <div className="sPlate" id="gallery">
            <h2>Projects</h2>
            <div class="container">
              <div class="card">
                <h3 class="title">Biletlik</h3>
                <div class="image-container">
                 <a href="https://github.com/kagantemizkan/biletlik-react-app"><img src="https://i.imgur.com/Wr8Mjlv.jpeg" alt="Image 1" class="image" /></a>
                </div>
                <div class="info">Ticket Sale Site  React,Node.js, MySQL</div>
              </div>
              <div class="card">
                <h3 class="title">Kou Sylabuss</h3>
                <div class="image-container">
                  <a href="https://github.com/kagantemizkan/kou-syllabus"><img src="https://i.imgur.com/dj0ckIz.png" alt="Image 2" class="image" /></a>
                </div>
                <div class="info">Welsh-Powell Timetable React,Node.js,MySQL</div>
              </div>
              <div class="card">
                <h3 class="title">Kou Turizm</h3>
                <div class="image-container">
                  <a href="https://github.com/kagantemizkan/kocaeli-turizm"><img src="https://i.imgur.com/KUxSnYY.jpeg" alt="Image 3" class="image" /></a>
                </div>
                <div class="info">Bus Ticket  Php,MySql,React</div>
              </div>
              <div class="card">
                <h3 class="title">iFridge</h3>
                <div class="image-container">
                  <a href="https://github.com/eraycancoban/ifridge?tab=readme-ov-file"><img src="https://imgur.com/VXr7LiY.png" alt="Image 4" class="image" /></a>
                </div>
                <div class="info">Item list and recipe Flutter,Firebase</div>
              </div>
            </div>
          </div>

        </div>

      </div>



    </>
  );
}

export default App;
