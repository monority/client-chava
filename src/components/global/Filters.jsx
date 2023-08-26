import React, { useEffect, useState } from "react";
import items from '../users.json'
import Button from './Button';

const MultiFilters = ({ selectedFilters, setSelectedFilters , selectedService,setSelectedService}) => {


	const [filteredItems, setFilteredItems] = useState([]);

	
	const filters_animals = ["Chat", "Chien", "Hamster", "Lapin"];
	const filters_services = ["Hébergement", "Nourrissage", "Garde", "Promenade"];

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
			console.log(selectedService);
		} else {
			setSelectedService(service_category);
		}
	};



	useEffect(() => {
		filterItems();
	}, [selectedFilters, selectedService]);


	const filterItems = () => {
		let tempItems = items.filter((user) => {
		  const serviceCategorySelected = selectedService === "" || user.services === selectedService;
		  const petCategorySelected = selectedFilters.length === 0 || selectedFilters.includes(user.pet);
		  return petCategorySelected && serviceCategorySelected; 
		});
	
		setFilteredItems(tempItems);
	  };
	return (
		<>
			<div id="filter">
				<div className="animals-container">
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
				<div className="services-container">
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
			</div>
		</>
	);
};

export default MultiFilters;