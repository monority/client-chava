import React from 'react'
import Dropdown from './Dropdown';
import { useNavigate } from 'react-router-dom';
import Icon from '../global/Icon';
const Nav = () => {
	const navigate = useNavigate();
	return (
		<>
			<div className="nav-wrap">
				<ul>
					<li onClick={() => navigate("./account/check", { replace: true })}>Authentification</li>
					<li onClick={() => navigate("./services", { replace: true })}>Services</li>
					<li onClick={() => navigate("./users", { replace: true })}>Liste des utilisateurs</li>
					<li onClick={() => navigate("./help/contact", { replace: true })}>Aide</li>
				</ul>
			</div>
		</>
	)
}

export default Nav;