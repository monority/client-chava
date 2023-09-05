import React, { useState } from 'react';
import Nav from './Nav';
import { useLocation, useNavigate } from 'react-router-dom';


const Header = () => {
	const navigate = useNavigate();
	const [active, SetActive] = useState(false);
	const location = useLocation();
	// On regarde si les routes correspondent avec uselocation pour permettre un affichage du header conditionné en fonction
	// des pages
	const checkLocation = location.pathname === "/account/check" || location.pathname === "/account/login" || location.pathname === "/account/register";
	const checkHome = location.pathname === "/";

	// Fonction pour affiché le header quand on scroll à partir d'une certaine position sur l'axe Y (vertical)
	const headerChange = () => {
		if (window.scrollY >= 40 && checkHome) {
			SetActive(true);
		}
		else {
			SetActive(false);
		}
	}
	window.addEventListener("scroll", () => headerChange());

	return (
		<>
	{/* Header conditionné pour l'affichage sur la page d'accueil */}
			{checkHome ? (
				<div id="header" className={`${active ? 'scrolled' : "inactive"}`}>
					<div className="container">
						<div className="wraps">
							<div className="left-wrap" onClick={() => navigate("/account/check", { replace: true })}>
								<img src='\src\assets\media\Cat.png' alt="Logo" />
								<h1>Chava</h1>
							</div>
							<Nav />
						</div>
					</div>
				</div>
			) : (
				// Header conditionné pour l'affichage sur les autres pages (on veut le désactiver sur les pages de check/login/register)
				<div id="header" className={`${!checkLocation ? '' : "inactive"}`}>
					<div className="container">
						<div className="wraps">
							<div className="left-wrap" onClick={() => navigate("/", { replace: true })}>
							<img src='\src\assets\media\Cat.png' alt="Logo" />
								<h1>Chava</h1>
							</div>
							<Nav />
						</div>
					</div>
				</div>
			)}

		</>
	)
}




export default Header