import React, { Component } from 'react';
import './Attachments.css';

import Navbar from "../../Compenents/Navbar";
import SYBar from "../../Compenents/SYBar";
import attachments from "./attachments.json";

class Attachments extends Component {
  render() {
    return (
      <div className="Attachments">
          <Navbar mentor="active" />
          <div className="SF">
              <SYBar attachments="active" />
              <div className="docscreen">
                { attachments.map(attachment => 
                  <div className="doc">
                    <a href="/getmentor/attachments/"><span className={`${attachment.file_type}`}></span></a>
                    <p>{attachment.name}</p>
                    <div className="doc-get">
                      <button className="material-icons">add_to_drive</button>
                      <button className="material-icons">print</button>
                      <button className="fa fa-download"></button>
                    </div>
                  </div>
                )}
              </div>
          </div>
      </div>
    );
  }
}

export default Attachments;
