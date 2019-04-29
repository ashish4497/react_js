// import React from "react";

// export default () => {
// 	return <div> comment Box </div>;
// };
import React, { Component } from "react";

class Commentbox extends Component {
	state = {
		comment: ""
	};

	handleChange = (e) => {
		this.setState({ comment: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<h1>Add comment</h1>
					<textarea onChange={this.handleChange} value={this.state.comment} />
					<div>
						<button>submit</button>
					</div>
				</form>
			</div>
		);
	}
}

export default Commentbox;
