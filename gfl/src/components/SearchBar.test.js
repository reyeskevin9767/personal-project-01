import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './Searchbar';

// Test Searchbar
describe('SearchBar Component', () => {
  // Setting up Searchbar with fake props
  let wrapper;
  beforeEach(() => {
    const allDollNames = ['G36', 'Alma'];
    wrapper = shallow(<SearchBar allDollsNames={allDollNames} />);
  });




});
