import React, { Component } from 'react';
import './Home.css';

class Signup extends Component {
  render() {
    return (
        <div className="Signup">
            <form>
              <input type="text" placeholder="Enter Email or Phone Number" /><br />
              <input type="password" placeholder="Password" /><br />
              <input type="password" placeholder="Confirm Password" /><br />
              <a href="/">Forgot Password ?</a><br />
              <button>SIGNUP</button>
            </form><br /><br />
            <p><hr /> &nbsp; Or continue with &nbsp; <hr /></p>
            <br />
            <div className="auth-tab">
              <span className="fa fa-google"></span> &nbsp; &nbsp;
              <span className="fa fa-apple"></span> &nbsp; &nbsp;
              <span className="fa fa-phone"></span><br />
            </div><br /><br /><br />
            <a href="?tab=signup"><button>LOGIN</button></a>
        </div>
    );
  }
}

export default Signup;
