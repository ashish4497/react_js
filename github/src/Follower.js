import React, {Component} from 'react';

export default class Follower extends Component {
	render() {
		const {data} = this.props;
		return (
			<div clasName="follower-user">
				<h3>Followers</h3>
				{data ? data.map(follower => <h1>{follower.login}</h1>) : ''}
			</div>
		);	
	}
}
