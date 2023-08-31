import React, { useContext } from 'react';
import {  useNavigate } from 'react-router-dom'
import { UserContext } from '../../../context/userContext';
import { toast } from 'react-hot-toast'
import axios from 'axios';

const Nav = () => {
	const navigate = useNavigate();
	const { user, setUser } = useContext(UserContext);

	// Requête pour déconnecter l'utilisateur. On passe par la requête delete pour supprimer le token stocké dans les cookies.
	// On utilise setUser pour réinitialiser les données stockées dans user (le profil de l'utilisateur) dans le userContext (qui engloble toute l'application).
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
					<li onClick={() => navigate('./services', { replace: true })}>Liste des services</li>
					<li onClick={() => navigate('./account/becomepetsitter', { replace: true })}>Devenir pet sitters</li>
					<li onClick={() => navigate('./help/contact', { replace: true })}>Aide</li>
				</ul>
			</div>
		</>
	)
}

export default Nav;