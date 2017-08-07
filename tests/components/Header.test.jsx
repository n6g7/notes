import React from 'react'
import Header from '../../src/components/Header.jsx'
import renderer from 'react-test-renderer'

describe('Header', () => {
  it('renders a well formed component', () => {
    const component = renderer.create(<Header />)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
