import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import QuestionForm from './components/question';

import Adapter from 'enzyme-adapter-react-16'
import { configure, mount } from 'enzyme'

configure({adapter: new Adapter()})

describe('Test UpdateUser Component', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('render antd form', () => {
    expect(mount(<QuestionForm />).find('form').exists()).toBe(true);
  });

  it('find input tag', () => {
    expect(mount(<QuestionForm />).find('input').length).toBe(1);
  });

  it('find button tag', () => {
    expect(mount(<QuestionForm />).find('button').length).toBe(1);
  });

});