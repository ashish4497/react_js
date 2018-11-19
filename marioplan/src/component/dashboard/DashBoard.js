import React, { Component } from 'react'
import Notifacations from './Notifacations'
import ProjectList from '../projects/ProjectList'

 class DashBoard extends Component {
  render() {
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

export default DashBoard;