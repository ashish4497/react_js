import React,{Component} from 'react';
class Input extends Component {
	constructor(props) {
		super(props)
		this.state = {
			text :''
		}
	}
	changeText = (val) => {
		this.setState({text: val.target.value})
	}

	render(){
		return(
			<div className ="input-text">
				<input type ="text" className="input-btn" onChange={this.changeText}/>
				<p>{this.state.text}</p>
			</div>
		)
	}
}
export default Input;