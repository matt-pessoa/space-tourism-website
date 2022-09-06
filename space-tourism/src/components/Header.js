import React from 'react';
import logo from '../assets/shared/logo.svg';

function Header(props) {
  return (
    <header>
      <img src={logo} alt='logo' />
      <nav>
        <ul>
          <li>
            <span className='bold-text'>00</span> HOME
          </li>
          <li>
            <span className='bold-text'>01</span> DESTINATION
          </li>
          <li>
            <span className='bold-text'>02</span> CREW
          </li>
          <li>
            <span className='bold-text'>03</span> TECHNOLOGY
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
