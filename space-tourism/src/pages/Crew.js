import React from 'react';
import Header from '../components/shared/Header';
import Slideshow from '../components/crew/Slideshow';

function Crew(props) {
  return (
    <div className='crew'>
      <Header />
      <h1 className='barlow'>02 MEET YOUR CREW</h1>
      <Slideshow />
    </div>
  );
}

export default Crew;
