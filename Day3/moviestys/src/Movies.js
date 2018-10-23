import React, { Component } from 'react';
class Movies extends Component {
 render(){
 	return(
 		<div class ="main">
 		<img src={this.props.src}/>
 		<h4 className="movies-title">{this.props.name}</h4>
 		</div>
 		)
 }
}

export default Movies;