import React from 'react'
import { Col, Divider, Row } from 'antd';

const UserReviews = () => {
  return (
    <Row className='reviews'>
        <h2>Avis</h2>
        <Col span={24}>
            <Row className='reviews-details'>
                <Col span={3} className='reviews_details-img text-start'>
                    <div className="img-container">
                        <img src="/jean-claude.jpg" alt="" />
                    </div>
                </Col>
                <Col span={5} className='reviews_details-info'>
                    <p>user.name</p> 
                    <p>user.date</p> 
                </Col>
            </Row>
        </Col>
        <Col span={24} className='reviews-content'>
            <p>user.review</p>
        </Col>
    </Row>
  )
}

export default UserReviews