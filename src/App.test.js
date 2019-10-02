import React from 'react';
import App from './App';
import Main from './container/';

import { mount } from 'enzyme';

it('Should content Main component', () => {
  const wrapper = mount(<App />);
  const welcome = (<Main />);
  expect(wrapper.contains(welcome)).toEqual(true);
});
