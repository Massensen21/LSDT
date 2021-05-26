import React from 'react'
import lsdtLogo from '../../assets/lsdtLogo.jpg'
import { MdCreditCard } from "react-icons/md";

export default function Paiement() {
    return (

      <>

    <MdCreditCard  color="green" size="8em"/>
  
        <div>
            <div className="box has-background-dark container is-max-desktop ">
  
  <div className="card-content">

    <div className="content has-text-white has-text-justified">
       Finalisez votre inscription.
     
      <br/>
      <br/>  
        Il vous reste à payer votre prorata et/ou à nous 
        communiquer votre IBAN pour réserver d'autres séances.
        <br/>
        <br/>
        
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
