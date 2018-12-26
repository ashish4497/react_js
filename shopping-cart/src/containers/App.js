import React, { Component } from 'react';
import '../App.scss';
import Shoppinngcart from './../containers/Shoppingcart'; 

class App extends Component {
  render() {
    return (
      <div className="App">
       <Shoppinngcart />
      </div>
    );
  }
}

export default App;
