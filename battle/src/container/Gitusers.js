import React, { Component } from 'react';
import Userlist from './../component/Userlist'
import Compair from "./../component/Compair"

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

	handlesubmit = (e) => {
		// let id = e.target.id;
		// console.log(id, "dfghjkl")
		this.setState({
      compair : [...this.state.compair, this.state.usersinfo]
		})
		console.log(this.state.compair,"dta")
	}

	handleDelete = (e) => {
    let id = e.target.id;
    this.setState((state, props) => {
      return {
        state: [...this.state.compair, this.state.compair.splice(id, 1)]
      }
    })
  }
	render() {
		return (
			<div>			
				 {/* <usersinfo user={this.state.usersinfo} click={this.handleClick} />	 */}
				{
					this.state.usersinfo.map((user,id) => <Userlist handlesubmit = {this.handlesubmit } value={user} />)
				}
				<Compair user={this.state.compair} click={this.handleDelete} />
			</div>
		)
	}
}
export default Gitusers;
