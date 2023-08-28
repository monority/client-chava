import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast'

const Register = () => {
	const navigate = useNavigate();

	const [data, setData] = useState({
		fname: '',
		lname: '',
		age: '',
		email: '',
		tel: '',
		postal: '',
		password: '',
	})

	const registerUser = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const updatedForm = { ...data };
		formData.forEach((value, name) => {
			updatedForm[name] = value;
		});
		setData(updatedForm);
		try {
			const { data } = await axios.post('/Register', {
				updatedForm
			})
			if (data.error) {
				toast.error(data.error)
			} else {
				setData({})
				toast.success('Compte crée avec succés')
				navigate('/')
			}
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<>


			<div id="register" className='block'>
				<div className="container">
					<div className="wraps">
						<div>
							<div className="title-wrap">
								<h3>Inscrivez-vous sur Chava.</h3>
							</div>
							<form action="post" onSubmit={registerUser}>
								<div className="form-subcontainer">
									<div className="form-container">
										<div className="form-group">
											<input type="text" name="email" id="email" defaultValue={data.email} className='input-base' required />
											<label htmlFor="email">Email</label>
										</div>
										<div className="form-group">
											<input type="text" name="fname" id="fname" required className='input-base' defaultValue={data.fname} />
											<label htmlFor="fname">Prénom</label>
										</div>
										<div className="form-group">
											<input type="text" name="lname" id="lname" required className='input-base' defaultValue={data.lname} />
											<label htmlFor="lname">Nom</label>

										</div>
										<div className="form-group">
											<label htmlFor="age">
											</label>
											<input type="date" name="age" id="age" className='input-base' placeholder='Age' required defaultValue={data.age} />
										</div>

									</div>
									<div className="form-container">
										<div className="form-group">
											<input type="password" name="password" id="password" required className='input-base' defaultValue={data.password} />
											<label htmlFor="password">Mot de passe
											</label>

										</div>
										<div className="form-group">
											<input type="password" name="confirm-password" id="confirm-password" required className='input-base' />
											<label htmlFor="confirm-password">Confirmer mot de passe
											</label>

										</div>
										<div className="form-group">
											<input type="text" name="postal" id="postal" required className='input-base' defaultValue={data.postal} />
											<label htmlFor="postal">Code postal
											</label>
										</div>
										<div className="form-group">
											<input type="text" name="tel" id="tel" required className='input-base' defaultValue={data.tel} />
											<label htmlFor="tel">Téléphone
											</label>
										</div>

									</div>
								</div>
								<div className="form-subcontainer">
									<div className="form-wrap">

										<div className="form-sub">
											<p className='light-text'>En continuant, vous acceptez les <strong>Conditions d'utilisation </strong><br /> et vous confirmez avoir lu la  <strong>Politique de confidentialité</strong> de Chava.</p>

										</div>
										<div className="form-footer">
											<div className="button-wrap">
												<input type="submit" value="Valider" className='btn btn-submit' />
											</div>
											<div className="icon-wrap">
												<img src="/src/assets/media/arrow.svg" alt="" onClick={() => navigate("../")} />
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