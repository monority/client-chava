import React from "react";
import Button from './Button';

// Filtre utilisé sur la page des services
const MultiFilters = ({ selectedFilters, setSelectedFilters, selectedService, setSelectedService, search, setSearch, bestNoteFilter, setBestNoteFilter, setMostReviewFilter, mostReviewFilter }) => {

	const filters_animals = ["Chat", "Chien", "Hamster", "Lapin"];
	const filters_services = ["Hébergement", "Visite domicile", "Garde", "Promenade"];

	// Filtres qui gère les animaux
	const handleAnimalFilterClick = (pet_type) => {
		// Si le filtre sélectionné inclut le type d'animal
		if (selectedFilters.includes(pet_type)) {
			// On utilise la méthode filter pour filtrer et exclure tout les autres types sélectionnés que celui sélectionner
			let petNameFilter = selectedFilters.filter((pet) => pet !== pet_type);
			// On store ensuite la constante dans la props selectedService qui représente un state
			setSelectedFilters(petNameFilter);
		} else {
			// Sinon on copie le tableau des filtres sélectionnées et on y intégre le pet_type
			setSelectedFilters([...selectedFilters, pet_type]);
		}
	};

	// Filtre qui gére les serivces
	const handleServicesClick = (service_category) => {
		// Si le service cliqué est le même que celui de la props on vide le tableau selectedService
		if (service_category === selectedService) {
			setSelectedService("");
		} else {
			// Sinon on assigne le service cliqué à la props
			setSelectedService(service_category);
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
					{filters_animals.map((animal_category, index) => (
						<button
							onClick={() => handleAnimalFilterClick(animal_category)}
							className={`btn btn-filter ${selectedFilters?.includes(animal_category) ? "active" : ""
								}`}
							key={`filters-${index}`}
						>
							{animal_category}
						</button>
					))}
				</div>
			</div>
			<div className="filter-container">
				<h3>Sélectionner le type de service</h3>
				<div className="buttons-container">
					{filters_services.map((services_category, index) => (
						<Button
							action={() => handleServicesClick(services_category)}
							className={`btn btn-filter ${services_category === selectedService ? "active" : ""}`}
							key={`filters-${index}`}
							id={index}
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
						<input type="text" name="town" id="town" autoComplete="given-name" required className='input-base'/>
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