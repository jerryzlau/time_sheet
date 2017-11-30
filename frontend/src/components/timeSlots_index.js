import React, { Component } from 'react';
import { fetchTimeSlots } from '../util/timeSlots_util';
import ItemForm from './item_form';
import CheckInForm from './checkin_form';
import ReactLoading from 'react-loading';
import Clock from 'react-live-clock';
import '../css/Timeslots.css';

class TimeSlotsIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.updateState = this.updateState.bind(this);
  }

  updateState(){
    fetchTimeSlots()
    .then(res => {
      this.setState({timeSlot: res});
    });
  }

  componentDidMount(){
    this.updateState();
  }

  buildIndex(){
    if(this.state.timeSlot){
      const index = this.state.timeSlot.reverse().map(timeSlot => {
        return (
          <ItemForm 
            updateState={this.updateState}
            timeSlot={timeSlot}
            key={timeSlot._id} />
        );
      });
  
      return index;
    }else{
      return(
        <ReactLoading color={'#000000'} />
      );
    }
  }
   
  render() {
    return <div className="main">
        <div className="nav-bar">
          <div className="nav-bar-left">
            <h1>Work Time Sheet</h1>
            <Clock ticking={true} format={"HH:mm:ss"} className={"clock"} />
          </div>
          <CheckInForm updateState={this.updateState} />
        </div>
        <div className="item-index">{this.buildIndex()}</div>
        <div className="footer">
          <div className="footer-credit">
            <a href="https://www.linkedin.com/in/jerryzlau/">
              <img src="http://res.cloudinary.com/jerryzlau/image/upload/c_scale,w_30/v1508897977/square-linkedin-256_qpcm3m.png" class="icon" />
            </a>
            <a href="https://github.com/jerryzlau">
              <img src="http://res.cloudinary.com/jerryzlau/image/upload/c_scale,w_30/v1508898510/github_npnfhb.png" class="icon" />
            </a>
          </div>
        </div>
      </div>;
  }
}

export default TimeSlotsIndex;