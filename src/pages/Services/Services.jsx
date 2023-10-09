import { useEffect, useState } from 'react';
import MultiFilters from '../../components/global/Filters';
import { useNavigate } from 'react-router-dom';

const Services = () => {
    const [filter, setFilter] = useState([]);
    const [bestNoteFilter, setBestNoteFilter] = useState(false)
    const [selectedService, setSelectedService] = useState([]);
    const [search, setSearch] = useState("")
    const [mostReviewFilter, setMostReviewFilter] = useState(false);


    const filteredUsers = users.filter(user => {
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
            />
        );
    });


    return (
        <>
            <div id="users" className="block">
                <div className="container">
                    <div className="wraps">
                        <div className="wrap f-35">
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
                        <div className="wrap f-65">{listUsers}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;