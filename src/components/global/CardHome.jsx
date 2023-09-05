import React from 'react'

const CardHome = ({ fname, lname, description, rating, ratingsNumber, action, town , getprofile}) => {
	return (
		<>
			<div className="homebox-wrap" onClick={action}>
				<div className="head-wrap">
					<h6>{fname} {lname}</h6>
				</div>
				<div className="town-wrap">
					<p>{town}</p>
				</div>
				<div className="content-container">
					<p>{description}</p>

				</div>
				<div className="ratings-wrap">

					<p> {rating} {ratingsNumber} </p>
				</div>
			</div>
		</>
	)
}

export default CardHome