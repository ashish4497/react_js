import React, {Component} from 'react';
class Repo extends Component {
	render() {
		const {data} = this.props
		return (
			<div className="repos-user">
				<h2>Repos</h2>
				{data ? data.map(repo => <div className="repo-detail">
				 <p>{repo.name}</p>
				<p>{repo.description}</p>
								<div className="repo-description">
									<span>{repo.language}</span>
									<span>{repo.stargazers_count}</span>
									<i className="fas fa-star"></i>
										<span>{repo.forks_count}</span>
									<i class="fas fa-code-branch"></i>
								</div>
				 </div>) : ''}
			</div>
		)
	}
}
export default Repo;