import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchBar from './Searchbar';

describe('SearchBar Component', () => {

  let wrapper
  beforeEach(() => {
    const allDollNames = ['G36', 'Alma'];
    wrapper = shallow(<SearchBar allDollsNames={allDollNames} />);
  });

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

});

// // Test if inputs appear in component
// it('renders app title', () => {
//   const wrapper = mount(<SearchBar allDollsNames={allDollNames} />);
// });
