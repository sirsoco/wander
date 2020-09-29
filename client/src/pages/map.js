import React, { useContext, useState, useEffect } from "react";
import UserContext from "../utils/userContext";
import GoogleMapReact from "google-map-react";
import API from "../utils/api";
import PopUp from "../components/Modal/" ;


//Inserting image into marker
const Marker = (props) => <img onClick={()=> props.onClick(props.uid)} src={props.img} width="50" height="50" />;

function Map(props) {

 
  const [center, setCenter] = useState({
    lat: 48.939939,
    lng: 77.908785,
  });
  const [zoom, setZoom] = useState({
    zoom: 0
  });

  const [location, setLocation] = useState([]);
  const [match, setMatch] = useState("");;

  const userState = useContext(UserContext);
  var userid = userState.id;

  const [match, setMatch] = useState("");

  //set state for user marker 
  const fetchPins = async () => {
    API.getAllUsers().then(
      (result) => {      
        result.map( result => {
          setLocation({
            lat: result.lat, 
            lng: result.lng,
            photoURL: result.photoURL,
            uid: result.uid
          });
        });
      });
    };
  
  //redirect to the profile of user 
  const renderModal = (uid) => {
    props.history.push('/profile', { matchId: uid})
  };

  useEffect(() => {
    fetchPins();
  }, []);

  if (!location || location.length === 0) {
    return null;
  }

  return (
     <div style={{ height: "100vh", width: "100%" }}> 
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDhIP2Tps4GjKacpqtpjJ-sI7rBrTcz15c" }}
        defaultCenter={center}
        defaultZoom={zoom.zoom}
      >
       
        { location.map((latlng => {
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
    </div>
  );
}

export default Map;



 