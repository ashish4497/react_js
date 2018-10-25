import React, {Component} from 'react';

class Emoji extends Component {
	render(){
		return(
			<div>
			<p>{this.props.title}</p>
			<p>{this.props.symbol}</p>
			</div>
		)
	}
}
export default Emoji;