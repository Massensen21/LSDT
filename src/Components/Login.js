import React from 'react'
import modalConnexion from './Modal/modalConnexion'

export default function Login() {
    return (
        <div className="box has-background-black ">

        
        <form className="box has-background-dark   ">
          <div className="box has-background-black">
            <img  src="https://imageslsdt.s3.eu-west-3.amazonaws.com/LSDT_logo_definitif_v2.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
            </div>
            
  <div className="field">
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
        
   <modalConnexion/>

        </div>
        
    );
}


