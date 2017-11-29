import React, { Component } from 'react';

class TimeSlotsIndexItem extends Component {
  // constructor(props) {
  //   super(props);
    
  // }
  
  render() {
    const {createdOn, checkIn, checkOut, comment} = this.props.timeSlot;

    return (
      <div className="time-slots-index-item">
        <p>{createdOn}</p>
        <p>{checkIn}</p>
        <p>{checkOut}</p>
        <p>{comment}</p>
      </div>
    );
  }
}

export default TimeSlotsIndexItem;