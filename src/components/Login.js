import React from 'react'


const Login = () => {
  return (
    <section className='login_page'>
        <div className='backImg'>
          <img src={process.env.PUBLIC_URL + "img/login.jpg"} alt='' />
          <div className='text'>
            <h3>Login</h3>
            <h2>My account</h2>
          </div>
        </div>
        <form>
          <span>Username or email address *</span>
          <input type='text' required />
          <span>Password *</span>
          <input type='password' required />
          <button className='button'>Log in</button>
        </form>
    </section>
  )
}

export default Login