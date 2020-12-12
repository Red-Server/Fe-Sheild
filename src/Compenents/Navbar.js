import React, { Component } from 'react';
import './Navbar.css';

import logo from "../Images/shield.svg";

class Navbar extends Component {
  render() {
    return (
        <div className="Navbar">
            <div className="logo">
                <img src={logo} alt="logo" />
                <span>Fe-Shield</span>
            </div>
            <div className="tab">
              <a href="/" className="tab-item">
                <span className="material-icons">home</span>
                <p className={`${this.props.home}`}>Home</p>
              </a>
              <a href="/" className="tab-item">
                <span className="material-icons">chat</span>
                <p className={`${this.props.mentor}`}>Get a Mentor</p>
              </a>
              <a href="/" className="tab-item">
                <span className="material-icons">sports_mma</span>
                <p className={`${this.props.workout}`}>Workout</p>
              </a>
              <a href="/" className="tab-item">
                <span className="material-icons">emoji_objects</span>
                <p className={`${this.props.tips}`}>Tips</p>
              </a>
              <a href="/" className="tab-item">
                <span className="material-icons">person</span>
                <p className={`${this.props.secure}`}>Secure Yourself</p>
              </a>
            </div>
        </div>
    );
  }
}

export default Navbar;
