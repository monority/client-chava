import React from 'react';
import Nav from './Nav';
import { useNavigate } from 'react-router-dom';

const Header = () => {
	const navigate = useNavigate();
	return (
		<>
			<div id="header">
				<div className="container">
					<div className="wraps" onClick={() => navigate("./")}>
						<div className="img-wrap">
							<img  src='\src\assets\media\logo192.svg' />
						</div>
						<div className="subtitle-wrap">
							<h1>Chava</h1>
						</div>
					</div>
					<Nav></Nav>
				</div>
			</div>
		</>
	)
}

export default Header