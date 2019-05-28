import React, { useEffect } from 'react'
import { connect } from 'react-redux' 
// import { fetchAuth } from '~/app/store/auth/actions'

const ProfilePage = (props) => {
  useEffect(() => {
  })

  return (
    <main>
      <section>
        {props.auth.data.email}
      </section>
    </main>
  )
}

const mapDispatchToProps = () => ({
})

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)