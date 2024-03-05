import React from 'react';
import '../../App.css';

const ComingSoon = () => {
  const ptSansFont = { fontFamily: "'PT Sans', sans-serif" };

  return (
    <div>
      {/* First Section (image on the left, text on the right) */}
      <div className="coming-soon-container">
        <div className="coming-soon-section">
          <div className="coming-soon-image-container">
            <div className="coming-soon-image-wrapper">
              <img src="/images/comingsoon.jpg" alt="ComingSoon" />
            </div>
          </div>
          <div className="coming-soon-text-container">
            <h2 style={ptSansFont}>What's Next for PitchPerfected?</h2>
            <p style={{ ...ptSansFont, fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode'" }}>
              A lot is in store for our dedicated football community. Explore the exciting developments on the horizon, and stay tuned for the following features:<br />
              <br /><span style={ptSansFont}>- Personalized Accounts:</span> Create your account for a personalized PitchPerfected experience, allowing you seamless access whenever you visit the site.<br />
              <br /><span style={ptSansFont}>- Tailored Live Games:</span> Choose your favorite teams, ensuring that our live games feature exclusively showcases the matches you're passionate about.<br />
              <br /><span style={ptSansFont}>- Player Stats Updates:</span> Stay in the loop with your favorite players by customizing your preferences and receiving real-time updates on their stats.<br />
              <br /><span style={ptSansFont}>- Expanded League Selection:</span> Enjoy a broader selection of leagues to follow and stay updated with their games and standings.<br />
              <br /><span style={ptSansFont}>- Mobile App Development:</span> Anticipate the launch of our mobile app, bringing the exciting world of football right to your fingertips.<br />
              <br />Join us on this journey, where your football experience is crafted to perfection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
