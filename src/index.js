import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter } from 'react-router-dom'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { AppContainer } from 'react-hot-loader'

import App from './components/App'
import './style/hl.css'
import theme from './theme'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Zilla Slab', serif;
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: 1rem;
    font-weight: 900;

    .anchor-link {
      color: black;
      display: none;
      font-size: 0.8rem;
      font-weight: normal;
      margin-left: 0.5rem;
      opacity: 0.5;
      text-decoration: none;
    }

    &:hover .anchor-link {
      display: initial;
    }
  }

  a {
    color: ${theme.colours.primary};
  }
`

ReactDOM.render(
  <AppContainer>
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        <BrowserRouter>
          <Route component={App} />
        </BrowserRouter>
      </React.Fragment>
    </ThemeProvider>
  </AppContainer>,
  document.getElementById('app')
)

if (module.hot) module.hot.accept()
