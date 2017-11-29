import React, { Component } from 'react';
import { createTimeSlot } from '../util/timeSlots_util';

class TimeSlotsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkIn: '',
      comment: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  update(field){
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e){
    e.preventDefault();
    createTimeSlot(this.state)
      .then(() => console.log('fired'));
  }

  render() {
    const {checkIn, comment} = this.state;
    return (
      <form className="form time-slots-index-item"
        onSubmit={this.handleSubmit}>
        <label className="form-input">Check In: 
          <input value={checkIn} 
            onChange={this.update('checkIn')}
            type="time" />
        </label>

        <label className="form-input">Comment: 
          <input value={comment} 
            onChange={this.update('comment')}
            type="textarea" />
        </label>

        <input type="submit" 
          value="Check In!"/>
      </form>
    );
  }
}

export default TimeSlotsForm;