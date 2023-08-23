import React from 'react';
import Nav from './Nav';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
	const navigate = useNavigate();

	const location = useLocation();
	const checkLocation = location.pathname === "/account/check";
	return (
		<>
			{!checkLocation ? <div id="header">
				<div className="container">
					<div className="wraps" onClick={() => navigate("./", {replace:true}) }>
						<div className="img-wrap">
							<img  src='\src\assets\media\logo192.svg' />
						</div>
						<div className="subtitle-wrap">
							<h1>Chava</h1>
						</div>
					</div>
					<Nav></Nav>
				</div>
			</div> : null}
		</>
	)
}

export default Header