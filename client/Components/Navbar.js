import React from 'react';

const Navbar = (props) => {

  return (<div>
    <nav className='header'>
      <ul className='menu'>
        <li className='navbar-item'>
          <a onClick={() => { props.changeView('home') }}>Home</a>
        </li>
        <li className='navbar-item'>
          <a onClick={() => { props.changeView('about') }}>About</a>
        </li>
        <li className='navbar-item'>
          <a onClick={() => { props.changeView('projects') }}>Projects</a>
        </li>
        <li className='hire-me-button'>
          <a onClick={() => { props.changeView('contact') }}>Say Hello!</a>
        </li>
      </ul>
    </nav>
  </div>)
}

export default Navbar;