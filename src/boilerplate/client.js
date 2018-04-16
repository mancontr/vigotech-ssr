import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from '../store/reducers'
import Root from '../Root'

const store = createStore(reducers)

ReactDOM.hydrate(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
)
