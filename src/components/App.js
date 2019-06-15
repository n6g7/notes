import React, { PureComponent } from "react"
import { Switch, Route } from "react-router-dom"

import { Notebook, Summary } from "@pages"

class App extends PureComponent {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Summary} />
        <Route path="/nb/:notebook" component={Notebook} />
      </Switch>
    )
  }
}

export default App
