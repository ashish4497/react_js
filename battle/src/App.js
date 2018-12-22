import React, { Component } from 'react';
import './App.scss';
import Gitusers from './container/Gitusers'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Gitusers />
      </div>
    );
  }
}

export default App;
