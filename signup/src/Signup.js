import React, { Component } from 'react';
class Signup extends Component {
	render(){
		return (
			<div className ="sign_up">
			<h1>sign up</h1>
			<form class="fb_signup">
				<input type = "text" Placeholder = "Enter Phone number or Email "></input>
				<input type ="text" Placeholder = "Full Name"></input>
				<input type ="text" Placeholder = "User Name"></input>
				<input type ="text" Placeholder = "Password"></input>
				 <input type="submit" value="Signup" class="btn"></input>
				 <a href = "#">login with facebook</a>
			</form>
			</div>
			)
	}
}
export default Signup;