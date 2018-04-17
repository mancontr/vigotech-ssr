import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, browserHistory, applyRouterMiddleware } from 'react-router'

import reducers from '../store/reducers'
import routes from '../routes'

const store = createStore(reducers, window.initialState)

let isFirstRender = true
const middleware = applyRouterMiddleware({
  renderRouterContext: (child, props) => {
    if (isFirstRender) {
      // No fetch, as we did it already on server
      isFirstRender = false
      return child
    }
    props.routes.forEach((route) =>
      route.component &&
      route.component.fetchData &&
      route.component.fetchData(props, store.dispatch, store.getState)
    )
    return child
  }
})

ReactDOM.hydrate(
  <Provider store={store}>
    <Router history={browserHistory} render={middleware}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
)
