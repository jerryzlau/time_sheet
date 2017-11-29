import React, { Component } from 'react';
import TimeSlotsIndex from './components/timeSlots_index';
import './css/App.css';

class App extends Component {  
  componentDidMount(){

  }

  render() {
    return (
      <div className="App">
        <h1>Work Time Sheet</h1>
        <TimeSlotsIndex />
      </div>
    );
  }
}

export default App;
