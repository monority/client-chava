import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import { UserContext } from '../../../context/userContext';
import { toast } from 'react-hot-toast'
import axios from 'axios';



const Nav = () => {
	const navigate = useNavigate()
	const { user, setUser } = useContext(UserContext)
	const handleLogout = async () => {
		try {
			const { data } = await axios.delete('/logOut');

			if (data.error) {
				toast.error(data.error)

			} else {
				toast.success('deconexion reussi');
				setUser(null);
				navigate('/');
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<div className="nav-wrap">
				<ul>
					{user ? (
						<span>
							{user.fname}
							<img src="../src/assets/media/logout.svg" onClick={handleLogout}></img>
						</span>
					) : (
						<li onClick={() => navigate('./account/check', { replace: true })}>
							Authentification
						</li>
					)}
					<li onClick={() => navigate('./users', { replace: true })}>Liste des services</li>
					<li onClick={() => navigate('./account/becomepetsitter', { replace: true })}>Devenir Pet Sitter</li>
					<li onClick={() => navigate('./help/contact', { replace: true })}>Aide</li>
				</ul>
			</div>
		</>
	)
}

export default Nav;