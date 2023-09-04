import React from 'react'
import Icon from './Icon'

// Composant Card - Utiliser sur la page des services pour afficher les utilisateurs.
const Card = ({ firstname, lastname, action, image, ratingsNumber, pet, services, town, ratings, description, petOffer }) => {
	return (
		<>
			<div className="card-wrap box-style" onClick={action}>
				{/* <div className="image-wrap">
					<img src={`src/assets/media/${image}.webp`} alt="" />
				</div> */}
				<div className="text-wrap">
					<div className="title-wrap">
						<span><h3>{firstname}</h3><h3>{lastname}</h3></span>

					</div>
					<div className="services-container">
						<div className="services-wrap">
							<Icon
								type="FaPaw"

							/>
							<p>Peut s'occuper de : {petOffer}</p>


						</div>
						<div className="services-wrap">
							<Icon
								type="FaPaw"

							/>
							<p>Possède : {pet}</p>


						</div>

						<div className="services-wrap">
							<Icon
								type="FaShoppingBag"

							/>
							<p>{services}</p>
						</div>
					</div>
					<div className="services-container">
						<div className="services-wrap">
							<Icon
								type="FaLocationDot"

							/>
							<p>{town}</p>
						</div>
						<div className="services-wrap">
							<Icon
								type="FaStar"

							/>
							<p>{ratings} ({ratingsNumber} avis)</p>
						</div>
					</div>
					<div className="services-wrap">
						<p>Description : {description}</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Card