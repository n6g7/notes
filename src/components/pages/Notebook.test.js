import React from 'react'
import { shallow } from 'enzyme'

import Notebook from './Notebook'

describe('<Notebook />', () => {
  it('renders well', () => {
    const match = {
      params: {
        notebook: 123
      }
    }
    const wrapper = shallow(<Notebook match={match} />)
    expect(wrapper).toMatchSnapshot()
  })
})
