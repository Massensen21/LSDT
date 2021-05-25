import React from 'react'
import modalConnexion from './Modal/modalConnexion'

export default function Login() {
    return (
        <div className="box has-background-black container is-max-desktop">
        
        <form className="box has-background-dark ">
  <div className="field">
    <label className="label has-text-white">Email</label>
    <div className="control">
      <input className="input " type="email" placeholder="e.g. alex@example.com" />
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


