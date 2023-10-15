import React, { useContext, useEffect, useState } from "react";
import { UserContext } from '../../../context/userContext';
import CardHome from "../../components/home/CardHome";
import { toast } from 'react-hot-toast'
import axios from 'axios';
import { nanoid } from "nanoid";
import { Button, message, Popconfirm } from 'antd';

const Administration = () => {
	const confirm = (id) => {
		deleteuser(id);
	};
	const cancel = (e) => {
		message.error('Opération annulée');
	};
	const { user, setUser } = useContext(UserContext);
	const [users, setUsers] = useState([]);
	const loggeduser = user;
	const usersBase = async () => {
		try {
			const { data } = await axios.get(`/getallusers`);
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


	const deleteuser = async (id) => {
		try {
		  const { data } = await axios.delete(`/deleteuser?userid=${id}&isadmin=${loggeduser?.isAdmin}`);
		  if (data.error) {
			toast.error(data.error);
		  } else {
			const copyUsers = [...users];
			const position = copyUsers.findIndex(user => user._id === id);
			if (position !== -1) {
			  copyUsers.splice(position, 1);
			  setUsers(copyUsers);
			  toast.success('Suppression réussie');
			}
		  }
		} catch (error) {
		  console.log(error);
		  toast.error('Une erreur s\'est produite lors de la suppression.');
		}
	  };
	  
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
				confirm={() => confirm(user?._id)}
				cancel={(e) => cancel(e)}

			/>
		))

		return (
			<>
				{user && user.isAdmin ? (
					<div id="administration" className="block main">
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