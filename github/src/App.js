import React, { Component } from 'react';
import './App.scss';
import Header  from './Header';
import Follower from './Follower';
import Repo from './Repositories';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}
export default App;