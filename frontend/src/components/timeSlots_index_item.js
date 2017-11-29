import React, { Component } from 'react';

class TimeSlotsIndexItem extends Component {
  // constructor(props) {
  //   super(props);
    
  // }
  
  render() {
    const {createdOn, checkIn, checkOut, comment} = this.props.timeSlot;

    return (
      <div className="time-slots-index-item">
        <p>Created On: {createdOn}</p>
        <p>Check In: {checkIn}</p>
        <p>Check Out: {checkOut}</p>
        <p>Comment: {comment}</p>
      </div>
    );
  }
}

export default TimeSlotsIndexItem;