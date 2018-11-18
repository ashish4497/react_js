import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Contact from './component/Contact';
import About from './component/About';
import Notification from './component/Notification';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={Home}/>
          <Switch>
            <Route path="/contact" Component={Contact}/>
            <Route path="/notification" component={Notification}/>
            <Route path="/about" component={About}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;