import React, { Component } from 'react';
import {Todo, List } from './Todo';

class App extends Component {
  constructor(){
    super()
    this.state = {
    items:[]
    }
    console.log(this.state.items)
  } 

  additems = (e) => {
    e.preventDefault();
    var textBox = document.querySelector(".text-box");
    var currentitem = textBox.value;
    // console.log(currentitem)
    var newArray = this.state.items.concat(currentitem);
    this.setState ({
    items: newArray
    }
    )
   
    console.log(this.state.items);
    textBox.value = " ";
  }
  toggle = (e) =>{
    let id = e.target.dataset.id
    console.log(id)
  }

  render() {
    return (
      <div className="App">
        <Todo additems={this.additems} />
        {
        this.state.items.map((litem,i)=><List itemList={ litem } toggle={this.toggle} dataId={i} />)
        }
      </div>
    );
  }
}
export default App;