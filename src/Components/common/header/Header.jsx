import React from 'react'
import 'bulma/css/bulma.css'
import lsdtLogo from '../../../assets/lsdtLogo.jpg'

export default function Header() {
    return (
        
        <div>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css"/>

    
        <nav className="navbar is-transparent has-background-black  ">
        <div className="navbar-brand">
          <a className="navbar-item " href="/">
          <figure class="image" >
            <img  src= { lsdtLogo } alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
          </figure>          </a>
       
    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"id="navMenu" >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
        </div>
      
        <div id="navLinks" className="navbar-menu " >
          <div className="navbar-start"  >
            <a className="navbar-item has-text-white" href="/Login">
              Connexion
            </a>
            <a className="navbar-item has-text-white" href="/Reservation">
              Réservation
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link has-text-white" href="https://bulma.io/documentation/overview/start/">
                Docs
              </a>
              <div className="navbar-dropdown is-boxed">
                <a className="navbar-item" href="https://bulma.io/documentation/overview/start/">
                  Overview
                </a>
               
                <hr className="navbar-divider"/>
                <a className="navbar-item" href="#">
                  Logout
                </a>
                
              </div>
            </div>
          </div>
      
          
        </div>
        <script type="text/javascript"  src="./index.js" charset="utf-8"></script>
      </nav>
      </div>

       
        
     
   
   
    )
    
}


