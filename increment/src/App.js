import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Input'

class App extends Component {
  constructor() { 
  super() 
    this.state = {
      value : 1,
    }
  }
  increment=()=> {
    this.setState({value:this.state.value+1})
  }

  render() {
    return (
    <div className="App">
    <h1>{this.state.value}</h1>
    <button onClick ={this.increment}>add</button>
    <Input />
    </div>
    );
  }
}

export default App;
