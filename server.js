import React from 'react'
import ReactDOMServer from 'react-dom/server'
import express from 'express'

import Root from './Root'

const app = express()
app.get('*', (req, res) => {
  res.send(ReactDOMServer.renderToString(
    <Root />
  ))
})
app.listen(3000)
