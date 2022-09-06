import React from 'react';
import { Link } from 'react-router-dom';

function ButtonExplore(props) {
  return (
    <Link className='bellefair' to='/destination'>
      EXPLORE
    </Link>
  );
}

export default ButtonExplore;
