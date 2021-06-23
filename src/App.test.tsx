import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import { ShallowWrapper, shallow } from 'enzyme';
describe("App rendering", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it("it should rendered without errors", () => {
    expect(wrapper).toHaveLength(1);
  })
})