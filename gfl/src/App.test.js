import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

// Test App
describe('App Starting Up', () => {
  // Test if app runs
  it('renders without crashing', () => {
    shallow(<App />);
  });

  // Test if app matches snapshot
  it('should render correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });


  // Test if title is correctly showing
  it('renders app title', () => {
    const wrapper = shallow(<App />);
    const welcome = <h1>Found Out the Stats</h1>;
    expect(wrapper.contains(welcome)).toEqual(true);
  });



});
