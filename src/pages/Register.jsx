import React from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate();
    return (
        <>


            <div id="register" className='block'>
                <div className="container">
                    <div className="wraps">
                        <div>
                            <div className="title-wrap">
                                <h3>Inscrivez-vous sur Chava.</h3>
                            </div>
                            <form action="post">
                                <div className="form-subcontainer">
                                    <div className="form-container">
                                        <div class="form-group">
                                            <p>Email</p>
                                        </div>
                                        <div className="form-group">
                                            <input type="firstname" name="firstname" id="firstname" required spellcheck="false" className='input-base' />
                                            <label htmlFor="firstname">Prénom</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="lastname" name="lastname" id="lastname" required spellcheck="false" className='input-base' />
                                            <label htmlFor="lastname">Nom</label>

                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="age">
                                            </label>
                                            <input type="date" name="age" id="age" className='input-base' placeholder='Age' required spellcheck="false" />
                                        </div>

                                    </div>
                                    <div className="form-container">
                                        <div className="form-group">
                                            <input type="password" name="password" id="password" required spellcheck="false" className='input-base' />
                                            <label htmlFor="password">Mot de passe
                                            </label>

                                        </div>
                                        <div className="form-group">
                                            <input type="password" name="confirm-password" id="confirm-password" required spellcheck="false" className='input-base' />
                                            <label htmlFor="confirm-password">Confirmer mot de passe
                                            </label>

                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="zipcode" id="zipcode" required spellcheck="false" className='input-base' />
                                            <label htmlFor="zipcode">Code postal
                                            </label>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="phone" id="phone" required spellcheck="false" className='input-base' />
                                            <label htmlFor="phone">Téléphone
                                            </label>
                                        </div>

                                    </div>
                                </div>
                                <div className="form-subcontainer">
                                    <div className="form-wrap">
                                        <div className="form-sub">
                                            <label htmlFor="remember">Se souvenir de moi ?</label>
                                            <input type="checkbox" name="remember" id="remember" className='input-checkbox' />
                                            <p>Mot de passe oublié ?</p>
                                        </div>
                                        <div className="form-sub">
                                            <p className='light-text'>En continuant, vous acceptez les <strong>Conditions d'utilisation </strong><br /> et vous confirmez avoir lu la  <strong>Politique de confidentialité</strong> de Chava.</p>

                                        </div>
                                        <div className="form-footer">
                                            <div className="button-wrap">
                                                <input type="submit" value="Valider" className='btn btn-submit' />
                                            </div>
                                            <div className="icon-wrap">
                                                <img src="/src/assets/media/arrow.svg" alt="" onClick={() => navigate(-1)} />
                                            </div>
                                        </div>
                                    </div></div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Register