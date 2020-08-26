
// ***** FRONT-END-ROUTES ******
// =============================================================
import axios from "axios";

export default {
    // GET all users
    getAllUsers: () =>
        axios.get("/api/users/")
            .then(result => {return result.data}),

    // GET specific ser based on uid
    getUserProfile: (uid) =>
        axios.get(`/api/user/profile/${uid}`)
            .then((result) => {return result.data}),

    // UPDATE a profile based on uid
    updateProfile: (uid,config) =>
        axios.put(`/api/user/profile/${uid}`, config )
            .then((result) => {return result.data} ),
    
    // GET longitude and latitude of user 
    getCoordinates: (city) =>
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=AIzaSyAr_EInIV-7qOdr0CuSsEdrHt7WPHI_zAY`)
             .then( (results) => { return results.data.results[0].geometry.location })
}


