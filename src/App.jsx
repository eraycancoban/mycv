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
              <a href="https://www.linkedin.com/in/eraycan-çoban-a17460200" target="_blank"><img src="https://img.icons8.com/?size=100&id=67353&format=png&color=000000" alt="cv" /></a>
              <a href=""><img src="https://img.icons8.com/?size=100&id=68248&format=png&color=000000" alt="email" /></a>
              <a href=""><img src="https://img.icons8.com/?size=100&id=124196&format=png&color=000000" alt="phone" /></a>
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
            <div className="sPlate">
              <h3>Skills</h3>
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
            <div className="sPlate">
              <h3>Summary</h3>
              <p>
                I have experience in backend development with PHP, Node.js, MySQL, and
              </p>
            </div>
            <div className="sPlate">
              <h3>Summary</h3>
              <p>
                I have experience in backend development with PHP, Node.js, MySQL, and
              </p>
            </div>
          </div>

          <div className="sPlate" id="gallery">
            <h2>projects</h2>
            <div class="container">
  <div class="card">
    <h3 class="title">Card 1</h3>
    <div class="image-container">
      <img src="https://via.placeholder.com/120" alt="Image 1" class="image"/>
    </div>
    <div class="info">Information about Card 1</div>
  </div>
  <div class="card">
    <h3 class="title">Card 2</h3>
    <div class="image-container">
      <img src="https://via.placeholder.com/120" alt="Image 2" class="image"/>
    </div>
    <div class="info">Information about Card 2</div>
  </div>
  <div class="card">
    <h3 class="title">Card 3</h3>
    <div class="image-container">
      <img src="https://via.placeholder.com/120" alt="Image 3" class="image"/>
    </div>
    <div class="info">Information about Card 3</div>
  </div>
  <div class="card">
    <h3 class="title">Card 4</h3>
    <div class="image-container">
      <img src="https://via.placeholder.com/120" alt="Image 4" class="image"/>
    </div>
    <div class="info">Information about Card 4</div>
  </div>
</div>
          </div>

        </div>


      </div>



    </>
  );
}

export default App;
