// @ts-nocheck
import React from 'react'
import { ShallowWrapper, shallow } from 'enzyme'
import { Projects } from '../index'
describe('Testing Projects component', () => {
  let container = null
  beforeAll(() => {
    container = shallow(<Projects />)
  })
  it('it should render a wrapper div', () => {
    expect(container.length).toEqual(1)
  })
})
