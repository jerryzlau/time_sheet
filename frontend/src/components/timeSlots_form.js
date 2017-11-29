import React, { Component } from 'react';
import { createTimeSlot } from '../util/timeSlots_util';

class TimeSlotsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkIn: '',
      comment: ''
    };
  }
  
  update(field){
    return e => this.setState({[field]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    createTimeSlot(this.state);
  }

  render() {
    const {checkIn, checkOut, comment} = this.state;
    return (
      <form className="time-slot-form"
        onSubmit={this.handleSubmit}>
        <label>Check In: 
          <input value={checkIn} 
            onChange={this.update('checkIn')}
            type="time" />
        </label>

        <label>Check In: 
          <input value={checkIn} 
            onChange={this.update('checkIn')}
            type="time" />
        </label>
      </form>
    );
  }
}

export default TimeSlotsForm;