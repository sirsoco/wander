import React, {useState, useEffect } from "react";

import GoogleMapReact from "google-map-react";
import API from "../utils/api";

import styled from "styled-components";

import Marker from "../components/Marker/Marker.js";

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;

 function Map(props) {
  const [location, setLocation] = useState([]);
  
  // lat and long here are set to  center of Kazakhstan
  const [center, setCenter] = useState({
    lat: 48.939939,
    lng: 77.908785,
  });
  

  const fetchPins = async () => {

    const getUsers =  API.getAllUsers().then((response) => {
      console.log('hello')
      setLocation(response);
    });
  };

useEffect(() => {
  fetchPins();
}, [])


  //push uid to redirect profile clicked
  const renderModal = (uid) => {
    props.history.push("/profile", { matchId: uid });
  };

  if (!location || location.length === 0) {
    console.log("Hello");
   // window.location.reload(false);
    return null
  }

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDhIP2Tps4GjKacpqtpjJ-sI7rBrTcz15c" }}
        defaultCenter={center}
        defaultZoom={0}
      >
        { location.map((latlng) => (
            <Marker
              key={location.id}
              lat={latlng.lat}
              lng={latlng.lng}
              img={latlng.photoURL}
              uid={latlng.uid}
              onClick={renderModal}
            />
        ))}
      </GoogleMapReact>
</div>
  )
}
export default Map;
