import React, { Component, Fragment } from 'react';

class Toggle extends Component {
	constructor() {
		super()
		this.state = {
			value: false
		}
		this.handleChange =this.handleChange.bind(this)
	}
	 handleChange  () {
		console.log(!this.state.value, 'clicked')
		this.setState({ value: !this.state.value })
		console.log(this.state.value, 'clicked')
	}

	render() {	
		return (
			<Fragment >
				<div class="container">
					<label for="ch" class="button">
						<input class="input" type="checkbox" id="ch" name="ch" onChange={this.handleChange} checked={this.state.value} />
						<div class="wrapper">
							<span class="text">
								<span class="off">{this.state.value ? "ON" : "OF"}</span>
								<span class="on">{this.state.value ? "ON" : "OF"}</span>
							</span>
							<button onClick={this.handleChange} className="btn">{this.state.value ? "ON" : "OF"}</button>
						</div>
					</label>
				</div>
			</Fragment >
		)
	}
}
export default Toggle;