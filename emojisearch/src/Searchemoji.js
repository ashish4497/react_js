import React, {Component} from 'react';
import * as data from './data.json';
import Emoji from './Emoji'

class EmojiSearch extends Component {
	constructor(){
		super()
		this.state ={
			emoji:[],
			info:''
		}
	}

	componentWillMount(){
		this.setState({
			emoji :data.default.slice(0, 20)
		})
	}

	

	findemoji = (e) =>{
		this.setState({ info: e.target.value })
		var filteredArray = data.default.filter(emoji => emoji.title.toLowerCase().includes(this.state.info.toLowerCase()));
		this.setState({ emoji: filteredArray.slice(0,20) })
	}


	render() {

		return (

		<div className="emoji">
			<h1>setup</h1>
			<input type="text" onChange={this.findemoji}/>
			{
				this.state.emoji.map(emo => <Emoji title={emo.title} symbol={emo.symbol}/>)
			}
		</div>
		)
	}
}
export default EmojiSearch;
