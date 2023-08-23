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
            <li onClick={() => navigate("./account/check" , {replace:true})}>Se connecter</li>
            <li onClick={() => navigate("./account/register", {replace:true})}>Inscription</li>
            <li onClick={() => navigate("./help/questions", {replace:true})}>FAQ</li>
            <li onClick={() => navigate("./help/contact", {replace:true})}>Contact</li>
        </ul>
        </div>
        </>
    )
}

export default Nav;