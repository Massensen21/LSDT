import React from 'react'
import { FaBan} from "react-icons/fa";


export default function Suspendu() {
    return (

      <>

    <FaBan  color="green" size="8em" />
  

        <div className="has-background-black">
            <div className="card has-background-dark">
  <div className="card-image ">
   
  </div>
  <div className="card-content">
    

    <div className="content has-text-white has-text-justified">
    <p> Votre compte est suspendu. <br />
    <br />
      Veillez prendre contact avec le responsable de la SALLE DU TEMPS.
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
