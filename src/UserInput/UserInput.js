import React, { Component } from 'react';

const userInput = (props) => {
  const inputStyle = {
    textAlign: "center"
  }
  return <input type="text" style={inputStyle} value={props.name} onChange={props.change} />;
}

export default userInput;