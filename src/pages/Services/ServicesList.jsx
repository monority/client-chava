import React, { useState, useEffect, Component } from 'react';
import Card from '../../components/global/Card';
import { nanoid } from 'nanoid';
import MultiFilters from '../../components/global/Filters';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast'
import axios from 'axios';

const ServicesList = () => {

	// Chargement des states assignés avec les props dans le composant Filters
	const [filter, setFilter] = useState([]);
	const [bestNoteFilter, setBestNoteFilter] = useState(false)
	const [selectedService, setSelectedService] = useState("");
	const [search, setSearch] = useState("")
	const [mostReviewFilter, setMostReviewFilter] = useState(false);
	const [loaded, setLoaded] = useState(false);
	const [userList, setUserList] = useState([]);

	const navigate = useNavigate();
	// navigation vers le profil de l'utilisateur cliqué avec l'id en paramètre pour afficher via l'id de l'utilisateur.
	const navigation = (id) => {
		navigate(`../users/${id}`, { replace: true }, { state: userList });
	}

	// le useEffect est utilisé pour chargé la liste des utilisateurs.
	useEffect(() => {
		if (filter.length === 0 && selectedService === "" && search === "" && !bestNoteFilter && !mostReviewFilter) {
			usersBase();
		}
	}, [filter, selectedService, search, bestNoteFilter, mostReviewFilter]);

	// requête vers le serveur pour charger les utilisateurs. On remplit le state avec la réponse.
	const usersBase = async () => {
		try {
			const { data } = await axios.get('/users/?_limit=10');
			if (data.error) {
				toast.error(data.error);
			} else {
				setUserList(data);
				setLoaded(true);
			}
		} catch (error) {
			console.log(error);
		}
	};
	const queryAnimalFilter = async (animal_type) => {
		try {
			const { data } = await axios.get(`/animalsFilter/${animal_type}`);
			if (data.error) {
				toast.error(data.error);
			} else {
				setUserList(data);
			}
		} catch (error) {
			console.log(error);
		}
	};
	const queryServiceFilter = async (service_type) => {

		try {
			const { data } = await axios.get(`/servicesFilter/${service_type}`);
			if (data.error) {
				toast.error(data.error);
			} else {
				setUserList(data);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const getServiceLabel = (serviceKey) => {
		const serviceLabels = {
			keep: "Garde",
			lodging: "Hébergement",
			visit: "Visite",
			walking: "Promenade"
		};

		return serviceLabels[serviceKey];
	};

	const getAnimalsOwner = (animalKey) => {
		const animalsLabel = {
			owner_Chat: "Chat",
			owner_Chien: "Chien",
			owner_Lapin: "Lapin",
			owner_Hamster: "Hamster"
		};

		return animalsLabel[animalKey];
	};
	const getAnimalsOffer = (animalKey) => {
		const animalsLabel = {
			offer_Chat: "Chat",
			offer_Chien: "Chien",
			offer_Lapin: "Lapin",
			offer_Hamster: "Hamster"
		};

		return animalsLabel[animalKey];
	};




	const listUsers = userList.map(user => (
		<Card
			// on utilise nanoid pour la key pour avoir un id unique pour éviter l'erreur des childs avec le même id
			key={nanoid()}
			id={user._id}
			firstname={user.fname}
			lastname={user.lname}
			services={Object.keys(user.options.services)
				.filter(serviceKey => user.options.services[serviceKey])
				.map(serviceKey => getServiceLabel(serviceKey))
				.join(', ')}

			pet={Object.keys(user.options.pet)
				.filter(animalKey => user.options.pet[animalKey])
				.map(animalKey => getAnimalsOwner(animalKey))
				.join(', ')}
			petOffer={Object.keys(user.options.petOffer)
				.filter(animalKey => user.options.petOffer[animalKey])
				.map(animalKey => getAnimalsOffer(animalKey))
				.join(', ')}
			image={user.options.images}
			town={user.town}
			note={user.options.rating}
			noteNumber={user.options.ratingNumber}
			description={user.options.description}
			action={() => navigation(user._id)}

		/>
	))
	return (
		<>
			<div id="list-Users" className="block">
				<div className="container">
					<div className="wraps">
						<div className="wrap" id='filter'>
							<div className="sticky">
								<h2>Liste des filtres</h2>
								{/* 
								On récupère le composant Multifilters et on assigne les props aux states locaux
								*/}
								<MultiFilters
									animalFilterActive={filter}
									setAnimalFilterActive={setFilter}
									serviceFilterActive={selectedService}
									setServiceFilterActive={setSelectedService}
									search={search}
									setSearch={setSearch}
									bestNoteFilter={bestNoteFilter}
									setBestNoteFilter={setBestNoteFilter}
									setMostReviewFilter={setMostReviewFilter}
									mostReviewFilter={mostReviewFilter}
									queryAnimalFilter={queryAnimalFilter}
									queryServiceFilter={queryServiceFilter}
								/>

							</div>
						</div>
						<div className="wrap" id='list'>
							<div className="title-wrap box-style">
								<h2>Nos Utilisateurs</h2>
							</div>
							{listUsers}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ServicesList;
