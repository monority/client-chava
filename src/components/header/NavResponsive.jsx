import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useContext, useRef } from "react";
import { Link } from "react-scroll";
import React from 'react';
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../../context/userContext';
import { toast } from 'react-hot-toast'
import axios from 'axios';
const Navbar = () => {
	const navRef = useRef();
	const navigate = useNavigate();
	const { user, setUser } = useContext(UserContext);
	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive-nav"
		);
	};
	const handleLogout = async () => {
		try {
			const { data } = await axios.delete('/logout');
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
		<div className="menu-wrap">

			<div className="list-wrap" ref={navRef}>
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
						<li onClick={() => navigate('./help/support', { replace: true })}>Aide</li>
					</ul>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}
					aria-label="Fermer le menu"
				>
					<AiOutlineClose />
				</button>
			</div>
			<button
				className="nav-btn"
				aria-label="Ouvrir le menu"
				onClick={showNavbar}>
				<AiOutlineMenu />
			</button>
		</div>
	);
}

export default Navbar;