import React from 'react'
import { Col, Divider, Row } from 'antd';
import { AiOutlineCheck } from 'react-icons/ai';

const AboutSkills = ({user}) => {
  return (
    <Row className='bottom-about-profile'>
        <h2>Compétences supplémentaires de {user}</h2>
        <Col span={12}>
            <Row>
                <Col span={2}>
                    <AiOutlineCheck/>
                </Col>
                <Col span={22}>
                    <p>Administration de médicaments par voie orale</p>
                </Col>
            </Row>
        </Col>
        <Col span={12}>
            <Row>
                <Col span={2}>
                    <AiOutlineCheck/>
                </Col>
                <Col span={22}>
                    <p>S'est déjà occupé d'animaux ayant des besoins spéciaux</p>
                </Col>
            </Row>
        </Col>
        <Col span={12}>
            <Row>
                <Col span={2}>
                    <AiOutlineCheck/>
                </Col>
                <Col span={22}>
                    <p>S'est déjà occupé d'animaux âgés</p>
                </Col>
            </Row>
        </Col>
        <Col span={12}>
            <Row>
                <Col span={2}>
                    <AiOutlineCheck/>
                </Col>
                <Col span={22}>
                    <p>Peut faire faire de l'exercice tous les jours</p>
                </Col>
            </Row>
        </Col>
    </Row>
    


  )
}

export default AboutSkills