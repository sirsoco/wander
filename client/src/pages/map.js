import React, { useContext, useState, useEffect } from "react";
import UserContext from "../utils/userContext";
import GoogleMapReact from "google-map-react";
import API from "../utils/api";
import Marker from "../components/Marker/Marker.js";
import styled from "styled-components";

function Map(props) {
  const [show, setShow] = useState(false);
  // lat and long here are set to  center of Kazakhstan
  const [center, setCenter] = useState({
    lat: 48.939939,
    lng: 77.908785,
  });
  const [zoom, setZoom] = useState({
    zoom: 0,
  });

  const [location, setLocation] = useState([]);
  useEffect(() => {
    fetchPins();
  }, []);

  const fetchPins = async () => {

    const getUsers = API.getAllUsers().then((response) => {
      setLocation(response);
    });
  };

  const userState = useContext(UserContext);
  var userid = userState.id;

  const [match, setMatch] = useState("");

  //push uid to redirect profile clicked
  const renderModal = (uid) => {
    props.history.push("/profile", { matchId: uid });
  };

  if (!location || location.length === 0) {
    console.log("Hello");
    return null;
  }

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDhIP2Tps4GjKacpqtpjJ-sI7rBrTcz15c" }}
        defaultCenter={center}
        defaultZoom={zoom.zoom}
      >
        {location.map((latlng) => {
      
          return (
            <Marker
              lat={latlng.lat}
              lng={latlng.lng}
              img={latlng.photoURL}
              uid={latlng.uid}
              onClick={renderModal}
            />
          );
        })}
      </GoogleMapReact>
    </div>
  );
}
export default Map;
