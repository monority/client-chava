// React
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useLocation, useParams } from 'react-router-dom'

// Components 
import { queryCheck } from '../../components/query/authQuery';
import CheckUser from '../../components/auth/checkUser';
import { UserContext } from '../../../context/userContext';
import { convertDate } from '../../components/global/convertDate';
import { userById } from '../../components/query/getQuery';

const MyAccount = () => {
	const [userQ, setUserQ] = useState();
	const {id } = useParams();
	const {user, setUser} = useContext(UserContext);
	useEffect(() => {
		userById();
	}, []);

	return (
		<>
			<div id="myaccount" className='block main'>
				<div className="container">
					<div className="wraps">

						<div className="content-container">

							<div className="name-wrap">
								<p> {user?.fname} {user?.lname} </p>

								<p>{user?.age}</p>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}

export default MyAccount