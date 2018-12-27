import React, { Component } from 'react';
import './App.css';
import {increment,decrement} from './action';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{this.props.value}</h1>
        <button onClick={this.props.increment}>Inc</button>
        <button onClick={this.props.decrement}>Dec</button>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  }
}
const mapStatetoprops = (state) => {
  return {
    value: state
  }
}

export default connect(mapStatetoprops,mapDispatchToProps)(App);