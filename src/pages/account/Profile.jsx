import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../../context/userContext'

const Profile = () => {
    const { user } = useContext(UserContext) // de se "brancher" très simplement au Contexte, et donc d'accéder au State partagé 
  return (
    <>
        {/* Si il y a un user et que c'est true ça affiche le nom, le user vient  */}
        {/* && si la condition est fausse, react ignore la ligne */}
        {user && (<h2>Wsh comment ça va{user.fname} {user.lname}</h2>)}
    </>
  )
}

export default Profile