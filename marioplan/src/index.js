import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import{createStore} from 'reducer'
import rootReducer from './store/reducer/rootReducer';
import {Provider} from 'react-redux'


const Store =creaateStore(rootReducer);

ReactDOM.render(<Provider store={Store}>
    <App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
