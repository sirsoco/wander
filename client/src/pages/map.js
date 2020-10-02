import React, { useContext, useState, useEffect } from "react";
import UserContext from "../utils/userContext";
import GoogleMapReact from "google-map-react";
import API from "../utils/api";
import Marker from '../components/Marker/Marker.js'
import styled from 'styled-components';
import PopUp from "../components/Modal/" ;

// import useModal from "../components/Modal/useModal";
// pass Marker a photoURL prop to make it dynamic

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  `;

function Map(props) {
  const [show, setShow] = useState(false);
  // lat and long here are set to  center of Kazakhstan
  const [center, setCenter] = useState({
    lat: 48.939939,
    lng: 77.908785,
  });
  const [zoom, setZoom] = useState({
    zoom: 0
  });

  const [location, setLocation] = useState([])
  useEffect(() => {
    fetchPins();
  }, []);
  
  const fetchPins =  async () => {
    console.log('#1')
   const getUsers = await API.getAllUsers()
       .then((response) => {console.log('#2:',response);
       setLocation(response)})
      
          console.log("USER: ", location)
    }
  
  const userState = useContext(UserContext);
  var userid = userState.id;

  const [match, setMatch] = useState("");

  if (!location || location.length === 0) {
    return null;
  }
// declare a method that takes in uid
const renderModal = (uid) => {
  console.log('VIEWING USER: ', uid)
  // Update state with the uid of the user we viewing using setMatch
  // toggle the modal
  // setShow(true);
  // setMatch(uid)

  // TODO: Redirect to /profile
  //props.history.push('/profile', { matchId: uid})

}

  if (!location || location.length === 0) {
    console.log("nothing in location")
    return null;
  }
  // function handleClick () {
  //   console.log("i have been clicked")
  // }
// console.log("LOCATION: ",location)
  return (
     <div style={{ height: "100vh", width: "100%" }}> 
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDhIP2Tps4GjKacpqtpjJ-sI7rBrTcz15c" }}
        defaultCenter={center}
        defaultZoom={zoom.zoom}
      >
       
        { location.map((latlng => {
          console.log("#3")
          console.log('LOCATION ARRAY: ',latlng);

          return (
            <Marker 
            lat={latlng.lat}
            lng={latlng.lng}
            img={latlng.photoURL}
            uid ={latlng.uid}

            onClick={renderModal}
            />
          )
        }))}

        
      </GoogleMapReact>
      {/* <PopUp
        show={show}
        matchId={match}
      /> */}
    
    </div>
  );
}

export default Map;



 


 