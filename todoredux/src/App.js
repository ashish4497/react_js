import React, { Component } from 'react';
import './App.scss';
import { addtodo,deletetodo  } from './action';
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
  handdledelete = (e) => {
    this.props.deletetodo(e.target.id)
  }

  render() {
    const { listTodo } = this.props;
    return (
      <div className="App">      
        <input type="text" placeholder="Enter value" onChange={this.handleChange} value={this.state.value}/>
        <button onClick={this.hadelSubmit}>Add</button>
          <div className="display_list">
          {
           listTodo && listTodo.map((value, index)=> {
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
  addtodo,
  deletetodo 
}
const mapStateToProps = (state)=> {
 return {
  listTodo: state.items
 }
}

export default connect( mapStateToProps,mapDispatchToProps ) (App);
