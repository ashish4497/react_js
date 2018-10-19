import React, {Component} from 'react';
class Button extends Component {
 constructor (props) { 
 	super(props)
  }
	render() {
		return(
			<button className={this.props.type}> {this.props.name}</button>
		);
	}
}
export default Button;