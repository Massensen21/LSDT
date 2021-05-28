import React from 'react'
import ModalConnexion from './Modal/modalConnexion'
import { Header } from '../Components/common';


export default function Login() {
  return (


    <div className="column is-half is-offset-one-quarter  p-6">

      <center className="image is-256x256 p-6">
        <img src="https://imageslsdt.s3.eu-west-3.amazonaws.com/LSDT_logo_definitif_v2.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
      </center>

      <div className="m-4">



        <form className="box  has-background-dark  p-6 m-0 ">


          <div className="field ">
            <label className="label has-text-white has-text-justified">Email</label>
            <div className="control">
              <input className="input " type="email" placeholder="alex@example.com" />
            </div>
          </div>

          <div className="field">
            <label className="label has-text-white has-text-justified">Password</label>
            <div className="control">
              <input className="input" type="password" placeholder="********" />
            </div>
          </div>
          <br />

          <button className="button is-success has-text-white is-fullwidth "> <strong>se connecter</strong></button>

        </form>


      </div>
    </div>

  );
}


