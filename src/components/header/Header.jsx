import React, { useState } from 'react';
import Nav from './Nav';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
	const navigate = useNavigate();
	const [active, SetActive] = useState(false);
	const location = useLocation();
	const checkLocation = location.pathname === "/account/check" || location.pathname === "/account/login" || location.pathname === "/account/register";
	const checkHome = location.pathname === "/";

	const headerChange = () => {
	
		if (window.scrollY >= 450 && checkHome) {
			SetActive(true);
		}
		else {
			SetActive(false);
		}
	}

	window.addEventListener("scroll", () => headerChange())

	return (
		<>
			{checkHome ? (
				<div id="header" className={`${active ? 'scrolled' : "inactive"}`}>
					<div className="container">
						<div className="wraps">
							<div className="left-wrap" onClick={() => navigate("/account/check", { replace: true })}>
								<img src='\src\assets\media\logo192.svg' alt="Logo" />
								<h1>Chava</h1>
							</div>
							<Nav />
						</div>
					</div>
				</div>
			) : (
				<div id="header" className={`${!checkLocation ? '' : "inactive"}`}>
					<div className="container">
						<div className="wraps">
							<div className="left-wrap" onClick={() => navigate("/", { replace: true })}>
								<img src='\src\assets\media\logo192.svg' alt="Logo" />
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