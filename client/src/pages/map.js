import React, { useContext, useState, useEffect } from "react";
import UserContext from "../utils/userContext";
import GoogleMapReact from "google-map-react";
import API from "../utils/api";
import PopUp from "../components/Modal/" ;

// import useModal from "../components/Modal/useModal";
// pass Marker a photoURL prop to make it dynamic
const Marker = (props) => <img onClick={()=> props.onClick(props.uid)} src={props.img} width="50" height="50" />;

function Map(props) {
  const [show, setShow] = useState(false);
  // lat and long here are set to center of Kazakhstan
  const [center, setCenter] = useState({
    lat: 48.939939,
    lng: 77.908785,
  });
  const [zoom, setZoom] = useState({
    zoom: 0
  });
  const [location, setLocation] = useState([])
  
  const fetchPins = async () => {
  
  API.getAllUsers().then(
    (result) => {      
        result.map( result => {
        var city = result.destination;
        // console.log("CITY: ",city);
        // console.log("USER RESULT: ",result)
          // console.log("USER: ", result)
          // var photoURL = result.photoURL;
          // var uid = result.uid;
        API.getCoordinates(city).then((result) => {
           console.log("RESULT: ", result)
          // setLocation here
            //console.log("LOCATION: ", location); 
          // setLocation([...location, {
          //   lat: result.lat, 
          //   lng: result.lng
          // }])
          //oldLocation => [...oldLocation, 
        setLocation({
          lat: result.lat, 
          lng: result.lng,
          photoURL: result.photoURL,
          uid: result.uid
        })
      });
    },
  )}
)

}
  const userState = useContext(UserContext);
  var userid = userState.id;
  const [match, setMatch] = useState("");

// declare a method that takes in uid
const renderModal = (uid) => {
  console.log('VIEWING USER: ', uid)
  // Update state with the uid of the user we viewing using setMatch
  // toggle the modal
  // setShow(true);
  // setMatch(uid)

  // TODO: Redirect to /profile
  props.history.push('/profile', { matchId: uid})

}
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

  useEffect(() => {
    fetchPins();
  }, []);


  if (!location || location.length === 0) {
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
       
        {location.map((latlng => {
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



 