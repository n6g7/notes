import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import githubIcon from '@assets/github.svg'
import notebooks from '@notebooks'

const Container = styled.header`
  align-items: center;
  background: ${p => p.theme.colours.grey};
  border-bottom: 1px solid #D9DCDF;
  display: flex;
  flex-flow: row nowrap;
  height: 3rem;
  justify-content: space-between;
  padding: 0 2rem !important;
  text-transform: lowercase;
  width: 100%;

  @media (max-width: 45rem) {
    height: 6rem;
  }
`

const Nav = styled.nav`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;

  h1 {
    margin: 0 2rem 0 0;
    padding: 0;

    &::after {
      content: none;
    }

    a {
      background: none;
      color: inherit;
      border: none;
      text-decoration: none;
    }
  }

  ul {
    display: flex;
    flex-flow: column wrap;
    height: 3rem;
    justify-content: center;
    list-style-type: arabic-indic;
    margin: 0;
    padding: 0;

    li {
      margin-right: 1.5rem;
    }

    @media (max-width: 45rem) {
      height: 6rem;
    }
  }
`

const Aside = styled.aside`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;

  a {
    background: none;
    border: none;
    opacity: 0.2;

    &:hover {
      opacity: 1;
    }

    img {
      height: 1.5rem;
      vertical-align: middle;
    }
  }
`

class Header extends PureComponent {
  render () {
    return <Container>
      <Nav>
        <h1>
          <Link to='/'>notes</Link>
        </h1>
        <ul>
          { Object.keys(notebooks).map(name =>
            <li key={`nb-${name}`}>
              <Link to={`/nb/${name}`}>{name}</Link>
            </li>
          )}
        </ul>
      </Nav>
      <Aside>
        <a href='https://github.com/n6g7/notes' title='GitHub repository' target='blank'>
          <img src={githubIcon} alt='GitHub' />
        </a>
      </Aside>
    </Container>
  }
}

export default Header
