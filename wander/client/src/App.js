import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav"
import SimpleMap from "./pages/map.js"
import Signup from "./pages/signUp.js"
import UserContext from "./utils/userContext";
import Register from "./pages/register"
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
    // onChange: (name, age, career, education, currentLocation, hobbies, destination) => {
    //   setUserState({...user, name, age, career, education, currentLocation, hobbies, destination })
    // }
  });
return (
  <Router >
    <UserContext.Provider value={user} >
      <div>
      <Nav/>
      </div>
      <Switch>
        <Route exact path="/" component={Signup} />
        <Route exact path="/map" component={SimpleMap} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </UserContext.Provider>
      
  </Router>
  );
}
export default App;