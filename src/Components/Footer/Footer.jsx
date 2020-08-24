import React from 'react';
import './Footer.css';

function Footer() {
	return (
		<footer>
			<ul id="footerLinks">
				<li>
					<a href="https://github.com/trtincher" target="_blank">
						<i className="fab fa-github" />
					</a>
				</li>
				<li>
					<a
						href="https://codepen.io/dashboard?type=VIEW&opts_itemType=COLLECTION&opts_searchTerm=null&opts_order=RELEVANCE&opts_depth=EVERYTHING&opts_showForks=false&opts_filter=all&opts_orderBy=ID&opts_orderDirection=0&opts_tag=null&displayType=GRID&previewType=IFRAME&activeType=COLLECTION"
						target="_blank"
					>
						<i className="fab fa-codepen" />
					</a>
				</li>
				<li>
					<a href="https://www.linkedin.com/in/travis-tincher/" target="_blank">
						<i className="fab fa-linkedin" />
					</a>
				</li>
				<li className="slideButton">Contact</li>
			</ul>

			<div className="contactForm footerLeft">
				<button className=" slideButton footerClose">X</button>
				<h1>Contact Me</h1>
				<form action="">
					<input type="text" placeholder="First and Last Name" />
					<input type="email" name="email" id="contactEmail" placeholder="youremail@gmail.com" />
					<textarea name="message" id="formMessage" placeholder="your message here..." />
				</form>
				<div id="formLinks">
					<a href="https://github.com/trtincher" target="_blank">
						<i className="fab fa-github" />
					</a>
					<a
						href="https://codepen.io/dashboard?type=VIEW&opts_itemType=COLLECTION&opts_searchTerm=null&opts_order=RELEVANCE&opts_depth=EVERYTHING&opts_showForks=false&opts_filter=all&opts_orderBy=ID&opts_orderDirection=0&opts_tag=null&displayType=GRID&previewType=IFRAME&activeType=COLLECTION"
						target="_blank"
					>
						<i className="fab fa-codepen" />
					</a>
					<a href="https://www.linkedin.com/in/travis-tincher/" target="_blank">
						<i className="fab fa-linkedin" />
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
