import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import Icon from '../global/Icon';

const Dropdown = () => {
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();

	const navigation = (route) => {
		setOpen(false);
		navigate(route);
	}
	let menuRef = useRef();
	useEffect(() => {
		let handler = (e) => {
			if (!menuRef.current.contains(e.target)) {
				setOpen(false);
			}
		};

		document.addEventListener("mousedown", handler);


		return () => {
			document.removeEventListener("mousedown", handler);
		}

	});

	const DropDownItem = ({ text, action }) => {
		return (
			<li className='dropdownItem' onClick={action}>

				<p> {text} </p>
			</li>
		)
	}
	return (
		<>
			<div className='menu-container' ref={menuRef}>
				<div className='menu-trigger' onClick={() => { setOpen(!open) }}>
					Compte
				</div>

				<div className={`dropdown-menu ${open ? 'active' : 'inactive'}`} >

					<ul>
						<DropDownItem text={"Connexion"} action={() => navigation("./account/login")} />
						<DropDownItem text={"S'inscrire"} action={() => navigation("./account/register")} />

					</ul>
				</div>
			</div >
		</>
	)
}

export default Dropdown