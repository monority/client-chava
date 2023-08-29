import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../../context/userContext'

const Profile = () => {
    const { user } = useContext(UserContext)
  return (
    <>
        {/* Si il y a un user et que c'est true ça affiche le nom, le user vient  */}
        {!!user && (<h2>Wsh comment ça va{user.fname} {user.lname}</h2>)}
    </>
  )
}

export default Profile