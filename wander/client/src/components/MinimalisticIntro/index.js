import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Button } from "react-bootstrap";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBFormInline,
  MDBBtn,
  MDBView,
  MDBContainer
} from 'mdbreact';
import './MinimalisticIntro.css';

class MinimalisticIntro extends React.Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    const { collapsed } = this.state;

    this.setState({
      collapsed: !collapsed
    });
  };

  

  componentWillUnmount() {
    document.querySelector('nav').style.height = 'auto';
  }

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
                <h1 className='h1-reponsive  text-uppercase'>
                  Wandr
                </h1>
                <a class="btn btn-outline-white wow fadeInDown data-wow-delay=0.4s">portfolio</a>

              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
      </div>
    );
  }
}

export default MinimalisticIntro;