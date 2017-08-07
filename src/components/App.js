import React, { PureComponent } from 'react'

import Header from './Header'

class App extends PureComponent {
  render () {
    return <main>
      <Header />
      <article className='container'>
        {this.props.children}
      </article>
    </main>
  }
}

App.PropTypes = {
  children: React.PropTypes.element.isRequired
}

export default App
