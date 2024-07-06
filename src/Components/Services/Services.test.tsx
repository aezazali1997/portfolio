// @ts-nocheck
import React from 'react'
import { ShallowWrapper, shallow } from 'enzyme'
import Services from './Services'
describe('Services rendering', () => {
  let wrapper: ShallowWrapper
  beforeEach(() => {
    wrapper = shallow(<Services />)
  })
  it('it should rendered without issues', () => {
    expect(wrapper).toHaveLength(1)
  })
})
