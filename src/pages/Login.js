import React from 'react'


const Login = () => {
  return (
    <section className='login_page'>
        <div className='backImg'>
          <img src={process.env.PUBLIC_URL + "/assets/img/login.jpg"} alt='' />
          <div className='text'>
            <h3>Login</h3>
          </div>
        </div>
        <form>
          <span>아이디 or 이메일주소 *</span>
          <input className='id' type='text' required />
          <span>비밀번호 *</span>
          <input class='password' type='password' required />
          <button className='button'>Log in</button>
        </form>
    </section>
  )
}

export default Login