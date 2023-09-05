import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Footer = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const checkLocation = location.pathname === "/account/check" || location.pathname === "/account/login" || location.pathname === "/account/register"

	return (
		<>
			{!checkLocation ?
				<div id="footer">
					<div className="container block">
						<div className="wraps">
							<div className="title-wrap">
								<h1>Footer. @Copyright 2023</h1>
							</div>
							<div className="list-wrap">
								<h2>Besoin d'aide ?</h2>
								<ul>
									<li onClick={() => navigate("./help/support#contact")}>Nous Contacter</li>
									<li onClick={() => navigate("./help/questions")}>FAQ (Foire aux questions)</li>
									<li>Signaler un problème</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				: null}
		</>
	)
}

export default Footer