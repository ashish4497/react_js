import React, {Component} from 'react';

class Todo extends Component {
	render(){
		return(
			<div className="Todo-list">
				<form>
					<h1>Todo</h1>
					<input type ="text"className="text-box" placeholder="What need to be done"/>
					<button className="btn" onClick={this.props.additems}>submit</button>
				</form>
				<div className="item-list">
					<li>{this.props.name}</li>
				</div>
			</div>
		);
	}
}
export default Todo;
