import React, { Component } from 'react';
import './style/main.scss';
import News from './components/News';
import Country from './components/CountryName';
import CountryInfo from './container/CountryInfo';
import Header from './components/header';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Country />
        {/* <News /> */}
        <CountryInfo />
      </div>
    );
  }
}

export default App;