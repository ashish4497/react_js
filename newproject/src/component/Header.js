import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <div className="navigation">
                 <div className="navigation_list">
                  <ul>
                  <li><Link to="/"className="a">home</Link></li>
                  <li><i></i><Link to="/dropdown"className="a">dropdown</Link></li>
                  <li><Link to="/generic"className="a">generic</Link></li>
                  <li><Link to="/elements"className="a">elements</Link></li>
                  </ul>
                </div>
               <div className="header_title">
                  <p><span>Momentum</span> by Pixelarity</p>
                </div>
            </div>
         </header>
    );
}

export default Header;