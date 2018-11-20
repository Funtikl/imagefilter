import React, { Component } from 'react';
import './App.css';
import Upload from './components/upload';
import Filter from './components/filter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Upload />
        <Filter />
      </div>
    );
  }
}

export default App;
