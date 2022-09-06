import React from 'react';
import data from '../../data.json';
import destinationsImages from '../../assets/images';

function DestinationCard(props) {
  const destinations = data.destinations;
  const destination = destinations.find(
    ({ name }) => name === props.destination
  );
  const image = destinationsImages.find(
    ({ name }) => name === props.destination
  );

  return (
    <div className='destination-card'>
      <img src={image.png} alt={destination.name} />
      <h1 className='bellefair'>{destination.name.toUpperCase()}</h1>
      <p className='barlow'>{destination.description}</p>
      <div className='stats'>
        <div className='avg-distance'>
          <h2 className='barlow'>AVG. DISTANCE</h2>
          <p className='bellefair'>{destination.distance.toUpperCase()}</p>
        </div>
        <div className='est-travel-time'>
          <h2 className='barlow'>EST. TRAVEL TIME</h2>
          <p className='bellefair'>{destination.travel.toUpperCase()}</p>
        </div>
      </div>
    </div>
  );
}

export default DestinationCard;
