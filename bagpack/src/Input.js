import React, { Component, Fragment } from 'react';
import Item from './Item'
class Input extends Component {
	constructor() {
		super()
		this.state = {
			items: [],
			inputValue: ""
		}
	}

	handleinput = (e) => {
		this.setState({ inputValue: e.target.value })
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.setState({
			items: [...this.state.items, this.state.inputValue]
		})

	}
	render() {
		return (
			<Fragment>
				<input type="text" placeholder="ente item name" className="input-items" onChange={this.handleinput} />
				<button className="btn" onClick={this.handleSubmit}>add item</button>
				<Item items={this.state.items} />	
				{
				
					this.state.items.map(item => <p>
						<input type="checkbox" />{item}
						<button>remove</button></p>)
				}
			</Fragment>
		)
	}
}
export default Input;