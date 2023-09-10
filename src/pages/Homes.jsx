import React, { useEffect, useRef, useState } from 'react'
import Button from '../components/global/Button';
import { useTransform, useScroll, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


// page d'accueil
const Homes = () => {
	const content = useRef(null);
	const navigate = useNavigate();
	const { scrollYProgress } = useScroll({
		target: content,
		// Debut du container fin de la page, stop fin container debut window
		offset: ['start end', 'end start']
	});
	const x = useTransform(scrollYProgress, [0, 1], [0, 200]);

	return (
		<>
			<div id="home">

				<div className="section-hero container block">
					<div className="content-container">
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

				<div className="section-text container block">
					<div className="text-container">
						<div className="content-container">
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
				</div>
			</div>
		</>
	);
};

export default Homes;
