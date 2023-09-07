import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useContext, useState } from "react";
import { Link } from "react-scroll";
import React from 'react';
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../../context/userContext';
import { toast } from 'react-hot-toast'
import axios from 'axios';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const navigate = useNavigate();
	const { user, setUser } = useContext(UserContext);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleNavigation = (route) => {
		// if (isMenuOpen) {
		// 	toggleMenu();
		// }
		navigate(route, { replace: true })
	}

	const handleLogout = async () => {
		try {
			const { data } = await axios.delete('/logout');
			if (data.error) {
				toast.error(data.error)
			} else {
				toast.success('Déconnexion réussie');
				setUser(null);
				navigate('/');
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="menu-wrap">
			<div className="list-wrap">
				<ul>
					{user ? (
						<span>
							{user.fname}
							<img src="../src/assets/media/logout.svg" onClick={handleLogout}></img>
						</span>
					) : (
						<li onClick={() => handleNavigation('./account/check')}>
							Authentification
						</li>
					)}
					{user && user.isAdmin ? (
						<li onClick={() => handleNavigation('./account/administration')}>
							Administration
						</li>
					) : (
						""
					)}
					<li onClick={() => handleNavigation('./services')}>Liste des services</li>
					<li onClick={() => handleNavigation('./account/becomepetsitter')}>Devenir pet sitters</li>
					<li onClick={() => handleNavigation('./help/support')}>Aide</li>
				</ul>
				{/* <button
					className="nav-btn nav-close-btn"
					onClick={toggleMenu}
					aria-label="Fermer le menu"
				>
					<AiOutlineClose />
				</button> */}
			</div>
			{/* <button
				className="nav-btn"
				aria-label="Ouvrir le menu"
				onClick={toggleMenu}
			>
				<AiOutlineMenu />
			</button> */}
		</div>
	);
}

export default Navbar;
