import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { match, RouterContext } from 'react-router'
import fs from 'fs'
import path from 'path'
import express from 'express'

import routes from '../routes'
import reducers from '../store/reducers'

const template = fs.readFileSync(path.resolve('src', 'boilerplate', 'index.htm')).toString()

const app = express()
app.use(express.static('build/client'))
app.get('*', (req, res) => {
  const store = createStore(reducers)
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {

    const render = ReactDOMServer.renderToString(
      <Provider store={store}>
        <RouterContext {...renderProps} />
      </Provider>
    )
    const state = '<script>window.initialState = ' +
      JSON.stringify(store.getState()) + '</script>'
    const page = template
      .replace('<!--CODE-->', render)
      .replace('<!--STATE-->', state)
    res.send(page)
  })
})
app.listen(3000)
