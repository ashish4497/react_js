import React, {Component} from 'react';
export default function Compair(props) {
  const {user} = props;
  if (user.length === 0) {return 'Please Click to Compare the user'};
  return (
    <div className="hero-wrapper">
      {
        user.map((i) => {
          return (
            <div className="main-container" key={i}>
              <img className="user-img" src={user.avatar_url} alt="user profile"/>
              <div className="user-name">Name:{user.name}</div>
              <div className="btn">
                <button id={i} className="compare-btn" onClick={props.click}>Remove</button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}