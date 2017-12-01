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
    this.handleCheckOut = this.handleCheckOut.bind(this);
  }

  update(field){
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  checkValidTime(t){
    if (!t) return false;
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

  handleCheckOut(e){
    e.preventDefault();
    if(e.target.value === 'Done!') return;
    let hour = new Date().getHours().toString();
    let min = new Date().getMinutes().toString();

    // pad leading zeros
    if (hour.length === 1) hour = "0" + hour;
    if (min.length === 1) min = "0" + min;
    const time = `${hour}:${min}`;

    this.setState({ checkOut: time });

    const deliver = {
      id: this.state.id,
      checkOut: time
    };

    updateTimeSlot(deliver);
  }

  handleSubmit(e){
    e.preventDefault();
    const tag = e.target;
    if(e.target.value === 'Delete'){
      deleteTimeSlot(this.props.timeSlot._id)
        .then(() => this.props.updateState());
    }else if(e.target.value === 'Update'){
      const checkIn = this.state.checkIn;
      const date = this.state.date;
      const checkOut = this.state.checkOut;
      if(this.checkValidTime(checkIn) && 
        this.checkValidTime(checkOut) && 
        this.checkValidDate(date)){
        updateTimeSlot(this.state)
          .then(() => this.props.updateState())
          .then(() => {
            tag.style.background = '#51f23c';
            setTimeout(() => {
              tag.style.background = "#63D7D9";
            }, 1000);
          });
      }else{
        tag.style.background = "red";
        setTimeout(() => {
          tag.style.background = "#63D7D9";
        }, 1000);
        setTimeout(() => {
          alert('Invalid Input!\nTime Format is 24-hour clock, ex. 13:30\nDate Format is DD/MM/YYYY\n');
        }, 1500);
      }
    }
  }
  
  render() {    

    let checkedColor = "#fa2929"; 
    let checkedText = 'Check Out!';

    if(this.state.checkOut){
      checkedColor = '#51f23c';
      checkedText = 'Done!';
    } 

    return (
      <form className="item-form">
        <div className="item-form-left">
          <div className="item-form-item">
            <span className="item-form-item-title">
              Date:
            </span>
            <input type="text"
              className="item-form-input"
              value={this.state.date}
              onChange={this.update('date')} />
          </div>
          <div className="item-form-item">
            <span className="item-form-item-title">
              Clock <br/> In: 
            </span>
            <input type="text"
              className="item-form-input"
              value={this.state.checkIn}
              onChange={this.update('checkIn')} />
          </div>
          <div className="item-form-item">
            <span className="item-form-item-title">
              Clock <br/> Out: 
            </span>
            <input type="text"
              className="item-form-input"
              placeholder="time..."
              value={this.state.checkOut}
              onChange={this.update('checkOut')} />
          </div>
          <div className="item-form-item">
            <span className="item-form-item-title">
              Notes:
            </span>
            <textarea
              className="notes item-form-input"
              placeholder="Notes..."
              value={this.state.comment}
              onChange={this.update('comment')} />
          </div>
        </div>

        <div className="item-form-right">
          <div className="item-form-right-top">
            <input type="submit" 
              onClick={this.handleSubmit}
              value="Update" />
            <input type="button" 
              onClick={this.handleSubmit}
              value="Delete" />
          </div>
          <input type="button"
            className="checkout-submit" 
            onClick={this.handleCheckOut}
            style={{backgroundColor: checkedColor}}
            value={checkedText} />
        </div>
      </form>
    );
  }
}

export default ItemForm;