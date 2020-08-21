import React, { useContext, useState } from "react";
import UserContext from "../utils/userContext";
import GoogleMapReact from "google-map-react";
import API from "../utils/api";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Map() {
  // values for state
  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  const [center, setCenter] = useState();
  const [zoom] = useState();

  const userState = useContext(UserContext);

  var uid = userState.id;
  console.log("mapped:", uid);
  API.getUserProfile(uid).then((results) => {
    console.log("results", results);
    // retrieve destination city
    var city = results[0].destination;
    console.log(city);

    // call api to convert the city into lat/long
    API.getCoordinates(city).then((result) => {
      console.log("Lat&Lon:", result);
    });
  });
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: '"AIzaSyDhIP2Tps4GjKacpqtpjJ-sI7rBrTcz15c"' }}
        //
        ///defaultZoom=""
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}

export default Map;
