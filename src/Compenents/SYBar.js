import React, { Component } from 'react';
import './SYBar.css';

class SYBar extends Component {
  render() {
    return (
        <div className="SYBar">
            <a href="/" className={`${this.props.chat}`}>Chat</a>
            <a href="/" className={`${this.props.attachments}`}>Attachments</a>
        </div>
    );
  }
}

export default SYBar;