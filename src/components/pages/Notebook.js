import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import notebooks from '@notebooks'
import runMathjax from '@services/mathjax'
import { Page } from '@templates'

const NotebookPage = styled(Page)`
  .code_cell {
    .input, .output {
      position: relative;

      .prompt {
        font-size: 0.9em;
        margin-right: 5px;
        opacity: 0.6;
        position: absolute;
        right: 100%;
        top: 0.5rem;

        @media (max-width: 60rem) {
          position: static;
        }
      }

      pre, .output_png {
        border: 1px solid #cccccc;
        overflow: auto;
        padding: 0.5rem;
      }
    }

    @media (min-width: 60rem) {
      .input + .output_wrapper .output {
        pre, .output_png {
          border-top: none;
          margin-top: -12px;
        }
      }
    }

    .output_png {
      text-align: center;
    }
  }

  blockquote {
    background: ${p => p.theme.colours.grey};
    border-left: 0.3rem solid #ccc;
    padding: 0.5rem;
    padding-left: 2rem;
    position: relative;

    &:before {
      color: #ccc;
      content: "\\201C";
      font-family: Georgia, serif;
      font-size: 4rem;
      position: absolute;
      left: 0.2rem;
      top: -0.2rem;
    }

    p:first-child {
      margin-top: 0;
    }
    p:last-child {
      margin-bottom: 0;
    }
  }

  img {
    max-width: 100%;
  }
`

class Notebook extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired
  }

  state = {
    loading: true,
    html: null
  }

  update () {
    this.setState({ loading: true })

    notebooks[this.props.match.params.notebook]()
      .then(({ default: html }) => this.setState({
        loading: false,
        html
      }))
      .then(() => runMathjax())
  }

  componentDidMount () {
    this.update()
  }

  componentDidUpdate (prevProps) {
    if (prevProps.match.params.notebook !== this.props.match.params.notebook) {
      this.update()
    }
  }

  render () {
    const { html, loading } = this.state

    return <NotebookPage>
      { loading
        ? <p>Loading...</p>
        : <div dangerouslySetInnerHTML={{ __html: html }} />
      }
    </NotebookPage>
  }
}

export default Notebook
