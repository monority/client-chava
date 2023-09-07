import React from 'react'
import { Col, Divider, Row } from 'antd';

const UserReviews = ({name,date,review}) => {
  return (
    <Row className='reviews'>
        <h2>Avis</h2>
        <Col span={24}>
            <Row className='reviews-details'>
                <Col span={3} className='reviews_details-img text-start'>
                    <div className="img-container">
                        <img src="../src/assets/media/profile/jean-claude.jpg" alt="" />
                    </div>
                </Col>
                <Col span={5} className='reviews_details-info'>
                    <p>{name}</p> 
                    <p>{date}</p> 
                </Col>
            </Row>
        </Col>
        <Col span={24} className='reviews-content'>
            <p>{review}</p>
        </Col>
    </Row>
  )
}

export default UserReviews