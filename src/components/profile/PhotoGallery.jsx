import { Row, Col } from 'antd'
import React from 'react'

const PhotoGallery = () => {
  return (
    <Row className='photo-gallery'>
        <Col span={15}>
            <div className="main-photo">
                <img src="../src/assets/media/profile/1.jpg" alt="" />
            </div>
        </Col>
        <Col span={9}>
            <Row>
                <Col span={24}>
                    <div className="sub-photo">
                        <img src="../src/assets/media/profile/2.jpg" alt="" />
                    </div>
                </Col>
                <Col span={24}>

                    <div className="sub-photo">
                        <img src="../src/assets/media/profile/5.jpg" alt="" />
                    </div>
                </Col>
            </Row>
        </Col>
    </Row>
  )
}

export default PhotoGallery