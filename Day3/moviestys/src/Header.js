import React, {Component} from 'react'
class Header extends Component {
	render(){
		return(
			<div className ="header">
				<div className="nav">
					<ul>
						<li>home</li>
						<li>browse movies</li>
						<li>login</li>
						<li>regester</li>
					</ul>
				</div>
			</div>
			)
	}
}
export default Header;