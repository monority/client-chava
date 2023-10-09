// React
import React, { useState, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

// Dependencies


// Components
import { UserContext } from '../../../context/userContext';
import CheckUser from '../../components/auth/checkUser';
import { queryLogin } from '../../components/query/authQuery';

// Composant pour la connexion
const Login = () => {
	const navigate = useNavigate();
	const location = useLocation();
	// Chargement du state avec location pour récupérer l'adresse entrée depuis le composant check.
	const { state } = location;
	// Chargement de la variable user pour permettre d'assigner les données à l'utilisateur.
	const { user, setUser } = useContext(UserContext)

	// State pour les inputs
	const [data, setData] = useState({
		email: "",
		password: ""
	})


	// Fonction modifier qui renvoit l'adresse email vers la page check en véhiculant la variable de l'email via le state
	const modify = () => {
		const updatedForm = { ...data };
		updatedForm.email = state;
		setData(updatedForm);
		navigate("/auth/check", { state: updatedForm.email });
	}

	// Fonction qui gère la requête de connexion
	// On utilise formData pour récupérer les valeurs de l'input. En assignant defaultValue aux inputs, on peut facilement les récupérer mais aussi
	// réassigner les valeurs du state transitionnés (en cliquant sur le bouton modifier). 
	// En évitant de passer par onChange sur les inputs on envoie les données que lorsqu'on clique sur le bouton d'envoi est pas à chaque nouvelle entrée
	// de l'utilisateur
	const handleLogin = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		// copie du tableau
		const updatedForm = { ...data };
		// Pour chaque valeur on assigne la valeur récupéré à la copie du tableau dans le state.
		formData.forEach((value, name) => {
			updatedForm[name] = value;
		});
		setData(updatedForm);
		const { email, password } = updatedForm
		queryLogin(email, password, setUser,navigate)
	
	}

	const isNotConnected = () => {
		return (<>
			<div className="title-wrap">
				<h3>Saisissez votre adresse e-mail <br></br> pour vous connecter.</h3>
			</div>
			<form action="post" onSubmit={handleLogin}>
				<div className="form-group form-modify">
					{/* Affichage avec un simple paragraphe et pour avoir les valeurs lors 
										du submit du formulaire on utilise un input type hidden pour récupéré la valeur mais l'input est caché
										*/}
					<p className="email-input">{state?.email ? state?.email : ""}</p>
					<input type="hidden" name="email" id="email" required className='input-base' defaultValue={state?.email}
					/>
					<label htmlFor="email"></label>
					<p className="btn  btn-modify" onClick={() => modify()}>Modifier</p>
				</div>
				<div className="form-group">
					<input type="password" name="password" id="password" required className='input-base' defaultValue={data.password} />
					<label htmlFor="password">Mot de passe
					</label>
				</div>
				<div className="form-sub">
					<p className='light-text'>En continuant, vous acceptez les <strong>Conditions d'utilisation </strong><br /> et vous confirmez avoir lu la  <strong>Politique de confidentialité</strong> de Chava.</p>
				</div>
				<div className="foot-wrap">
					<div className="button-wrap">
						<input type="submit" value="Valider" className='btn btn-submit' />
					</div>
					<div className="icon-wrap">
						<img src="/src/assets/media/arrow.svg" alt="" onClick={() => navigate("../")} />
					</div>
				</div>
			</form>
		</>
		)
	}



	return (
		<>
			<div id="login" className='block'>
				<div className="container">
					<div className="wraps">
					<CheckUser
					isNotConnected={isNotConnected()}
					action={()	=> navigate("../")}
					/>
					</div>
				</div>
			</div >
		</>
	)
}

export default Login