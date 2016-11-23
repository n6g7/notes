import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import { App, Notebook, Summary } from './components';

// style
import 'hack';
import './style/app.styl';
import './style/hl.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Summary} />
      <Route path="nb/:notebook" component={Notebook} />
    </Route>
  </Router>,
  document.getElementById('app')
);
