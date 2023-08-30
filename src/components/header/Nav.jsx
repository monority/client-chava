import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import { UserContext } from '../../../context/userContext';
import { toast } from 'react-hot-toast'
import axios from 'axios';



const Nav = () => {
	const navigate = useNavigate()
	const { user } = useContext(UserContext)
	const handleLogout = async () => {
		try {
		  const { data } = await axios.delete('/logOut');

		  if (data.error) {
				toast.error(data.error)

		  } else {
				toast.success('deconexion reussi')
				user(null)
				navigate('/')
		  }
		} catch (error) {
		  console.log(error);
		}
	  };

	return (
		<>
			<div className="nav-wrap">
				<ul>
					{user && (<h2>Wsh comment ça va{user.fname} {user.lname}</h2>)}
					<button onClick={handleLogout}>Se déconnecter</button>
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