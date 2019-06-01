import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  componentDidMount() {
    axios.get(process.env.REACT_APP_API_URL).then((result) => {
      console.log(result.data);
    }).catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Bookie</h2>
        </div>
        <p className="App-intro">
          Hello World!
        </p>
      </div>
    );
  }
}

export default App;
