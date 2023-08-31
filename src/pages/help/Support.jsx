import React from 'react'
import { useState } from 'react';
import Icon from '../../components/global/Icon';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/global/Button'
import emailjs from '@emailjs/browser';

// Page questions et contact
const Support = () => {

	// Statut pour afficher un texte pendant l'envoi et si l'envoi est validé
    const [status, setStatus] = useState(null);
    const navigate = useNavigate();

	// Formulaire utilisant l'objet formdata et le relier à la dépendance emailjs qui gère le serveur d'envoi d'email.
	// Les variables "VITE_PUBLIC" sont stockées dans .env pour éviter de les révéler dans le code.
	// messageData est relié au template de l'email (créer sur le site emailjs) pour afficher les informations du formulaire dans l'email envoyé.
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
            import.meta.env.VITE_PUBLIC_SERVICE_ID,
            import.meta.env.VITE_PUBLIC_TEMPLATE_ID,
            messageData,
            import.meta.env.VITE_PRIVATE_SEND_ID,
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
                            <div className="box-wrap box-white">
                                <Icon
                                    type="FcContacts"
                                    size="8rem"
                                />
                                <h3 className='inline-text'>Passer par le formulaire de</h3><span className='basic-link' href='#contact'>Contact</span>
                                <p>Nous ferons au mieux pour vous répondre dans les plus brefs délais.</p>
                            </div>
                            <div className="box-wrap box-white">
                                <Icon
                                    type="FcQuestions"
                                    size="8rem"
                                />
                                <h3 className='inline-text'>Faites un tour du côté de la </h3><span className='basic-link' onClick={() => navigate("../help/questions")}>Foire aux questions</span>
                                <p>La foire aux questions à été remplie pour vous permettre de trouver une réponse rapidement</p>

                            </div>
                            <div className="box-wrap box-white">
                                <Icon
                                    type="FcPhone"
                                    size="8rem"
                                />
                                <h3>Contacter par téléphone</h3>

                                <p><strong>03 15 62 98 62</strong></p>
                                <p>Nous ferons au mieux pour vous répondre dans les plus brefs délais.</p>

                            </div>
                            <div className="box-wrap box-white">
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
   {/* Container du milieu pour séparer les deux contenus */}
                <div className="container-plain">

                </div>
                <div className="container block">
                    <div className="container-global" id='contact'>
                        <form onSubmit={sendEmail}>
                            <h3>Envoyer nous un message </h3>
                            <div className="form-group">
                                <input
                                    className='input-base'
                                    type="text"
                                    name="lastname"
                                    required
                                />
                                <label htmlFor="lastname">Nom*</label>
                            </div>
                            <div className="form-group">
                                <input
                                    className='input-base'
                                    type="text"
                                    name="firstname"
                                    id='firstname'
                                    required
                                />
                                <label htmlFor="firstname">Prénom*</label>
                            </div>
                            <div className="form-group">
                                <input
                                    className='input-base'
                                    type="email"
                                    name="email"
                                    required
                                />
                                <label htmlFor="email">Email*</label>
                            </div>
                            <div className="form-group">
                                <label htmlFor="problems"></label>
                                <select name="problems" id="problems" className='input-base'>
                                    <option value="problem_1" defaultValue='Chat' className='input-base'>Chat</option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className="form-group">
                            <textarea
                                    className='input-base input-message'
                                    type="text"
                                    name="message"
                                    id='message'
                                    required
                                />
                                <label htmlFor="message">Votre message*</label>
                            </div>
                            <p>*Champs obligatoires</p>
                            <div className="form-button">
                                <Button type="submit" value="Valider" className="btn btn-submit" aria-label='Envoyer le formulaire'>
                                    Envoyer
                                </Button>
                            </div>
							{/*  Gestion du message d'erreur via un state */}
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
                        </form>
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

export default Support