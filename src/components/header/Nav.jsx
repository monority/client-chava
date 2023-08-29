import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../context/userContext';
import { toast } from 'react-hot-toast'
import axios from 'axios';

const Nav = () => {
  const { user, setUser } = useContext(UserContext); 
  const navigate = useNavigate();

 
  const logOut = async () => {
	try {
	  const { data } = await axios.delete('/logOut'); 
	  if (data.error) {
		toast.error(data.error);
	  } else {
		setUser(null);
		toast.success("Déconnexion réussie");
		navigate('/');
	  }
	} catch (error) {
	  console.log(error);
	}
  };



  return (
    <div className="nav-wrap">
      <ul>
        {user ? (
          <span>
            Bienvenue {user.fname}
            <p onClick={logOut}>Se déconnecter</p>
          </span>
        ) : (
          <li onClick={() => navigate('./account/check', { replace: true })}>
            Authentification
          </li>
        )}
        <li onClick={() => navigate('./services', { replace: true })}>Services</li>
        <li onClick={() => navigate('./users', { replace: true })}>Liste des utilisateurs</li>
        <li onClick={() => navigate('./help/contact', { replace: true })}>Aide</li>
      </ul>
    </div>
  );
};

export default Nav;
