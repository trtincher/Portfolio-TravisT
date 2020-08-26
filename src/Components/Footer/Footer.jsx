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
				<li>
					<div>
						<i class="fas fa-paper-plane" />
						<span className="email"> trtincher12@gmail.com</span>
					</div>
				</li>
			</ul>
		</footer>
	);
}

export default Footer;
