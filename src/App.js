import React, { Component } from 'react';
import './App.css';
import Upload from './components/upload';
import Filter from './components/filter';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Upload  />
        <Filter image="/Users/fuad/code/webstagram/backend/uploads/image.jpeg" />
      </div>
    );
  }
}

export default App;
