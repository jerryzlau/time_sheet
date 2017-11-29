import React, { Component } from 'react';
import { fetchTimeSlots } from '../util/timeSlots_util';
import UpdateForm from './update_form';
import CheckInForm from './checkin_form';
import '../css/Timeslots.css';

class TimeSlotsIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.updateState = this.updateState.bind(this);
  }

  updateState(){
    fetchTimeSlots().then(res => {
      this.setState(res);
    });
    console.log('hit');
  }

  componentDidMount(){
    this.updateState();
  }

  buildIndex(){
    const index = Object.keys(this.state).reverse().map(idx => {
      const timeSlot = this.state[idx];
      return (
        <UpdateForm 
          updateState={this.updateState}
          timeSlot={timeSlot}
          key={idx} />
      );
    });

    return index;
  }
  
  render() {
    return (
      <div className="time-slots-index">
        <CheckInForm 
          updateState={this.updateState}/>
        {this.buildIndex()}
      </div>
    );
  }
}

export default TimeSlotsIndex;