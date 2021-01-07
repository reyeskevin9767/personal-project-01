import React from 'react';
import { mount } from 'enzyme';
import SelectStats from './SelectStats';
import { dolls } from 'girlsfrontline-core';
import renderer from 'react-test-renderer';

//* Testing the the search bar
describe('SelectStats Component', () => {
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
      <SelectStats allDollsNames={allDollNames} onFormSubmit={onFormSubmit} />
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
      <SelectStats allDollsNames={allDollNames} onFormSubmit={onFormSubmit} />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  // Check the default values for each select input
  it('render the default options', () => {
    expect(wrapper.find('#selectName').props().value).toBe('M9');
    expect(wrapper.find('#selectLevel').props().value).toBe(100);
    expect(wrapper.find('#selectFriendship').props().value).toBe(50);
    expect(wrapper.find('#selectLink').props().value).toBe(5);
  });

  // Check to see if each select printed out the max options
  it('check to see if the all options were rendered', () => {
    expect(wrapper.find('#selectName option').length).toBe(2);
    expect(wrapper.find('#selectLevel option').length).toBe(125);
    expect(wrapper.find('#selectFriendship option').length).toBe(200);
    expect(wrapper.find('#selectLink option').length).toBe(5);
  });

  // Check to see if select input for T-Doll names changes the value
  it('select the two options for T-Doll Names', async () => {
    wrapper
      .find('#selectName')
      .simulate('keyDown', { key: 'ArrowDown', keyCode: 40 });
    wrapper
      .find('#selectName')
      .simulate('change', { target: { name: 'dollName', value: 'Alma' } });
    expect(wrapper.find('#selectName').props().value).toBe('Alma');
    wrapper
      .find('#selectName')
      .simulate('keyDown', { key: 'ArrowDown', keyCode: 40 });
    wrapper
      .find('#selectName')
      .simulate('change', { target: { name: 'dollName', value: 'G36' } });
    expect(wrapper.find('#selectName').props().value).toBe('G36');
  });

  // Check to see if select input for T-Doll levels changes the value
  it('select first three options for T-Doll Levels', async () => {
    wrapper
      .find('#selectLevel')
      .simulate('keyDown', { key: 'ArrowDown', keyCode: 40 });
    wrapper
      .find('#selectLevel')
      .simulate('change', { target: { name: 'dollLevel', value: '1' } });
    expect(wrapper.find('#selectLevel').props().value).toBe('1');

    wrapper
      .find('#selectLevel')
      .simulate('keyDown', { key: 'ArrowDown', keyCode: 40 });
    wrapper
      .find('#selectLevel')
      .simulate('change', { target: { name: 'dollLevel', value: '2' } });
    expect(wrapper.find('#selectLevel').props().value).toBe('2');

    wrapper
      .find('#selectLevel')
      .simulate('keyDown', { key: 'ArrowDown', keyCode: 40 });
    wrapper
      .find('#selectLevel')
      .simulate('change', { target: { name: 'dollLevel', value: '3' } });
    expect(wrapper.find('#selectLevel').props().value).toBe('3');
  });

  // Check to see if select input for T-Doll Friendship changes the value
  it('select two different options for T-Doll Friendship', async () => {
    wrapper
      .find('#selectFriendship')
      .simulate('keyDown', { key: 'ArrowDown', keyCode: 40 });
    wrapper
      .find('#selectFriendship')
      .simulate('keyDown', { key: 'ArrowDown', keyCode: 40 });
    wrapper
      .find('#selectFriendship')
      .simulate('keyDown', { key: 'ArrowDown', keyCode: 40 });
    wrapper
      .find('#selectFriendship')
      .simulate('keyDown', { key: 'ArrowDown', keyCode: 40 });
    wrapper
      .find('#selectFriendship')
      .simulate('change', { target: { name: 'dollFriendship', value: '4' } });
    expect(wrapper.find('#selectFriendship').props().value).toBe('4');
    wrapper
      .find('#selectFriendship')
      .simulate('keyDown', { key: 'ArrowDown', keyCode: 40 });
    wrapper
      .find('#selectFriendship')
      .simulate('keyDown', { key: 'ArrowDown', keyCode: 40 });
    wrapper
      .find('#selectFriendship')
      .simulate('keyDown', { key: 'ArrowDown', keyCode: 40 });
    wrapper
      .find('#selectFriendship')
      .simulate('change', { target: { name: 'dollFriendship', value: '7' } });
    expect(wrapper.find('#selectFriendship').props().value).toBe('7');
  });

  // Check to see if select input for T-Doll Dummy Links changes the value
  it('select first and last option of T-Doll Dummy Links', async () => {
    wrapper
      .find('#selectLink')
      .simulate('keyDown', { key: 'ArrowDown', keyCode: 40 });
    wrapper
      .find('#selectLink')
      .simulate('change', { target: { name: 'dollDummyLink', value: '1' } });
    expect(wrapper.find('#selectLink').props().value).toBe('1');

    wrapper
      .find('#selectLink')
      .simulate('keyDown', { key: 'ArrowDown', keyCode: 40 });
    wrapper
      .find('#selectLink')
      .simulate('keyDown', { key: 'ArrowDown', keyCode: 40 });
    wrapper
      .find('#selectLink')
      .simulate('keyDown', { key: 'ArrowDown', keyCode: 40 });
    wrapper
      .find('#selectLink')
      .simulate('keyDown', { key: 'ArrowDown', keyCode: 40 });
    wrapper
      .find('#selectLink')
      .simulate('change', { target: { name: 'dollDummyLink', value: '5' } });
    expect(wrapper.find('#selectLink').props().value).toBe('5');
  });
});
