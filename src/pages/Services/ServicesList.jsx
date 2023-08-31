import React, { useState, useEffect } from 'react';
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
	const [selectedService, setSelectedService] = useState([]);
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
		usersBase();
	}, []);

	// requête vers le serveur pour charger les utilisateurs. On remplit le state avec la réponse.
	const usersBase = async () => {
		try {
			const { data } = await axios.get('/users');
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

	const showUsers = () => {
		if (!loaded) {
			return null;
		}
		else {
			// Le state filtré avec la méthode includes pour inclure les éléments contenant les données attendues.
			// Pour la ville on utilise toLowerCase pour avoir la ville recherché même si dans le serveur la ville est affiché avec une 
			// majuscule
			const filteredUsers = userList.filter(user => {
				const isPetFiltered = filter.length === 0 || filter.includes(user.options.pet);
				const isServiceFiltered = selectedService.length === 0 || selectedService.includes(user.options.services);
				const searchFilter = search.length === 0 || user.town.toLowerCase().includes(search.toLowerCase());
				const bestNoteSelected = !bestNoteFilter || (user.options.rating && user.options.rating > 4.5);
				const mostReviewSelected = !mostReviewFilter || user.options.rating > 0;

				// on retourne toutes les variables
				return isPetFiltered && isServiceFiltered && searchFilter && bestNoteSelected && mostReviewSelected;
				// Le sort permet de ranger du plus grand au plus petit par rapport aux nombres de notes total des utilisateurs.
			}).sort((a, b) => mostReviewFilter ? b.noteNumber - a.noteNumber : 0);

			// On utilise le composant Card pour afficher le contenu dynamiquement et on utilise la constante filteredUsers
			// pour recréer un tableau filtré par rapport à nos filtres souhaités
			const listUsers = filteredUsers.map(user => (
				<Card
					// on utilise nanoid pour la key pour avoir un id unique pour éviter l'erreur des childs avec le même id
					key={nanoid()}
					id={user._id}
					firstname={user.fname}
					lastname={user.lname}
					services={Object.keys(user.options.services).filter(service => user.options.services[service])}
					petOffer={Object.keys(user.options.petOffer).filter(petOffer => user.options.petOffer[petOffer])}
					pet={Object.keys(user.options.pet).filter(pet => user.options.pet[pet])}
					image={user.options.images}
					town={user.town}
					note={user.options.rating}
					noteNumber={user.options.ratingNumber}
					description={user.options.description}
					action={() => navigation(user._id)}
				/>
			));
			return listUsers;
		}
	};

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
									selectedFilters={filter}
									setSelectedFilters={setFilter}
									selectedService={selectedService}
									setSelectedService={setSelectedService}
									search={search}
									setSearch={setSearch}
									bestNoteFilter={bestNoteFilter}
									setBestNoteFilter={setBestNoteFilter}
									setMostReviewFilter={setMostReviewFilter}
									mostReviewFilter={mostReviewFilter}
								/>
							</div>
						</div>
						<div className="wrap" id='list'>
							<div className="title-wrap box-style">
								<h2>Nos Utilisateurs</h2>
							</div>
							{/* On a défini une variable dans le state, si la liste des utilisateurs n'est pas chargé on affiche un chargement, sinon
							on affiche la liste des utilisateurs renvoyée par la fonction
							*/}
							{!loaded ?
								<p>Chargement des utilisateurs</p> :
								showUsers()
							}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ServicesList;
