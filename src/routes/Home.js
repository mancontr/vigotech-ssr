import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { gotUsers } from '../store/actions'
import fetch from 'isomorphic-fetch'

const Home = (props) =>
  <div>
    <h1>Home</h1>
    <ul>
      {props.users.map((user) =>
        <li key={user.id}>
          <Link to={'/user/' + user.id}>
            {user.first_name}
          </Link>
        </li>
      )}
    </ul>
  </div>

const mapStateToProps = (state) => ({ users: state.users })

const HomeContainer = connect(mapStateToProps)(Home)

HomeContainer.fetchData = (props, dispatch, getState) =>
  fetch('https://reqres.in/api/users')
  .then((response) => response.json())
  .then((data) => dispatch(gotUsers(data.data)))

export default HomeContainer
