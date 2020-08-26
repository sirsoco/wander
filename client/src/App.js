import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav"
import Map from "./pages/map.js"
import Signup from "./pages/signUp.js"
import UserContext from "./utils/userContext";
import Register from "./pages/register";
import Profile from "./pages/profile"

// ***** ROUTERS ******
// =============================================================
function App() {
  const [user, setUserState] = useState({
    id: "",
    name: "",
    age: "",
    career: "",
    education: "",
    currentLocation: "",
    hobbies: "",
    destination: "",
    setID: (id) => {
      setUserState({...user, id})
    },
    setName: (name) => {
      setUserState({...user, name})
    },
    setAge: (age) => {
      setUserState({...user, age})
    },
    setCareer: (career) => {
      setUserState({...user, career})
    },
    setEducation: (education) => {
      setUserState({...user, education})
    },
    setCurrentLocation: (currentLocation) => {
      setUserState({...user, currentLocation})
    },
    setHobbies: (hobbies) => {
      setUserState({...user, hobbies})
    },
    setDestination: (destination) => {
      setUserState({...user, destination})
    }
 
  });
return (
  <Router >
    <UserContext.Provider value={user} >
      
      <Switch>
        <Route exact path="/" component={Signup} />
        <Route exact path="/map" component={Map} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </UserContext.Provider>
      
  </Router>
  );
}
export default App;