import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav/Nav"
import Map from "./pages/map.js"
import SignUpPage from "./pages/signUp.js"
//import UserContext from "./utils/authContext";
import Register from "./pages/register";
import Profile from "./pages/profile"
import ProvideAuth from './Provider/ProvideAuth';
import AuthButton from './components/AuthButton/AuthButton.js';
import PrivateRoute from './Provider/PrivateRoute.js';
import ProtectedPage from './pages/ProtectedPage.js';
import LoginPage from './pages/LoginPage.js';
import PublicPage from './pages/PublicPage.js';


// ***** ROUTERS ******
// =============================================================
function App() {
 


return (
  // <Router >
  //   <UserContext.Provider value={user} >
      
  //     <Switch>
  //       <Route exact path="/" component={Signup} />
  //       <Route exact path="/map" component={Map} />
  //       <Route exact path="/register" component={Register} />
  //       <Route exact path="/profile" component={Profile} />
  //     </Switch>
  //   </UserContext.Provider>
      
  // </Router>
  <ProvideAuth>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/public">Public Page</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
          </ul>

          <AuthButton />
          <Switch>
            
            <Route path='/public' component={SignUpPage}></Route>
            <Route path='/login' component={LoginPage}></Route>
            <PrivateRoute path='/protected'>
              <ProtectedPage />
            </PrivateRoute>

          </Switch>
        </div>
      </Router>
  </ProvideAuth>
  );
}
export default App;