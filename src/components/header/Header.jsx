import React from 'react';
import Nav from './Nav';

const Header = () => {
	return (
		<>
			<div id="header">
				<div className="container">
					<div className="wraps">
						<div className="wrap-logo">
							<h1>Header</h1>
						</div>
							<Nav/>
					</div>
				</div>
			</div>
		</>
	)
}

export default Header