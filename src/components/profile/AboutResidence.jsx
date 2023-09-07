import React from 'react'
import { Col, Divider, Row } from 'antd';
import { AiOutlineCheck } from 'react-icons/ai';

const AboutResidence = () => {
  return (
    <Row align="middle" className='bottom-about-profile'>
        <h2>À propos du domicile de user.name</h2>
        <Col span={12}>
            <Row align="middle">
                <Col span={2}>
                    <AiOutlineCheck/>
                </Col>
                <Col span={22}>
                    <p>Habite dans un appartement</p>
                </Col>
            </Row>
        </Col>
        <Col span={12}>
            <Row align="middle">
                <Col span={2}>
                    <AiOutlineCheck/>
                </Col>
                <Col span={22}>
                    <p>Foyer non-fumeur</p>
                </Col>
            </Row>
        </Col>
        <Col span={12}>
            <Row align="middle">
                <Col span={2}>
                    <AiOutlineCheck/>
                </Col>
                <Col span={22}>
                    <p>Pas d'enfant présent</p>
                </Col>
            </Row>
        </Col>
        <Col span={12}>
            <Row align="middle">
                <Col span={2}>
                    <AiOutlineCheck/>
                </Col>
                <Col span={22}>
                    <p>N'a pas de jardin</p>
                </Col>
            </Row>
        </Col>
        <Col span={12}>
            <Row align="middle">
                <Col span={2}>
                    <AiOutlineCheck/>
                </Col>
                <Col span={22}>
                    <p>N'a pas de chien</p>
                </Col>
            </Row>
        </Col>
        <Col span={12}>
            <Row align="middle">
                <Col span={2}>
                    <AiOutlineCheck/>
                </Col>
                <Col span={22}>
                    <p>N'a pas de chat</p>
                </Col>
            </Row>
        </Col>
    </Row>



  )
}

export default AboutResidence