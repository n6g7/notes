import React from 'react'
import App from '../../src/components/App.jsx'
import renderer from 'react-test-renderer'

describe('App', () => {
  it('renders a well formed component', () => {
    const component = renderer.create(<App />)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
