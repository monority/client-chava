import React from 'react'
import { motion } from 'framer-motion';
import { menuSlide } from './anim';
import { slide } from './anim';


const Nav = () => {
const items = ["Home", "S'identifier", "Trouver un PetSitter", "Devenir PetSitter", "Nous contacter", "Support"];
  return (
    <motion.div
    variants={menuSlide}
    animate="enter"
    exit="exit"
    initial="initial"
    className="menu">
        <div className="body">
            <div className="nav">
                <div className="header">
                    <p>Navigation</p>
                </div>
                {
                    items.map((item, index) => (
                        <motion.div
                        custom={index}
                        variants={slide}
                        animate="enter"
                        exit="exit"
                        initial="initial"
                        className="link"
                        key={index}
                        >
                        {item}
                        </motion.div>
                    ))
                }

            </div>
            <div className="footer">
                <a>Twitter</a>
                <a>Instagram</a>
                <a>Facebook</a>
                <a>Reddit</a>
            </div>
        </div>
    </motion.div>
  )
}

export default Nav