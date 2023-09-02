import React, { useState } from 'react'

const UserComment = ({username, description}) => {
    const [expand, setExpand] = useState(false);

    const toogleDescription = () => {
        setExpand(!expand)
    }

  return (
    <div className="user-description">
        <h2>À propos de {username}</h2>
        <div className={`description ${expand ? 'expand' : ''}`}>
            {description}
        </div>
        {!expand && (
            <p className='read-more' onClick={toogleDescription}>(Lire plus)</p>
        )}
    </div>
  )
}

export default UserComment