import React from 'react'
import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

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