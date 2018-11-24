import React, { Component } from 'react';
import Notifacations from './Notifacations';
import ProjectList from '../projects/ProjectList';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase'
import { compose } from 'redux';


 class DashBoard extends Component {
  render() {
    console.log(this.props)
    const {projects} = this.props;

    return (
      <div className="dashboard container">
        <div className="row">
            <div className="col s12 m6">
              <ProjectList projects={projects} />
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
    projects: state.firestore.ordered.projects
  }
}

export default  compose(
    connect(mapStateToprops ),
    firestoreConnect([{collection:'projects'}])
  )(DashBoard);