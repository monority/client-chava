import React, { useState, useEffect } from 'react';
import Card from '../../components/global/Card';
import users from '../../components/users.json';
import { nanoid } from 'nanoid';
import MultiFilters from '../../components/global/Filters';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast'
import axios from 'axios';

const Users = () => {

	const [filter, setFilter] = useState([]);
	const [bestNoteFilter, setBestNoteFilter] = useState(false)
	const [selectedService, setSelectedService] = useState([]);
	const [search, setSearch] = useState("")
	const [mostReviewFilter, setMostReviewFilter] = useState(false);
	const [loaded, setLoaded] = useState(false);
	const [userList, setUserList] = useState([]);

	useEffect(() => {
		usersBase();
		console.log(userList)
	}, []);

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

	const navigate = useNavigate();
	const navigation = (id) => {
		navigate(`../users/${id}`, { replace: true }, { state: userList });
	}

	const showUsers = () => {
		if (!loaded) {
			return null;
		}
		else {
			const filteredUsers = userList.filter(user => {
				const isPetFiltered = filter.length === 0 || filter.includes(user.options.pet);
				const isServiceFiltered = selectedService.length === 0 || selectedService.includes(user.options.services);
				const searchFilter = search.length === 0 || user.town.toLowerCase().includes(search.toLowerCase());
				const bestNoteSelected = !bestNoteFilter || (user.options.rating && user.options.rating > 4.5);
				const mostReviewSelected = !mostReviewFilter || user.options.rating > 0;

				return isPetFiltered && isServiceFiltered && searchFilter && bestNoteSelected && mostReviewSelected;
			}).sort((a, b) => mostReviewFilter ? b.noteNumber - a.noteNumber : 0);

			const listUsers = filteredUsers.map(user => (
				<Card
					key={nanoid()}
					id={user._id}
					firstname={user.fname}
					lastname={user.lname}
					services={user.options.services}
					image={user.options.images}
					town={user.town}
					pet={user.options.pet}
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

export default Users;
