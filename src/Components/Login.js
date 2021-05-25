import React from 'react'
import modalConnexion from './Modal/modalConnexion'

export default function Login() {
    return (
        <div className="box has-background-black ">

        
        <form className="box has-background-dark ">
        
            <img  src="https://imageslsdt.s3.eu-west-3.amazonaws.com/LSDT_logo_definitif.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
          
  <div className="field">
    <label className="label has-text-white">Email</label>
    <div className="control">
      <input className="input " type="email" placeholder="alex@example.com" />
    </div>
  </div>

  <div className="field">
    <label className="label has-text-white">Password</label>
    <div className="control">
      <input className="input" type="password" placeholder="********" />
    </div>
  </div>

  <button className="button is-primary has-text-white">se connecter</button>
</form>
        
   <modalConnexion/>

        </div>
        
    );
}


