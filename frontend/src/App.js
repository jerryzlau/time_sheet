import React, { Component } from 'react';
import TimeSlotsIndex from './components/timeSlots_index';
import Clock from "react-live-clock";
import CheckInForm from "./components/checkin_form";
import './css/App.css';

class App extends Component {  
  render() {
    return <div className="main">
        {/* <div className="nav-bar">
          <div className="nav-bar-left">
            <h1>Work Time Sheet</h1>
            <Clock ticking={true} format={"HH:mm:ss"} className={"clock"} />
          </div>
          <CheckInForm updateState={this.updateState} />
        </div> */}
        <TimeSlotsIndex />
        <div className="footer">
          <div className="footer-credit">
            <a href="https://www.linkedin.com/in/jerryzlau/">
              <img alt="linkedin-icon" src="http://res.cloudinary.com/jerryzlau/image/upload/c_scale,w_30/v1508897977/square-linkedin-256_qpcm3m.png" />
            </a>
            <a href="https://github.com/jerryzlau">
              <img alt="github-icon" src="http://res.cloudinary.com/jerryzlau/image/upload/c_scale,w_30/v1508898510/github_npnfhb.png" />
            </a>
          </div>
        </div>
      </div>;
  }
}

export default App;
