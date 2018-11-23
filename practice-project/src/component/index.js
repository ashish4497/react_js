import React, {Component} from 'react';
import { todolist } from '../action/action';
import {connect} from 'react-redux';

class Todo extends Component {
    constructor(props){ 
    super(props)
    this.state = {
        todo : ''
    }
    }
    handlechange =(e) => {
        console.log(e)
        this.setState({todo:e.target.value})
    }

     handleSubmit = (e)=> {
         e.preventDefault()
        this.props.addTodo(this.state.todo)
     }
    render() {
        console.log(this.props.tododata)
        return(
            <div className="add-items">
                <input type="text" placeholder="enter value" onChange ={this.handlechange}/>
                <button onClick={this.handleSubmit}>submit</button>
                {
                 this.props.tododata.map(todoiten=>(<p>{todoiten}</p>))
                }
            </div>
        )
    }
}
    const  mapDispatchToProps = (dispatch) => {
        return{
        addTodo: (d) => dispatch(todolist(d))

        }
    }


    const mapStateToProps =(state)=>{
        return {
            tododata: state.todo
        }
    }
    export default connect( mapStateToProps,mapDispatchToProps)(Todo);