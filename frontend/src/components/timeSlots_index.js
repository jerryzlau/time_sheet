import React, { Component } from 'react';
import { fetchTimeSlots } from '../util/timeSlots_util';
import TimeSlotsIndexItem from './timeSlots_index_item';
import '../css/Timeslots.css';

class TimeSlotsIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.buildIndex = this.buildIndex.bind(this);
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
        <h1>Time Sheet</h1>
        {this.buildIndex()}
      </div>
    );
  }
}

export default TimeSlotsIndex;