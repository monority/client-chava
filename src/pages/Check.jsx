import React from 'react'
import Icon from '../components/global/Icon'
import { useNavigate } from 'react-router-dom'

const Check = () => {
    const navigate = useNavigate();
    return (
        <>
            <div id="check" className='block'>
                <div className="container">
                    <div className="wraps">
                        <div>
                            <div className="title-wrap">
                                <h3>Saisissez votre adresse e-mail <br></br>pour nous rejoindre ou vous connecter.</h3>
                            </div>

                            <form action="get">
                                <div className="form-group">
                                    <input type="email" name="email" id="email" required spellcheck="false" className='input-base' />
                                    <label htmlFor="email">Email</label>

                                </div>
                                <div className="form-sub">
                                    <p className='light-text'>En continuant, vous acceptez les <strong>Conditions d'utilisation </strong><br /> et vous confirmez avoir lu la  <strong>Politique de confidentialité</strong> de Chava.</p>
                                </div>
                                <div className="foot-wrap">
                                    <div className="button-wrap">
                                        <input type="submit" value="Valider" className='btn btn-submit' />
                                    </div>
                                    <div className="icon-wrap">
                                        <img src="/src/assets/media/arrow.svg" alt="" onClick={() => navigate(-1)} />
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

export default Check