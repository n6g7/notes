import React, { PureComponent } from 'react';

import notebooks from '../../notebooks';

class Notebook extends PureComponent
{
  render() {
    const notebook = notebooks[this.props.routeParams.notebook];

    return <div dangerouslySetInnerHTML={{__html: notebook}} />;
  }
}

export default Notebook;
