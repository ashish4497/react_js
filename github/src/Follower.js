import React, {Component} from 'react';

export default class Follower extends Component {
	render() {
		const {data} = this.props; 
		return (
			<div clasName="follower-user">
				<h2>Followers</h2>
				{data ? data.map(follower => <div className="follower-list">
																				<img className="user-profile" src={follower.avatar_url} alt="profile" />
																				<p>{follower.login}</p>
																			</div>) :''}

			</div>
		);	
	}
}
