import React, { useState } from 'react';
import Header from '../components/shared/Header';
import ChooseDestination from '../components/destination/ChooseDestination';
import DestinationCard from '../components/destination/DestinationCard';

function Destination(props) {
  const [destination, setDestination] = useState('Moon');

  const handleClick = (e) => {
    const elementName = e.target.title;
    setDestination(elementName);
  };

  return (
    <div className='destination-page'>
      <Header />
      <ChooseDestination handleClick={handleClick} />
      <DestinationCard destination={destination} />
    </div>
  );
}

export default Destination;
