import React, {Component} from 'react';
class Font extends Component {
	constructor(){
		super()	
		this.state ={
			value :''
		}
	}

	takeValue = (ev) => {
		this.setState({value: ev.target.value})
}

	render(){
		return(
			<div className ="fontstyle">
				<input type="text" className="inputText" onChange={this.takeValue}/>
				<h1 className="heading">Karal</h1><p className="Karal">{this.state.value}</p>
				<h1 className="heading">Helavatica Neue</h1><p className="Helavatica-Neue">{this.state.value}</p>
				<h1 className="heading">Beerserf</h1><p className="Beerserf">{this.state.value}</p>
				<h1 className="heading">Lato</h1><p className="lato">{this.state.value}</p>
				<h1 className="heading">Cabin</h1><p className="cabin">{this.state.value}</p>
				<h1 className="heading">Mali</h1><p className="Mali">{this.state.value}</p>
				<h1 className="heading">Raleway</h1><p className="Raleway">{this.state.value}</p>
			</div>
		)
	}
}
export default Font;