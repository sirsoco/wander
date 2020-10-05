import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div``;

const Marker = (props) => (
  <Wrapper>
    <img
      className="profilePic"
      alt={props.text}
      onClick={() => props.onClick(props.uid)}
      src={props.img}
    />
  </Wrapper>
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
