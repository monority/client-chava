import React, { useContext, useEffect, useState } from "react";
import { UserContext } from '../../../context/userContext';
import CardHome from "../../components/home/CardHome";
import { toast } from 'react-hot-toast'
import axios from 'axios';
import { nanoid } from "nanoid";
import { Button, message, Popconfirm } from 'antd';

const Administration = () => {
	const confirm = (user) => {
		deleteuser(user);

	};
	const cancel = (e) => {
		message.error('Opération annulée');
	};
	const { user, setUser } = useContext(UserContext);
	const [users, setUsers] = useState([]);

	const usersBase = async () => {
		try {
			const { data } = await axios.get(`/getusershome`);
			if (data.error) {
				toast.error(data.error);
			} else {
				setUsers(data);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		usersBase()
	}, [])


	const deleteuser = async (user) => {
		try {
			const { data } = await axios.delete(`/deleteuser/${user._id}`);
			if (data.error) {
				toast.error(data.error)
			} else {
				toast.success('Suppression reussi');
				const copyUsers = [...users];
				let position = copyUsers.indexOf(user);
				copyUsers.splice(position, 1);
				setUsers(copyUsers);
			}
		} catch (error) {
			console.log(error);
		}

	}
	const userList = users.map(user => (
		<CardHome
			// on utilise nanoid pour la key pour avoir un id unique pour éviter l'erreur des childs avec le même id
			key={nanoid()}
			id={user._id}
			fname={user.fname}
			lname={user.lname}
			town={user.town}
			showButton="true"
			className="box-white box-admin"
			classNamebutton="btn btn-delete"
			confirm={() => confirm(user)}
			cancel={(e) => cancel(e)}

		/>
	))

	return (
		<>
			{user && user.isAdmin ? (
				<div id="administration" className="block">
					<div className="container">
						<div className="wraps">
							<div className="title-wrap">

								<h1>Bienvenue sur la page administration</h1>
								<p>Vous pouvez gérer les différents utilisateurs</p>
							</div>
							<div className="box-container">
								{userList}
							</div>
						</div>
					</div>
				</div>) : (<h1>Vous n'êtes pas administrateur ! </h1>)}



		</>
	)
}

export default Administration