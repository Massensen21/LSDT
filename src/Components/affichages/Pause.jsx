import React from 'react'

import { render } from "react-dom";

import { RiPauseCircleLine } from 'react-icons/ri'



export default function Pause() {
  return (
    <>
      <center>
        <RiPauseCircleLine color="green" size="8em" />
      </center>

      <div className="column is-half is-offset-one-quarter ">
        <div className="box has-background-dark container is-max-desktop  m-4">

          <div className="card-content">



            <div className="content has-text-white has-text-justified ">
              <p className="has-text-centered has-text-weight-bold">
                Votre compte est en pause
       </p>
       Conformément à votre demande. <br />
       Nous avons mis votre abonnement en pause. <br />
        Vous pourrez reprendre vos cours après avoir contacter le
        responsable de LA SALLE DU TEMPS.


            </div>
          
          </div>
        </div>
      </div>
    </>
  )
}
