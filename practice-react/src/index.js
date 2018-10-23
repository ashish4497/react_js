import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// function Welcome() {
//     return(
//         <h1>Hello Wolrd</h1>
//     )
// }


// const user = {
//     firstname : "Abshieak",
//     lastname :'sharma'
// };
// const element =( 
//     <h1> gooodmorning{concanitename(user)}</h1>
// )

// function concanitename(user) {
// return user.firstname +''+ user.lastname;
// }

// const element = (
//   <div className="greeting">
//     Hello, world!
//   </div>
// );
// function date(){
// 	const element =( 
// 		<div>
// 			<h1>good morning</h1>
// 		  <h2>today { new Date().toLocaleTimeString()}.</h2>
// 		</div>
// 	)
// }


//  function comment (props){
//   return (
//     <div className="comment">
//     <div className="userInfo">
//       <img className="avatar"
//       src={props.author.avatarurl}
//       alt={props.author.name}/>
//     </div>
//     <div className="userInfo-name">
//       <Avatar user={props.author.name}/>
//     </div>
//     <div className="comment-text">
//       {props.text}
//     </div>
//     <div className="comment-date">
//       {formatdate(props.date)}
//     </div>
//     </div>
//   );
// }


// ReactDOM.render(element, 
// document.getElementById('root'))
// element,
// setInterval(date,1000)

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }
 handleClick() {
    this.setState(state =>({
      isToggleOn: !state.isToggleOn
    }));
  }
render() {
    return(
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON':'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle/>,
document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
