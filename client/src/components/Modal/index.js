import React, { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Header from 'react-bootstrap/ModalHeader';
import Title from 'react-bootstrap/ModalTitle';
import Body from 'react-bootstrap/ModalBody';
import Footer from 'react-bootstrap/ModalFooter';
import API from '../../utils/api.js'

function PopUp({ show, matchId }) {

  console.log("SHOW MODAL: ", show)
  console.log("MATCH ID: ", matchId)

  const [profile, setProfile] = useState({
    name: "",
    age: "",
    career: "",
    education: "",
    currentLocation: "",
    hobbies: "",
    destination: "",
    photoURL: ""
  })


  useEffect(() => {
    if (matchId) {
      API.getUserProfile(matchId).then(
        (response) => {
          console.log("RESPONSE: ", response);
          setProfile({
            name: response.name,
            age: response.age,
            career: response.career,
            education: response.education,
            currentLocation: response.currentLocation,
            hobbies: response.hobbies,
            destination: response.destination,
            photoURL: response.photoURL
          }
        )}
      )
    }
  }, [matchId]);
  //TODO: Inside useEffect make an API call with the matchId to grab the current user we are viewing
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show}
      // onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PopUp;
