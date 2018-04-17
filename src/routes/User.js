import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { gotUser } from '../store/actions'
import fetch from 'isomorphic-fetch'

const User = (props) =>
  <div>
    <Link to="/">Go to home</Link>
    <h1>User details:</h1>
    <div>First name: {props.user.first_name}</div>
    <div>Last name: {props.user.last_name}</div>
  </div>

const mapStateToProps = (state) => ({ user: state.user })

const UserContainer = connect(mapStateToProps)(User)

UserContainer.fetchData = (props, dispatch, getState) =>
  fetch('https://reqres.in/api/users/' + props.params.id)
  .then((response) => response.json())
  .then((data) => dispatch(gotUser(data.data)))

export default UserContainer
