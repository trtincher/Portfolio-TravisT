import React, { useState, useEffect } from 'react';
import './Nav.css';

function Nav() {
	const [ isOpen, setIsOpen ] = useState(false);
	const [ isClose, setIsClose ] = useState(false);

	useEffect(() => {
		handleResize();
		window.addEventListener('resize', handleResize);
	}, []);

	const handleNavClick = () => {
		setIsOpen(!isOpen);
		setIsClose(!isClose);
	};

	const handleResize = () => {
		if (window.innerWidth > 768) {
			setIsOpen(true);
			setIsClose(false);
		} else {
			setIsOpen(false);
		}
	};

	const navBar = (
		<div className="navContainer">
			<ul className={isOpen ? 'navBar' : 'hideNavBar'}>
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
			{isClose ? <div className="close" onClick={handleNavClick} /> : null}
		</div>
	);

	const hamburger = (
		<button className="hamburger" onClick={handleNavClick}>
			<span />
			<span />
			<span />
		</button>
	);

	const times = (
		<button className="times" onClick={handleNavClick}>
			<span className="crossTop" />
			<span className="crossMid" />
			<span className="crossBottom" />
		</button>
	);

	return (
		<nav>
			{isOpen ? times : hamburger}
			{navBar}
		</nav>
	);
}

export default Nav;
