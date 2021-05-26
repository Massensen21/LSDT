import React from 'react'
import 'bulma/css/bulma.css'
import lsdtLogo from '../../../assets/lsdtLogo.jpg'

export default function Header() {
    return (
        
        <div>

    
        <nav className="navbar is-transparent has-background-black  ">
        <div className="navbar-brand">
          <a className="navbar-item " href="/">
        
            <img  src= "https://imageslsdt.s3.eu-west-3.amazonaws.com/LSDT_logo_definitif_v2.png" width="112" height="28" />
                   </a>
       
    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"id="navMenu" >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
        </div>
      
        <div id="navLinks" className="navbar-menu " >
          <div className="navbar-start"  >
            <a className="navbar-item has-text-white" href="/Reservation">
              Réservation
            </a>
            
            <div className="navbar-end">
      
    </div>
    
                
          </div>
          <div className="navbar-item">
        <div className="buttons">
         
          <a className="button is-danger  has-text-white" href="#">Déconnexion</a>

        </div>
      </div>
          
        </div>
      </nav>
      </div>

       
        
     
   
   
    )
    
}


