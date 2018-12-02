import React, { Component } from 'react';
import './App.scss';
import Home from './component/Home';
import Dropdown from './component/Dropdown';
import {BrowserRouter,Route} from 'react-router-dom'
import Generic from './component/Generic';
import Elements from './component/Elements';


class App extends Component {
  render() {
    return (
      
      <BrowserRouter>
          <div className="App">
            <Route path ='/' exact component={Home} />
            <Route path='/dropdown' component={Dropdown}/>
            <Route path ='/generic' component={Generic } />
            <Route path ='/elements' component={Elements} />
          </div>
      </BrowserRouter>
     
    );
  }
}

export default App;
