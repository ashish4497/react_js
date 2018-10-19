import React, { Component } from 'react';
class Signup extends Component {
	render(){
		return (
			<div className ="sign_up">
			<h1>sign up</h1>
			<form class="fb_signup">
				<input type = "text" Placeholder = "Enter Phone number or Email "/>
				<input type ="text" Placeholder = "Full Name"/>
				<input type ="text" Placeholder = "User Name"/>
				<input type ="text" Placeholder = "Password"/>
				<input type="submit" value="Signup" class="btn"/>
				<div className="linkfb"> <a href = "#" className ="link">login with facebook</a></div>
			</form>
			</div>
		)
	}
}
export default Signup;