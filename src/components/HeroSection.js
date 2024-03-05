import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleArrowDown} from '@fortawesome/free-solid-svg-icons';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.webm' autoPlay loop muted playsInline />
      <h1>EVERY MOMENT MATTERS</h1>
      <p>Live the Game, Embrace the Drama.</p>
      <div className='hero-btns'>
      <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          targetSectionId="games-container"
          onClick={console.log('hey')}
        >
          LIVE GAMES <FontAwesomeIcon icon={faCircleArrowDown}></FontAwesomeIcon>
        </Button>
        <Link to="/standings">
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          targetSectionId=""
        >
          STANDINGS
        </Button>
        </Link>
      </div>
    </div>
    
    
  );
}

export default HeroSection;