import React from 'react'
import { useState } from 'react';
import Icon from '../components/global/Icon';
import { useNavigate } from 'react-router-dom';
import Button from '../components/global/Button'
import emailjs from '@emailjs/browser';


const Contact = () => {
    const [status, setStatus] = useState(null);
    
    const sendEmail = (e) => {
        e.preventDefault();
        setStatus("sending");

        const formData = new FormData(e.target);
        const messageData = {
            to_name: "Support Chava",
            from_firstname: formData.get("firstname"),
            from_lastname: formData.get("lastname"),
            from_email: formData.get("email"),
            from_animal: formData.get("animals"),
            message: formData.get("message")
        };

        emailjs.send(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            import.meta.env.VITE_PUBLIC_KEY,
            messageData
        )
            .then((result) => {
                console.log(result.text);
                setStatus("sent");
            })
            .catch((error) => {
                console.log(error.text);
                setStatus("error");
            });
    };

    const navigate = useNavigate();

    return (
        <>
            <div id="contact">
                <div className="container block">
                    <div className="container-global">
                        <div className="container-side">
                            <div className="title-wrap">
                                <h2>Vous avez besoin d'une aide personnalisée ?</h2>
                                <p>Bienvenue sur notre page d'aide ! Nous comprenons à quel point prendre soin de nos amis à quatre pattes peut parfois soulever des questions et des préoccupations. Nous sommes là pour vous fournir des informations utiles et des conseils pour rendre la vie avec vos animaux plus enrichissante et harmonieuse.</p>
                            </div>
                        </div>
                        <div className="content-wrap">
                            <div className="box-wrap">
                                <Icon
                                    type="FcContacts"
                                    size="8rem"
                                />
                                <h3 className='inline-text'>Passer par le formulaire de</h3><span className='span-link' href='#contact'>Contact</span>

                                <p>Nous ferons au mieux pour vous répondre dans les plus brefs délais.</p>

                            </div>
                            <div className="box-wrap">
                                <Icon
                                    type="FcQuestions"
                                    size="8rem"
                                />
                                <h3 className='inline-text'>Faites un tour du côté de la </h3><span className='span-link' onClick={() => navigate("../questions")}>Foire aux questions</span>
                                <p>La foire aux questions à été remplie pour vous permettre de trouver une réponse rapidement</p>

                            </div>
                            <div className="box-wrap">
                                <Icon
                                    type="FcPhone"
                                    size="8rem"
                                />
                                <h3>Contacter par téléphone</h3>

                                <p><strong>03 15 62 98 62</strong></p>
                                <p>Nous ferons au mieux pour vous répondre dans les plus brefs délais.</p>

                            </div>
                            <div className="box-wrap">
                                <Icon
                                    type="FcFeedback"
                                    size="8rem"
                                />
                                <h3>Contacter par mail</h3>
                                <p><strong>contact@chava.com</strong></p>
                                <p>Nous ferons au mieux pour vous répondre dans les plus brefs délais.</p>

                            </div>
                        </div>
                    </div >
                </div>
                <div className="container-plain">

                </div>
                <div className="container block">
                    <div className="container-global" id='contact'>

                        <form onSubmit={sendEmail}>
                            <h3>Envoyer nous un message </h3>
                            <div className="form-group">
                                <label htmlFor="lastname"></label>
                                <input
                                    type="text"
                                    name="lastname"
                                    id='firstname'
                                    placeholder="Votre nom*"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="firstname"> </label>
                                <input
                                    type="text"
                                    name="firstname"
                                    id='firstname'
                                    placeholder="Votre prénom*"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email"></label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="mail@example.fr*"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="animals"></label>
                                <select name="animals" id="animals">
                                    <option value="cat" defaultValue='chat'>Chat</option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message"></label>
                                <input type="text" placeholder='message' name='message' id='message' />
                            </div>
                            <p>*Champs obligatoires</p>
                            <div className="form-button">
                                <Button type="submit" value="Valider" className="btn btn-submit" aria-label='Envoyer le formulaire'>
                                    Envoyer
                                </Button>
                            </div>
                        </form>
                        {status === "sending" && (
                            <div className='message loading'>Envoi..</div>
                        )
                        }
                        {status === "sent" && (
                            <div className='message sent'>Message envoyé !</div>
                        )
                        }
                        {status === "error" && (
                            <div className='message error'>Erreur.</div>
                        )
                        }
                        <div className="container-side">
                            <div className="title-wrap">
                                <h2>Contacter nous rapidement via le formulaire</h2>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        </>
    )
}

export default Contact