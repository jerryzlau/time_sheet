import React, { Component } from 'react';
import { createTimeSlot } from '../util/timeSlots_util';

class CheckInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  update(field){
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(){
    createTimeSlot(this.state)
      .then(() => this.props.updateState())
      .then(() => this.setState({comment: ''}));
  }

  render() {
    const { comment } = this.state;
    return (
      <form className="checkin-form time-slots-index-item"
        onSubmit={this.handleSubmit}>

        <label>Comment: 
          <input value={comment} 
            className="form-input"
            onChange={this.update('comment')}
            type="textarea" />
        </label>

        <input type="submit" 
          className="form-submit"
          value="Check In!"/>
      </form>
    );
  }
}

export default CheckInForm;