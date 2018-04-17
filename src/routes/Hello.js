import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

const Hello = (props) =>
  <div>
    <h1>{props.message || '(sin mensaje)'}</h1>
    <Link to="/">Go to home</Link>
  </div>

const mapStateToProps = (state) => ({ message: state.message })

export default connect(mapStateToProps)(Hello)
