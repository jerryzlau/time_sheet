import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as APIs from './util/timeSlots_util';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  componentDidMount(){
    APIs.deleteTimeSlot("5a1de247b0f7f77cf559b3fa").then(res =>
      console.log(res)
    );
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1>App</h1>
      </div>
    );
  }
}

export default App;
