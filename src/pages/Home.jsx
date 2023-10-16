// React
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

// Components
import Icon from '../components/global/Icon';
import Button from '../components/global/Button';
import { usersBase } from '../components/query/getQuery';
import CardHome from '../components/home/CardHome';

// Dépendances
import { useTransform, useScroll, motion } from 'framer-motion';
import { Col, Row } from 'antd';
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';

// page d'accueil
const Home = () => {
	const content = useRef(null);
	const navigate = useNavigate();
	const { user, setUser } = useContext(UserContext)
	const [data, setData] = useState([]);
	const { scrollYProgress } = useScroll({
		target: content,
		// Debut du container fin de la page, stop fin container debut window
		offset: ['start end', 'end start']
	});
	const x = useTransform(scrollYProgress, [0, 1], [0, 100]);

	useEffect(() => {
		usersBase(setData);
	}, []);

	const userList = data.map(user => (
		<CardHome
			key={user?._id}
			id={user._id}
			fname={user?.fname}
			lname={user?.lname}
			town={user?.town}
			description={user?.profile ? user?.profile?.description : ""}
			action={() => navigate(`./account/${user._id}`, { replace: true })}
			className="box-white"

		/>
	))

	return (
		<>
			<div id="home">
				<div className="section-hero container block">
					<div ref={content} className="content-container">
						<div className="img-wrap">
							<img src="../src/assets/media/cat-home.svg" alt="" />
						</div>
						<div className="content-wrap">
							<div className="head-wrap">
								<motion.div style={{ x }} className="title-wrap">
									<h1>Chava</h1>
								</motion.div>
								<div className="sub-wrap">
									<h2>Sur Chava, la solidarité prend tout son sens : ensemble, tissons des moments de bonheur au service de nos amis les animaux</h2>
								</div>
								<div className="button-wrap">
									{!user && (<Button type="submit" value="Valider" className="btn btn-submit" aria-label='Envoyer le formulaire' action={() => (navigate("../auth/check"), { replace: true })}>
										Authentification
									</Button>)}
									<Button type="submit" value="Valider" className="btn btn-list" aria-label='Envoyer le formulaire' action={() => (navigate("../services"), { replace: true })}>
										Consulter les pet sitter
									</Button>
								</div>
							</div>

						</div>
					</div>
				</div>
				<div className="section-max-width block">
					<div className="text-container">
						<h1>Chava est disponible partout en France</h1>
						<p>Partout en France, et tout près de chez vous : Chava vous connecte à une communauté d'amoureux des animaux prêts à apporter soins et affection à vos compagnons à quatre pattes.</p>
						<h2>Nos utilisateurs sont satisfaits</h2>
					</div>
					<div className="image-container">
						<div className="figure-container">

							<div className="img-wrap">
								<img src="../src/assets/media/home/pres1.jpg" alt="" />
							</div>
							<div className="caption-wrap">
								"J'ai rencontré mon meilleur ami sur Chava,
								Depuis, je le vois toutes les semaines.
								J'ai recommandé Chava à mes amis et ils en sont satisfaits."
								<strong> Alexandra</strong>
							</div>
						</div>
						<div className="figure-container">

							<div className="img-wrap">
								<img src="../src/assets/media/home/pres2.jpg" alt="" />
							</div>
							<div className="caption-wrap">
								"J'ai rencontré mon meilleur ami sur Chava,
								Depuis, je le vois toutes les semaines.
								J'ai recommandé Chava à mes amis et ils en sont satisfaits."
								<strong> Alexandra</strong>
							</div>
						</div>
						<div className="figure-container">

							<div className="img-wrap">
								<img src="../src/assets/media/home/pres3.jpg" alt="" />
							</div>
							<div className="caption-wrap">
								"C'est sur Chava, un site dédié aux animaux, que j'ai fait la découverte qui a changé ma vie. Depuis, je lui rends visite toutes les semaines. "
								<strong> Nathalie</strong>
							</div>
						</div>
					</div>

				</div>
				<div className="section-text container  block">
					<div className="text-container">
						<div className="text-wrap">
							<h2>Notre état d'esprit</h2>
							<hr />
							<p>Chava, c'est bien plus qu'une plateforme de pet sitting. C'est une communauté de cœurs généreux et dévoués. Ici, chaque service rendu, chaque sourire partagé, est animé par la passion commune pour nos amis à quatre pattes. </p>
						</div>
						<div className="text-wrap">
							<h2>Bénévolat et gratuité</h2>
							<hr />
							<p>Avec notre approche basée sur le volontariat, nous construisons ensemble un réseau d'entraide unique où l'amour pour les animaux crée des liens solides. Rejoignez-nous pour offrir et recevoir, car chaque geste compte, chaque câlin fait une différence. </p>
						</div>
						<div className="text-wrap">
							<h2>Développer ensemble</h2>
							<hr />
							<p>Ensemble, faisons de chaque patte qui gambade et chaque ronronnement de joie une célébration de notre engagement envers les animaux qui nous tiennent tant à cœur.</p>
						</div>
					</div>
				</div>
				<div className="section-max-width block">
					<div className="items-wrap">
						<Row className='container'>
							<Col className='wrap-sub' sm={24} md={8}>
								<h3>Inscrivez-vous</h3>
								<Icon
									type="FaChalkboardUser"
									className="icon-home"

								/>
								<p>"Inscrivez-vous dès maintenant pour trouver des compagnons pelucheux à choyer et faire de chaque jour une journée de jeu et de bonheur pour les animaux de votre quartier."</p>

							</Col>
							<Col className='wrap-sub' sm={24} md={8} >
								<h3>Rechercher les pet sitters</h3>
								<Icon
									type="FaSearchLocation"
									className="icon-home"
								/>
								<p>Trouvez le Pet Sitter parfait en quelques clics sur notre site, pour que votre animal soit entre de bonnes mains à chaque absence.</p>
							</Col>
							<Col className='wrap-sub' sm={24} md={8}>
								<h3>Communiquer entre vous</h3>
								<Icon
									type="FaRegMessage"
									className="icon-home"
								/>

								<p>Échangez conseils et anecdotes avec d'autres amoureux des animaux sur notre site, créez des liens et partagez votre passion</p>
							</Col>
						</Row>
					</div>
				</div>

				<div className="section-text container block">
					<div className="text-container">
						<h1>La liste de nos services</h1>
						<div className="text-wrap">
							<div className="head-wrap">
								<h2>Hébergement</h2>
								<img src="../src/assets/media/lodging.svg" alt="" />

							</div>
							<hr />
							<p> Vos animaux de compagnie séjournent chez votre pet sitter pendant la nuit, bénéficiant d'un traitement royal au sein de la famille d'accueil, dans un cadre agréable.</p>
						</div>
						<div className="text-wrap">
							<div className="head-wrap">
								<h2>Garde</h2>
								<img src="../src/assets/media/keep.svg" alt="" />
							</div>
							<hr />
							<p>Avec notre approche basée sur le volontariat, nous construisons ensemble un réseau d'entraide unique où l'amour pour les animaux crée des liens solides. Rejoignez-nous pour offrir et recevoir, car chaque geste compte, chaque câlin fait une différence. </p>
						</div>
						<div className="text-wrap">
							<div className="head-wrap">
								<h2>Promenade</h2>
								<img src="../src/assets/media/walk-dog.svg" alt="" />
							</div>
							<hr />
							<p>Ensemble, faisons de chaque patte qui gambade et chaque ronronnement de joie une célébration de notre engagement envers les animaux qui nous tiennent tant à cœur.</p>
						</div>
						<div className="text-wrap">
							<div className="head-wrap">
								<h2>Visite</h2>
								<img src="../src/assets/media/feed.svg" alt="" />
							</div>
							<hr />
							<p>Ensemble, faisons de chaque patte qui gambade et chaque ronronnement de joie une célébration de notre engagement envers les animaux qui nous tiennent tant à cœur.</p>
						</div>
					</div>
				</div>
				<div className="section-max-width block">
					<div className="container">
						<h1>Les derniers utilisateurs qui nous ont rejoint</h1>
						<div className="users-wrap">
							{userList}
						</div>
					</div>
				</div>
				<div className="section-text container block">
					<div className="text-container">
						<div className="text-wrap">
							<h2>Disponible sur vos téléphones </h2>
						</div>
						<div className="mobiles-wrap">
							<img src="../src/assets/media/home/mobile.png" alt="presentation app mobile" />
							<img src="../src/assets/media/home/mobile1.png" alt="presentation app mobile" />
						</div>
						<div className="download-wrap">
							<img src="../src/assets/media/home/badge.png" alt="download for google store" onClick={() => window.open("https://play.google.com/store/apps?hl=fr")}
							/>
							<img src="../src/assets/media/home/apple-badge.png" onClick={() => window.open("https://www.apple.com/fr/store")} alt="download for app store" />
						</div>


					</div>
				</div>


			</div>
		</>
	);
};

export default Home;
