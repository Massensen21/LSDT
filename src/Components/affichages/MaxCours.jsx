import React from 'react'
import { FaLock } from "react-icons/fa";


export default function MaxCours() {
    return (
<>

    <FaLock  color="green" size="8em"/>
  

        <div className="box has-background-black container is-max-desktop ">
        <div className="card has-background-dark">
  
  <div className="card-content">
 
    <div className="content has-text-white has-text-justified">
       Vous avez dejà pris 3 cours!
      <br/>
      <br/>  
        Vous pourrez à nouveau réserver, dès la fin de 
        votre prochain cours.
        <br/>
      
        

    </div>
  </div>
</div>
        </div>
  
  </>
    )
}
