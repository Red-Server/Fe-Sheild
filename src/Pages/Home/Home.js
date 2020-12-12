import React, { Component } from 'react';
import './Home.css';

import Signin from "./Signin";
import Signup from "./Signup";

class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      tab: new URLSearchParams(this.props.location.search).get('tab'),
    }
  }

  render() {
    return (
        <div className="Home">
          <div className="home-txt">
            <p>You are <b>never</b> alone</p>
            <p>You are <b>never</b> weak</p>
            <p>We will make <b>you</b> strong<b>her</b></p>
          </div>
          <div className="home-portal">
            { this.state.tab === "signin" ? <Signin /> : <Signup /> }
          </div>
        </div>
    );
  }
}

export default Home;
