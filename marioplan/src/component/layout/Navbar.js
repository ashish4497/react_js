import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLink';
import SignedOutLink from './SignedOutLink';
const Navbar =()=> {
    return(
        <nav className="nav-wrapper grey dark-3">
        <div className="container">
        <Link to='/' className='brand-logo'>MarioPlan</Link>
        <SignedInLinks />
        <SignedOutLink />
        </div>
        </nav>
    )
}
export default Navbar;