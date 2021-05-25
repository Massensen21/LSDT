import React from 'react'
import Paiement from './affichages/Paiement'
import Pause from './affichages/Pause'
import Suspendu from './affichages/Suspendu'
import Bloque from './affichages/Bloque'
import MaxCours from './affichages/MaxCours'

import { Header } from '../Components/common';

export default function Acceuil() {
    return (
        <div  className=" box has-background-black container is-max-desktop">
            <Header/>
            <Paiement/>
            <Pause/>
            <Suspendu/>
            <Bloque/>
            <MaxCours/>
        </div>
    )
}


