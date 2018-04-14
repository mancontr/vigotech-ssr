import React from 'react'
import ReactDOMServer from 'react-dom/server'
import express from 'express'

const app = express()
app.get('*', (req, res) => {
  res.send(ReactDOMServer.renderToString(
    <h1>Hola, mundo!</h1>
  ))
})
app.listen(3000)
