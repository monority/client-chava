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
	const [limit, setLimit] = useState(4); // Initial limit for pagination
	const [page, setPage] = useState(1); // Initial page for pagination

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
	}, [filter, selectedService, search, bestNoteFilter, mostReviewFilter, page]);

	// requête vers le serveur pour charger les utilisateurs. On remplit le state avec la réponse.
	const usersBase = async () => {
		try {
			const { data } = await axios.get(`/getpetsitters?limit=${limit}&page=${page}`);
			if (data.error) {
				toast.error(data.error);
			} else {
				setUserList(prevList => (page === 1 ? data : [...prevList, ...data]));

			}
		} catch (error) {
			console.log(error);
		}
	};
	const queryAnimalFilter = async (animal_type) => {
		try {
			const { data } = await axios.get(`/animalsfilter/${animal_type}`);
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
			const { data } = await axios.get(`/servicesfilter/${service_type}`);
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
	const loadMore = () => {
		setPage(page + 1);
	};

	const loadMoreButton = loaded && userList.length >= limit * page && (
		<button onClick={loadMore} className="btn btn-load">
			Charger plus d'utilisateurs
		</button>
	);


	const filteredUsers = userList.filter(user => {
		const searchFilter = search.length === 0 || user.user_id.town.toLowerCase().includes(search.toLowerCase());
		const bestNoteSelected = !bestNoteFilter || (user.user_id.rating && user.user_id.rating > 4.5);
		const mostReviewSelected = !mostReviewFilter || user.user_id.rating > 0;

		// on retourne toutes les variables
		return searchFilter && bestNoteSelected && mostReviewSelected;
		// Le sort permet de ranger du plus grand au plus petit par rapport aux nombres de notes total des utilisateurs.
	}).sort((a, b) => mostReviewFilter ? b.noteNumber - a.noteNumber : 0);


	const listUsers = filteredUsers.map(user => (
		<Card
			// on utilise nanoid pour la key pour avoir un id unique pour éviter l'erreur des childs avec le même id
			key={nanoid()}
			id={user._id}
			description={user.description}
			firstname={user.user_id.fname}
			lastname={user.user_id.lname}
			services={Object.keys(user.services)
				.filter(serviceKey => user.services[serviceKey])
				.map(serviceKey => getServiceLabel(serviceKey))
				.join(', ')}

			petoffer={Object.keys(user.pet_offer)
				.filter(animalKey => user.pet_offer[animalKey])
				.map(animalKey => getAnimalsOffer(animalKey))
				.join(', ')}
			petowner={Object.keys(user.pet_owner)
				.filter(animalKey => user.pet_owner[animalKey])
				.map(animalKey => getAnimalsOwner(animalKey))
				.join(', ')}
			town={user.user_id.town}
			ratings={user.user_id.rating}
			ratingsNumber={user.user_id.ratingNumber}
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
							{loadMoreButton}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ServicesList;
