import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <header className='Header'>
      <h1 className='logo'>
        <Link to='/'>               
          <p>한국미술관</p>
        </Link>
      </h1>
      <ul className='nav'>
        <li><Link to='/'>Home</Link></li>                    
        <li><Link to='/about'>About</Link></li>            
        <li><Link to='/contact'>Contact</Link></li>    
      </ul>
      <Link to='/login' className="login">
        <p>Login</p>
        <img src={process.env.PUBLIC_URL + "/img/user.png"} alt="user" />
      </Link>
  </header>
  )
}

export default Header