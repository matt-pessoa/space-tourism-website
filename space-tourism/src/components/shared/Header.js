import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/shared/logo.svg';

function Header(props) {
  return (
    <header>
      <img src={logo} alt='logo' />
      <nav>
        <ul>
          <Link to='/'>
            <span className='bold-text'>00</span> HOME
          </Link>
          <Link to='/destination'>
            <span className='bold-text'>01</span> DESTINATION
          </Link>
          <Link to='/crew'>
            <span className='bold-text'>02</span> CREW
          </Link>
          <Link to='/technology'>
            <span className='bold-text'>03</span> TECHNOLOGY
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
