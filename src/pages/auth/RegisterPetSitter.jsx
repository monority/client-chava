import React, { useContext, useEffect, useState } from 'react'
import Button from '../../components/global/Button';
import { UserContext } from '../../../context/userContext';
import { toast } from 'react-hot-toast'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { scanPetSitter } from '../../components/query/getQuery';



// Composant pour enregistrer les utilisateurs voulant être petSitter
const RegisterPetSitter = () => {
	const { user, setUser } = useContext(UserContext);
	const navigate = useNavigate();
	const [check, setCheck] = useState("")
	const [data, setData] = useState({
		isPetSitter: true,
		description: "",
		services: {},
		pet_offer: {},
		pet_owner: {},
	});

	useEffect(() => {
		if (user && user?._id) {
		  scanPetSitter(user, setCheck, check);
		}
	  }, [user]);




	const handleForm = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const updatedForm = { ...data };

		const petFields = ["Chien", "Chat", "Lapin", "Hamster"];
		const serviceFields = ["lodging", "keep", "walking", "visit"];

		formData.forEach((value, name) => {
			if (petFields.some(field => name.includes(`owner_${field}`))) {
				updatedForm.pet_owner[name] = e.target[name].type === "checkbox" ? e.target[name].checked : value;
			} else if (petFields.some(field => name.includes(`offer_${field}`))) {
				updatedForm.pet_offer[name] = e.target[name].type === "checkbox" ? e.target[name].checked : value;
			} else if (serviceFields.includes(name)) {
				updatedForm.services[name] = e.target[name].type === "checkbox" ? e.target[name].checked : value;
			} else if (name === "description") {
				updatedForm.description = value;
			} else {
				updatedForm[name] = value;
			}
		});
	
		try {
			const { data } = await axios.put(`/addprofile/${user._id}`, updatedForm);
			if (data.error) {
				toast.error(data.error);
			} else {
				setUser({ ...user, isPetSitter: updatedForm.isPetSitter });
				navigate("/");

			}
		} catch (error) {
			console.error('Erreur serveur', error);
		}
	};


	const checkUser = () => {

		if (!user) {
			return isNotConnected();
		}
		else if (check?.profile?.isPetSitter){

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
					<Button type="submit" value="Valider" className="btn btn-submit" aria-label='Envoyer le formulaire' action={() => (navigate("../auth/check"), { replace: true })}>
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
							<input id="owner_Chat" type="checkbox" name='owner_Chat' defaultValue={data.pet_owner.Chat} />
							<label className="btn-label" htmlFor="owner_Chat">Chat</label>

						</div>
						<div className="form-sub">
							<input id="owner_Chien" type="checkbox" name='owner_Chien' defaultValue={data.pet_owner.Chien} />
							<label className="btn-label" htmlFor="owner_Chien">Chien</label>
						</div>
						<div className="form-sub">
							<input id="owner_Lapin" type="checkbox" name='owner_Lapin' defaultValue={data.pet_owner.Lapin} />
							<label className="btn-label" htmlFor="owner_Lapin">Lapin</label>
						</div>
						<div className="form-sub">
							<input id="owner_Hamster" type="checkbox" name='owner_Hamster' defaultValue={data.pet_owner.Hamster} />
							<label className="btn-label" htmlFor="owner_Hamster">Hamster</label>
						</div>
					</div>
				</div>
				<div className="form-container">
					<p>Votre animal ou animaux de compagnie</p>
					<div className="button-group">
						<div className="form-sub">
							<input id="offer_Chat" type="checkbox" name='offer_Chat' defaultValue={data.pet_offer.Chat} />
							<label className="btn-label" htmlFor="offer_Chat">Chat</label>
						</div>
						<div className="form-sub">
							<input id="offer_Chien" type="checkbox" name='offer_Chien' defaultValue={data.pet_offer.Chien} />
							<label className="btn-label" htmlFor="offer_Chien">Chien</label>
						</div>
						<div className="form-sub">
							<input id="offer_Lapin" type="checkbox" name='offer_Lapin' defaultValue={data.pet_offer.Lapin} />
							<label className="btn-label" htmlFor="offer_Lapin">Lapin</label>
						</div>
						<div className="form-sub">
							<input id="offer_Hamster" type="checkbox" name='offer_Hamster' defaultValue={data.pet_offer.Hamster} />
							<label className="btn-label" htmlFor="offer_Hamster">Hamster</label>
						</div>
					</div>
				</div>
				<div className="form-container">
					<p>Les services que vous pouvez offrir</p>
					<div className="button-group">
						<div className="form-sub">
							<input id="lodging" type="checkbox" name='lodging' defaultValue={data.services.lodging} />
							<label className="btn-label" htmlFor="lodging">Hébergement</label>
						</div>
						<div className="form-sub">
							<input id="keep" type="checkbox" name='keep' defaultValue={data.services.keep} />
							<label className="btn-label" htmlFor="keep">Garde</label>
						</div>
						<div className="form-sub">
							<input id="visit" type="checkbox" name='visit' defaultValue={data.services.visit} />
							<label className="btn-label" htmlFor="visit">Visite</label>
						</div>
						<div className="form-sub">
							<input id="walking" type="checkbox" name='walking' defaultValue={data.services.walking} />
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
							defaultValue={data.description}
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
			<div id="petsitter" className='block main'>
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