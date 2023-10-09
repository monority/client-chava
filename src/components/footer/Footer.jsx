import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Icon from '../global/Icon';
import { Button, message, Popconfirm } from 'antd';

const Footer = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const excludedPaths = ["/auth/check", "/auth/login", "/auth/register", "/auth/administration"];
	const displayFooter = !excludedPaths.some(path => location.pathname.includes(path));

	return (
		<>
			{displayFooter && (
				<div id="footer">
					<div className="container">
						<div className="wraps">
							<div className="title-wrap">
								<p>Chava @ Copyright 2023</p>
							</div>
							<div className="content-container">
								<div className="list-wrap">
									<h2>Besoin d'aide ?</h2>
									<ul>
										<li onClick={() => navigate("./help/support#contact")}>Nous Contacter</li>
										<li onClick={() => navigate("./help/questions")}>FAQ (Foire aux questions)</li>
										<li>Signaler un problème</li>
									</ul>
								</div>
								<div className="network-wrap">
									<h2>Nos reseaux</h2>
									<ul>
										<li onClick={() => window.open("https://twitter.com/Twitter")}>
											<Icon
												type="FaTwitter"
											/> </li>
										<li onClick={() => window.open("https://twitter.com/Twitter")}><Icon
											type="FaInstagram"
										/> </li>
										<li onClick={() => window.open("https://twitter.com/Twitter")}><Icon
											type="FaFacebook"
										/> </li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default Footer