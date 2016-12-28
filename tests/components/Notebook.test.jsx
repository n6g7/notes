import React from 'react';
import Notebook from '../../src/components/Notebook.jsx';
import renderer from 'react-test-renderer';

describe('Notebook', () => {
  it('renders a well formed component', () => {
    const component = renderer.create(<Notebook
      routeParams={{
        notebook: ''
      }}
    />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
