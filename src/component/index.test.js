import React from 'react';
import { mount } from 'enzyme';
import  { AppBar, Toolbar, Card } from '@material-ui/core/';
import { get } from 'lodash';
import playersFromJson from '../data/data.json';
import Main from './index';

let wrapper;
const players = get(playersFromJson, 'players');

beforeEach(() => {
  wrapper = mount(<Main players={players} />);
});

it('Should find one Appbar', () => {
  expect(wrapper.find(AppBar).length).toEqual(1);
});

it('Should find one Toolbar', () => {
  expect(wrapper.find(Toolbar).length).toEqual(1);
});

it('Should find two Card', () => {
  expect(wrapper.find(Card).length).toEqual(2);
});
