import React, { PureComponent } from 'react'
import { Link } from 'react-router'

import notebooks from '../../notebooks'

class Summary extends PureComponent {
  render () {
    return <div>
      <h1>summary</h1>
      <ul>
        { Object.keys(notebooks).map(notebook =>
          <li key={`summary-${notebook}`}>
            <Link to={`/nb/${notebook}`}>{notebook}</Link>
          </li>
        ) }
      </ul>
    </div>
  }
}

export default Summary
