import React, { useContext, useState, useEffect } from "react";
import UserContext from "../utils/userContext";
import GoogleMapReact from "google-map-react";
import API from "../utils/api";

function Map() {
var mapUsers = [{ lat:39.0119, lng:98.4842, text:"Yo", image:"data:image/png;base64,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" }];
var photoURL = localStorage.getItem("photo");
console.log("PHOTO URL: ", photoURL)
const Marker = ({ text }) => <img src={photoURL} width="50" height="50"  />;
 
  useEffect(() => {
     // retrieve all users
     var city = null;
     API.getAllUsers().then(
      (result => {
        result.map( result => {
          city = result.destination;
          console.log(city);
        });
        console.log(result);
      }
    ),
    API.getCoordinates(city).then((result) => {
      console.log("Lat&Lon:", result);
      // setLocation here
      setLocation({
        lat: result.lat, 
        lng: result.lng
      })
    }),
  )}, []);

  const [center, setCenter] = useState({
    lat: 39.0119,
    lng: 98.4842
  });
  const [zoom, setZoom] = useState({
    zoom: 0
  });

  const [location, setLocation] = useState({
    lat: "",
    lng: ""
  })

  const userState = useContext(UserContext);
  var uid = userState.id;
const getUser = () => {
  console.log("mapped:", uid);
  API.getUserProfile(uid).then((results) => {
    console.log("results", results);
    // retrieve destination city
    var city = results[0].destination;
    console.log(city);

   // call api to convert the city into lat/long
    API.getCoordinates(city).then((result) => {
      console.log("Lat&Lon:", result);
      // setLocation here
      setLocation({
        lat: result.lat, 
        lng: result.lng
      })
    });
  });
};
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDhIP2Tps4GjKacpqtpjJ-sI7rBrTcz15c" }}
        defaultCenter={center}
        defaultZoom={zoom.zoom}
      >
        {/* location.lat && location.long here */}
        {mapUsers.map((mapUser) => {
          <Marker lat={mapUser.lat} lng={mapUser.lng} text={mapUser.text} img={mapUser.image}/>
        })}
        
      </GoogleMapReact>
    </div>
  );

  // return (
  //   <ol>
  //     {reptiles.map((reptile) => (
  //       <li>{reptile}</li>
  //     ))}
  //   </ol>
  // );

}

export default Map;

