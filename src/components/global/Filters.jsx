import React, { useEffect, useState } from "react";
import users from '../users.json'
import Button from './Button';

const MultiFilters = ({ selectedFilters, setSelectedFilters, selectedService, setSelectedService, search, setSearch, bestNoteFilter, setBestNoteFilter, setMostReviewFilter, mostReviewFilter }) => {


	const [filteredItems, setFilteredItems] = useState([]);


	const filters_animals = ["Chat", "Chien", "Hamster", "Lapin"];
	const filters_services = ["Hébergement", "Nourrissage", "Garde", "Promenade"];
	const filters_note = [{
		text: "Les mieux notées",
		value: 4
	}];

	const handleFilterButtonClick = (pet_type) => {
		if (selectedFilters.includes(pet_type)) {
			let petNameFilter = selectedFilters.filter((pet) => pet !== pet_type);
			setSelectedFilters(petNameFilter);
		} else {
			setSelectedFilters([...selectedFilters, pet_type]);
		}
	};

	const handleServicesClick = (service_category) => {
		if (service_category === selectedService) {
			setSelectedService("");
		} else {
			setSelectedService(service_category);
		}
	};

	const toggleBestNoteFilter = () => {
		setBestNoteFilter(!bestNoteFilter);
		if (mostReviewFilter) {
			setMostReviewFilter(false)
		}
	};

	const toggleReviewFilter = () => {
		setMostReviewFilter(!mostReviewFilter);
		if (bestNoteFilter) {
			setBestNoteFilter(false)
		}
	};


	return (
		<>
			<div id="filter">
				<div className="filter-container">
					<h3>Sélectionner le type d'animal</h3>
					<div className="buttons-container">
						{filters_animals.map((animal_category, index) => (
							<button
								onClick={() => handleFilterButtonClick(animal_category)}
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
					<div className="filter-container">
						<div className="town-wrap">
							<h3>Sélectionner la ville</h3>
							<div className="form-group">
								<input type="text" name="town-input" className="input-base" id="town-input" onChange={(e) => setSearch(e.target.value)}
								/>
								<label htmlFor="town-input">Ville </label>
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

				</div>
			</div>
		</>
	);
};

export default MultiFilters;