import React from 'react';

function ChooseDestination(props) {
  return (
    <div className='choose-destination'>
      <h1>01 PICK YOUR DESTINATION</h1>
      <ul>
        <li onClick={props.handleClick} title='Moon'>
          MOON
        </li>
        <li onClick={props.handleClick} title='Mars'>
          MARS
        </li>
        <li onClick={props.handleClick} title='Europa'>
          EUROPA
        </li>
        <li onClick={props.handleClick} title='Titan'>
          TITAN
        </li>
      </ul>
    </div>
  );
}

export default ChooseDestination;
