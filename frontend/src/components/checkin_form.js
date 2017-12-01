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

  handleSubmit(e){
    e.preventDefault();
    createTimeSlot(this.state)
      .then(() => this.props.updateState())
      .then(() => this.setState({comment: ''}));
  }

  render() {
    const { comment } = this.state;
    return (
      <form className="checkin-form"
        onSubmit={this.handleSubmit}>
          <textarea value={comment} 
            className="notes checkin-input"
            placeholder="Notes..."
            onChange={this.update('comment')}
             />

          <input type="submit" 
            className="checkin-submit"
            value="Check In!"/>
      </form>
    );
  }
}

export default CheckInForm;