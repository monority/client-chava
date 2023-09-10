import React, { useEffect, useState } from 'react';
import { preLoaderAnim } from './animations';

const Preloader = () => {
    const [showAnimation, setShowAnimation] = useState(true);

    useEffect(() => {
        const hasAnimationShown = localStorage.getItem('animationShown');
        if (!hasAnimationShown) {
            preLoaderAnim();
            localStorage.setItem('animationShown', 'true');
        }
        setShowAnimation(false);
    }, []);

    return (
        <div className={`preloader ${showAnimation ? 'show' : ''}`}>
            <div className="texts-container">
				<span></span>
                <span>Chava</span>
				<span></span>
                
				<img src="../src/assets/logo192.svg" alt="" />
            </div>
        </div>
    );
};

export default Preloader;
