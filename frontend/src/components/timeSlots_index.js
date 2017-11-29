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
    .then(res => this.setState(res))
    .then(() => console.log(this.state));
  }

  componentDidMount(){
    this.updateState();
  }

  buildIndex(){
    const index = Object.keys(this.state).reverse().map(idx => {
      const timeSlot = this.state[idx];
      return (
        <ItemForm 
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