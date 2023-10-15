// React
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useLocation, useParams } from 'react-router-dom'

// Components 
import { handleLogout, queryCheck } from '../../components/query/authQuery';
import CheckUser from '../../components/auth/checkUser';
import { UserContext } from '../../../context/userContext';
import { convertDate } from '../../components/global/convertDate';
import { userById } from '../../components/query/getQuery';

// Dépendances 
import { toast } from 'react-hot-toast'
import axios from 'axios';
import { Button, message, Popconfirm } from 'antd';

const MyAccount = () => {
	const confirm = (id) => {
		deleteAccount(id);
	};
	const cancel = (e) => {
		message.error('Opération annulée');
	};
	const [userQ, setUserQ] = useState();
	const { id } = useParams();
	const { user, setUser } = useContext(UserContext);
	const [data, setData] = useState([]);
	const navigate = useNavigate();
	useEffect(() => {
		userById(id, setData, data);
	}, []);

	const deleteAccount = async (id) => {
		try {
			const { data } = await axios.delete(`/deleteaccount/${id}`);
			if (data.error) {
				toast.error(data.error)
			}
			else {
				handleLogout();
				navigate("/")
			}
		}
		catch (error) {
			console.log(error)
		}
	}
	const getServiceLabel = (serviceKey) => {
		const serviceLabels = {
			keep: "Garde",
			lodging: "Hébergement",
			visit: "Visite",
			walking: "Promenade"
		};

		return serviceLabels[serviceKey];
	};


	return (
		<>
			<div id="myaccount" className='block main'>
				<div className="container">
					<div className="wraps">
						<h1>Mon compte</h1>

						<div className="content-container">
							<div className="name-wrap">
								<h1>Identifiants</h1>
								<p>{user?.fname} {user?.lname} </p>
								<p>{user?.age}</p>
							</div>
							<div className="coord-wrap">
								<h1>Coordonnées</h1>
								<p>{user?.email}</p>
								<p>+33{data?.user?.user_id?.tel}</p>
							</div>
							<div className="details-wrap">
								<h1>Mes animaux</h1>
								<p>{user?.profile?.services}</p>
								<p>{user?.profile?.pet_offer}</p>
							</div>
							<div className="button-wrap">
								<button className='btn btn-edit'>Editer mon profil</button>
								<Popconfirm
									title="Suppression"
									description="Voulez-vous supprimer votre compte ?"
									onConfirm={confirm}
									onCancel={cancel}
									okText="Oui"
									cancelText="Non"
								><button className='btn btn-delete'>Supprimer mon profil</button>
								</Popconfirm>
							</div>
						</div>
					</div>
				</div>
			</div >
		</>
	)
}

export default MyAccount