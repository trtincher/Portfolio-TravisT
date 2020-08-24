import React from 'react';
import './Body.css';

function Body() {
	return (
		<div id="contentGrid">
			<div id="about" className="text-box">
				<h2>About</h2>
				<p>
					I’m a software engineer who builds user forward websites with an eye towards integrating function
					and design! I have a diverse background in philosophy, theology, art and beer, which has given me an
					eye for aesthetic and a mind for productivity.
				</p>
			</div>

			<div id="fillerImg1">
				<img src="https://i.imgur.com/WlPsHMX.jpg" alt="" />
			</div>

			<div id="skills" className="text-box">
				<h2>Skills</h2>
				<div id="skillsBody">
					<div className="skillIcon">
						<i className="fab fa-html5" />
						<h3>HTML</h3>
					</div>
					<div className="skillIcon">
						<i className="fab fa-css3" />
						<h3>CSS</h3>
					</div>
					<div className="skillIcon">
						<i className="fab fa-js" />
						<h3>JS</h3>
					</div>
					<div className="skillIcon">
						<i className="fas fa-dollar-sign" />
						<h3>jQuery</h3>
					</div>
					<div className="skillIcon">
						<i className="fab fa-bootstrap" />
						<h3>Bootstrap</h3>
					</div>
				</div>
			</div>

			<div id="fillerImg2">
				<img src="https://i.imgur.com/TlmXLBf.jpg" alt="" />
			</div>
		</div>
	);
}

export default Body;
