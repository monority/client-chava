import React from 'react'
import Header from '../components/header/Header';
import { useContext } from 'react'
import { UserContext } from '../../context/userContext'

const Home = () => {
	const { user } = useContext(UserContext) // de se "brancher" très simplement au Contexte, et donc d'accéder au State partagé 

  
	return (
		<>
		{user && (<h2>Wsh comment ça va{user.fname} {user.lname}</h2>)}
			<div id="home">
				<div className="container">
					<div className="wraps">

					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
