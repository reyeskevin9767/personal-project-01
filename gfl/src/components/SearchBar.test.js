import React from 'react';
import { mount } from 'enzyme';
import SearchBar from './Searchbar';

// Test Searchbar
describe('SearchBar Component', () => {
  // Setting up Searchbar with fake props
  let wrapper;
  beforeEach(() => {
    const allDollNames = ['Alma', 'G36'];
    wrapper = mount(<SearchBar allDollsNames={allDollNames} />);
  });

  it('render the default options', () => {
    expect(wrapper.find('#dName').props().value).toBe('M9')
    expect(wrapper.find('#dLevel').props().value).toBe('50')
    expect(wrapper.find('#dFriend').props().value).toBe('50')
    expect(wrapper.find('#dLink').props().value).toBe('5')
  })
  // Check to see if each option printed out the max options per input
  it('check to see if the all options were rendered', () => {
    expect(wrapper.find('#dName option').length).toBe(2);
    expect(wrapper.find('#dLevel option').length).toBe(125);
    expect(wrapper.find('#dFriend option').length).toBe(150);
    expect(wrapper.find('#dLink option').length).toBe(5);
  });


  it('select the two options for T-Doll Names', async () => {
    wrapper.find('#dName').simulate('keyDown', { key: 'ArrowDown', keyCode: 40 });
    wrapper.find('#dName').simulate('change', {  target: { name: 'dollName', value: 'Alma' }});
    expect(wrapper.find('#dName').props().value).toBe('Alma')
    wrapper.find('#dName').simulate('keyDown', { key: 'ArrowDown', keyCode: 40 });
    wrapper.find('#dName').simulate('change', {  target: { name: 'dollName', value: 'G36' }});
    expect(wrapper.find('#dName').props().value).toBe('G36')
  })


  it('select first three options for T-Doll Levels', async () => {
    wrapper.find('#dLevel').simulate('keyDown', { key: 'ArrowDown', keyCode: 40 });
    wrapper.find('#dLevel').simulate('change', {  target: { name: 'dollLevel', value: '1' }});
    expect(wrapper.find('#dLevel').props().value).toBe('1')

    wrapper.find('#dLevel').simulate('keyDown', { key: 'ArrowDown', keyCode: 40 });
    wrapper.find('#dLevel').simulate('change', {  target: { name: 'dollLevel', value: '2' }});
    expect(wrapper.find('#dLevel').props().value).toBe('2')
    
    wrapper.find('#dLevel').simulate('keyDown', { key: 'ArrowDown', keyCode: 40 });
    wrapper.find('#dLevel').simulate('change', {  target: { name: 'dollLevel', value: '3' }});
    expect(wrapper.find('#dLevel').props().value).toBe('3')
  })
  



  
});
