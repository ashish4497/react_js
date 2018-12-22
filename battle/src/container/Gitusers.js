import React, { Component } from 'react';
import Userlist from './../component/Userlist'

class Gitusers extends Component {
	constructor() {
		super();
		this.state = {
			usersinfo: [],
			compair: []
		}
	}
	componentWillMount() {
		fetch(
			"https://gist.githubusercontent.com/SiddharthShringi/e2ff958eb9a6fa2f8c2d412e3613fae7/raw/f336d8a27a46a5f0094d0796d326eaf1b1f86c0a/compareProfile.json")
			.then(res => res.json())
			.then(userdata => {
				// console.log(userdata)
				this.setState({ usersinfo: userdata.users });
				// console.log(this.state.usersinfo, "status")
			});
	}
	handlesubmit = () => {
		this.setState({})
	}

	render() {
		return (
			<div>
				{
					this.state.usersinfo.map(user => <Userlist handlesubmit={this.handlesubmit} value={user} />)
				}
			</div>
		)
	}
}
export default Gitusers;
