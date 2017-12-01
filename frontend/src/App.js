import React, { Component } from 'react';
import TimeSlotsIndex from './components/timeSlots_index';
import './css/App.css';

class App extends Component {  
  render() {
    return <div className="main">
        <TimeSlotsIndex />
        <div className="footer">
          <div className="footer-credit">
            <a href="https://drive.google.com/open?id=1S9w-bbcbH34v3I2C2iCSUEFtj04faqVr">
              <img alt="linkedin-icon" src="http://res.cloudinary.com/jerryzlau/image/upload/c_scale,w_30/v1512087338/list-2389219_1280_s9wytw.png" />
            </a>
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
