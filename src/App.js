
import './App.css';

import Home from './Components/Home';
import Navbar from "./Components/Navbar"
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom"
import Signup from './Components/Signup';
import Login from './Components/Login';
import Schedule from './Components/Schedule';
///import UserHome from './Components/UserHome';

function App() {



  return (

    <Router>
      <div>
      {/* <Navbar></Navbar> */}
        <Routes>
          <Route exact path="/" element = {<Home/>}/>
          <Route exact path="/Signup" element = {<Signup/>}/>
          <Route exact path="/Login" element = {<Login/>}/>
          <Route exact path="/Schedule" element = {<Schedule/>}/>
          
          
        </Routes>

      </div>

    </Router>

  );
}

export default App;
