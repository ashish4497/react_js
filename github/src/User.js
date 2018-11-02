import React, {Component} from 'react';
class User extends Component {
	render(){
		const {name, avatar_url,followers,following,public_repos} = this.props.data;
		return(
			<div className="user-detail">
				<p>{name}</p>
				<img src ={avatar_url}/>
				<div className="github-status">
					<span className="user-contact">Follower</span>
					<span className="follow-count">{followers}</span>
				</div>	
				<div className="github-status">
					<span className="user-contact">following</span>
					<span className="follow-count">{following}</span>
				</div>	
				<div className="github-status">
					<span className="user-contact">Repo</span>
					<span className="follow-count">{public_repos}</span>
				</div>		
			</div>
		)
	}
}
export default User;