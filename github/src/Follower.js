import React, {Component} from 'react';
class Follower extends Component{
	constructor(props) {
		super(props)
		this.state = {
		userFollower:[]
	}
	
	}
	render(){
		return(
			<h1>Follower</h1>
		)
	}
}
export default  Follower;