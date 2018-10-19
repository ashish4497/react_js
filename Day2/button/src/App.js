import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Button name="save" type="rectangle"/>
      <Button name ="submit" type ="circle"/>
      <Button name ="Click" type =""/>
      <Button name ="Enter"/>
      <Button name ="on click"/>
      </div>
    );
  }
}

export default App;
