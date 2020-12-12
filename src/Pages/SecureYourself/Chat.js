import React, { Component } from 'react';
import './Chat.css';

import Navbar from "../../Compenents/Navbar";
import SYBar from "../../Compenents/SYBar";

class Chat extends Component {
  render() {
    return (
        <div className="Chat">
            <Navbar mentor="active" />
            <div className="SF">
                <SYBar chat="active" />
                <div className="chatscreen"></div>
            </div>
        </div>
    );
  }
}

export default Chat;
