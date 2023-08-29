import React from 'react'
import Dropdown from './Dropdown';
import { useNavigate } from 'react-router-dom';
import Icon from '../global/Icon';
import { UserContext } from '../../../context/userContext';
import { useContext, useState } from 'react';
const Nav = () => {
	const { user } = useContext(UserContext)
	console.log({ user });

	const logOut = () => {
		userConst.user = ({});
	}

	}
	const navigate = useNavigate();
	return (
		<>
			<div className="nav-wrap">
				<ul>
				{user ? (<span>Bienvenue {user.fname}<p onClick={() => logOut()}>Se déconnecter</p></span>) : "ok"}
					{/* {user ? <span>Bienvenue {user.fname}<p onClick={() = logOut()}>Se déconnecter</p></span> : <li onClick={() => navigate("./account/check", { replace: true })}>Authentification</li>} */}

					<li onClick={() => navigate("./services", { replace: true })}>Services</li>
					<li onClick={() => navigate("./users", { replace: true })}>Liste des utilisateurs</li>
					<li onClick={() => navigate("./help/contact", { replace: true })}>Aide</li>
				</ul>
			</div>
		</>
	)
}

export default Nav;