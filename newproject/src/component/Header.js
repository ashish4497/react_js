import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <div className="navigation">
                 <div className="navigation_list">
                  <ul>
                  <li><Link to="/">home</Link></li>
                  <li><i></i><Link to="/dropdown">dropdown</Link></li>
                  <li><Link to="/generic">generic</Link></li>
                  <li><Link to="/elements">elements</Link></li>
                  </ul>
                </div>
               <div className="header_title">
                  <h2><span>Momentum</span> by Pixelarity</h2>
                </div>
            </div>
         </header>
    );
}

export default Header;