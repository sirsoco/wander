import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect, useHistory, useLocation } from 'react-router-dom';
import './App.css';
import signUpPage from './pages/signUpPage.js';
import registerPage from './pages/registerPage';
import MapPage from './pages/MapPage.js';
import ProfilePage from './pages/ProfilePage';
import ProvideAuth from './Provider/ProvideAuth';
import PrivateRoute from './Provider/PrivateRoute.js';
import ProtectedPage from './pages/ProtectedPage.js';
import LoginPage from './pages/LoginPage.js';
import PublicPage from './pages/PublicPage.js';

// ***** ROUTERS ******
// =============================================================
function App() {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route exact path='/' component={signUpPage}></Route>
          <Route exact path='/login' component={LoginPage}></Route>
          <Route exact path='/register' component={registerPage}></Route>
          <Route exact path='/map' component={MapPage}></Route>
          <Route exact path='/profile' component={ProfilePage}></Route>
          {/* <PrivateRoute path='/map'>
            <MapPage />
          </PrivateRoute> */}
          {/* <PrivateRoute exact path='/profile'>
            <ProfilePage></ProfilePage>
          </PrivateRoute> */}
        </Switch>
      </Router>
    </ProvideAuth>
  );
}
export default App;
