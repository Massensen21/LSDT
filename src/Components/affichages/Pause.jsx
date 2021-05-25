import React from 'react'

import { render } from "react-dom";

import "../fontawesomeIcone/index";
// get our fontawesome imports
import { faHome } from "@fortawesome/free-solid-svg-icons";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Pause() {
    return (
        <div className="has-background-black">
            <div className="card has-background-dark">
            <span class="icon">
            <FontAwesomeIcon icon="camera"/>
            </span>
            
              
            
  <div className="card-content">
    
    

    <div className="content has-text-white has-text-centered">
       Votre compte est en pause.
     
      <br/>
      <br/>  
       conformément à votre demande. nous avons <br/>
       mis votre abonnement en pause. Vous pourrez
        <br/>reprendre vos cours après avoir contacter le <br/>
        le responsable de LA SALLE DU TEMPS.
        <br/>
        <br/>
        

    </div>
  </div>
</div>
        </div>
    )
}
