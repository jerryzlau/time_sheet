import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { fetchTimeSlots } from './util/timeSlots_util';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  

  componentDidMount(){
    fetch('http://localhost:3001/api/timeslots')
      .then(res => res.json())
      .then(timeSlots => this.setState(timeSlots));
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
