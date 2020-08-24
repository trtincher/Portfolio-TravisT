import React from 'react';
import './Header.css';

function Header() {
	return (
		<header>
			<div id="headshotBackground">
				<img id="headshot" src="https://i.imgur.com/Lb31Ln9.png" alt="headshot" />
			</div>
			<div id="headerText">
				<h1>Hi I'm Travis Tincher</h1>
				<h2>I'm a Software Developer </h2>
			</div>
		</header>
	);
}

export default Header;
