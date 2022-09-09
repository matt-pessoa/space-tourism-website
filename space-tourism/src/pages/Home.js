import React from 'react';
import ButtonExplore from '../components/home/ButtonExplore';
import LandingText from '../components/home/LandingText';
import Header from '../components/shared/Header';
import './css/Home.css';

function Home(props) {
  return (
    <div>
      <Header />
      <LandingText />
      <ButtonExplore />
    </div>
  );
}

export default Home;
