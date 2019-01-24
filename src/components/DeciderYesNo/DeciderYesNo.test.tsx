import React from 'react';
import ReactDOM from 'react-dom';
import DeciderYesNo from './DeciderYesNo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DeciderYesNo />, div);
  ReactDOM.unmountComponentAtNode(div);
});