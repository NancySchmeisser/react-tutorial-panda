import React from 'react';
import ReactDOM from 'react-dom';
import DeciderDice from './DeciderDice';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
jest.useFakeTimers()

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DeciderDice onBackClick = { () => {} }/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('makes a decision', ()=>{

  const deciderDice = mount(<DeciderDice onBackClick = { () => {} } />);
  // At start we have an animated gif
  expect(deciderDice.find(".ImageDice").prop("src")).toBe("animated.gif");

  // After 999ms seconds we still have no decision
  jest.advanceTimersByTime(999);
  deciderDice.update()
  expect(deciderDice.find(".ImageDice").prop("src")).toBe("animated.gif");

  // After 1000ms seconds we have a decision
  jest.advanceTimersByTime(1);
  deciderDice.update()
  expect(deciderDice.find(".ImageDice").prop("src")).not.toBe("animated.gif");
  
})