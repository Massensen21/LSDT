import React from 'react'

import { render } from "react-dom";

import {RiPauseCircleLine} from 'react-icons/ri'



export default function Pause() {
    return (
      <>
      
      <RiPauseCircleLine color="green" size="8em"/>
      

        <div className="box has-background-dark container is-max-desktop ">
            <div className="card has-background-dark">
           
            
              
            
  <div className="card-content">
    
    

    <div className="content has-text-white has-text-justified">
       Votre compte est en pause.
     
      <br/>
      <br/>  
       Conformément à votre demande. <br />
       nous avons mis votre abonnement en pause. <br />
        Vous pourrez reprendre vos cours après avoir contacter le 
        le responsable de LA SALLE DU TEMPS.
       
        

    </div>
  </div>
</div>
        </div>
    </>
    )
}
