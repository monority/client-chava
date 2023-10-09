import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../context/userContext';

const CheckUser = ({ isNotConnected, action }) => {
    const { user, setUser } = useContext(UserContext)

    if (!user) {
        return isNotConnected;
    }
    else {
        return (
            <>
                <div id="connected">
                    <img src="/src/assets/media/Cat.png" alt="" onClick={action} />
                    <h1>Vous êtes déja connecté</h1>
                    <div className="icon-wrap">
                        <img src="/src/assets/media/arrow.svg" alt="" onClick={action} />
                    </div>
                </div>
            </>)
    }

}

export default CheckUser