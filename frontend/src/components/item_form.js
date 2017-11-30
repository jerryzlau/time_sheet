import React, { Component } from 'react';
import { updateTimeSlot, deleteTimeSlot } from '../util/timeSlots_util';

class ItemForm extends Component {  
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.timeSlot._id,
      comment: this.props.timeSlot.comment,
      date: this.props.timeSlot.date,
      checkIn: this.props.timeSlot.checkIn,
      checkOut: this.props.timeSlot.checkOut
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field){
    return e => {
      this.setState({ [field]: e.target.value });
      console.log(this.state);
    };
  }

  checkValidTime(t){
    const time = t.split(':');
    if(time.length !== 2) return false;
    const hour = time[0];
    const min = time[1];
    if(hour.length !== 2 || min.length !== 2) return false;
    if(isNaN(hour) || isNaN(min)) return false;
    if(hour < 0 || hour > 24) return false;
    if(min < 0 || min > 60) return false;
    return true;
  }

  checkValidDate(d){
    const date = d.split('/');
    if(date.length !== 3) return false;
    const day = date[1];
    const month = date[0];
    const year = date[2];
    if(isNaN(day) || isNaN(month) || isNaN(year)) return false;
    if(day < 1 || day > 31) return false;
    if(month < 1 || month > 12) return false;
    return true;
  }

  handleSubmit(e){
    e.preventDefault();
    if(e.target.value === 'Delete'){
      deleteTimeSlot(this.props.timeSlot._id)
        .then(() => this.props.updateState());
    }else if(e.target.value === 'Update'){
      const checkIn = this.state.checkIn;
      const checkOut = this.state.checkOut;
      const date = this.state.date;
      if(this.checkValidTime(checkIn) && 
        this.checkValidTime(checkOut) && 
        this.checkValidDate(date)){
        updateTimeSlot(this.state)
          .then(() => this.props.updateState());
      }else{
        alert('Invalid Input!\nTime Format is 24-hour clock, ex. 13:30\nDate Format is DD/MM/YYYY\n');
      }
    }
  }
  
  render() {    
    const minDate = new Date().toISOString().slice(0,10);
    return (
      <form className="item-form">
        <div className="item-form-left">
          <div className="item-form-item">
            <span className="item-form-item-title">
              Check On: 
            </span>
            <input type="text"
              className="item-form-input"
              value={this.state.date}
              onChange={this.update('date')} />
          </div>
          <div className="item-form-item">
            <span className="item-form-item-title">
              Check In: 
            </span>
            <input type="text"
              className="item-form-input"
              value={this.state.checkIn}
              onChange={this.update('checkIn')} />
          </div>
          <div className="item-form-item">
            <span className="item-form-item-title">
              Check Out: 
            </span>
            <input type="text"
              className="item-form-input"
              placeholder="..."
              value={this.state.checkOut}
              onChange={this.update('checkOut')} />
          </div>
          <div className="item-form-item">
            <span className="item-form-item-title">
              Day About:
            </span>
            <input type="textarea"
              className="item-form-input"
              placeholder="..."
              value={this.state.comment}
              onChange={this.update('comment')} />
          </div>
        </div>

        <div className="item-form-right">
          <input type="submit" 
            onClick={this.handleSubmit}
            value="Update" />
          <input type="button" 
            onClick={this.handleSubmit}
            value="Delete" />
        </div>
      </form>
    );
  }
}

export default ItemForm;