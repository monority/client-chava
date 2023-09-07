import React from 'react'
import { motion } from 'framer-motion';
import { menuSlide } from './anim';
import { slide } from './anim';
import { useNavigate } from 'react-router';

const Nav = ({ closeMenu })=> {
	const navigate = useNavigate();
	const items = [
		{ text: "Home", route: './' },
		{ text: "S'identifier", route: './account/check' },
		{ text: "Trouver un PetSitter", route: './services' },
		{ text: "Devenir PetSitter", route: './account/becomepetsitter' },
		{ text: "Nous contacter", route: './help/support' },
		{ text: "Aide", route: './help/questions' }
	];

	const handleNavigation = (route) => {
		closeMenu()
		navigate(route,{replace : true});
	};

	return (
		<motion.div
			variants={menuSlide}
			animate="enter"
			exit="exit"
			initial="initial"
			className="menu"
		>
			<div className="body">
				<div className="nav">
					<div className="header">
						<p>Navigation</p>
					</div>
					{items.map((item, index) => (
						<motion.div
							custom={index}
							variants={slide}
							animate="enter"
							exit="exit"
							initial="initial"
							className="link"
							key={index}
						>
							<li onClick={() => handleNavigation(item.route)}>{item.text}</li>
						</motion.div>
					))}
				</div>
				<div className="footer">
					<a href="https://twitter.com">Twitter</a>
					<a href="https://instagram.com">Instagram</a>
					<a href="https://facebook.com">Facebook</a>
					<a href="https://reddit.com">Reddit</a>
				</div>
			</div>
		</motion.div>
	);
}

export default Nav;
