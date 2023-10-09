import React from 'react'
import Button from '../components/global/Button'
import { useNavigate } from 'react-router-dom'
const Error = () => {
  const navigate = useNavigate();
  return (
    <>

      <div id="error" className="block container main">
        <div className="flex justify-content-center align-items-center flex-column">
          <h1>Si vous êtes ici, c'est que vous vous êtes perdus.</h1>
          <Button className={"btn m-3"} action={() => navigate("./")}>
            Retourner vers la page principale
          </Button> 
        </div>
      </div>
    </>
  )
}

export default Error