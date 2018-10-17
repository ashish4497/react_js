import React, {Component} from 'react';
class Login extends Component {
	render(){
		return(
			<div className ="log_in">
				<h1>login to your account </h1>
				<form class  ="login">
					<input type ="text" Placeholder ="Phone Number or E-mail"></input>
					<input type ="text" Placeholder ="Password"></input>
					<input type="submit" value="Login" class="btn"></input>
					<a href = "#" class ="link">Forget Password</a>
				</form>
			</div>
		)
	}
}
export default Login;