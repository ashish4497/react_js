import React, { Component } from 'react';
import User from './User';
import Follower from './Follower';
import Repo from './Repositories';

class Header extends Component {
	constructor(){
		super()
		this.state = {
			info:'',
			data:{},
			userFollower : [],
			userRepos : []
		}
	}

	handelEvent=(e)=> {
		console.log(e)
		this.setState({info:e.target.value})
	}


	getData = (e) => {
		e.preventDefault();
		var user =this.state.info;
		var link = `https://api.github.com/users/${user}`;
		fetch(link)
		.then(res=>res.json())
		.then(d => this.setState({
			data: d
		}))
		fetch(`https://api.github.com/users/${user}/followers`)
		.then(res=>res.json())
		.then(d => this.setState({
			userFollower: d
		}))
		fetch(`https://api.github.com/users/${user}/repos`)
		.then(res=>res.json())
		.then(d => this.setState({
			userRepos: d
		}))


	}
  render() {
  	var { data } = this.state;
  	console.log(data);
  	var item;
  	if(Object.keys(this.state.data).length === 0) {
  		item = <div></div>	
  	} else {
  		item = <div>
  							<User data={this.state.data}/>
  							<div className="display-item">
  								<Repo data ={this.state.userRepos}/>
  								<Follower data={this.state.userFollower}/>
  							</div>
  					</div>
  	 }
  	
  	
    return (
      <div className='header'>
      	<header className='main-head'>
      		<div className='left-side'>
      			<i className="fab fa-github"></i>
	     			<h1>Git Hub UserSearch</h1>
      		</div>
      		<form onSubmit={this.getData}>
      			<input type='text' className='search-input' placeholder='Enter User Name' onChange={this.handelEvent} />
      		</form>
      	</header>
      	{
      		item
      	}

      </div>
    );
  }
}
export default Header;