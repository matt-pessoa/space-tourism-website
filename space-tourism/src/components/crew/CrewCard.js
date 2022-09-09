import React from 'react';
import data from '../../data.json';
import crewImages from '../../assets/crew';

function CrewCard(props) {
  const dataCrew = data.crew;
  const { crewMember } = props;

  const getCrewMember = (crewMember) => {
    const member = dataCrew.find(({ name }) => name === crewMember);

    return member;
  };

  const getCrewImage = (crewMember) => {
    const member = crewImages.find(({ name }) => name === crewMember);

    return member;
  };

  return (
    <div className='crew-card'>
      <img
        src={getCrewImage(crewMember).png}
        alt={getCrewMember(crewMember).name}
      />
      <h1>{getCrewMember(crewMember).name.toUpperCase()}</h1>
      <h2>{getCrewMember(crewMember).role.toUpperCase()}</h2>
      <p>{getCrewMember(crewMember).bio}</p>
    </div>
  );
}

export default CrewCard;
