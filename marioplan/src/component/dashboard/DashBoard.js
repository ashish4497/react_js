import React, { Component } from 'react';
import Notifacations from './Notifacations';
import ProjectList from '../projects/ProjectList';
import {connect} from 'react-redux';

 class DashBoard extends Component {
  render() {
    console.log(this.props)
    const {projects} = this.props;

    return (
      <div className="dashboard container">
        <div className="row">
            <div className="col s12 m6">
              <ProjectList />
            </div>
            <div className="col s12 m6 offset-m1"></div>
            <Notifacations />
        </div>
      </div>
    )
  }
}

const mapStateToprops =(state) => {
  return {
    projects: state.project.projects
  }
}

export default connect(mapStateToprops ) (DashBoard);