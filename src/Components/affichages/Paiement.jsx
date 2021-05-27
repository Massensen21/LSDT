import React from 'react'
import { FiAlertOctagon} from "react-icons/fi";
export default function Paiement() {
    return (

      <>
        <center>
        <FiAlertOctagon color="red" size="8em"  />
        </center>
    
      
        <div className="column is-half is-offset-one-quarter ">
            <div className="box has-background-dark container is-max-desktop m-4">
  
  <div className="card-content">

    <div className="content has-text-white has-text-justified">
    
    <p className="has-text-centered has-text-weight-bold">
       Finalisez votre inscription.
      </p> 
      <p>
          Il vous reste à payer votre prorata et/ou à nous 
        communiquer votre IBAN pour réserver d'autres séances.
        <br/>
      
      </p>
        
    </div>
        <div className="">
        <button className="button is-success is-fullwidth"><strong> Finaliser mon inscription</strong></button>
        </div>
  </div>

</div>

        

        </div>
    </>
    )
}
