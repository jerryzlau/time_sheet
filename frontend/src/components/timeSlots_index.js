import React, { Component } from 'react';
import { fetchTimeSlots } from '../util/timeSlots_util';
import ItemForm from './item_form';
import CheckInForm from './checkin_form';
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
    }
  }
  
  render() {
    return (
      <div className="time-slots-index">
      <div className="nav-bar">
        <h1>Work Time Sheet</h1>
        <CheckInForm 
          updateState={this.updateState}/>
      </div>
        {this.buildIndex()}
      </div>
    );
  }
}

export default TimeSlotsIndex;