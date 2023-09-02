import React from 'react'
import { Col, Divider, Row } from 'antd';
import { AiOutlineHeart } from 'react-icons/ai'
import { CiTimer } from 'react-icons/ci'
import { TbMessages } from 'react-icons/tb'
import Slider from '../../components/global/Slider';
import UserComment from '../../components/global/UserComment';



const Profile = () => {
  return (
    <>
        <section className="profile">
            <div className="hero-profile-container">
                
                <div className="hero-profile">
                <Row>
                    <Col span={8}>
                    <div className="profile-img">
                        <img src="/jean-claude.jpg" alt="" />
                    </div>
                    </Col>
                    <Col span={16}>
                    <div className="profile-summary">
                        <div className="profile-name">
                            <h1>User.name.</h1>
                        </div>
                        <div className="profile-response">
                            <div className="response-wrap mr">
                                <TbMessages size={15}/>
                                <span>Taux de réponse : 100%</span>
                            </div>
                            <div className="response-wrap">
                                <CiTimer size={15}/>
                                <span>Délai de réponse : 100%</span>
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

            <Row className='pt'>
                <Col span={8} >
                    <div className="services-card">
                        <div className="services-wrapper">
                            <div className="services-title">
                                <h2>Services</h2>
                            </div>
                            <div className="services-subtitle">
                                <div className="services__subtitle">
                                    <div className="services__subtitle-title">
                                        <h3>Hébergement</h3>
                                    </div>
                                    <div className="services__subtitle-sub">
                                        <p>Chez le pet sitter</p>
                                    </div>
                                </div>
                                <div className="services__subtitle">
                                    <div className="services__subtitle-title">
                                        <h3>Garde à domicile</h3>
                                    </div>
                                    <div className="services__subtitle-sub">
                                        <p>chez vous</p>
                                    </div>
                                </div>
                                <div className="services__subtitle">
                                    <div className="services__subtitle-title">
                                        <h3>Visites à domicile</h3>
                                    </div>
                                    <div className="services__subtitle-sub">
                                        <p>visites à votre domicile</p>
                                    </div>
                                </div>
                                <div className="services__subtitle">
                                    <div className="services__subtitle-title">
                                        <h3>Garderie pour chien</h3>
                                    </div>
                                    <div className="services__subtitle-sub">
                                        <p>chez le pet sitter</p>
                                    </div>
                                </div>
                                <div className="services__subtitle">
                                    <div className="services__subtitle-title">
                                        <h3>Hébergement</h3>
                                    </div>
                                    <div className="services__subtitle-sub">
                                        <p>Chez le pet sitter</p>
                                    </div>
                                </div>
                                <div className="services__subtitle">
                                    <div className="services__subtitle-title">
                                        <h3>Promenade de chien</h3>
                                    </div>
                                    <div className="services__subtitle-sub">
                                        <p>dans votre quartier</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pet-preferences">
                        <Row>
                            <Col span={24} >
                            <h2>User.name peut effectuer la garde chez vous</h2>
                                <Row>
                                    <Col span={8}>
                                        <div className="pet-preferences-info">
                                            <img src="/sdog.svg" alt="" />
                                            <h3>0-7</h3>
                                            <p>kg</p>
                                        </div>
                                    </Col>
                                    <Col span={8}>
                                        <div className="pet-preferences-info">
                                                <img src="/mdog.svg" alt="" />
                                                <h3>7-18</h3>
                                                <p>kg</p>
                                        </div>
                                    </Col>
                                    <Col span={8}>
                                        <div className="pet-preferences-info">
                                            <img src="/ldog.svg" alt="" />
                                            <h3>18-45</h3>
                                            <p>kg</p>
                                        </div>
                                    </Col>
                                    <Col span={8}>
                                        <div className="pet-preferences-info">
                                            <img src="/cat.svg" alt="" />
                                            <h3>Chats</h3>
                                            <p></p>
                                        </div>
                                    </Col>
                                    <Col span={8}>
                                        <div className="pet-preferences-info">
                                            <img src="/rongeur.svg" alt="" />
                                            <h3>Rongeurs</h3>
                                            <p></p>
                                        </div>
                                    </Col>
                                    <Col span={8}>
                                        <div className="pet-preferences-info">
                                            <img src="/sdog.svg" alt="" />
                                            <h3>Reptiles</h3>
                                            <p></p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                    <div className="pet-preferences">
                        <Row>
                            <Col span={24}>
                            <h2>User.name peut effectuer la garde à son domicile</h2>
                                <Row>
                                    <Col span={8}>
                                        <div className="pet-preferences-info">
                                            <img src="/sdog.svg" alt="" />
                                            <h3>0-7</h3>
                                            <p>kg</p>
                                        </div>
                                    </Col>
                                    <Col span={8}>
                                        <div className="pet-preferences-info">
                                                <img src="/mdog.svg" alt="" />
                                                <h3>7-18</h3>
                                                <p>kg</p>
                                        </div>
                                    </Col>
                                    <Col span={8}>
                                        <div className="pet-preferences-info">
                                            <img src="/ldog.svg" alt="" />
                                            <h3>18-45</h3>
                                            <p>kg</p>
                                        </div>
                                    </Col>
                                    <Col span={8}>
                                        <div className="pet-preferences-info">
                                            <img src="/cat.svg" alt="" />
                                            <h3>Chats</h3>
                                            <p></p>
                                        </div>
                                    </Col>
                                    <Col span={8}>
                                        <div className="pet-preferences-info">
                                            <img src="/rongeur.svg" alt="" />
                                            <h3>Rongeurs</h3>
                                            <p></p>
                                        </div>
                                    </Col>
                                    <Col span={8}>
                                        <div className="pet-preferences-info">
                                            <img src="/sdog.svg" alt="" />
                                            <h3>Reptiles</h3>
                                            <p></p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </Col>


                <Col span={16} >
                    <Slider/>
                    <UserComment
                        username="user.name"
                        description="J'ai grandi avec 12 bergers allemands, 2 chats et des poissons. En plus j'étais le seul enfant de la famille. C'était bondé et tellement cool. Je passais tous les jours de mon enfance à jouer avec eux. Ce n'est pas une surprise que je sois un amoureux des animaux et que j'ai une grande expérience avec eux. Ma grand-mère était une éleveuse de bergers allemands et mon grand-père m'a beaucoup appris sur la formation des …"         
                    />
                </Col>
            </Row>
        </section>   
        
    </>
  )
}

export default Profile