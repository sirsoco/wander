import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Button } from "react-bootstrap";
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBView,
  MDBContainer
} from 'mdbreact';
import FirebaseUiAuth from '../FirebaseUiAuth/FirebaseUiAuth.js'
import './style.css';

class Login extends React.Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    const { collapsed } = this.state;

    this.setState({
      collapsed: !collapsed
    });
  };

  

 

  render() {
    const { collapsed } = this.state;
    const navStyle = { marginTop: '4rem' };
    const overlay = (
      <div
        id='sidenav-overlay'
        style={{ backgroundColor: 'transparent' }}
        onClick={this.handleTogglerClick}
      />
    );
    return (
      <div id='minimalistintro'>
        <Router>
          <div>
            
              
              <MDBContainer>
            
               
               
                 
              </MDBContainer>
            
            {collapsed && overlay}
          </div>
        </Router>
        <MDBView src='https://mdbootstrap.com/img/Photos/Others/img%20%2848%29.jpg'>
          <MDBMask className='rgba-black-light' />
          <MDBContainer
            className='d-flex justify-content-center align-items-center'
            style={{ height: '100%', width: '100%', }}
          >
            <MDBRow>
              <MDBCol md='12' className='mb-4 text-center'>
                <h1 className='signin_logo' >
                  Wandr
                </h1>

              </MDBCol>
              <MDBCol className='firebaseUiContainer'>
                <FirebaseUiAuth></FirebaseUiAuth>
              </MDBCol>
              
            </MDBRow>
          </MDBContainer>
          
        </MDBView>
      </div>
    );
  }
}

export default Login;