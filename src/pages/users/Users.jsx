import React, { useState } from 'react';
import Card from '../../components/global/Card';
import users from '../../components/users.json';
import { nanoid } from 'nanoid';
import MultiFilters from '../../components/global/Filters';

const Users = () => {
  const [filter, setFilter] = useState([]);
	const [selectedService, setSelectedService] = useState([]);

	const filteredUsers = users.filter(user => {
		const isPetFiltered = filter.length === 0 || filter.includes(user.pet);
		const isServiceFiltered = selectedService.length === 0 || selectedService.includes(user.services);
	  
		return isPetFiltered && isServiceFiltered;
	  });
	  
	  

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
      />
    );
  });

  return (
    <>
      <div id="users" className="block">
        <div className="container">
          <div className="wraps">
            <div className="wrap f-30">
              <MultiFilters
                selectedFilters={filter}
                setSelectedFilters={setFilter}
				selectedService={selectedService}
				setSelectedService={setSelectedService}
              />
            </div>
            <div className="wrap">{listUsers}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
