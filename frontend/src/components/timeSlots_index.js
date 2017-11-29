import React, { Component } from 'react';
import { fetchTimeSlots } from '../util/timeSlots_util';
import TimeSlotsIndexItem from './timeSlots_index_item';
import '../css/Timeslots.css';

class TimeSlotsIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    fetchTimeSlots()
      .then(res => {
        this.setState(res);
      });
  }

  buildIndex(){
    return Object.keys(this.state).reverse().map(idx => {
      const timeSlot = this.state[idx];
      return (
        <TimeSlotsIndexItem 
          timeSlot={timeSlot}
          key={idx} />
      );
    });
  }
  
  render() {
    return (
      <div className="time-slots-index">
        {this.buildIndex()}
      </div>
    );
  }
}

export default TimeSlotsIndex;