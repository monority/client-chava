import React from 'react';
import Accordeon from '../../components/global/Accordeon'
import { Link } from "react-scroll";
import { useNavigate } from 'react-router-dom';

// Page de la foire aux questions
const Questions = () => {
	const navigate = useNavigate();

	// fonction de navigation dynamique pour naviguer en fonction du paramètre envoyer avec "route"
	const navigation = (route) => {
		navigate(`../${route}`)
	}

	// écriture de tout les textes et titre, items représente l'objet accordéon entier, key permet d'assigné un id, label est le titre et le children est le contenu
	// Texte questions fréquentes 
	const text_frequency_1 = (
		<>
			<p className='inline-text'>Vous ne pouvez pas contacter directement un modérateur, veuillez utiliser la page </p>
			<span className='inside-link' onClick={() => navigation("./help/support")}>Contact</span>
		</>
	);
	const text_frequency_2 = `Vous pouvez contacter les utilisateurs directement en cliquant sur l'icône de l'enveloppe à coté du nom de profil de l'utilisateur`;
	const items_frequency = [
		{
			key: '1',
			label: `Je veux contacter un modérateur`,
			children: <>{text_frequency_1}</>,
		},
		{
			key: '2',
			label: 'Puis-je contacter les utilisateurs directement ?',
			children: <p>{text_frequency_2}</p>,
		},
	];

	// Texte pour la modération 
	const text_report_1 = `Vous pouvez vous rendre sur la page `;
	const text_report_2 = (
		<>
			{" "}
			pour signaler un comportement abusif. Notre <strong>équipe</strong> examinera rapidement les signalements et prendra les mesures nécessaires pour garantir la sécurité et le respect sur la plateforme.
		</>
	);

	// Texte pour les animaux 
	const text_animals_1 = (
		<>
			<p>Lorsque vous discutez avec d'autres membres, posez des questions pertinentes pour évaluer leur expérience et leur expertise.
				Organisez une rencontre préalable avec la personne pour établir une connexion et voir comment votre animal réagit.
				Si vous avez des doutes, ne procédez pas à l'échange et cherchez d'autres membres plus adaptés à vos besoins.</p>
		</>
	)
	const text_animals_2 = (
		<>
			Connectez-vous à votre  <span className='inside-link' onClick={() => navigation("./account/check")}>compte</span>. <br />
			Parcourez les annonces de services disponibles et trouvez ceux qui correspondent à vos besoins.
			Contactez les membres proposant ces services via notre système de messagerie intégré pour discuter des détails et convenir des arrangements.
		</>
	);
	const items_animals = [
		{
			key: '1',
			label: `Comment puis-je garantir la sécurité de mon animal lors des échanges de services ?`,
			children: <p>{text_animals_1}</p>,
		},
		{
			key: '2',
			label: 'Comment puis-je demander un service pour mon animal sur la plateforme ?',
			children: <p>{text_animals_2}</p>,
		},
	];

	// Texte pour les interaction utilisateurs 
	const text_users_1 = (
		<>
			<p className='inline-text'>Utilisez notre fonction </p><span className='inside-link' onClick={() => navigation("./help/report")}>signalement </span>
			pour nous informer de tout comportement suspect, offensant ou contraire à nos règles communautaires.
			Notre équipe examinera rapidement les signalements et prendra les mesures nécessaires pour garantir la sécurité et le respect sur la plateforme.
		</>
	)
	const text_users_2 = (
		<>
			<p>En vous rendant sur le profil d'un utilisateur, vous pouvez lui envoyer un message instantané en cliquant sur la petite enveloppe, restez courtois et polis.</p>
		</>
	)
	const items_users = [
		{
			key: '1',
			label: `Un utilisateur a été offensant ou a enfreint les règles.`,
			children: <>{text_users_1}</>,
		},
		{
			key: '2',
			label: 'Puis-je contacter les utilisateurs directement ?',
			children: <p>{text_users_2}</p>,
		},
	];

	// Texte account
	const text_account_1 = (
		<>
			<p className='inline-text'>Rendez-vous sur la page </p>           <span className='inside-link' onClick={() => navigation("./account/reset-password")}>récupération de mot de passe</span>
			<p className='inline-text'> pour lancer la récupération.</p>
		</>
	)
	const text_account_2 = (
		<>
			<p className='inline-text'>Aller sur la page </p><span className='inside-link' onClick={() => navigation("./account/profil")}>mon profil</span> <p className='inline-text'>pour supprimer votre compte.</p>
		</>
	)
	const items_account = [
		{
			key: '1',
			label: `J'ai perdu mon mot de passe`,
			children: <>{text_account_1}</>
		},
		{
			key: '2',
			label: 'Je veux supprimer mon compte',
			children: <>{text_account_2}</>
		},
	];

	// Texte sécurité
	const text_security_1 = `Vos données sont récoltées et traités par nos serveurs. Nous ne faisons pas du marchange de données, nous ne gardons que l'essentiel à titre non commercial.`;
	const text_security_2 = `Les données enregistrés sont gérés par une API (base de données), nous permettant de sécuriser ces données sur nos serveurs locaux.`;
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

	// Texte Divers
	const text_misc = `Notre réseau social vous permet de connecter avec d'autres propriétaires d'animaux, de partager des photos, des histoires et des conseils.
    Utilisez le chat pour communiquer en temps réel avec d'autres membres, planifier des rendez-vous pour vos animaux, et échanger des informations.`;
	const text_misc_2 = `Utilisez notre fonctionnalité de recherche pour trouver d'autres membres près de chez vous.
    Envoyez des invitations pour organiser des rencontres dans des parcs, des cafés pour animaux ou d'autres lieux adaptés.
    Profitez de l'occasion pour discuter, échanger des expériences et laisser vos animaux se socialiser.`;

	const items_misc = [
		{
			key: '1',
			label: `Comment fonctionne le réseau social et le chat sur la plateforme ?`,
			children: <p>{text_misc}</p>
		},
		{
			key: '2',
			label: `Comment puis-je organiser des rencontres avec d'autres propriétaires d'animaux ?`,
			children: <p>{text_misc_2}</p>,
		},
	]

	return (
		<>
			<div id="questions" className='block'>
				<div className="container">
					<div className="content-container">
						<div className="nav-wrap" >
							<ul>
								{/* Utilisation de react-scroll pour avoir un "scrollspy sur le menu en sticky sur le côté. React scroll utilise un
								composant Link a ne pas confondre avec le composant link de react-router-dom
								*/}
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
