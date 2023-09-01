import React from 'react'
import { Col, Row } from 'antd';
import { AiOutlineHeart } from 'react-icons/ai'
import { CiTimer } from 'react-icons/ci'
import { TbMessages } from 'react-icons/tb'

const Profile = () => {
  return (
    <>
        <section className="profile">
            <div className="hero-profile-container">
                
                <div className="hero-profile row">
                <Row  type="flex" justify="start" align="middle">
                    <Col span={8}>
                    <div className="profile-img">
                        <img src="/jean-claude.jpg" alt="" />
                    </div>
                    </Col>
                    <Col span={14}>
                    <div className="profile-summary">
                        <div className="profile-name">
                            <h1>Jean-Claude V.</h1>
                        </div>
                        <div className="profile-response">
                            <div className="response-wrap mr">
                                <TbMessages size={15}/>
                                <span>Taux de réponse : 100%</span>
                            </div>
                            <div className="response-wrap">
                                <CiTimer size={15}/>
                                <span>Délai de réoinse : 100%</span>
                            </div>
                        </div>
                        <div className="profile-contact-fav">
                            <div className="contact-button">
                                <p onClick>Contacter user.name</p>
                            </div>
                            <div className="fav-button">
                                <AiOutlineHeart size={20} color="#04985a" />
                            </div>
                        </div>
                    </div>
                    </Col>
                </Row>
                </div>
                
            </div>
        </section>   
    </>
  )
}

export default Profile