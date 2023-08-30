import React from 'react'
import Preloader from '../components/global/Preloader'
// page d'accueil
const Home = () => {
	const hasAnimationShown = localStorage.getItem('animationShown');
	return (
		<>
			{!hasAnimationShown ?
				<Preloader></Preloader> : ""}
			<div id="home">
				<div className="container">
					<div className="wraps">

					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
