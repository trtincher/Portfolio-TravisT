import React from 'react';
import './App.css';

import Nav from './Components/Nav/Nav';
import Banner from './Components/Banner/Banner';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import Portfolio from './Components/Portfolio/Portfolio';
import Footer from './Components/Footer/Footer';

function App() {
	return (
		<div className="App">
			<Nav />
			<Banner />
			<Header />
			<Body />
			<Portfolio />
			<Footer />
		</div>
	);
}

export default App;
