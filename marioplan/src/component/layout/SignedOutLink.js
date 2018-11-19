import React from 'react';
import {NavLink} from 'react-router-dom'

const SignedOutLink =()=> {
    return(
       <ul className="right">
        <li><NavLink to ="/signup">SignUp</NavLink></li>
        <li><NavLink to ="/Signin">Login</NavLink></li>
       </ul>
    )
}
export default  SignedOutLink;