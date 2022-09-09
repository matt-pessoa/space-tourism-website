import React from 'react';

function TechnologyControllers(props) {
  return (
    <div className='tech-controllers'>
      <button title='Launch vehicle' onClick={props.handleClick}>
        1
      </button>
      <button title='Spaceport' onClick={props.handleClick}>
        2
      </button>
      <button title='Space capsule' onClick={props.handleClick}>
        3
      </button>
    </div>
  );
}

export default TechnologyControllers;
