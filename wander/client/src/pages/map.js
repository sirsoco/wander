import React, { useContext, useState, useEffect } from "react";
import UserContext from "../utils/userContext";
import GoogleMapReact from "google-map-react";
import API from "../utils/api";
import Modal from "../components/Modal/" ;
import useModal from "../components/Modal/useModal";


function Map() {

  var photoURL = localStorage.getItem("photo");
  console.log("PHOTO URL: ", photoURL)

  const Marker = ({ text }) => <img src={photoURL} width="50" height="50" />;

  const {isShowing, toggle} = useModal();

  const [center, setCenter] = useState({
    lat: 39.0119,
    lng: 98.4842,
    photoURL
  });
  const [zoom, setZoom] = useState({
    zoom: 0
  });

  const [location, setLocation] = useState([])

  const userState = useContext(UserContext);
  var uid = userState.id;

  useEffect(() => {
   API.getAllUsers().then(
      (result) => {      
          result.map(async result => {
          var city = result.destination;
          // console.log("CITY: ",city);
          // console.log("USER RESULT: ",result)

           await API.getCoordinates(city).then((result) => {
             console.log("RESULT: ", result)
            // setLocation here
              console.log("LOCATION: ", location); 
            // setLocation([...location, {
            //   lat: result.lat, 
            //   lng: result.lng
            // }])
          setLocation(oldLocation => [...oldLocation, {
            lat: result.lat, 
            lng: result.lng
          }])
        });
      },
    )}
  )}, []);



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
        {/* location.lat && location.long here */}
        {location.map((latlng => {
          // console.log('LOCATION ARRAY: ',location)
          return (
            <Marker 
            lat={latlng.lat}
            lng={latlng.lng}
            img={latlng.image}

            onClick={() => console.log("You clicked me!")}
            />
          )
        }))}

      <button className="button-default" onClick={toggle}>Show Modal</button>
      <Modal
        isShowing={isShowing}
        hide={toggle}
      />
        
      </GoogleMapReact>
    </div>
  );


}

export default Map;

// const markerStyle = {
//   position: "absolute"
// };

// function CustomMarker({lat,lng,onMarkerClick}) {
//   return (
//     <div onClick={onMarkerClick} lat={lat} lng={lng}>
//       <img style={markerStyle} src={icon} alt="icon" />
//     </div>
//   );
// }

// function MapExample({ center, zoom, data }) {

//   function handleMarkerClick(){
//     console.log('Click')
//   }


//   return (
//     <GoogleMapReact
//       style={{ height: "100vh", width: "100%" }}
//       defaultZoom={zoom}
//       defaultCenter={center}
//     >
//       {data.map((item, idx) => {
//         return <CustomMarker  onMarkerClick={handleMarkerClick} key={idx} lat={item.lat} lng={item.lng} />
//       })}
//     </GoogleMapReact>
//   );


 