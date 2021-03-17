import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav"
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
  // const [user, setUserState] = useState({
  //   id: "",
  //   name: "",
  //   age: "",
  //   career: "",
  //   education: "",
  //   currentLocation: "",
  //   hobbies: "",
  //   destination: "",
  //   setID: (id) => {
  //     setUserState({...user, id})
  //   },
  //   setName: (name) => {
  //     setUserState({...user, name})
  //   },
  //   setAge: (age) => {
  //     setUserState({...user, age})
  //   },
  //   setCareer: (career) => {
  //     setUserState({...user, career})
  //   },
  //   setEducation: (education) => {
  //     setUserState({...user, education})
  //   },
  //   setCurrentLocation: (currentLocation) => {
  //     setUserState({...user, currentLocation})
  //   },
  //   setHobbies: (hobbies) => {
  //     setUserState({...user, hobbies})
  //   },
  //   setDestination: (destination) => {
  //     setUserState({...user, destination})
  //   }
 
  // });
const [user, setUser] = useState(null);

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
          <AuthButton />
          <ul>
            <li>
              <Link to="/public">Public Page</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
          </ul>

          <Switch>
            <Route path='/public' component={PublicPage}></Route>
            <Route path='/login' component={LoginPage}></Route>
           
            <PrivateRoute path='/protected'>
              <ProtectedPage />
            </PrivateRoute>
            
            <PrivateRoute path='/signup'>
              <ProtectedPage />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
  </ProvideAuth>
  );
}
export default App;