import React, { Component } from 'react';

class TimeSlotsIndexItem extends Component {  
  render() {
    const { comment } = this.props.timeSlot;

    console.log(new Date(this.props.timeSlot.date).getTimezoneOffset());

    const date = new Date(this.props.timeSlot.date)
      .toLocaleDateString();

    const checkIn = new Date(this.props.timeSlot.checkIn)
      .toTimeString();

    let checkOut = new Date(this.props.timeSlot.checkOut)
      .toTimeString();
      
    if (checkOut === 'Invalid Date') checkOut = 'Not yet checked out';

    return (
      <div className="time-slots-index-item">
        <p>Created On: {date}</p>
        <p>Check In: {checkIn}</p>
        <p>Check Out: {checkOut}</p>
        <p>Comment: {comment}</p>
      </div>
    );
  }
}

export default TimeSlotsIndexItem;