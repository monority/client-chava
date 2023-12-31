import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Icon from '../global/Icon';
import { Button, message, Popconfirm } from 'antd';

const Footer = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const checkLocation = location.pathname === "/account/check" || location.pathname === "/account/login" || location.pathname === "/account/register" || location.pathname === "/account/administration"

	return (
		<>
			{!checkLocation ?
				<div id="footer">
					<div className="container block">
						<div className="wraps">
							<div className="title-wrap">
								<h1>Chava @ Copyright 2023</h1>
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
										<li  onClick={() => window.open("https://twitter.com/Twitter")}>
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
				: null}
		</>
	)
}

export default Footer