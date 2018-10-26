import React, {Component} from 'react';
class User extends Component {
	render(){
		return(
				<div className="user-detail">
					<p>{this.props.name}</p>
				</div>
			)
	}
}
export default User;