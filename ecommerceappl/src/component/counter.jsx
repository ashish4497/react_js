import React, {Component} from 'react'
class Counter extends Component {
	state ={
		count:0,
		tags: ['tag1','tag2','tag3']
	}

constructor(){
	super()
	this.handleIncrement =this.handleIncrement.bind(this)
};

	renderTags() {
		if(this.state.tags.length ===0) return <p>Their is no tags </p>
			return <ul>
			{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
			</ul>
	}

	handleIncrement = () => {
		// console.log("incrementclick",this);
			this.setState({count:this.state.count +1});
	}

	render(){ 
		return(
			<div>
			<span>{this.formatCount()}</span>
			<button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">increment</button>
			{this.renderTags()}
			</div>
		);
	}

	formatCount() {
		const {count} =this.state;
		return count ===0 ? "zero" :count;
	}
}

export default Counter;