import React from 'react'
import MaxCours from './affichages/MaxCours'
import GestionReservation from './affichages/GestionReservation'
import { Header } from '../Components/common';
import LSDTlogo from '../assets/lsdtLogo.jpg'



export default function Reservation() {
    return (
      

        <div  className=" box has-background-black ">



          
        
        <form className="box has-background-dark  ">

        
      
      <div className="field">
        <label className="label has-text-white has-text-justified">Choisissez l'activité :</label>
        <div className="control has-text-justified">
          <div className="select ">
            <select>
            <option> activité 1 </option>
              <option>Activité 2</option>
              <option>Activité 3</option>
            </select>
          </div>
        </div>
      </div>
      
      

      <div className="field">
    <label className="label has-text-white has-text-justified">Choisissez la date de votre séance </label>
    <div className="control has-text-justified">
      <input className="input" type="date" placeholder="e.g. alex@example.com" />
    </div>
  </div>

  <div className="field">
        <label className="label has-text-white has-text-justified">Choisissez parmis nos créneaux disponibles</label>
        <div className="control has-text-justified">
          <div className="select">
            <select>
            <option></option>
              <option>11 h</option>
              <option>15 h</option>
            </select>
          </div>
        </div>
      </div>

      <div className="field  ">
        <div className="control ">
          <button className="button is-success is-fullwidth ">Valider</button>
        </div>

      </div>

        </form>

        <GestionReservation/>


     


      </div>
      
      
      )
}


