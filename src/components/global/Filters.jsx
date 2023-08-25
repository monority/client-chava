import React, { useEffect, useState } from "react";
import items from '../users.json'
import Button from './Button';

const MultiFilters = ({ selectedFilters, setSelectedFilters }) => {
	const [filteredItems, setFilteredItems] = useState([]);
	const [selectedService, setSelectedService] = useState("");
	const filters_animals = ["Chat", "Chien", "Hamster", "Lapin"];
	const filters_services = ["Hébergement", "Nourrissage", "Garde", "Promenade"];

	const handleFilterButtonClick = (select_category) => {
		if (selectedFilters.includes(select_category)) {
			let filters = selectedFilters.filter((element) => element !== select_category);
			setSelectedFilters(filters);
		} else {
			setSelectedFilters([...selectedFilters, select_category]);
		}
	};

	const handleServicesClick = (select_category) => {
		if (select_category === selectedService) {
			setSelectedService(""); 
		} else {
			setSelectedService(select_category);
		}
	};



	useEffect(() => {
		filterItems();
	}, [selectedFilters]);

	const filterItems = () => {
		if (selectedFilters.length > 0) {
			let tempItems = items.filter((user) => {
				const serviceCategorySelected = selectedFilters.includes(user.services);
				const petCategorySelected = selectedFilters.includes(user.pet);
				return petCategorySelected && serviceCategorySelected;
			});

			setFilteredItems(tempItems);
		} else {
			setFilteredItems([...items]);
		}
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
							action={() => handleFilterButtonClick(services_category)}
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