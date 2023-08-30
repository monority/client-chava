import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();
	const checkLocation = location.pathname === "/account/check";
	const checkLocation_1 = location.pathname === "/account/register";

    return (
        <>
            {!checkLocation && !checkLocation_1?
                <div id="footer">
                    <div className="container block">
                        <div className="wraps">
                            <div className="title-wrap">
                                <h1>Footer. @Copyright 2023</h1>
                            </div>
                            <div className="list-wrap">
                                <ul>
                                    <li onClick={() => navigate("./help/contact")}>Nous Contacter</li>
                                    <li onClick={() => navigate("./help/questions")}>FAQ (Foire aux questions)</li>
                                    <li>Signaler un problème</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                : null}
        </>
    )
}

export default Footer