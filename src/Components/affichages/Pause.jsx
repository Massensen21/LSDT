import React from 'react'

import { render } from "react-dom";

import {RiPauseCircleLine} from 'react-icons/ri'



export default function Pause() {
    return (
      <>
      
      <RiPauseCircleLine color="green" size="8em"/>
      

        <div className="has-background-black">
            <div className="card has-background-dark">
           
            
              
            
  <div className="card-content">
    
    

    <div className="content has-text-white has-text-justified">
       Votre compte est en pause.
     
      <br/>
      <br/>  
       conformément à votre demande. nous avons 
       mis votre abonnement en pause. Vous pourrez
        reprendre vos cours après avoir contacter le 
        le responsable de LA SALLE DU TEMPS.
       
        

    </div>
  </div>
</div>
        </div>
    </>
    )
}
