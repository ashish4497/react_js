import React, { Component, Fragment } from "react";
import logo from "../images/logo.png";

class Header extends Component {
	render() {
		return (
			<Fragment>
				<div className='top_header'>
					<div className='logo'>
						<img src={logo} alt='logo' />
					</div>
					<div className='nav-links' />
					<ul>
						<li>home</li>
						<li>about</li>
						<li>gallery</li>
						<li>contact</li>
					</ul>
				</div>
			</Fragment>
		);
	}
}

export default Header;
