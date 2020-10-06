import React from "react";
import "./Body.css";

function Body() {
  return (
    <div id="contentGrid">
      <div id="about" className="text-box">
        <h2>About</h2>
        <p>
          I’m a <span>Houston based</span> software developer who builds user
          forward websites with an eye towards integrating function and design!
          I have a diverse background in philosophy, theology, art and beer,
          which has given me an eye for aesthetic and a mind for the production
          cycle.
        </p>
      </div>

      {/* <div id="fillerImg1">
				<img src="https://i.imgur.com/WlPsHMX.jpg" alt="" />
			</div> */}

      <div id="skills" className="text-box">
        <h2>Skills</h2>
        <div id="skillsBody">
          <div className="skillIcon">
            <i className="fab fa-html5" />
            <h3>HTML5</h3>
          </div>
          <div className="skillIcon">
            <i className="fab fa-css3" />
            <h3>CSS</h3>
          </div>
          <div className="skillIcon">
            <i className="fab fa-js" />
            <h3>Javascript</h3>
          </div>
          <div className="skillIcon">
            <i className="fas fa-dollar-sign" />
            <h3>jQuery</h3>
          </div>
          <div className="skillIcon">
            <i className="fab fa-bootstrap" />
            <h3>Bootstrap</h3>
          </div>
          <div className="skillIcon">
            <i class="fab fa-react" />
            <h3>React</h3>
          </div>
          <div className="skillIcon">
            <i class="fab fa-node-js" />
            <h3>Express/Node.js</h3>
          </div>
          <div className="skillIcon">
            <i class="fas fa-leaf" />
            <h3>MongoDB</h3>
          </div>

          <div className="skillIcon">
            <i class="fab fa-git-alt" />
            <h3>Git</h3>
          </div>
          <div className="skillIcon">
            <i class="fab fa-github" />
            <h3>GitHub</h3>
          </div>

          <div className="skillIcon">
            <i class="fab fa-sass" />
            <h3>SCSS</h3>
          </div>
          <div className="skillIcon">
            <i class="fab fa-npm" />
            <h3>Axios</h3>
          </div>
          <div className="skillIcon">
            <i class="fas fa-gem" />
            <h3>Ruby on Rails</h3>
          </div>
          <div className="skillIcon">
            <i class="fab fa-adobe" />
            <h3>Adobe Photoshop</h3>
          </div>
          <div className="skillIcon">
            <i class="fab fa-adobe" />
            <h3>Adobe Illustrator</h3>
          </div>
          <div className="skillIcon">
            <h3>Mongoose</h3>
          </div>
          <div className="skillIcon">
            <h3>Bulma</h3>
          </div>
          <div className="skillIcon">
            <h3>Agile</h3>
          </div>
          <div className="skillIcon">
            <h3>PostgreSQL</h3>
          </div>
          <div className="skillIcon">
            <h3>Heroku</h3>
          </div>
          <div className="skillIcon">
            <h3>Postman</h3>
          </div>
        </div>
      </div>

      {/* <div id="fillerImg2">
				<img src="https://i.imgur.com/TlmXLBf.jpg" alt="" />
			</div> */}
    </div>
  );
}

export default Body;
