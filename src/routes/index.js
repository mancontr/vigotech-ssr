import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Home from './Home'
import User from './User'

const routes =
  <Route path="/">
    <IndexRoute component={Home} />
    <Route path="/user/:id" component={User} />
  </Route>

export default routes
