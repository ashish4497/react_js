import React, { Component } from 'react';
import{BrowserRouter,Switch ,Route,} from 'react-router-dom';
import Navbar from './component/layout/Navbar';
import DashBoard from './component/dashboard/DashBoard';
import ProjectDetail from './component/projects/ProjectDetail';
import SignIn from './component/auth/SignIn';
import SignUp from './component/auth/SignUp';
import CreateProject from './component/projects/CreateProject';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar /> 
          <Switch>
            <Route exact path="/" component={DashBoard}/>
            <Route path="/Project/:id" component={ProjectDetail}/>
            <Route path="/Signin" component={SignIn}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/create" component={CreateProject}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;