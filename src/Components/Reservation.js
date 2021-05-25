import React from 'react'
import MaxCours from './affichages/MaxCours'
import GestionReservation from './affichages/GestionReservation'
import { Header } from '../Components/common';
import LSDTlogo from '../assets/lsdtLogo.jpg'



export default function Reservation() {
    return (
      

        <div  className=" box has-background-black container is-max-desktop">

<Header/>

          
        
        <form className="box has-background-dark  ">

        <figure class="image is-128x128" >
            <img  src={LSDTlogo} alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
          </figure>
      
      <div className="field">
        <label className="label has-text-white">Choisissez l'activité :</label>
        <div className="control">
          <div className="select">
            <select>
            <option> activité 1 </option>
              <option>Activité 2</option>
              <option>Activité 3</option>
            </select>
          </div>
        </div>
      </div>
      
      

      <div className="field">
    <label className="label has-text-white">Choisissez la date de votre séance </label>
    <div className="control ">
      <input className="input " type="date" placeholder="e.g. alex@example.com" />
    </div>
  </div>

  <div className="field">
        <label className="label has-text-white">Choisissez parmis nos créneaux disponibles</label>
        <div className="control">
          <div className="select">
            <select>
            <option></option>
              <option>11 h</option>
              <option>15 h</option>
            </select>
          </div>
        </div>
      </div>

      <div className="field is-grouped is-grouped-centered ">
        <div className="control ">
          <button className="button is-success ">Valider</button>
        </div>

      </div>

        </form>

        <GestionReservation/>


     


      </div>
      
      
      )
}


