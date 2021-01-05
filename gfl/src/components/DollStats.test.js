import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import DollStats from './DollStats';

//* Testing the DollStats Component
describe.skip('testing DollStats component', () => {
  it('test if screenshot matches', () => {
    const dollStats = {
      armorPiercing: 15,
      criticalPercent: 20,
      dodge: 66,
      hit: 56,
      hp: 380,
      pow: 29,
      rate: 61,
      speed: 15,
    };
    const component = renderer.create(
      <DollStats dollStats={dollStats} dummyLink={5} />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  // Test to see props were deconstructed properly
  it('test props', () => {
    const dollStats = {
      armorPiercing: 15,
      criticalPercent: 20,
      dodge: 66,
      hit: 56,
      hp: 380,
      pow: 29,
      rate: 61,
      speed: 15,
    };
    const wrapper = mount(<DollStats dollStats={dollStats} dummyLink={5} />);
    const health = <p>Health - 380</p>;
    const speed = <p>Movement Speed - 15</p>;
    const rate = <p>Rate of Fire - 61</p>;
    expect(wrapper.contains(health)).toEqual(true);
    expect(wrapper.contains(speed)).toEqual(true);
    expect(wrapper.contains(rate)).toEqual(true);
  });
});
