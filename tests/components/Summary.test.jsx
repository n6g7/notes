import React from 'react'
import Summary from '../../src/components/Summary.jsx'
import renderer from 'react-test-renderer'

describe('Summary', () => {
  it('renders a well formed component', () => {
    const component = renderer.create(<Summary />)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
