import React from "react";
import PropTypes from "prop-types";



const Marker = (props) => (

    <img
      className="profilePic"
      alt={props.text}
      onClick={() => props.onClick(props.uid)}
      src={props.img}
    />

);

Marker.defaultProps = {
  onClick: null,
  renderModal: null,
};

Marker.propTypes = {
  onClick: PropTypes.func,
  uid: PropTypes.string.isRequired,
};

export default Marker;
