import React, {Component} from 'react';

class Emoji extends Component {
	render(){
		return(
			<div>
			<p>{this.props.title} {this.props.symbol}</p>
			<p></p>
			</div>
		)
	}
}
export default Emoji;