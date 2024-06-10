import React from 'react'
import { ShallowWrapper, shallow } from 'enzyme'
import Loading from './Loading'
describe('Loading Component', () => {
  let wrapper: ShallowWrapper
  beforeEach(() => {
    wrapper = shallow(<Loading />)
  })
  it('It should rendered without issues', () => {
    expect(wrapper).toHaveLength(1)
  })
})
