import React, { Component } from 'react';
import { fetchTimeSlots } from '../util/timeSlots_util';

class TimeSlotsIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    fetchTimeSlots()
      .then(res => this.setState(res));
  }

  buildIndex(){
    
  }
  
  render() {
    return (
      <div className="time-slots-index">
        
      </div>
    );
  }
}

export default TimeSlotsIndex;