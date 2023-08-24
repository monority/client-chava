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
					<div className="wraps">
						<div className="left-wrap" onClick={() => navigate("./", { replace: true })}>
							<img src='\src\assets\media\logo192.svg' />
							<h1>Chava</h1>
						</div>
						<Nav></Nav>
					</div>

				</div>
			</div> : null}
		</>
	)
}

export default Header