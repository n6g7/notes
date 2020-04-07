import React, { PureComponent } from "react"
import { Link } from "react-router-dom"

import notebooks from "@notebooks"
import { Page } from "@templates"

class Summary extends PureComponent {
  render() {
    return (
      <Page>
        <h1>summary</h1>
        <ul>
          {Object.keys(notebooks).map((notebook) => (
            <li key={`summary-${notebook}`}>
              <Link to={`/nb/${notebook}`}>{notebook}</Link>
            </li>
          ))}
        </ul>
      </Page>
    )
  }
}

export default Summary
