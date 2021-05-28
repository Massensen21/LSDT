import React from 'react'
import { FaLock } from "react-icons/fa";


export default function MaxCours() {
  return (
    <>
      <center>
        <FaLock color="green" size="8em" />
      </center>

      <div className="column is-three-fifths is-offset-one-fifth">
        <div className="box has-background-black container is-max-desktop m-5">
          <div className="card has-background-dark">

            <div className="card-content">

              <div className="content  has-text-white has-text-justified">
                <p className="has-text-centered has-text-weight-bold">  Vous avez dejà pris 3 cours!</p>
                <p>
                  Vous pourrez à nouveau réserver, dès la fin de
                  votre prochain cours.
                  <br />
                </p>


              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
