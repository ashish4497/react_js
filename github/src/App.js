import React, { Component } from 'react';
import './App.scss';
import Header  from './Header';
import Follower from './Follower';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Follower />
      </div>
    );
  }
}

export default App;
