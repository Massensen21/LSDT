import React from 'react'
import { FaLock} from "react-icons/fa";


export default function Bloque() {
    return (

      <>
 <center>
    <FaLock color="green" size="8em"/>
    </center>



        <div className="column is-three-fifths is-offset-one-fifth">
            <div className="card has-background-dark">
 
  <div className="box has-background-dark container is-max-desktop m-4">  
  
    <div className="content has-text-white has-text-justified">
      <p className="has-text-centered has-text-weight-bold"> Oops! Votre compte est bloqué!</p>
      
       <p>
        Vous n'avez pas honoré 3 cours que vous avez
        réservé ce mois-ci, votre compte applique donc
        la pénalité conforme au contrat LA SALLE DU TEMPS.
        <br />
        <br />
        Vous pourrez de nouveau prendre des
        rendez-vous le mois prochain ou bien débloquer
        votre compte dès maintenant en vous acquittant de 10€.
        </p>

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
