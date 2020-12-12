import React, { Component } from 'react';
import './Attachments.css';

class Attachments extends Component {
  render() {
    return (
        <div className="Attachments">
            <Navbar mentor="active" />
            <div className="SF">
                <SYBar attachments="active" />
                <div className="chatscreen"></div>
            </div>
        </div>
    );
  }
}

export default Attachments;
