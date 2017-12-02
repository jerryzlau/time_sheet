import React, { Component } from 'react';
import { fetchTimeSlots } from '../util/timeSlots_util';
import ItemForm from './item_form';
import ReactLoading from 'react-loading';
import Clock from "react-live-clock";
import CheckInForm from "./checkin_form";
import '../css/Timeslots.css';

class TimeSlotsIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.updateState = this.updateState.bind(this);
  }

  updateState(){
    fetchTimeSlots()
    .then(res => {
      this.setState({timeSlot: res});
    });
  }

  componentDidMount(){
    this.updateState();
  }

  buildIndex(){
    if(this.state.timeSlot){
      let delay = 1;
      const index = this.state.timeSlot.map((timeSlot, idx) => {
        delay += 0.1;
        return (
          <ItemForm 
            key={idx}
            delay={delay}
            updateState={this.updateState}
            timeSlot={timeSlot} />
        );
      });
  
      return index;
    }else{
      return(
        <ReactLoading 
          style={{width: '200px', 
            marginLeft: '65vh',
            marginTop: '15vh'}}
            type="spinningBubbles"
          color={'#000000'} />      
      );
    }
  }
   
  render() {
    return <div className="main">
        <div className="nav-bar">
          <div className="nav-bar-left">
            <h1>Work Time Sheet</h1>
            <Clock ticking={true} format={"HH:mm:ss"} className={"clock"} />
          </div>
          <CheckInForm updateState={this.updateState} />
        </div>
        <div className="item-index">{this.buildIndex()}</div>
      </div>;
  }
}

export default TimeSlotsIndex;