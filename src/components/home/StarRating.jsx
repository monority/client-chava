import React from 'react';

function StarRating({ stars }) {
    const starArray = [];
    
    for (let i = 0; i < 5; i++) {
        starArray.push(
            <img
                key={i}
                src={i < stars ? "../src/assets/media/icons/starempty.svg" : "../src/assets/media/icons/starempty.svg"}
                alt="Star"
            />
        );
    }

    return <div className="stars-container">{starArray}</div>;
}

export default StarRating;