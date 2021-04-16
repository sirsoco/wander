import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect, useHistory, useLocation } from 'react-router-dom';
import './App.css';
import signUpPage from './pages/signUp.js';
import registerPage from './pages/register';
import MapPage from './pages/map.js';
import ProfilePage from './pages/profile';
import ProvideAuth from './Provider/ProvideAuth';
import PrivateRoute from './Provider/PrivateRoute.js';
import ProtectedPage from './pages/ProtectedPage.js';
import LoginPage from './pages/login.js';
import PublicPage from './pages/PublicPage.js';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// ***** ROUTERS ******
// =============================================================

function App() {

  const theme = createMuiTheme({
    typography: {
      fontFamily: 
        'Lusitana'
    },
  });
  
  return (

    <ThemeProvider theme={theme}>
    <ProvideAuth>
      <Router>
        <Switch>
          
          <Route exact path='/' component={signUpPage}></Route>
          <Route exact path='/login' component={LoginPage}></Route>
          <Route exact path='/register' component={registerPage}></Route>
          <Route exact path='/profile' component={ProfilePage}></Route> 

          <PrivateRoute exact path='/map'>
              <MapPage></MapPage>
          </PrivateRoute>
          
        </Switch>
      </Router>
    </ProvideAuth>
    </ThemeProvider>
  );
}
export default App;
