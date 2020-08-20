import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav"
import SimpleMap from "./pages/map.js"
import Signup from "./pages/signUp.js"
import Register from "./pages/register.js"
import UserContext from "./utils/userContext";
// ***** ROUTERS ******
// =============================================================
function App() {
  const [user, setUserState] = useState({
    id: "",
    setID: (id) => {
      setUserState({...user, id})
    }
  })
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