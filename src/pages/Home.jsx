import React, { useEffect, useState } from 'react'
import Preloader from '../components/global/Preloader'
import Icon from '../components/global/Icon'
import { Col, Row } from 'antd';
import Button from '../components/global/Button'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast'
import axios from 'axios';
import CardHome from '../components/home/CardHome';
import { nanoid } from 'nanoid';
import CommentaryBox from '../components/home/CommentaryBox';
import commentaries from '../commentaries';

// page d'accueil
const Home = () => {
	const [users, setUsers] = useState([]);
	const hasAnimationShown = localStorage.getItem('animationShown');
	const [userProfile, setUserProfile] = useState("");

	const navigate = useNavigate();

	const usersBase = async () => {
		try {
			const { data } = await axios.get(`/getusershome`);
			if (data.error) {
				toast.error(data.error);
			} else {
				setUsers(data);
			}
		} catch (error) {
			console.log(error);
		}
	};


	useEffect(() => {
		usersBase()
	}, [])



	const userList = users.map(user => (
		<CardHome
			// on utilise nanoid pour la key pour avoir un id unique pour éviter l'erreur des childs avec le même id
			key={nanoid()}
			id={user._id}
			fname={user.fname}
			lname={user.lname}
			town={user.town}
			description={user.profile ? user.profile.description : ""}
			action={() => navigate(user._id)}
			className="homebox-wrap"

		/>
	))
	const commentarylist = commentaries.map(commentary => {
		return (
			<CommentaryBox
				id={commentary.id}
				key={commentary.id}
				lname={commentary.lname}
				fname={commentary.fname}
				text={commentary.text}
				subtitle={commentary.subtitle}
				stars={commentary.stars}

			/>
		)
	})

	return (
		<>
			{!hasAnimationShown ?
				<Preloader></Preloader> : ""}
			<div id="home">

				<div className="section-landing container  block">
					<div className="wraps">
						<div className="img-wrap">
							<img src="../src/assets/media/cat-home.svg" alt="" />
						</div>
						<div className="content-wrap">
							<div className="text-wrap">
								<div className="title-wrap">
									<h1>Chava</h1>
								</div>
								<div className="wrap">
									<h2>Sur Chava, la solidarité prend tout son sens : ensemble, tissons des moments de bonheur au service de nos amis les animaux</h2>
								</div>
								<div className="button-wrap">
									<Button type="submit" value="Valider" className="btn btn-submit" aria-label='Envoyer le formulaire' action={() => (navigate("../account/check"), { replace: true })}>
										Authentification
									</Button>
									<Button type="submit" value="Valider" className="btn btn-list" aria-label='Envoyer le formulaire' action={() => (navigate("../services"), { replace: true })}>
										Consulter les pet sitter
									</Button>
								</div>
							</div>

						</div>
					</div>
				</div>
				<div className="section-blank  block">
					<div className="content-container">
						<div className="section-text">
							<h1>Chava est disponible partout en France</h1>
							<p>Partout en France, et tout près de chez vous : Chava vous connecte à une communauté d'amoureux des animaux prêts à apporter soins et affection à vos compagnons à quatre pattes.</p>
						</div>
						<div className="comment-container">
							<h2>Nos utilisateurs sont satisfaits</h2>
							<div className="comment-wrap">

								<figure>
									<div className="image-wrap">
										<img src="../src/assets/media/home/pres1.jpg" alt="" />
									</div>
									<figcaption>
										"J'ai rencontré mon meilleur ami sur Chava,
										Depuis, je le vois toutes les semaines.
										J'ai recommandé Chava à mes amis et ils en sont satisfaits."
										<strong> Alexandra</strong>
									</figcaption>
								</figure>
								<figure>
									<div className="image-wrap">
										<img src="../src/assets/media/home/pres2.jpg" alt="" />
									</div>
									<figcaption>
										"Mon aventure sur Chava a commencé il y a un an. Depuis, je le consulte régulièrement. Les histoires sur les animaux m'inspirent à chaque visite. J'ai partagé Chava avec mes proches, et ils sont fans !"
										<strong> Kevin</strong>
									</figcaption>
								</figure>
								<figure>
									<div className="image-wrap">
										<img src="../src/assets/media/home/pres3.jpg" alt="" /></div>								
											<figcaption>
										"C'est sur Chava, un site dédié aux animaux, que j'ai fait la découverte qui a changé ma vie. Depuis, je lui rends visite toutes les semaines. "
										<strong> Nathalie</strong>
									</figcaption>
								</figure>
							</div>
						</div>
					</div>
				</div>

				<div className="section-two container  block">
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

				<div className="section-blank  block">
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

				<div className="section-two container block">
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


				<div className="section-users block">
					<div className="container">
						<h1>Les derniers utilisateurs qui nous ont rejoint</h1>
						<div className="users-wrap">
							{userList}
						</div>
					</div>
				</div>
				<div className="section-three container block">
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
