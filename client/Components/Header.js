import React from 'react';

const Header = (props) => {

  return (<div>
    <nav className='header'>
      <div className='container'>
        <ul className='menu'>
          <li className='navbar-item'>
            <a className='nav-link' onClick={() => { props.changeView('home') }}>
              Home
          </a>
          </li>
          <li className='navbar-item'>
            <a onClick={() => { props.changeView('about') }}>About</a>
          </li>
          <li className='navbar-item'>
            <a onClick={() => { props.changeView('projects') }}>Projects</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>)
}

export default Header;