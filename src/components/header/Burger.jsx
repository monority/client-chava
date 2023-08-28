import React, { useState } from 'react'

const Burger = () => {
    // Utilisation d'un state pour track si le menu is active ou pas
    const [isActive, setIsActive] = useState(false)
  return (
    <>
        <div className='button'>
            <div className={`${'burger'} ${isActive ? 'burgerActive' : "" }`}>
            </div>
        </div>
    </>
  )
}

export default Burger