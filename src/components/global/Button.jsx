import React from 'react'

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