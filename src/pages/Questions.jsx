import React from 'react';
import Accordeon from '../components/global/Accordeon'
import { Link } from "react-scroll";
import { useNavigate } from 'react-router-dom';



const Questions = () => {
    const navigate = useNavigate();
    const navigation = (route) => {
        navigate(`../${route}`)
    }
    const text_report_1 = `Vous pouvez vous rendre sur la page `;
    const text_report_2 = (
        <>
            {" "}
            pour signaler un comportement abusif. La demande sera traitée par un{" "}
            <strong>modérateur</strong> dans les plus brefs délais.
        </>
    );

    const text_animals = ``;
    const text_contact = `Vous pouvez contacter les utilisateurs directement en cliquant sur l'icône de l'enveloppe à coté du nom de profil de l'utilisateur`;

    const text_password = `Lancer une récupération de mot de passe via la page `;
    const text_delete = ` Aller sur mon `;
    const text_delete_2 = ` pour supprimer mon compte`;

    const text_moderator_1 = `Vous ne pouvez pas contacter un modérateur directement, veuillez utiliser la page `

    const text_security_1 = `Vos données sont récoltées et traités par nos serveurs. Nous ne faisons pas du marchange de données, nous ne gardons que l'essentiel à titre non commercial.`;
    const text_security_2 = `Les données enregistrés sont gérés par une API (base de données), nous permettant de sécuriser ces données sur nos serveurs locaux.`;

    const items_frequency = [
        {
            key: '1',
            label: `Je veux contacter un modérateur`,
            children: (
                <>
                    <div>
                        {text_moderator_1}{" "}
                        <span className='inside-link' onClick={() => navigation("contact")}>Contact</span>
                    </div>
                </>
            ),
        },
        {
            key: '2',
            label: 'Puis-je contacter les utilisateurs directement ?',
            children: <p>{text_contact}</p>,
        },
    ];
    const items_animals = [
        {
            key: '1',
            label: `Comment est assuré la sécurité de mon animal ?`,
            children: (
                <>
                    <div>
                        {text_moderator_1}{" "}
                        <span className='inside-link' onClick={() => navigation("contact")}>Contact</span>
                    </div>
                </>
            ),
        },
        {
            key: '2',
            label: 'Puis-je contacter les utilisateurs directement ?',
            children: <p>{text_contact}</p>,
        },
    ];
    const items_account = [
        {
            key: '1',
            label: `J'ai perdu mon mot de passe`,
            children: (
                <>
                    <div>
                        {text_password}{" "}
                        <span className='inside-link' onClick={() => navigation("contact")}>Récupération de mot de passe</span>
                    </div>
                </>
            )
        },
        {
            key: '2',
            label: 'Je veux supprimer mon compte',
            children: (
                <div>
                    {text_delete}{" "}
                    <span className='inside-link' onClick={() => navigation("account")}>profil</span>
                    {text_delete_2}{" "}
                </div>
            ),
        },
    ];
    const items_security = [
        {
            key: '1',
            label: `Comment sont traitées mes données ?`,
            children: <p>{text_security_2}</p>,
        },
        {
            key: '2',
            label: `Comment m'assurer de la sécuration de mes données ?`,
            children: <p>{text_security_1}</p>,
        },

    ]
    const items_users = [
        {
            key: '1',
            label: `Un utilisateur a été offensant ou a enfreint les règles`,
            children: (
                <>
                    <div>
                        {text_report_1}{" "}
                        <span className='inside-link' onClick={() => navigation("report")}>Signalement</span>
                        {text_report_2}{" "}
                    </div>
                </>
            ),
        },
        {
            key: '2',
            label: 'Puis-je contacter les utilisateurs directement',
            children: <p>{text_contact}</p>,
        },
    ];
    const items_misc = [
        {
            key: '1',
            label: `Puis-je contacter un modérateur directement`,
            children: (
                <>
                    <div>
                        {text_report_1}{" "}
                        <span className='inside-link' onClick={() => navigation("report")}>Signalement</span>
                        {text_report_2}{" "}
                    </div>
                </>
            ),
        },
        {
            key: '2',
            label: 'Puis-je contacter les utilisateurs directement',
            children: <p>{text_contact}</p>,
        },
    ]

    return (
        <>
            <div id="questions">
                <div className="container block">
                    <div className="title-wrap">
                        <h1>Support</h1>
                    </div>
                    <div className="content-container">
                        <div className="nav-wrap" >
                            <ul>
                                <li><Link activeClass="active" href='questions fréquentes' className="frequency" to="frequency" offset={-200} spy={true} smooth={true} duration={500}>Questions fréquentes</Link></li>
                                <li><Link activeClass="active" href='Votre animal' className="animals" to="animals" offset={-200} spy={true} smooth={true} duration={500}>Votre animal</Link></li>

                                <li><Link activeClass="active" href='questions utilisateurs' className="users" to="users" offset={-200} spy={true} smooth={true} duration={500}>Utilisateurs</Link></li>
                                <li><Link activeClass="active" href='Questions sur le compte' className="account" to="account" offset={-200} spy={true} smooth={true} duration={500} >Compte</Link></li>
                                <li><Link activeClass="active" href='questions sur la sécurité' className="security" to="security" offset={-200} spy={true} smooth={true} duration={500}>Sécurité</Link></li>
                                <li><Link activeClass="active" href='questions diverses' className="misc" to="misc" offset={-200} spy={true} smooth={true} duration={500}>Divers</Link></li>
                            </ul>
                        </div>
                        <div className="question-container">
                            <div className="title-wrap">
                                <h2>Comment pouvons nous vous aider ?</h2>
                            </div>

                            <div className="collapse-wrap" id="frequency">

                                <h3>Questions fréquemment posées</h3>
                                <Accordeon items={items_frequency} />
                            </div>
                            <div className="collapse-wrap" id="animals">

                                <h3>Votre animal</h3>
                                <Accordeon items={items_animals} />
                            </div>
                            <div className="collapse-wrap" id="users">

                                <h3>Interaction Utilisateurs</h3>
                                <Accordeon items={items_users} />
                            </div>
                            <div className="collapse-wrap" id='account'>

                                <h3>Compte</h3>
                                <Accordeon items={items_account} />
                            </div>
                            <div className="collapse-wrap" id='security'>

                                <h3>Sécurité</h3>
                                <Accordeon items={items_security} />
                            </div>
                            <div className="collapse-wrap" id='misc'>

                                <h3>Divers</h3>
                                <Accordeon items={items_misc} />
                            </div>

                        </div>

                    </div>
                </div>
            </div >
        </>
    );
};

export default Questions;
