import React, { useContext, useEffect, useState } from 'react'
import Button from '../../components/global/Button';
import { UserContext } from '../../../context/userContext';
import { toast } from 'react-hot-toast'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



// Composant pour enregistrer les utilisateurs voulant être petSitter
const RegisterPetSitter = () => {

	const { user, setUser } = useContext(UserContext);
	const [userId, setUserId] = useState();
	const navigate = useNavigate();



	const [data, setData] = useState({
		options: {
			petSitter: true,
			description: "",
			pet: {
				owner_Chat: false,
				owner_Chien: false,
				owner_Lapin: false,
				owner_Hamster: false,
			},
			petOffer: {
				offer_Chat: false,
				offer_Chien: false,
				offer_Lapin: false,
				offer_Hamster: false,
			},
			services: {
				keep: false,
				lodging: false,
				walking: false,
				visit: false,
			}
		}
	});
	const handleForm = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const updatedForm = { ...data };

		const petFields = ["Chien", "Chat", "Lapin", "Hamster"];
		const serviceFields = ["lodging", "keep", "walking", "visit"];

		formData.forEach((value, name) => {
			if (petFields.some(field => name.includes(`owner_${field}`))) {
				updatedForm.options.pet[name] = e.target[name].type === "checkbox" ? e.target[name].checked : value;
			} else if (petFields.some(field => name.includes(`offer_${field}`))) {
				updatedForm.options.petOffer[name] = e.target[name].type === "checkbox" ? e.target[name].checked : value;
			} else if (serviceFields.includes(name)) {
				updatedForm.options.services[name] = e.target[name].type === "checkbox" ? e.target[name].checked : value;
			} else if (name === "description") { // Check for the description field
				updatedForm.options.description = value; // Set the description property
			} else {
				updatedForm[name] = value;
			}
		});
		try {
			const { data } = await axios.put(`/registerPetSitter/${user._id}`, { options: updatedForm.options });
			if (data.error) {
				toast.error(data.error);
			} else {
				setUser(prevUser => ({
					...prevUser,
					options: { ...prevUser.options, petSitter: updatedForm.options.petSitter }
				}));
				setData(updatedForm)
				setUser(updatedForm)

				navigate('/');
			}
		} catch (error) {
			console.error('Error Server', error);
		}
	};
	const checkUser = () => {

		if (!user) {
			return isNotConnected();
		}
		else if (user.options.petSitter) {

			return isAlreadyRegister();

		}
		else {
			return isConnected();
		}
	}

	const isAlreadyRegister = () => {
		return <>
			<div className="wrap-login">
				<h1>Vous êtes déja inscrit.</h1>
				<div className="btn-wrap">

					<Button type="submit" value="Valider" className="btn btn-list" aria-label='Envoyer le formulaire' action={() => (navigate("../services"), { replace: true })}>
						Consulter les pet sitter
					</Button>
				</div>
			</div>
		</>
	}

	const isNotConnected = () => {
		return (<>
			<div className="wrap-login">
				<h1>Pour accéder à cette fonction, vous devez vous connecter.</h1>
				<div className="btn-wrap">
					<Button type="submit" value="Valider" className="btn btn-submit" aria-label='Envoyer le formulaire' action={() => (navigate("../account/check"), { replace: true })}>
						Authentification
					</Button>
					<Button type="submit" value="Valider" className="btn btn-list" aria-label='Envoyer le formulaire' action={() => (navigate("../services"), { replace: true })}>
						Consulter les pet sitter
					</Button>
				</div>
			</div>
		</>)
	}
	const isConnected = () => {
		return (<>
			<div className="title-wrap">
				<h1>Rejoigner notre communauté de pet sitter et profiter de nos services</h1>
			</div>
			<hr />
			<form action="post" onSubmit={handleForm}>
				<div className="form-container">
					<p>Les animaux que vous pouvez prendre en charge</p>
					<div className="button-group">
						<div className="form-sub">
							<input id="owner_Chat" type="checkbox" name='owner_Chat' defaultValue={data.options.pet.owner_Chat} />
							<label className="btn-label" htmlFor="owner_Chat">Chat</label>

						</div>
						<div className="form-sub">
							<input id="owner_Chien" type="checkbox" name='owner_Chien' defaultValue={data.options.pet.owner_Chien} />
							<label className="btn-label" htmlFor="owner_Chien">Chien</label>
						</div>
						<div className="form-sub">
							<input id="owner_Lapin" type="checkbox" name='owner_Lapin' defaultValue={data.options.pet.owner_Lapin} />
							<label className="btn-label" htmlFor="owner_Lapin">Lapin</label>
						</div>
						<div className="form-sub">
							<input id="owner_Hamster" type="checkbox" name='owner_Hamster' defaultValue={data.options.pet.owner_Hamster} />
							<label className="btn-label" htmlFor="owner_Hamster">Hamster</label>
						</div>
					</div>
				</div>
				<div className="form-container">
					<p>Votre animal ou animaux de compagnie</p>
					<div className="button-group">
						<div className="form-sub">
							<input id="offer_Chat" type="checkbox" name='offer_Chat' defaultValue={data.options.petOffer.offer_Chat} />
							<label className="btn-label" htmlFor="offer_Chat">Chat</label>
						</div>
						<div className="form-sub">
							<input id="offer_Chien" type="checkbox" name='offer_Chien' defaultValue={data.options.petOffer.offer_Chien} />
							<label className="btn-label" htmlFor="offer_Chien">Chien</label>
						</div>
						<div className="form-sub">
							<input id="offer_Lapin" type="checkbox" name='offer_Lapin' defaultValue={data.options.petOffer.offer_Lapin} />
							<label className="btn-label" htmlFor="offer_Lapin">Lapin</label>
						</div>
						<div className="form-sub">
							<input id="offer_Hamster" type="checkbox" name='offer_Hamster' defaultValue={data.options.petOffer.offer_Hamster} />
							<label className="btn-label" htmlFor="offer_Hamster">Hamster</label>
						</div>
					</div>
				</div>
				<div className="form-container">
					<p>Les services que vous pouvez offrir</p>
					<div className="button-group">
						<div className="form-sub">
							<input id="lodging" type="checkbox" name='lodging' defaultValue={data.options.services.lodging} />
							<label className="btn-label" htmlFor="lodging">Hébergement</label>
						</div>
						<div className="form-sub">
							<input id="keep" type="checkbox" name='keep' defaultValue={data.options.services.keep} />
							<label className="btn-label" htmlFor="keep">Garde</label>
						</div>
						<div className="form-sub">
							<input id="visit" type="checkbox" name='visit' defaultValue={data.options.services.visit} />
							<label className="btn-label" htmlFor="visit">Visite</label>
						</div>
						<div className="form-sub">
							<input id="walking" type="checkbox" name='walking' defaultValue={data.options.services.walking} />
							<label className="btn-label" htmlFor="walking">Promenade</label>
						</div>
					</div>
				</div>
				<div className="form-container">
					<p>Renseigner une description qui sera affiché sur profil (votre animal, votre demande..)</p>
					<div className="form-group">
						<textarea
							className='input-base input-message'
							type="text"
							name="description"
							id='description'
							required
							defaultValue={data.options.description}
						/>
						<label htmlFor="description">Votre message*</label>
					</div>
				</div>
				<div className="form-button">
					<Button type="submit" value="Valider" className="btn btn-submit" aria-label='Envoyer le formulaire'>
						Valider
					</Button>
				</div>
			</form>
		</>
		)
	}

	return (
		<>
			<div id="petsitter" className='block'>
				<div className="container">
					<div className="wraps">
						{checkUser()}
					</div>
				</div>
			</div>

		</>
	)
}

export default RegisterPetSitter