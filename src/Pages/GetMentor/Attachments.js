import React, { Component } from 'react';
import './Attachments.css';

import Navbar from "../../Compenents/Navbar";
import SYBar from "../../Compenents/SYBar";

class Attachments extends Component {
  render() {
    return (
      <div className="Attachments">
          <Navbar mentor="active" />
          <div className="SF">
              <SYBar attachments="active" />
              <div className="docscreen"></div>
          </div>
      </div>
    );
  }
}

export default Attachments;
