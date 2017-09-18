import React, { Component } from 'react';
import logo from './image001.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Sibi</h2>
        </div>
        <p className="App-intro">
          To get started, please enter your info below and press submit.
        </p>
          <div>
            <input className="First-name" placeholder="First name"></input>{"\n"}
          </div>
          <div>
            <input className="Last-name" placeholder="Last name"></input>{"\n"}
          </div>
          <div>
            <input className="Phone-number" placeholder="Phone ex. 555-555-5555"></input>{"\n"}
          </div>
          <div>
            <input className="Email" placeholder="Email address"></input>{"\n"}
          </div>
          <button>
            Submit
          </button>
      </div>
    );
  }
}

export default App;
