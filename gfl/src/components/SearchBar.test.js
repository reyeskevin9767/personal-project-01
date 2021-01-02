import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchBar from './Searchbar';

// Test Searchbar
describe('SearchBar Component', () => {
  // Setting up Searchbar with fake props
  let wrapper;
  beforeEach(() => {
    const allDollNames = ['Alma', 'G36'];
    wrapper = mount(<SearchBar allDollsNames={allDollNames} />);
  });

  it('render the entire searchbar', () => {
    const nameSection = wrapper.find('#dName')
    const levelSection = wrapper.find('#dFriend')
    expect(nameSection.props().value).toBe('M9')
    expect(levelSection.props().value).toBe('5')
  })



  // Check to see if each option printed out the max options per input
  it('select level', () => {
    expect(wrapper.find('#dName option').length).toBe(2);
    expect(wrapper.find('#dLevel option').length).toBe(125);
    expect(wrapper.find('#dFriend option').length).toBe(150);
    expect(wrapper.find('#dLink option').length).toBe(5);
  });
});
