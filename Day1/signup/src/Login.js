import React, {Component} from 'react';
class Login extends Component {
	render(){
		return(
			<div className ="log_in">
				<h1>login to your account </h1>
				<form className="login">
					<input type ="text" Placeholder ="Phone Number or E-mail" />
					<input type ="text" Placeholder ="Password" />
					<input className="check" type ="checkbox" /><span> stay login</span>
					<input type="submit" value="Login" class="btn" />
					<a href = "#" className ="link">Forget Password</a>
				</form>
			</div>
		)	
	}
}
export default Login;