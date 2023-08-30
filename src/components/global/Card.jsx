import React from 'react'
import Button from './Button'
import Icon from './Icon'

// Composant Card - Utiliser sur la page des services pour afficher les utilisateurs.
const Card = ({ firstname, lastname, action, image, note, pet, services, town, noteNumber, description }) => {
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
							<p>{pet}</p>

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
							<p>{note} ({noteNumber} avis)</p>
						</div>
					</div>
					<div className="desc-wrap">
						<p>{description}</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Card