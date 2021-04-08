import React, {useState, useEffect, useContext } from "react";
import { withRouter} from 'react-router-dom';
import GoogleMapReact from "google-map-react";
import authContext from '../utils/authContext'
import API from "../utils/api";
import Marker from "../components/Marker/Marker.js";


 function Map( { history }) {

  const auth = useContext(authContext);

  const [location, setLocation] = useState([]);
  
  // lat and long here are set to center of Kazakhstan
  const [center, setCenter] = useState({
    lat: 48.939939,
    lng: 77.908785,
  });
  

  const fetchPins = async () => {
    console.log( auth.id);
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
    history.push("/profile", { matchId: uid });
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
        { 
        location.map((latlng) => (
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
export default withRouter(Map)