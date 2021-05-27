import React from 'react'
import { FaBan} from "react-icons/fa";


export default function Suspendu() {
    return (

      <>
<center>
    <FaBan  color="green" size="8em" />
    </center>

      <div className="column is-three-fifths is-offset-one-fifth">

        <div className="box has-background-dark container is-max-desktop m-3">
  
  <div className="card-content">
    

    <div className="content has-text-white has-text-centered">
    <p className="has-text-weight-bold"> Votre compte est suspendu. <br />
    </p>
      <p className="has-text-justified">Veillez prendre contact avec le responsable de la SALLE DU TEMPS.
      </p>
       <p > Tel : 0788 56 04 53</p>
       <p>Email: parisladefense@lasalledutemps.com</p>
        

       </div>
  </div>
</div>
        </div>
    </>
    )
}
