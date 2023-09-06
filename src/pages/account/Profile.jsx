import React, { useEffect, useState } from 'react';
import { Col, Divider, Row } from 'antd';
import { AiOutlineHeart } from 'react-icons/ai'
import { CiTimer } from 'react-icons/ci'
import { TbMessages } from 'react-icons/tb'
import Slider from '../../components/profile/Slider';
import UserDescription from '../../components/profile/UserDescription';
import UserReviews from '../../components/profile/UserReviews';
import AboutResidence from '../../components/profile/AboutResidence';
import AboutSkills from '../../components/profile/AboutSkills';
import PhotoGallery from '../../components/profile/PhotoGallery';
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast'
import axios from 'axios';

const Profile = () => {

	const { id } = useParams();
	const [data, setData] = useState({})
	const [loaded,setLoaded] = useState(false)

	useEffect(() => {
		userBase();
	}, [])

	const userBase = async () => {
		try {
			const { data } = await axios.get(`/getuser/${id}`);
			if (data.error) {
				toast.error(data.error);
			} else {
				setData(data);
				console.log(data)
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<section className="profile">
				<div className="hero-profile-container">

					<div className="hero-profile">
						<Row>
							<Col span={7}>
								<div className="profile-img">
									<img src="../src/assets/media/profile/jean-claude.jpg" alt="" />
								</div>
							</Col>
							<Col span={2}>
							</Col>
							<Col span={15}>
								<div className="profile-summary">
									<div className="profile-name">
										<h1>{`${data?.user?.fname} ${data?.user?.lname}`}</h1>
										<h2>{data?.user?.town}</h2>
									</div>
									<div className="profile-response">
										<div className="response-wrap mr">
											<TbMessages size={15} />
											<span>Taux de réponse : 100%</span>
										</div>
										<div className="response-wrap">
											<CiTimer size={15} />
											<span>Délai de réponse : 100%</span>
										</div>
									</div>
									<div className="profile-contact-fav">
										<div className="contact-button">
											<p>Contacter {data?.user?.lname}</p>
										</div>
										<div className="fav-button">
											<AiOutlineHeart size={20} color="#04985a" />
										</div>
									</div>
								</div>
							</Col>
						</Row>
					</div>
				</div>

				<Row className='pt'>
					<Col span={7} >
						<div className="services-card">
							<div className="services-wrapper">
								<div className="services-title">
									<h2>Services</h2>
								</div>
								<div className="services-subtitle">
									<div className="services__subtitle">
										<div className="services__subtitle-title">
											<h3>Hébergement</h3>
										</div>
										<div className="services__subtitle-sub">
											<p>Chez le pet sitter</p>
										</div>
									</div>
									<div className="services__subtitle">
										<div className="services__subtitle-title">
											<h3>Garde à domicile</h3>
										</div>
										<div className="services__subtitle-sub">
											<p>chez vous</p>
										</div>
									</div>
									<div className="services__subtitle">
										<div className="services__subtitle-title">
											<h3>Visites à domicile</h3>
										</div>
										<div className="services__subtitle-sub">
											<p>visites à votre domicile</p>
										</div>
									</div>
									<div className="services__subtitle">
										<div className="services__subtitle-title">
											<h3>Garderie pour chien</h3>
										</div>
										<div className="services__subtitle-sub">
											<p>chez le pet sitter</p>
										</div>
									</div>
									<div className="services__subtitle">
										<div className="services__subtitle-title">
											<h3>Hébergement</h3>
										</div>
										<div className="services__subtitle-sub">
											<p>Chez le pet sitter</p>
										</div>
									</div>
									<div className="services__subtitle">
										<div className="services__subtitle-title">
											<h3>Promenade de chien</h3>
										</div>
										<div className="services__subtitle-sub">
											<p>dans votre quartier</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="pet-preferences">
							<Row>
								<Col span={24} >
									<h1><strong>{data?.user?.fname}</strong>	peut effectuer la garde chez vous</h1>
									
									<Row>
										<Col span={8}>
											<div className="pet-preferences-info">
												<img src="../src/assets/media/profile/sdog.svg" alt="" />
												<h3>0-7</h3>
												<p>kg</p>
											</div>
										</Col>
										<Col span={8}>
											<div className="pet-preferences-info">
												<img src="../src/assets/media/profile/mdog.svg" alt="" />
												<h3>7-18</h3>
												<p>kg</p>
											</div>
										</Col>
										<Col span={8}>
											<div className="pet-preferences-info">
												<img src="../src/assets/media/profile/ldog.svg" alt="" />
												<h3>18-45</h3>
												<p>kg</p>
											</div>
										</Col>
										<Col span={8}>
											<div className="pet-preferences-info">
												<img src="../src/assets/media/profile/cat.svg" alt="" />
												<h3>Chats</h3>
												<p></p>
											</div>
										</Col>
										<Col span={8}>
											<div className="pet-preferences-info">
												<img src="../src/assets/media/profile/rongeur.svg" alt="" />
												<h3>Rongeurs</h3>
												<p></p>
											</div>
										</Col>
										<Col span={8}>
											<div className="pet-preferences-info">
												<img src="../src/assets/media/profile/sdog.svg" alt="" />
												<h3>Reptiles</h3>
												<p></p>
											</div>
										</Col>
									</Row>
								</Col>
							</Row>
						</div>
						<div className="pet-preferences">
							<Row>
								<Col span={24}>
									
								<h1><strong>{data?.user?.fname}</strong>	peut effectuer la garde chez vous</h1>
									<Row>
										<Col span={8}>
											<div className="pet-preferences-info">
												<img src="../src/assets/media/profile/sdog.svg" alt="" />
												<h3>0-7</h3>
												<p>kg</p>
											</div>
										</Col>
										<Col span={8}>
											<div className="pet-preferences-info">
												<img src="../src/assets/media/profile/mdog.svg" alt="" />
												<h3>7-18</h3>
												<p>kg</p>
											</div>
										</Col>
										<Col span={8}>
											<div className="pet-preferences-info">
												<img src="../src/assets/media/profile/ldog.svg" alt="" />
												<h3>18-45</h3>
												<p>kg</p>
											</div>
										</Col>
										<Col span={8}>
											<div className="pet-preferences-info">
												<img src="../src/assets/media/profile/cat.svg" alt="" />
												<h3>Chats</h3>
												<p></p>
											</div>
										</Col>
										<Col span={8}>
											<div className="pet-preferences-info">
												<img src="../src/assets/media/profile/rongeur.svg" alt="" />
												<h3>Rongeurs</h3>
												<p></p>
											</div>
										</Col>
										<Col span={8}>
											<div className="pet-preferences-info">
												<img src="../src/assets/media/profile/sdog.svg" alt="" />
												<h3>Reptiles</h3>
												<p></p>
											</div>
										</Col>
									</Row>
								</Col>
							</Row>
						</div>
					</Col>

					<Col span={2}>
					</Col>
					<Col span={15} >
						<Slider/>
						<PhotoGallery />
						<UserDescription
							username={data?.user?.fname}
							description="J'ai grandi avec 12 bergers allemands, 2 chats et des poissons. En plus j'étais le seul enfant de la famille. C'était bondé et tellement cool. Je passais tous les jours de mon enfance à jouer avec eux. Ce n'est pas une surprise que je sois un amoureux des animaux et que j'ai une grande expérience avec eux. Ma grand-mère était une éleveuse de bergers allemands et mon grand-père m'a beaucoup appris sur la formation des chiots, les premiers soins et les soins généraux. J'ai un lien spécial avec tous les animaux (enfin peut-être sauf les serpents et les araignées) et depuis l'âge de 18 ans, je fais du bénévolat dans un refuge pour animaux sans abri dans ma ville natale en Pologne.

                        J'ai déménagé à Paris il y a 3 ans, mais cela me manquait d'avoir un animal de compagnie avec moi. En 2021, mon petit ange gardien Luna est né. Elle est une assez grande cavalière King Charles Spaniel, avec un caractère extraordinaire. Elle est super amicale avec chaque humain, enfant et autre animal. Elle voyage toujours avec moi et elle est candidate au Guiness Book of Records. En 2022, j'ai également décidé d'adopter un chat du refuge où je faisais du bénévolat, et c'était la deuxième meilleure décision jamais prise. Cookie (nom du chat) doit avoir été élevé avec des chiens auparavant, car il est super gentil avec eux et se comporte aussi parfois comme un chien. Je crois beaucoup à la socialisation de nos animaux.
                        
                        Quand j'ai déménagé à Paris, j'ai beaucoup utilisé Rover pour trouver un dog sitter pour Luna. Et j'étais très content de mes choix alors j'espère que vous et votre animal aimeriez rester avec nous !!!
                        
                        PS j'ai beaucoup de jouets
                        
                        Mon emploi du temps est très flexible. Je travaille à domicile et cela me donne beaucoup de liberté. Contactez-moi pour plus d'informations et je suis sûr que nous pouvons trouver la dates et des horaires parfait.
                        
                        Je vis dans un grand appartement (presque 100m2) donc il y a beaucoup d'espace pour les amis à quatre pattes. Comme j'aime gâter mes animaux, nous avons beaucoup de balles, de friandises, d'os, de souris et de tous les jouets pour animaux que vous pouvez imaginer. Luna et Cookie ont l'habitude de partager leurs jouets. Nous vivons dans le premier arrondissement de Paris (métro 1,7 ou 8), à 5 min à pied du jardin des Tuleries."
						/>
						<UserReviews 
						date={data?.user?.date}
						name={data?.user?.fname}
						/>
						<AboutResidence 
						user={data?.user?.fname}
						/>
						<AboutSkills 
						user={data?.user?.fname}
						/>
					</Col>

				</Row>
			</section>

		</>
	)
}

export default Profile