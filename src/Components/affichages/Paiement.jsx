import React from 'react'
import lsdtLogo from '../../assets/lsdtLogo.jpg'
import { MdCreditCard } from "react-icons/md";

export default function Paiement() {
    return (

      <>

    <MdCreditCard  color="green" size="8em"/>
  
        <div>
            <div className="card has-background-dark">
  
  <div className="card-content">
  
    <br/>

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
        <button class="button is-success is-fullwidth"><strong> Finaliser mon inscription</strong></button>
        </div>
  </div>

</div>

        

        </div>
    </>
    )
}
