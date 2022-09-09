import React from 'react';
import TechnologyControllers from './TechnologyControllers';
import techData from '../../assets/tech';

function TechnologyCard(props) {
  const techName = props.techName;

  const getTech = (techName) => {
    return techData.find(({ name }) => name === techName);
  };

  return (
    <section className='tech-info'>
      <img src={getTech(techName).images.landscape} alt={techName} />
      <TechnologyControllers handleClick={props.handleClick} />
      <h2>THE TERMINOLOGY...</h2>
      <h1>{getTech(techName).name.toUpperCase()}</h1>
      <p>{getTech(techName).description}</p>
    </section>
  );
}

export default TechnologyCard;
