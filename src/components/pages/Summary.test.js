import React from 'react'
import { shallow } from 'enzyme'

import Summary from './Summary'

describe('<Summary />', () => {
  it('renders well', () => {
    const wrapper = shallow(<Summary />)
    expect(wrapper).toMatchSnapshot()
  })
})
