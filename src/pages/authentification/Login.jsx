import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Button from '../../components/global/Button'
import { useState } from 'react';
import { toast } from 'react-hot-toast'
import axios from 'axios';



const Login = () => {
	const navigate = useNavigate();

	const location = useLocation();
	const { state } = location;


	const [data, setData] = useState({
		email: "",
		password: ""
	})

	const modify = () => {
		const updatedForm = { ...data };
		updatedForm.email = state;
		setData(updatedForm);
		navigate("/account/check", { state: updatedForm.email });
	}

	const handleForm = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const updatedForm = { ...data };
		formData.forEach((value, name) => {
			updatedForm[name] = value;
		});
		setData(updatedForm);
		const { email, password } = updatedForm

		try {
			const { data } = await axios.post('/Login', { // relie au authRoutes
				email,
				password
			});
			if (data.error) { // affiche les erreurs du back au front
				toast.success(data.error);
			} else {
				setData({}); // reset form
				navigate('/') // vers homepage

			}
		} catch (error) {

		}
	}


	return (
		<>
			<div id="login" className='block'>
				<div className="container">
					<div className="wraps">
						<div>
							<div className="title-wrap">
								<h3>Saisissez votre adresse e-mail <br></br> pour vous connecter.</h3>
							</div>
							<form action="post" onSubmit={handleForm}>
								<div className="form-group form-modify">
									<p className="email-input">{state.email}</p>
									<input type="hidden" name="email" id="email" required className='input-base' defaultValue={state.email}
									/>
									<label htmlFor="email"></label>
									<p className="btn  btn-modify" onClick={() => modify()}>Modifier</p>
								</div>
								<div className="form-group">
									<input type="password" name="password" id="password" required className='input-base' defaultValue={data.password} />
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