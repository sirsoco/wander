import React from "react";

const authContext = React.createContext({
    user: "",
    setUser: () => null,
    id: "",
    setID: () => null,
});


export default authContext;