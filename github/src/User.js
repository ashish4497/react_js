import React, {Component} from 'react';
class User extends Component {
	render(){
		const {name, avatar_url,followers,following,public_repos} = this.props.data;
		return(
			<div className="user-detail">
				<img src ={avatar_url} className="profile"/>
					<div className="detail-re">
					<p>{name}</p>
					<div className="github-status">
						<span className="user-contact">Follower</span>
						<span className="follow-count">{followers}</span>
					</div>	
					<div className="github-status1">
						<span className="user-contact">following</span>
						<span className="follow-count">{following}</span>
					</div>	
					<div className="github-status2">
						<span className="user-contact">Repo</span>
						<span className="follow-count">{public_repos}</span>
					</div>	
				</div>	
			</div>
		)
	}
}
export default User;