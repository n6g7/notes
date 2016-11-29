import React, { PureComponent } from 'react';

import runMathjax from '../service/mathjax';
import notebooks from '../../notebooks';

class Notebook extends PureComponent
{
  componentDidMount() {
    runMathjax();
  }

  componentDidUpdate() {
    runMathjax();
  }

  render() {
    const notebook = notebooks[this.props.routeParams.notebook];

    return <div dangerouslySetInnerHTML={{__html: notebook}} />;
  }
}

export default Notebook;
