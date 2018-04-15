import React from 'react'
import ReactDOMServer from 'react-dom/server'
import fs from 'fs'
import express from 'express'

import Root from './Root'

const template = fs.readFileSync('./index.htm').toString()

const app = express()
app.use(express.static('build/client'))
app.get('*', (req, res) => {
  const render = ReactDOMServer.renderToString(<Root />)
  res.send(template.replace('<!--CODE-->', render))
})
app.listen(3000)
