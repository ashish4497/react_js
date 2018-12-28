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

	handlesubmit = (id) => {
	// 	this.state.compair.forEach(elem => {
	// 		if(elem.id === this.state.usersinfo[id].id)return;
	// 	console.log(elem.id,this.state.usersinfo[id].id,"hell")
	// })
		// let id = e.target.id;
		// console.log(id, "dfghjkl")
		this.setState({
      compair : [...this.state.compair, this.state.usersinfo[id]]
		},()=>console.log(this.state.compair,"dta"))
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
				<div className="main-container">				
					{
						this.state.usersinfo.map((user,id) => <Userlist key = {id} id = {id} handlesubmit = {this.handlesubmit } value={user} />)
					}
				</div>
				<Compair user={this.state.compair} click={this.handleDelete} />
			</div>
		)
	}
}
export default Gitusers;
