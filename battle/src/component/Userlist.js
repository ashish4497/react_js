import React, {Fragment } from 'react'

const Userlist = (props) => {
	let value  = props.value;
	// console.log(value)
	let user = value ? value :" Loading...";
	// console.log(user)

	return (
		<Fragment>
			<div className="user_detail">
				<img src={user.avatar_url} className="user_icon"></img>
				<p>Name : {user.name}</p>
				<button className="compair" onClick={()=>props.handlesubmit(props.id)}>copmare</button>
			</div>
		</Fragment >
	)
}
export default Userlist;