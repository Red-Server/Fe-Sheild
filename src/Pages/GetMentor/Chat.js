import React, { Component } from 'react';
import './Chat.css';

import Navbar from "../../Compenents/Navbar";
import SYBar from "../../Compenents/SYBar";
import messages from "./chat.json";
class Chat extends Component {
  render() {
    return (
        <div className="Chat">
            <Navbar mentor="active" />
            <div className="SF">
                <SYBar chat="active" />
                <div className="chatscreen">
                  <div className="messages">
                    {messages.map(message =>
                    <div className={`${message.type}`}>
                      <p>{message.content}</p>
                    </div>
                    )}
                  </div>
                  <div className="input">
                    <span className="fa fa-paperclip"></span>
                    <input type="text" placeholder="Type Message" />
                    <button>Send</button>
                  </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Chat;
