import React from 'react'
import { connect } from 'react-redux'

const Root = (props) => <h1>{props.message || '(sin mensaje)'}</h1>

const mapStateToProps = (state) => ({ message: state.message })

export default connect(mapStateToProps)(Root)
