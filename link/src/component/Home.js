import React, { Component } from 'react'
import{Link} from 'react-router-dom'
export default class Home extends Component {
  render() {
    return (
      <div>
        <ul>
            <li><Link to="/notifacation">Notifacation</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contcat</Link></li>
        </ul>
      </div>
    )
  }
}
