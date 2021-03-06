import logo from './logo.svg';
import './App.css';
import Acceuil from './Components/Acceuil'
import Reservation from './Components/Reservation'
import Login from './Components/Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Header } from './Components/common';
import { Footer } from './Components/common';




function App() {
  return (

    <div className="App-div has-background-black">

      <div className=" has-background-black   " >


        <Router>
          <Switch>
            <Route path="/" exact component={Acceuil} />
            <Route path="/Login" exact component={Login} />
            <Route path="/Reservation" exact component={Reservation} />

          </Switch>
        </Router>

      </div>

    </div>
  );
}

export default App;




