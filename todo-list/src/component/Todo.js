import React, {Component} from 'react';
import {connect} from 'react-redux'
import {addtodo} from '../action';
import {remove} from '../action';

class Todo extends Component{
    state = {
        todo : ''
    }

    handleChange = (e) => {
        this.setState({todo: e.target.value})
    }

    render(){
        return(
            <div>
                <input type="text" className="input-btn" placeholder="enteritem" onChange={this.handleChange}/>
                <button className="add-btn" onClick = { () => this.props.dispatch(addtodo(this.state.todo))}>submit</button>
               {
                   this.props.array.map(todo => <p onClick={()=>this.props.dispatch(remove(todo.id))} id={todo.id}>{todo.value}</p>)
               }
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {array: state.todoarray}
}
export default connect(mapStateToProps)(Todo);