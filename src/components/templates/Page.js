import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Header } from '@organisms'

const Main = styled.main`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
`

const Article = styled.article`
  width: 50rem;

  @media (max-width: 60rem) {
    padding: 0 1rem;
    width: 100%;
  }
`

class Page extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render () {
    return <Main {...this.props}>
      <Header />
      <Article>
        {this.props.children}
      </Article>
    </Main>
  }
}

export default Page
