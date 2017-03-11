import React, { PureComponent } from 'react';

import runMathjax from '../service/mathjax';
import notebooks from '../../notebooks';

class Notebook extends PureComponent
{
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      html: null,
    };
  }

  update() {
    runMathjax();

    const notebook = notebooks[this.props.routeParams.notebook];

    this.setState({ loading: true });
    fetch(`/${notebook}`)
    .then(res => res.text())
    .then(html => this.setState({
      loading: false,
      html
    }));
  }

  componentDidMount() {
    this.update();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.routeParams.notebook !== this.props.routeParams.notebook) {
      this.update();
    }
  }

  render() {
    return this.state.loading
      ? <p>Loading...</p>
      : <div dangerouslySetInnerHTML={{__html: this.state.html}} />;
  }
}

Notebook.PropTypes = {
  routeParams: React.PropTypes.object.isRequired,
};

export default Notebook;
