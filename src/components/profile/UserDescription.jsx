import React, { useEffect, useRef, useState } from 'react'

const UserDescription = ({username, description}) => {
    
    const [isOpen, setIsOpen] = useState(false);
    const [showReadMore, setShowReadMore] = useState(false)
    const ref = useRef(null)
    useEffect(() => {
        if (ref.current) {
            setShowReadMore(
                ref.current.scrollHeight !== ref.current.clientHeight
            )
        }
    }, [])


  return (
    <div className="user-description">
        <h2>À propos de {username}</h2>
        <div className="user-description-content">
            <p className={`description ${!isOpen ? 'expand' : ''}`} ref={ref}>
                {description}
            </p>
        </div>
        {/*si  isOpen est false lire plus sinon lire moins */}
            {showReadMore && (
        <p className='read-more' onClick={()=> setIsOpen(!isOpen)}>{isOpen ? '(Lire moins)' : ' (Lire plus)' }</p>
            )}
            
    </div>
  )
}

export default UserDescription