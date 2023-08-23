import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Button from '../components/global/Button';
import { useState } from 'react';

const Login = () => {
    const navigate = useNavigate();

    const location = useLocation();
    const email_location = location.state.form.email;

    const [array, setArray] = useState({
        email :""
    })

    const modify = () => {
        const updatedArray = { ...array }; 
        if (email_location) {
            updatedArray.email = email_location; 
        }
        setArray(updatedArray);
        navigate(("/account/check"), { state: updatedArray });

    }

    return (
        <>
            <div id="login" className='block'>
                <div className="container">
                    <div className="wraps">
                        <div>
                            <div className="title-wrap">
                                <h3>Saisissez votre adresse e-mail <br></br>pour nous rejoindre ou vous connecter.</h3>
                            </div>
                            <form action="get">
                                <div className="form-group form-modify">
                                    <p className="email-input">{email_location}</p>
                                    <p className="btn" onClick={() => modify()}>Modifier</p>
                                </div>
                                <div className="form-group">
                                    <input type="password" name="password" id="password" required className='input-base' />
                                    <label htmlFor="password">Mot de passe
                                    </label>

                                </div>
                                <div className="form-sub">
                                    <p className='light-text'>En continuant, vous acceptez les <strong>Conditions d'utilisation </strong><br /> et vous confirmez avoir lu la  <strong>Politique de confidentialité</strong> de Chava.</p>
                                </div>
                                <div className="foot-wrap">
                                    <div className="button-wrap">
                                        <input type="submit" value="Valider" className='btn btn-submit' />
                                    </div>
                                    <div className="icon-wrap">
                                        <img src="/src/assets/media/arrow.svg" alt="" onClick={() => navigate("../")} />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login