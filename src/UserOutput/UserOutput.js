import React, { Component } from 'react';
import './UserOutput.css';

class UserOutput extends Component {

  render() {
    const nameStyle = {
      color: "#ff1654",
      fontSize: "1.5rem",
      fontWeight: "bold"
    }
    const bioStyle = {
      marginLeft: "10px",
      color: "#000"
    }
    return(
      <div className="UserOutput">
        <p style={nameStyle}>{this.props.username}</p>
        <p style={bioStyle}>{this.props.bio}</p>
      </div>
    );
  }
}


export default UserOutput;