import React from 'react';
import ReactDOM from 'react-dom';
import DeciderYesNo from './DeciderYesNo';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DeciderYesNo onBackClick={ () => {}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('has a back button', () => {
  const deciderYesNo = mount(<DeciderYesNo onBackClick = { () => {} } />)
  const backButton = deciderYesNo.find("button");
  expect(backButton.text()).toBe("Zurück")
})

it('calls the onBackClick when the backbutton is clicked', ()=>{
  const mockCallBack = jest.fn();
  const deciderYesNo = mount(<DeciderYesNo onBackClick = { mockCallBack } />)
  const backButton = deciderYesNo.find("button");
  backButton.simulate('click');

  expect(mockCallBack.mock.calls.length).toEqual(1);
})

it('makes a decision', ()=>{
  const deciderYesNo = mount(<DeciderYesNo onBackClick={ () => {}} />)
  const Decision = deciderYesNo.find(".Decision");

  expect(Decision.text()).not.toBe("")
 
})