import { shallow, ShallowWrapper } from 'enzyme'
// @ts-nocheck
import React from 'react'
import Serivce from './Service'
describe('Service rendering', () => {
  let iconProp: string = ''
  let titleProp: string = ''
  let descriptionProp: string = ''
  let wrapper: ShallowWrapper
  beforeEach(() => {
    wrapper = shallow(
      <Serivce
        icon={iconProp}
        title={titleProp}
        description={descriptionProp}
      />,
    )
  })
  it('It should rendred without issues', () => {
    expect(wrapper).toHaveLength(1)
  })
})
