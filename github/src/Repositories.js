import React, {Component} from 'react';
class Repo extends Component {
	render() {
		const {data} = this.props
		return (
			<div className="repos-user">
				<h3>Repos</h3>
				{data ? data.map(repo => <h5>{repo.name}</h5>) : ''}
			</div>
		)
	}
}
export default Repo;