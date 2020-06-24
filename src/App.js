import React, { Component } from 'react';
import './App.css';
import Showcase from './components/showcase';
import Dropdown from './components/dropdown'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Dropdown />
        <Showcase />
      </div>
    );
  }
}

export default App;
