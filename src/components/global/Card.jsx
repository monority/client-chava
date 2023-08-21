import React from 'react'
import Button from './Button'
const Card = ({ title, action, description, image, subtitle }) => {
    return (
        <>
            <div className="card-wrap" onClick={action}>
                <div className="image-wrap">
                    <img src={`${process.env.PUBLIC_URL}/projects/${image}.png`} alt="" />
                </div>
                <div className="text-wrap">
                    <div className="title-wrap">
                        <h3>{title}</h3>
                        <h5>{subtitle}</h5>
                    </div>
                    <div className="desc-wrap">
                        <p>{description}</p>
                    </div>
                    <div className="button-wrap">
                        <Button className="btn-read">
                            En savoir plus
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card