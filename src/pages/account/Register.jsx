import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-hot-toast'
import Icon from '../../components/global/Icon';

// Composant pour enregister un nouvel utilisateur
const Register = () => {
	const navigate = useNavigate();
	const location = useLocation();
	// state récupéré avec location pour récupéré l'adresse email entrée dans la page précédente et l'affiché sur la page
	const { state } = location;
	const [passwordShown, setPasswordShown] = useState(false);
	const [cpasswordShown, setcPasswordShown] = useState(false);

	// Deux fonctions pour afficher le mot de passe quand on appuie sur l'icône "yeux"
	const togglePasswordVisiblity = () => {
		setPasswordShown(passwordShown ? false : true);
	};
	const togglecPasswordVisiblity = () => {
		setcPasswordShown(cpasswordShown ? false : true);
	};

	// Chargement du state avec les valeurs renseignées vide.
	const [data, setData] = useState({
		fname: '',
		lname: '',
		age: '',
		email: '',
		tel: '',
		town: '',
		password: '',
	})

	const registerUser = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		// Copie du tableau
		const updatedForm = { ...data };
		// Pour chaque valeur on assigne la valeur récupéré à la copie du tableau dans le state.
		formData.forEach((value, name) => {
			if (name !== "confirm-password") {
				updatedForm[name] = value;
			}
		});
		setData(updatedForm);
		const { fname, lname, age, email, tel, town, password } = updatedForm
		try {
			const { data } = await axios.post('/register', {
				fname, lname, age, email, tel, town, password
			})
			if (data.error) {
				toast.error(data.error)
			} else {
				setData({})
				toast.success('Compte crée avec succés')
				navigate('/')
			}
		} catch (error) {
			console.log(error)
		}
	}

	// Fonction modifier qui renvoit l'adresse email vers la page check en véhiculant la variable de l'email via le state
	const modify = () => {
		const updatedForm = { ...data };
		updatedForm.email = state;
		setData(updatedForm);
		navigate("/account/check", { state: updatedForm.email });
	}

	return (
		<>
			<div id="register" className='block'>
				<div className="container">
					<div className="wraps">
						<div>
							<div className="title-wrap">
								<h3>Inscrivez-vous sur Chava.</h3>
							</div>
							<form action="post" onSubmit={registerUser}>
								<div className="form-subcontainer">
									<div className="form-container">
										<div className="form-group form-modify">
											{/* Affichage avec un simple paragraphe et pour avoir les valeurs lors 
											du submit du formulaire on utilise un input type hidden pour récupéré la valeur mais l'input est caché
											*/}
											<p className="email-input">{state.email}</p>
											<input type="hidden" name="email" id="email" autoComplete="email" required className='input-base' defaultValue={state.email}
											/>
											<label htmlFor="email"></label>
											<p className="btn btn-modify" onClick={() => modify()}>Modifier</p>
										</div>
										<div className="form-group">
											<input type="text" name="fname" id="fname" autoComplete="given-name" required className='input-base' defaultValue={data.fname} />
											<label htmlFor="fname">Prénom</label>
										</div>
										<div className="form-group">
											<input type="text" name="lname" id="lname" autoComplete="family-name" required className='input-base' defaultValue={data.lname} />
											<label htmlFor="lname">Nom</label>
										</div>
										<div className="form-group">
											<input type="date" name="age" id="age" autoComplete="bday" required className='input-base' placeholder='Age' defaultValue={data.age} max="2007-09-03"
												min="1923-01-01" />
											<label htmlFor="age"></label>
										</div>
									</div>
									<div className="form-container">
										<div className="form-group form-password">
											<input type={passwordShown ? "text" : "password"} name="password" id="password" autoComplete="new-password" required className='input-base input-password' defaultValue={data.password} />
											<label htmlFor="password">Mot de passe</label>
											<div className="icon-wrap"><Icon
												type="FaRegEye"
												size="2rem"
												action={togglePasswordVisiblity}
												className="icon-password"
											></Icon>
											</div>
										</div>
										<div className="form-group form-password">
											<input type={cpasswordShown ? "text" : "password"} name="confirm-password" id="confirm-password" autoComplete="new-password" required className='input-base' />
											<label htmlFor="confirm-password">Confirmer mot de passe</label>
											<div className="icon-wrap"><Icon
												type="FaRegEye"
												size="2rem"
												action={togglecPasswordVisiblity}
												className="icon-password"
											></Icon>
											</div>
										</div>
										<div className="form-group">
											<input type="text" name="town" id="town" required className='input-base' defaultValue={data.town} />
											<label htmlFor="town">Votre ville</label>
										</div>
										<div className="form-group">
											<input type="text" name="tel" id="tel" autoComplete="tel" required className='input-base' defaultValue={data.tel} />
											<label htmlFor="tel">Téléphone</label>
										</div>
									</div>
								</div>
								<div className="form-subcontainer">
									<div className="form-wrap">
										<div className="form-sub">
											<p className='light-text'>En continuant, vous acceptez les <strong>Conditions d'utilisation </strong><br /> et vous confirmez avoir lu la  <strong>Politique de confidentialité</strong> de Chava.</p>
										</div>
										<div className="form-footer">
											<div className="button-wrap">
												<input type="submit" value="Valider" className='btn btn-submit' />
											</div>
											<div className="icon-wrap">
												<img src="/src/assets/media/arrow.svg" alt="" onClick={() => navigate("../")} />
											</div>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}

export default Register