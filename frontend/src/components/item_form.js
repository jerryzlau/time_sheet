import React, { Component } from 'react';
import { updateTimeSlot, deleteTimeSlot } from '../util/timeSlots_util';

class ItemForm extends Component {  
  constructor(props) {
    super(props);
    let checkOut;
    
    const date = new Date(this.props.timeSlot.checkIn)
      .toLocaleDateString();

    const checkIn = new Date(this.props.timeSlot.checkIn)
      .toLocaleTimeString();

    if(this.props.timeSlot.checkOut === '...'){
      checkOut = '...';
    }else{
      checkOut = new Date(this.props.timeSlot.checkOut)
        .toLocaleTimeString();
    }

    this.state = {
      id: this.props.timeSlot._id,
      comment: this.props.timeSlot.comment,
      date: date,
      checkIn: checkIn,
      checkOut: checkOut
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
    console.log(this.props);
    if(e.target.value === 'Delete'){
      deleteTimeSlot(this.props.timeSlot._id)
        .then(res => this.props.updateState(res));
    }else if(e.target.value === 'Edit'){
      console.log(this.state);
      updateTimeSlot(this.state)
        .then(() => this.props.updateState());
    }
  }
  
  render() {    

    return (
      <form className="time-slots-index-item">
        <label>Created On: 
          <input type="text"
            className="update-form-input"
            value={this.state.date}
            onChange={this.update('date')} />
        </label>
        <label>Check In: 
          <input type="text"
            className="update-form-input"
            value={this.state.checkIn}
            onChange={this.update('checkIn')} />
        </label>
        <label>Check Out: 
          <input type="text"
            className="update-form-input"
            value={this.state.checkOut}
            onChange={this.update('checkOut')} />
        </label>
        <label>Comment: 
          <input type="text"
            className="update-form-input"
            value={this.state.comment}
            onChange={this.update('comment')} />
        </label>
        <input type="submit" 
          onClick={this.handleSubmit}
          value="Edit" />
        <input type="submit" 
          onClick={this.handleSubmit}
          value="Delete" />
      </form>
    );
  }
}

export default ItemForm;