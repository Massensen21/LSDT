import React from 'react'
import { FaLock} from "react-icons/fa";


export default function Bloque() {
    return (

      <>
 
    <FaLock color="green" size="8em"/>
  



        <div>
            <div className="card has-background-dark">
  <div className="card-image ">
   
  </div>
  <div className="card-content">  
  
    <div className="content has-text-white has-text-justified">
       Oops! Votre compte est bloqué!
      
      <br/>
      <br/>  
        Vous n'avez pas honoré 3 cours que vous avez
        réservé ce mois-ci, votre compte applique donc
        la pénalité conforme au contrat LA SALLE DU TEMPS.
        <br/>
        <br/>
        Vous pourrez de nouveau prendre des
        rendez-vous le mois prochain ou bien débloquer
        votre compte dès maintenant en vous acquittant de 10€.
        <br/>
        <br/>

    </div>
        <div className="">
        <button className="button is-success is-fullwidth">Débloquer mon compte</button>
        </div>
  </div>

</div>

        

        </div>
    </>
    )
}
