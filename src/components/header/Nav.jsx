import React from 'react'
import Dropdown from './Dropdown';
import { useNavigate } from 'react-router-dom';
import Icon from '../global/Icon';
import { UserContext } from '../../../context/userContext';
import { useContext, useState } from 'react';
const Nav = () => {
	let userConst = useContext(UserContext);
	console.log(userConst)

	const LoggedIn = () => {

		return <><p onClick={() => logOut()}>Se déconnecter</p><p>{userConst.user.email}</p>
		</>
	}

	const logOut = () => {
		userConst.user = ({});
	}
	const navigate = useNavigate();
	return (
		<>
			<div className="nav-wrap">
				<ul>
					{userConst?.user.email !== "" ? LoggedIn() : "Se Connecter"}
					<li onClick={() => navigate("./services", { replace: true })}>Services</li>
					<li onClick={() => navigate("./users", { replace: true })}>Liste des utilisateurs</li>
					<li onClick={() => navigate("./help/contact", { replace: true })}>Aide</li>
				</ul>
			</div>
		</>
	)
}

export default Nav;