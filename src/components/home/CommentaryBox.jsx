import React from 'react'
import StarRating from './StarRating'

const CommentaryBox = ({ text, subtitle, stars, icon, lname, fname }) => {
	return (
		<>
			<div className="commentary-box">
				<div className="name-wrap">
					<h3>{fname} {lname}</h3>
				</div>

				<div className="desc-wrap">
					<h4>"{text}"</h4>

					<h5>Je recommande :<strong> "{subtitle}"</strong></h5>
				</div>
				<div className="star-wrap">
				<StarRating stars={stars} />
				</div>
			</div>
		</>
	)
}

export default CommentaryBox