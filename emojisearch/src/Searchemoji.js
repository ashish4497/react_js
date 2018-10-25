import React, {Component} from 'react';
import * as data from './data.json';
import Emoji from './Emoji'

class Emojisearch extends Component {
	constructor(){
		super()
		this.state ={
			emoji:[],
			info:''
		}
	}

	componentWillMount(){
		this.setState({
			emoji : data.default
		})
	}

	findemoji=(e)=>{
		console.log(e)
		this.setState({info:e.target.value})
	}

	render() {
		
		return (

		<div className="emoji">
			<h1>setup</h1>
				<input type="text" onChange={this.findemoji}/>
			{
				this.state.emoji.map(emo=> <Emoji title={emo.title} symbol={emo.symbol}/>)
			}
		<emoji />
		</div>
		)
	}
}
export default Emojisearch;
