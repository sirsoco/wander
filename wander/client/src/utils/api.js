// ***** FRONT-END-ROUTES ******
// =============================================================
import axios from "axios";

export default {
    // GET all users
    getAllUsers: () =>
        axios.get("/api/user/profile/")
            .then(result => result.data),

    // GET specific user based on uid
    getUserProfile: (uid) =>
        axios.get(`/api/user/profile/${uid}`)
            .then(result => result.data),

    // UPDATE a profile based on uid
    updateProfile: (uid,config) =>
        axios.put(`/api/user/profile/${uid}`, config )
            .then((result) => {return result.data} )
};

