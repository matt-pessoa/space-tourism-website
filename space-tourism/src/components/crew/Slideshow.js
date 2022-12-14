import React, { useState } from 'react';
import CrewCard from './CrewCard';
import SlideControllers from './SlideControllers';

function Slideshow(props) {
  const [member, setMember] = useState('Douglas Hurley');

  const handleChange = (event) => {
    setMember(event.target.title);
  };

  return (
    <section className='crew'>
      <CrewCard crewMember={member} />
      <SlideControllers handleChange={handleChange} />
    </section>
  );
}

export default Slideshow;
