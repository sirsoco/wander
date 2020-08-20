import React from 'react';
import './App.css';
// import ReactDOM from "react-dom";
import Nav from './components/Nav'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Login from './pages/login'
import Register from './pages/register'
import SimpleMap from './pages/map'

// var provider = new firebase.auth.GoogleAuthProvider();

function App() {

  // state = {
  //   Redirect: false
  // }

  // setRedirect = () => {
  //   this.setState({
  //     Redirect: true
  //   })
  // }

  // const login = () => {
  //   firebase.auth().signInWithPopup(provider)
  //     .then(({user}) => {
  //       axios.post("/api/user", {uid: user.uid}).then(result => result.data)
  //       console.log("UID: ", user.uid)
  //     })
  //     .catch(console.error)
  //   };

  return (

    <Router >
      <div>
        <Nav />
      </div>
      <Switch >
        <Route exact path="/" component={Login} />
        <Route exact path="/map" component={SimpleMap} />
        <Route exact Path="/register" component={Register} />
      </Switch>
  
      {/* <div>
        <Login />
      </div> */}

    </Router>

    // <div className="App">
    // <div>
    //   <Nav />
    // </div>
    // <div>
    //   <Form />
    // </div>
    // <Button onClick={login} variant="primary" size="lg" block>
    //     Block level button
    // </Button>
    //   <div>
    //   <SimpleMap    
    //       // defaultCenter={this.props.center}
    //       // center={this.state.center}
    //       // defaultZoom={this.props.zoom}
    //       // onChildMouseEnter={this.onChildMouseEnter}
    //       // onChildMouseLeave={this.onChildMouseLeave}
    //     />
    //   </div>
    // </div>

    
  );

}

export default App;