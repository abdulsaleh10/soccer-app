// AboutUs.js

import React from 'react';
import '../../App.css';

const AboutUs = () => {
  return (
    <div>
      {/* First Section (image on the left, text on the right) */}
      <div className="about-us-container">
        <div className="about-section">
          <div className="image-container">
            <div className="image-wrapper">
              <img src="/images/aboutus.jpg" alt="Company" />
            </div>
          </div>
          <div className="text-container">
            <h2>About PitchPerfected</h2>
            <p style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode'" }}>
              "Welcome to PitchPerfected, your premier destination for staying informed about your favorite teams and leagues on a weekly basis. Our platform aims to be your ultimate hub, catering to all your football fan needs. Currently, our site provides real-time scores for the top 5 football leagues worldwide, including the two tournaments between them. If there are no games scheduled for a particular day in the competition, our platform will indicate 'No games available.' In such cases, you have the flexibility to navigate through dates, allowing you to check games for specific dates in the future or the past. In addition to live scores, we offer standings for each league's top 5 teams. Explore in-depth match details by clicking on the ‘?’ icon next to the score of the match you're interested in. Uncover a wealth of information, including match timelines, detailed statistics, lineups, players, and other engaging features. At PitchPerfected, we are dedicated to elevating your football experience, making us the go-to platform for enthusiasts seeking unparalleled coverage. Don't miss a moment of football magic and as we always say; Live the Game, Embrace the Drama”<br />- PitchPerfected</p>
          </div>
        </div>
      </div>

      {/* Second Section (image on the right, text on the left) */}
      <div className="about-us-container second-section">
        <div className="about-section">
          <div className="second-text-container">
            {/* Change the heading and text for the second section */}
            <h2>Meet the Developer</h2>
            <p style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode'" }}>
              PitchPerfected was developed by Abdulrahman Saleh. Abdul is a passionate football fan who fell in love with the sport back in 2009 when watching the UEFA Champions League final with his father. FC Barcelona, who won that final, became his favorite team and he's been a die-hard fan ever since, regularly tuning in to games with his friends. As Abdul navigated through college, pursuing a Computer Science degree and aiming for a career in Software Engineering, the busy study schedule made it tough to catch all the games. Fueled by this challenge, he started working on PitchPerfected, using his new tech skills to create a tool that could help not just him and his friends but, hopefully, loads of other football fans too. Football isn't just a hobby for Abdul; it's a deep passion that pushed him to build this site, wanting to make things simpler for fellow fans who love the game just as much.
            </p>
          </div>
          <div className="second-image-container">
            <div className="image-wrapper">
              {/* Change the image source for the second section */}
              <img src="/images/abdul.jpg" alt="Second Company" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
