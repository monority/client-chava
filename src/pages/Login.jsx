import React from 'react'

const Login = () => {
    return (
        <>
            <div id="login" className='block'>
                <div className="container">
                    <div className="wraps">

                        <div className="box-wrap box-white">
                            <form action="">
                                <h3>Connectez-vous</h3>
                                <div className="form-group">
                                    <label htmlFor="email">
                                        <input type="email" name="email" id="email" className='input-base' placeholder='Email' />

                                    </label>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">
                                        <input type="password" name="password" id="password" className='input-base' placeholder='Mot de passe' />

                                    </label>
                                </div>
                                <div className="form-group form-sub">
                                    <label htmlFor="remember">Se souvenir de moi ?</label>
                                    <input type="checkbox" name="remember" id="remember" />
                                <p>Mot de passe oublié ?</p>
                                </div>
                                <input type="submit" value="Valider" className='btn btn-submit' />
                            </form>
                        </div>

                        <div className="box-wrap box-black">
                            <h3>Vous n'avez pas de compte ?</h3>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login