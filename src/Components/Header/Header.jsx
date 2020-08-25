import React from 'react';
import './Header.css';

function Header() {
	return (
		<header>
			<div id="headshotBackground">
				<img id="headshot" src="https://i.imgur.com/Lb31Ln9.png" alt="headshot" />
			</div>
			<div className="headerText">
				<h1>
					Hi I'm <span>Travis Tincher</span>
				</h1>
				<h2>
					I'm a <span>Software Developer</span>{' '}
				</h2>
			</div>
		</header>
	);
}

export default Header;
