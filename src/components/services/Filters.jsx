import React from "react";
import Button from '../global/Button';

// Filtre utilisé sur la page des services
const MultiFilters = ({ animalFilterActive, setAnimalFilterActive, queryAnimalFilter, search,setSearch, serviceFilterActive, setServiceFilterActive, queryServiceFilter, bestNoteFilter, setBestNoteFilter, setMostReviewFilter, mostReviewFilter }) => {

	const filters_animals = ["Chat", "Chien", "Hamster", "Lapin"];
	const filters_services = ["Hébergement", "Visite domicile", "Garde", "Promenade"];

	const petTypeKey = {
		"Chat": "offer_Chat",
		"Chien": "offer_Chien",
		"Hamster": "offer_Hamster",
		"Lapin": "offer_Lapin",
	};

	const serviceTypekey = {
		"Garde": "keep",
		"Hébergement": "lodging",
		"Visite domicile": "visit",
		"Promenade": "walking"
	}
	// Filtres qui gère les animaux
	const animalFilterClick = (pet_type) => {

		// Si le filtre sélectionné inclut le type d'animal
		if (animalFilterActive.includes(pet_type)) {
			// On utilise la méthode filter pour filtrer et exclure tout les autres types sélectionnés que celui sélectionner
			let petNameFilter = animalFilterActive.filter((pet) => pet !== pet_type);
			// On store ensuite la constante dans la props selectedService qui représente un state
			setAnimalFilterActive(petNameFilter);
		} else {
			// Sinon on copie le tableau des filtres sélectionnées et on y intégre le pet_type
			queryAnimalFilter(pet_type)
			setAnimalFilterActive([...animalFilterActive, pet_type]);
		}
	};

	// Filtre qui gére les serivces
	const serviceFilterClick = (service_category) => {
		// Si le service cliqué est le même que celui de la props on vide le tableau selectedService
		if (service_category === serviceFilterActive) {
			setServiceFilterActive("");
		} else {
			// Sinon on assigne le service cliqué à la props
			queryServiceFilter(service_category)
			setServiceFilterActive(service_category);
		}
	};

	// Filtre pour sélectionner les notes
	const toggleBestNoteFilter = () => {
		// On assigne au state/props l'inverse du filtre actuel pour le toggle
		setBestNoteFilter(!bestNoteFilter);
		// Si le filtre des utilisateurs avec le plus de notes est activé, on le désactive pour éviter d'avoir les deux en même temps 
		if (mostReviewFilter) {
			setMostReviewFilter(false)
		}
	};

	// Filtre pour les utilisateurs avec le plus de notes 
	const toggleReviewFilter = () => {
		// On assigne au state/props l'inverse du filtre actuel pour le toggle
		setMostReviewFilter(!mostReviewFilter);
		// Si le filtre des utilisateurs avec les meilleurs est activé, on le désactive pour éviter d'avoir les deux en même temps 
		if (bestNoteFilter) {
			setBestNoteFilter(false)
		}
	};

	return (
		<>
			<div className="filter-container">
				<h3>Sélectionner le type d'animal</h3>
				<div className="buttons-container">
					{filters_animals.map((pet_type, index) => (
						<button
							onClick={() => animalFilterClick(petTypeKey[pet_type])}
							className={`btn btn-filter ${animalFilterActive.includes(petTypeKey[pet_type]) ? "active" : ""}`}
							key={`filters-${index}`}
						>
							{pet_type}
						</button>
					))}
				</div>
			</div>
			<div className="filter-container">
				<h3>Sélectionner le type de service</h3>
				<div className="buttons-container">
					{filters_services.map((services_category, index) => (
						<Button
							action={() => serviceFilterClick(serviceTypekey[services_category])} // Use serviceTypeKey to translate the key
							className={`btn btn-filter ${serviceTypekey[services_category] === serviceFilterActive ? "active" : ""}`} // Compare with the translated key
							key={`filters-${index}`}
							id={index}
							data-service={serviceTypekey[services_category]} // Include the service type key as a data attribute
						>
							{services_category}
						</Button>
					))}
				</div>
			</div>

			<div className="filter-container">
				<div className="town-wrap">
					<h3>Sélectionner la ville</h3>
					<div className="form-group">
						<input type="text" name="town" id="town" autoComplete="given-name" required className='input-base' value={search}  onChange={(e) => setSearch(e.target.value)}/>
						<label htmlFor="town">Ville</label>
					</div>
				</div>
			</div>
			<div className="filter-container">
				<h3>Sélectionner les options</h3>
				<div className="buttons-container">
					<button
						onClick={toggleBestNoteFilter}
						className={`btn btn-filter ${bestNoteFilter ? "active" : ""}`}
					>
						Les mieux notées
					</button>
					<button
						onClick={toggleReviewFilter}
						className={`btn btn-filter ${mostReviewFilter ? "active" : ""}`}
					>
						Les plus de notes
					</button>

				</div>
			</div>
		</>
	);
};

export default MultiFilters;