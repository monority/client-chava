import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-hot-toast'


const Check = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { state } = location;

	const [data, setData] = useState({
		email: "",
	})

	const handleForm = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const updatedForm = { ...data };
		formData.forEach((value, name) => {
			updatedForm[name] = value;
		});
		setData(updatedForm)
		const { email } = updatedForm
		try {
			const { data } = await axios.get('/check', {
				params: { email },
			});
			if (data.error) {
				toast.error(data.error)
				navigate('/account/register', { state: updatedForm })
			} else {
				toast.error(data.message);
				navigate('/account/login', { state: updatedForm })
			}
		} catch (error) {

		}
	}

	const modifyDetect = () => {
		if (state) {
			const copyArray = { ...state };
			setData(copyArray);
		}
		else return false;
	}
	useEffect(() => {
		modifyDetect();
	}, []);




	return (
		<>
			<div id="check" className='block'>
				<div className="container">
					<div className="wraps">
						<div>
							<div className="title-wrap">
								<h3>Saisissez votre adresse e-mail <br></br>pour nous rejoindre ou vous connecter.</h3>
							</div>

							<form action="post" onSubmit={handleForm}>
								<div className="form-group">
									<input type="email" name="email" id="email" required className='input-base' defaultValue={state ? state.email : data.email}
									/>
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

export default Check