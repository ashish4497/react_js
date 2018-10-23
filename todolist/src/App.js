import React, { Component } from 'react';
import Todo from './Todo';

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
    var currentitem = document.querySelector(".text-box").value;
    console.log(currentitem)
    var newArray = this.state.items.concat(currentitem);
    this.setState ({
    items: newArray
    }
    )
    console.log(this.state.items)
  }

  render() {
    return (
      <div className="App">
        <Todo additems={this.additems} />
        <this.state.items.map(litem=><list name={litem.newArray}>)/>
      </div>
    );
  }
}

export default App;