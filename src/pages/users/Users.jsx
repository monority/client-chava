import React, { useState } from 'react';
import Card from '../../components/global/Card';
import users from '../../components/users.json';
import { nanoid } from 'nanoid';
import MultiFilters from '../../components/global/Filters';
import { useNavigate } from 'react-router-dom';

const Users = () => {

	

	const [filter, setFilter] = useState([]);
	const [bestNoteFilter, setBestNoteFilter] = useState(false)
	const [selectedService, setSelectedService] = useState([]);
	const [search, setSearch] = useState("")
	const [mostReviewFilter, setMostReviewFilter] = useState(false);

	const [userList, setUserList] = useState(users);

	const navigate = useNavigate();
	const navigation = (id) => {
		navigate(`../users/${id}`, { replace: true }, { state: userList });
	}

	const filteredUsers = userList.filter(user => {
		const isPetFiltered = filter.length === 0 || filter.includes(user.pet);
		const isServiceFiltered = selectedService.length === 0 || selectedService.includes(user.services);
		const searchFilter = search.length === 0 || user.town.toLowerCase().includes(search.toLowerCase());
		const bestNoteSelected = !bestNoteFilter || (user.note && user.note > 4.5);
		const mostReviewSelected = !mostReviewFilter || user.noteNumber > 0;

		return isPetFiltered && isServiceFiltered && searchFilter && bestNoteSelected && mostReviewSelected;
	}).sort((a, b) => mostReviewFilter ? b.noteNumber - a.noteNumber : 0);



	const listUsers = filteredUsers.map(user => {
		return (
			<Card
				key={nanoid()}
				id={user.id}
				firstname={user.firstname}
				lastname={user.lastname}
				services={user.services}
				image=""
				town={user.town}
				pet={user.pet}
				note={user.note}
				noteNumber={user.noteNumber}
				description={user.description}
				action={() => navigation(user.id)}
			/>
		);
	});

	return (
		<>
			<div id="list-Users" className="block">
				<div className="container">
					<div className="wraps">
						<div className="wrap" id='filter'>
							<div className="sticky">
								<h2>Liste des filtres</h2>
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

							{listUsers}

						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Users;
