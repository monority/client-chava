import React from 'react'

// Composant bouton pour assigné des props, spécialement pour avoir la props children qui permet d'assigner d'autres éléments aux boutons
const Button = ({ action, children, className }) => {
  return (
    <>
      <button className={className} onClick={action} >
        {children}
      </button>
    </>
  )
}


export default Button