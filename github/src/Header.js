import React, { Component } from 'react';
import User from './User'

class Header extends Component {
	constructor(){
		super()
		this.state={
			info:'',
			data:[]
		}
	}
	handelEvent=(e)=>{
		console.log(e)
		this.setState({info:e.target.value})
	}

	getData = (e) => {
		e.preventDefault();
		var user =this.state.info;
		var link = `https://api.github.com/users/${user}`;
		fetch(link)
		.then(res=>res.json())
		.then(d => this.setState({data: d}))
		console.log(this.state.data)
	}
  render() {
    return (
      <div className="header">
     	<header className="main-head">
     		<div className="left-side">
     		<i class="fab fa-github"></i>
     		<h1>Git Hub UserSearch</h1>
     		</div>
     		<form onSubmit={this.getData}>
     			<input type="text" className="search-input" placeholder="Enter User Name" onChange={this.handelEvent} />
     		</form>
     		
     	</header>
     		{
     			this.state.data.map(data =>  <User name={data.name} />)
     		}
      </div>
    );
  }
}
export default Header;