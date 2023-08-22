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
            <li onClick={() => navigate("./account/login")}>Se connecter</li>
            <li onClick={() => navigate("./account/register")}>Inscription</li>
        </ul>
        </div>
        </>
    )
}

export default Nav;