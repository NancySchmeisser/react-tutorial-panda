import React from 'react';
import ReactDOM from 'react-dom';
import DeciderDice from './DeciderDice';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DeciderDice />, div);
  ReactDOM.unmountComponentAtNode(div);
});