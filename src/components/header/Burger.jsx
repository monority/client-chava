import React, {  useState } from 'react';
import Nav from './Nav';
import { AnimatePresence } from 'framer-motion';




const Burger = () => {
	// State pour track si le menu est active ou pas
	const [isActive, setIsActive] = useState(false);

	const closeMenu = () => {
		setIsActive(false);
	  };
  return (
	<>
    <div>

      <div className="burger-menu">
        <div onClick={() => {setIsActive(!isActive)}} className="button">
			{/* Classe conditionel is le menu burger est active on lui donne cette classe */}
          <div className={ `burger  ${isActive ? 'burgerActive' : ''}`}></div>
        </div>
      </div>
    </div>
	{/* pour avoir uen animation de sortie */}
	<AnimatePresence mode="wait">
		{isActive && <Nav closeMenu={closeMenu}/>}
	</AnimatePresence>	
    </>
  )
}

export default Burger