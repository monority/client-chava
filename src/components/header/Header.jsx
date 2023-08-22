import React from 'react';
import Nav from './Nav';
import { useNavigate } from 'react-router-dom';

const Header = () => {
	const navigate = useNavigate();
	return (
		<>
			<div id="header">
				<div className="container">
					<div className="wraps">
						<div className="img-wrap">
							<img onClick={() => navigate("./")} src='\src\assets\media\logo192.svg' />
						</div>
						<div className="subtitle-wrap">
							<h5>Chava</h5>
						</div>
					</div>

				</div>
			</div>
		</>
	)
}

export default Header