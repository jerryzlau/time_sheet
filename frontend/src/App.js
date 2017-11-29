import React, { Component } from 'react';
import TimeSlotsIndex from './components/timeSlots_index';
import TimeSlotsForm from './components/timeSlots_form';
import './css/App.css';

class App extends Component {  
  componentDidMount(){

  }

  render() {
    return (
      <div className="App">
        <h1>Time Sheet</h1>
        <TimeSlotsIndex />
        <TimeSlotsForm />
      </div>
    );
  }
}

export default App;
