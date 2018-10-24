import React, {Component} from 'react';

export class Todo extends Component {
	render(){
		return(
			<div className="Todo-list">
				<form>
					<h1>Todo</h1>
					<input type ="text"className="text-box" placeholder="What need to be done"/>
					<button className="btn" onClick={this.props.additems}>submit</button>
				</form>
			</div>
		);
	}
}


export class List extends Component {
	render() {
		return(
			<div className="list-out">{this.props.itemList}
			<input type ="checkbox" className ="check-box" onClick={this.props.toggle} data-id={this.props.dataId}/>
			
			</div>

		)
	}
}
