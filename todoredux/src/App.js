import React, { Component } from 'react';
import './App.css';
import { addtodo } from './action';
import {connect} from 'react-redux'



class App extends Component {
  constructor(){
    super()
    this.state = {
      value : ""
    }
  }

  handleChange = (e) => {
    this.setState({
      value:e.target.value,
    })
    
  }
  hadelSubmit = () => {
    this.props.addtodo(this.state.value);
    this.setState({
      value: "",
    })
  }
  handdledelete = (id) => {
    this.props.addtodo.splice(id,1)
  }

  render() {
    return (
      <div className="App">      
        <input type="text" placeholder="Enter value" onChange={this.handleChange} value={this.state.value}/>
        <button onClick={this.hadelSubmit}>Add</button>
          <div className="display_list">
          {
            this.props.listTodo.map((value, index)=> {
              return (
                <div className="item_display">
               <p>{value} 
                 <button id={index} onClick={this.handdledelete}>X</button>
               </p>         
              </div>
              )
            })
          }
          </div>      
      </div>
    );
  }
}
const mapDispatchToProps ={
  addtodo 
}
const mapStateToProps = (state)=> {
 return {
  listTodo: state.items
 }
}

export default connect( mapStateToProps,mapDispatchToProps ) (App);
