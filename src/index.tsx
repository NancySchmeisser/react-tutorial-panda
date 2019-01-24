import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import DeciderYesNo from './components/DeciderYesNo/DeciderYesNo';
import DeciderDice from './components/DeciderDice/DeciderDice';

ReactDOM.render(<div><DeciderYesNo /><DeciderDice /><DeciderDice /></div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
