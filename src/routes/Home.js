import React from 'react'
import { Link } from 'react-router'

const Home = (props) =>
  <div>
    <h1>Home</h1>
    <Link to="/hello">Go to hello</Link>
  </div>

export default Home
