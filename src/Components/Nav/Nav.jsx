import React, { useState } from 'react';
import './Nav.css';

function Nav() {
	const [ isOpen, setIsOpen ] = useState(false);

	const handleNavClick = () => {
		setIsOpen(!isOpen);
	};

	const navBar = (
		<div class="navContainer">
			<ul class="navBar">
				<li>
					<a href="#top">Home</a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#skills">Skills</a>
				</li>
				<li>
					<a href="#portfolioContainer">Portfolio</a>
				</li>
			</ul>
			<div class="close" onClick={handleNavClick} />
		</div>
	);

	return (
		<nav>
			<button onClick={handleNavClick}>
				<span />
				<span />
				<span />
			</button>
			{isOpen ? navBar : null}
		</nav>
	);
}

export default Nav;
