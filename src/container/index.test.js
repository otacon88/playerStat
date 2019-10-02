import React from 'react';
import { mount } from 'enzyme';
import { get } from 'lodash';
import Main from './index';
import playersFromJson from '../data/data.json';
import Player from '../component/';


it('Should content player component', () => {
  const wrapper = mount(<Main />); 
  const players = get(playersFromJson, 'players');
  const playerComponent = (<Player players={players}/>);

  expect(wrapper.contains(playerComponent)).toEqual(true);
});