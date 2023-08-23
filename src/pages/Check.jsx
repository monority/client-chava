import React, { useEffect, useState } from 'react'
import Icon from '../components/global/Icon'
import { useNavigate, useLocation } from 'react-router-dom'
const Check = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const email_location = location.updatedForm;

    const [form, setForm] = useState({
        email: "",
    })
    const handleForm = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const updatedForm = { ...form };
        formData.forEach((value, name) => {
            updatedForm[name] = value;
        });
        setForm(updatedForm);
        navigate("/account/login", { state: { form: updatedForm } });
    }
    const modifyDetect = () => {
        console.log(email_location)
        if (email_location) {
            setForm({form : email_location});
            console.log(form);
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

                            <form action="get" onSubmit={handleForm}>
                                <div className="form-group">
                                    <input type="email" name="email" id="email" required className='input-base' defaultValue={email_location ? email_location : form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })} />
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