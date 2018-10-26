import React, {Component} from 'react';
class Backgroundcolor extends Component {
	constructor(){
		super()
		this.state={
			r:0,
			g:0,
			b:0
		}
	}

	changeColorR=(e)=>{
		console.log(e)
		this.setState({r:e.target.value})
	}
	changecolorG=(e)=>{
		console.log(e)
		this.setState({g:e.target.value})
	}
	changecolorB=(e)=>{
		console.log(e)
		this.setState({b:e.target.value})
	}
	render(){
		return( 
			<div className="main"style={{backgroundColor: `rgb(${this.state.r},${this.state.g},${this.state.b})`}}>
			<h1>Start</h1>
			<div className="R">
				<h1>R</h1><input type="range" min="0" max="255" value={this.state.range} onChange={this.changeColorR}/>
			</div>
			<div className="G">
				<h1>G</h1><input type="range" min="0" max="255" value={this.state.range} onChange={this.changecolorG}/>
			</div>
			<div className="B">
				<h1>B</h1><input type="range" min="0" max="255" value={this.state.range} onChange={this.changecolorB}/>
			</div>
			</div>
		)
	}
}
export default Backgroundcolor;