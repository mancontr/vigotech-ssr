import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Home from './Home'
import Hello from './Hello'

const routes =
  <Route path="/">
    <IndexRoute component={Home} />
    <Route path="/hello" component={Hello} />
  </Route>

export default routes
