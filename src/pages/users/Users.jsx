import React from 'react'
import Card from '../../components/global/Card';
import users from '../../components/users.json'

import { nanoid } from 'nanoid';
import Filter from '../../components/global/Filter';
const Users = () => {

	const listUsers = users.map(user => {
		return (
			<Card
				key={nanoid()}
				id={user.id}
				firstname={user.firstname}
				lastname={user.lastname}
				services={user.services}
				image={user.image}
				town={user.town}
				pet={user.pet}
				note={user.note}
				noteNumber={user.noteNumber}
				description={user.description}
			/>
		)
	})
	return (
		<>

			<div id="users" className='block'>
				<div className="container">
					<div className="wraps">
						<div className="wrap f-30">
							<Filter/>
						</div>
						<div className="wrap">
							{listUsers}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Users;