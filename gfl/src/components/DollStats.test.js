import React from 'react';
import { mount } from 'enzyme';
import renderer from "react-test-renderer";
import DollStats from './DollStats';

//* Testing the DollStats Component
describe('testing DollStats component', () => {
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
    const component = renderer.create(<DollStats dollStats={dollStats} dummyLink={5} />);
    expect(component.toJSON()).toMatchSnapshot();
  });





});
