import React, { useContext, useEffect, useState } from 'react'
import Button from '../../components/global/Button';
import { UserContext } from '../../../context/userContext';
import { toast } from 'react-hot-toast'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



// Composant pour enregistrer les utilisateurs voulant être petSitter
const RegisterPetSitter = () => {

	const { user, setUser } = useContext(UserContext);
	const navigate = useNavigate();

	useEffect(() => {
		console.log(user)
	}, [])


	const [data, setData] = useState({
		options: {
			petSitter: true,
			description: "",
			pet: {
				owner_cat: false,
				owner_dog: false,
				owner_rabbit: false,
				owner_hamster: false,
			},
			petOffer: {
				offer_cat: false,
				offer_dog: false,
				offer_rabbit: false,
				offer_hamster: false,
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

		const petFields = ["cat", "dog", "rabbit", "hamster"];
		const serviceFields = ["lodging", "keep", "walking", "visit"];

		formData.forEach((value, name) => {
			if (petFields.some(field => name.includes(`owner_${field}`))) {
				updatedForm.options.pet[name] = e.target[name].type === "checkbox" ? e.target[name].checked : value;
			} else if (petFields.some(field => name.includes(`offer_${field}`))) {
				updatedForm.options.petOffer[name] = e.target[name].type === "checkbox" ? e.target[name].checked : value;
			} else if (serviceFields.includes(name)) {
				updatedForm.options.services[name] = e.target[name].type === "checkbox" ? e.target[name].checked : value;
			} else {
				updatedForm[name] = value;
			}
		});
		console.log(updatedForm)
		try {
			const { data } = await axios.put(`/registerPetSitter/${user._id}`, { options: updatedForm.options });
			if (data.error) {
				toast.error(data.error);
			} else {
				setUser(prevUser => ({
					...prevUser,
					options: { ...prevUser.options, petSitter: updatedForm.options.petSitter }
				}));
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
		// else if (user.options.petSitter) {

		// 	return isAlreadyRegister();

		// }
		else {
			return isConnected();
		}
	}

	const isAlreadyRegister = () => {
		return <>
			<h1>Vous êtes déja inscrit.</h1>
		</>
	}

	const isNotConnected = () => {
		return (<>
			<h1>Pour accéder à cette fonction, vous devez vous connecter.</h1>
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
							<input id="owner_cat" type="checkbox" name='owner_cat' defaultValue={data.options.pet.owner_cat} />
							<label className="btn-label" htmlFor="owner_cat">Chat</label>

						</div>
						<div className="form-sub">
							<input id="owner_dog" type="checkbox" name='owner_dog' defaultValue={data.options.pet.owner_dog} />
							<label className="btn-label" htmlFor="owner_dog">Chien</label>
						</div>
						<div className="form-sub">
							<input id="owner_rabbit" type="checkbox" name='owner_rabbit' defaultValue={data.options.pet.owner_rabbit} />
							<label className="btn-label" htmlFor="owner_rabbit">Lapin</label>
						</div>
						<div className="form-sub">
							<input id="owner_hamster" type="checkbox" name='owner_hamster' defaultValue={data.options.pet.owner_hamster} />
							<label className="btn-label" htmlFor="owner_hamster">Hamster</label>
						</div>
					</div>
				</div>
				<div className="form-container">
					<p>Votre animal ou animaux de compagnie</p>
					<div className="button-group">
						<div className="form-sub">
							<input id="offer_owner" type="checkbox" name='offer_cat' defaultValue={data.options.petOffer.offer_cat} />
							<label className="btn-label" htmlFor="offer_cat">Chat</label>
						</div>
						<div className="form-sub">
							<input id="offer_dog" type="checkbox" name='offer_dog' defaultValue={data.options.petOffer.offer_dog} />
							<label className="btn-label" htmlFor="offer_dog">Chien</label>
						</div>
						<div className="form-sub">
							<input id="offer_rabbit" type="checkbox" name='offer_rabbit' defaultValue={data.options.petOffer.offer_rabbit} />
							<label className="btn-label" htmlFor="offer_rabbit">Lapin</label>
						</div>
						<div className="form-sub">
							<input id="offer_hamster" type="checkbox" name='offer_hamster' defaultValue={data.options.petOffer.offer_hamster} />
							<label className="btn-label" htmlFor="offer_hamster">Hamster</label>
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