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

const Footer = styled.footer`
  font-size: 0.9rem;
  margin: 1rem 0;
  opacity: 0.3;

  a {
    color: inherit;
  }
`

class Page extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  renderFooter () {
    const building = !!process.env.NOW_GITHUB_DEPLOYMENT

    const commit = building ? process.env.NOW_GITHUB_COMMIT_SHA.substring(0, 6) : 'dev'
    const url = building
      ? `https://github.com/${process.env.NOW_GITHUB_ORG}/${process.env.NOW_GITHUB_REPO}/tree/${process.env.NOW_GITHUB_COMMIT_SHA}`
      : 'http://localhost:8080'

    return <Footer>
      <a href={url}>{commit}</a>
    </Footer>
  }

  render () {
    return <Main {...this.props}>
      <Header />
      <Article>
        {this.props.children}
      </Article>
      {this.renderFooter()}
    </Main>
  }
}

export default Page
