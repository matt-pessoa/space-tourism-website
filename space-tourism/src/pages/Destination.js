import React, { useState } from 'react';
import Header from '../components/shared/Header';
import data from '../data.json';

function Destination(props) {
  const [destination, setDestination] = useState('Moon');

  const handleClick = (e) => {
    const elementName = e.target.title;
    setDestination(elementName);
  };

  console.log(destination);

  return (
    <div className='destination-page'>
      <Header />
      <h1>01 PICK YOUR DESTINATION</h1>
      <ul>
        <li onClick={handleClick} title='Moon'>
          MOON
        </li>
        <li onClick={handleClick} title='Mars'>
          MARS
        </li>
        <li onClick={handleClick} title='Europa'>
          EUROPA
        </li>
        <li onClick={handleClick} title='Titan'>
          TITAN
        </li>
      </ul>
    </div>
  );
}

export default Destination;
