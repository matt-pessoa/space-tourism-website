import React, { useState } from 'react';
import Header from '../components/shared/Header';
import TechnologyCard from '../components/technology/TechnologyCard';
import TechnologyControllers from '../components/technology/TechnologyControllers';

function Technology(props) {
  const [tech, setTech] = useState('Launch vehicle');

  const handleClick = (event) => {
    setTech(event.target.title);
  };

  return (
    <div className='technology'>
      <Header />
      <h1>03 SPACE LAUNCH 101</h1>
      <TechnologyCard handleClick={handleClick} techName={tech} />
    </div>
  );
}

export default Technology;
