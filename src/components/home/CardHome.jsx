import React from 'react'
import {Popconfirm } from 'antd';

const CardHome = ({ fname, lname, description, rating, ratingsNumber, action, town, showButton = false, className, classNamebutton, confirm, cancel }) => {

	return (
		<>
			<div className={className}>
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
				<div className="button-wrap">
					{showButton ? <Popconfirm
						title="Suppression"
						description="Voulez-vous supprimer cette utilisateur ?"
						onConfirm={confirm}
						onCancel={cancel}
						okText="Oui"
						cancelText="Non"
					>
						<button className={classNamebutton}>
							Supprimer
						</button>
					</Popconfirm> : ""}


				</div>
			</div>
		</>
	)
}

export default CardHome