import React, {Component} from 'react';


export default function Compair(props) {
  const {user} = props;
  if (user.length === 0) {return "wait..."};
  return (
    <div className="hero-wrapper">
        <div className="user-compair">
          <h1>compare</h1>
          <p> following :</p>
          <p>followers :</p>
          <p>public_gists:</p>
        </div>
      {
        user.map((value, index) => {
        return (
        
        <div className="main" id={index}>
        <div>
          <img className="user_icon" src={value.avatar_url && value.avatar_url} alt="user profile"/>        
          <p>{value.following}</p>
          <p> {value.followers}</p>
          <p>{value.public_gists}</p>
          <div className="btn">
          <button id={index} className="compare-btn" onClick={props.click}>Remove</button>
          </div>
          </div>
        </div>) 
        })    
      }
    </div>
  )
}