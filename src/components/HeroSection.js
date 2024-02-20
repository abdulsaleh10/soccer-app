import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlayCircle} from '@fortawesome/free-solid-svg-icons';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.webm' autoPlay loop muted playsInline />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <FontAwesomeIcon icon={faPlayCircle}></FontAwesomeIcon>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;