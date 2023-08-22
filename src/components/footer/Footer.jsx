import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate();
    return (
        <>
            <div id="footer">
                <div className="container block">
                    <div className="wraps">
                        <div className="title-wrap">
                            <h1>Footer. @Copyright 2023</h1>
                        </div>
                        <div className="list-wrap">
                            <ul>
                                <li onClick={() => navigate("./help/contact")}>Nous Contacter</li>
                                <li>FAQ (Foire aux questions)</li>
                                <li>Signaler un problème</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer