import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './component/Home';
import Contact from './component/Contact';
import About from './component/About';
import Notifacation from './component/Notifacation';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={Home}/>
          <switch>
            <Route path="/contact" component={Contact}/>
            <Route path="/about" component={About}/>
            <Route path= "/notifacation" component={Notifacation}/>
          </switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;