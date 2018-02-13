import React from 'react'
import { shallow } from 'enzyme'

import Page from './Page'

describe('<Page />', () => {
  it('renders well', () => {
    const wrapper = shallow(<Page>
      <p>Hi!</p>
    </Page>)
    expect(wrapper).toMatchSnapshot()
  })
})
