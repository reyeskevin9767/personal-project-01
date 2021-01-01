import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Starting Up', () => {
  // Test if app runs
  it('renders without crashing', () => {
    shallow(<App />);
  });

  // Test if title is correctly showing
  it('renders app title', () => {
    const wrapper = shallow(<App />);
    const welcome = <h1>Found Out the Stats</h1>;
    expect(wrapper.contains(welcome)).toEqual(true);
  });
});
