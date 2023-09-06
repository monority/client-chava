import React from 'react'
import {  useParams } from 'react-router-dom';

// Page du profil affiché aux autres utilisateurs.
const UsersDetails = () => {

	const { id } = useParams();

	return (
		<>
			<div id="user-detail">
				<div className="container">
					<div className="wraps">
						<div className="wrap">
								
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default UsersDetails;