// React
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

// Components 
import { queryCheck } from '../../components/query/authQuery';
import  CheckUser from '../../components/auth/checkUser';
import { UserContext } from '../../../context/userContext';

// Page pour checker si l'email est existant dans la base données, si il existe, on envoit sur la page Login, sinon on l'envoit 
// sur la page d'enregistrement
const Check = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { user, setUser } = useContext(UserContext)

	// Chargement de location pour détecter si un state est transmis via le composant login // Pour récupérer l'adresse mail quand l'utilisateur
	// veut modifier son email (sur la page login et register)
	const { state } = location;

	// Chargement du state avec l'adresse email vide
	const [data, setData] = useState({
		email: "",
	})

	// Fonction pour s'occuper d'envoyer les infos aux serveurs et de les enregistrer dans le state
	// On utilise formData pour récupérer les valeurs de l'input. En assignant defaultValue aux inputs, on peut facilement les récupérer mais aussi
	// réassigner les valeurs du state transitionnés (en cliquant sur le bouton modifier). 
	// En évitant de passer par onChange sur les inputs on envoie les données que lorsqu'on clique sur le bouton d'envoi est pas à chaque nouvelle entrée
	// de l'utilisateur
	const handleForm = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const dataSent = { ...data };
		formData.forEach((value, name) => {
			dataSent[name] = value;
		});
		setData(dataSent)
		const { email } = dataSent;
		queryCheck(email, navigate, dataSent);

	}

	// Fonction pour détecter si le state est existant (le state envoyé depuis les pages register/login quand l'utilisateur a cliqué sur modifier)
	const modifyDetect = () => {
		if (state) {
			const copyArray = { ...state };
			setData(copyArray);
		}
		else return false;
	}
	// le useEffect permettant de lancer la fonction modify
	useEffect(() => {
		modifyDetect();
	});

	const isNotConnected = () => {
		return (
			<>
				<div className="title-wrap">
					<h3>Saisissez votre adresse e-mail <br></br>pour nous rejoindre ou vous connecter.</h3>
				</div>
				<form action="post" onSubmit={handleForm}>
					<div className="form-group">
						<input type="email" name="email" id="email" required className='input-base' defaultValue={state ? state.email : data.email}
						/>
						<label htmlFor="email">Email</label>
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
		<> { }
			<div id="check" className='block'>
				<div className="container">
					<div className="wraps">
					<CheckUser
					isNotConnected={isNotConnected()}
					action={()	=> navigate("/")}
					/>
					</div>
				</div>
			</div>

		</>
	)
}

export default Check