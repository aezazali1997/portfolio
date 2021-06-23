import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme';
import Cursor from './Cursor';

describe("Cursor", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<Cursor />);
  });
  it("It should rendered correctly", () => {
    expect(wrapper).toHaveLength(1);
  })

})
