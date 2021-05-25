import React from 'react'

export default function GestionReservation() {
    return (
      <div class="columns is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd">
        <div class="column">
  
  <div className="card-content has-background-dark">
    <div className="content has-text-white">


        <p > Voici un apperçu de votre réservation</p>  
        <h3 className="has-text-primary">DÉTAILS DE RÉSERVATION</h3>
      <br/>
             <p> DATE : $</p>
      <br/>
            <p>HEURE : $</p>
      <br/>
            <p>ACTIVITÉ : ....</p>
            <br/>

    </div>
  </div>
  <footer className="card-footer has-background-black ">
    <a href="#" className="card-footer-item has-text-warning">Modifier</a>
    <a href="#" className="card-footer-item has-text-danger">Supprimer</a>
  </footer>
</div>
        </div>
    )
}
