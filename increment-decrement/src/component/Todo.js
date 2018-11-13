import React, {Component} from 'react';
import {connect} from 'react-redux'

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
                <input type="text" className="input-btn" placeholder="enter item" onChange={this.handleChange}/>
                <button className="add-btn">submit</button>
            </div>
    )
    }
}
function mapStateToProps(state) {
    return {array: state.todoArray}
}

export default connect(mapStateToProps)(Todo);