import React from 'react';
import { mount } from 'enzyme';
import SearchBar from './Searchbar';
import { dolls } from 'girlsfrontline-core';
import renderer from 'react-test-renderer';

//* Testing the the search bar
describe('SearchBar Component', () => {
  // Setting up Searchbar with fake props
  let wrapper;
  beforeEach(() => {
    const allDollNames = ['Alma', 'G36'];

    const onFormSubmit = (name, level, favor, dummyLink) => {
      const doll = dolls.find(({ codename }) => codename === name);

      // Current T-Doll Stats
      doll.level = level;
      doll.favor = favor;
      doll.dummyLink = dummyLink;

      return doll;
    };

    wrapper = mount(
      <SearchBar allDollsNames={allDollNames} onFormSubmit={onFormSubmit} />
    );
  });

  // Testing props with snapshot
  it('basic snapshot', () => {
    const allDollNames = ['Alma', 'G36'];

    const onFormSubmit = (name, level, favor, dummyLink) => {
      const doll = dolls.find(({ codename }) => codename === name);

      // Current T-Doll Stats
      doll.level = level;
      doll.favor = favor;
      doll.dummyLink = dummyLink;

      return doll;
    };
    const component = renderer.create(
      <SearchBar allDollsNames={allDollNames} onFormSubmit={onFormSubmit} />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  // Check the default values for each select input
  it('render the default options', () => {
    expect(wrapper.find('#dName').props().value).toBe('M9');
    expect(wrapper.find('#dLevel').props().value).toBe(100);
    expect(wrapper.find('#dFriend').props().value).toBe(50);
    expect(wrapper.find('#dLink').props().value).toBe(5);
  });

  // Check to see if each select printed out the max options
  it('check to see if the all options were rendered', () => {
    expect(wrapper.find('#dName option').length).toBe(2);
    expect(wrapper.find('#dLevel option').length).toBe(125);
    expect(wrapper.find('#dFriend option').length).toBe(150);
    expect(wrapper.find('#dLink option').length).toBe(5);
  });

  // Check to see if select input for T-Doll names changes the value
  it('select the two options for T-Doll Names', async () => {
    wrapper
      .find('#dName')
      .simulate('keyDown', { key: 'ArrowDown', keyCode: 40 });
    wrapper
      .find('#dName')
      .simulate('change', { target: { name: 'dollName', value: 'Alma' } });
    expect(wrapper.find('#dName').props().value).toBe('Alma');
    wrapper
      .find('#dName')
      .simulate('keyDown', { key: 'ArrowDown', keyCode: 40 });
    wrapper
      .find('#dName')
      .simulate('change', { target: { name: 'dollName', value: 'G36' } });
    expect(wrapper.find('#dName').props().value).toBe('G36');
  });

  // Check to see if select input for T-Doll levels changes the value
  it('select first three options for T-Doll Levels', async () => {
    wrapper
      .find('#dLevel')
      .simulate('keyDown', { key: 'ArrowDown', keyCode: 40 });
    wrapper
      .find('#dLevel')
      .simulate('change', { target: { name: 'dollLevel', value: '1' } });
    expect(wrapper.find('#dLevel').props().value).toBe('1');

    wrapper
      .find('#dLevel')
      .simulate('keyDown', { key: 'ArrowDown', keyCode: 40 });
    wrapper
      .find('#dLevel')
      .simulate('change', { target: { name: 'dollLevel', value: '2' } });
    expect(wrapper.find('#dLevel').props().value).toBe('2');

    wrapper
      .find('#dLevel')
      .simulate('keyDown', { key: 'ArrowDown', keyCode: 40 });
    wrapper
      .find('#dLevel')
      .simulate('change', { target: { name: 'dollLevel', value: '3' } });
    expect(wrapper.find('#dLevel').props().value).toBe('3');
  });

  // Check to see if select input for T-Doll Friendship changes the value
  it('select two different options for T-Doll Friendship', async () => {
    wrapper
      .find('#dFriend')
      .simulate('keyDown', { key: 'ArrowDown', keyCode: 40 });
    wrapper
      .find('#dFriend')
      .simulate('keyDown', { key: 'ArrowDown', keyCode: 40 });
    wrapper
      .find('#dFriend')
      .simulate('keyDown', { key: 'ArrowDown', keyCode: 40 });
    wrapper
      .find('#dFriend')
      .simulate('keyDown', { key: 'ArrowDown', keyCode: 40 });
    wrapper
      .find('#dFriend')
      .simulate('change', { target: { name: 'dollFriend', value: '4' } });
    expect(wrapper.find('#dFriend').props().value).toBe('4');
    wrapper
      .find('#dFriend')
      .simulate('keyDown', { key: 'ArrowDown', keyCode: 40 });
    wrapper
      .find('#dFriend')
      .simulate('keyDown', { key: 'ArrowDown', keyCode: 40 });
    wrapper
      .find('#dFriend')
      .simulate('keyDown', { key: 'ArrowDown', keyCode: 40 });
    wrapper
      .find('#dFriend')
      .simulate('change', { target: { name: 'dollFriend', value: '7' } });
    expect(wrapper.find('#dFriend').props().value).toBe('7');
  });

  // Check to see if select input for T-Doll Dummy Links changes the value
  it('select first and last option of T-Doll Dummy Links', async () => {
    wrapper
      .find('#dLink')
      .simulate('keyDown', { key: 'ArrowDown', keyCode: 40 });
    wrapper
      .find('#dLink')
      .simulate('change', { target: { name: 'dollDummyLink', value: '1' } });
    expect(wrapper.find('#dLink').props().value).toBe('1');

    wrapper
      .find('#dLink')
      .simulate('keyDown', { key: 'ArrowDown', keyCode: 40 });
    wrapper
      .find('#dLink')
      .simulate('keyDown', { key: 'ArrowDown', keyCode: 40 });
    wrapper
      .find('#dLink')
      .simulate('keyDown', { key: 'ArrowDown', keyCode: 40 });
    wrapper
      .find('#dLink')
      .simulate('keyDown', { key: 'ArrowDown', keyCode: 40 });
    wrapper
      .find('#dLink')
      .simulate('change', { target: { name: 'dollDummyLink', value: '5' } });
    expect(wrapper.find('#dLink').props().value).toBe('5');
  });
});
