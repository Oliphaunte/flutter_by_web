import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchAuth } from '~/app/store/auth/actions'

const RegisterPage = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const _onSubmit = e => {
    e.preventDefault()
    
    props.fetchAuth(username, password)
  }

  useEffect(() => {
    props.auth.isValidated ? 
      props.history.replace('/profile') : null
  })

  return (
    <main>
      <section>
        <form className='o__register-page' onSubmit={e => _onSubmit(e)}>
          <fieldset className='wrappers'>
            <label htmlFor='username'>Username</label>
            <input 
              onChange={e => setUsername(e.target.value)} 
              id='username'
              value={username} />
          </fieldset>

          <fieldset className='wrappers'>
            <label htmlFor='password'>Password</label>
            <input 
              onChange={e => setPassword(e.target.value)} 
              id='password' 
              value={password} />
          </fieldset>

          <fieldset>
            <input type='submit' />
          </fieldset>
        </form>

        <NavLink to='/login'>Click here to login</NavLink>
      </section>
    </main>
  )
}

const mapDispatchToProps = dispatch => ({
  fetchAuth: (username, password) => dispatch(fetchAuth(username, password))
})

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage)