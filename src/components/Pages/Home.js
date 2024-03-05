import React, { useEffect } from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';

function Home() {
  useEffect(() => {
    const getCurrentDate = () => {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
      const day = currentDate.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    };

    const createStandingsWidget = (league, season, backgroundImage) => {
      const currentDate = getCurrentDate(); // Get the current date in YYYY-MM-DD format

      const widgetContainer = document.createElement('div');
      widgetContainer.style.background = backgroundImage;
      widgetContainer.style.backgroundSize = 'cover';
      widgetContainer.style.backgroundPosition = '50% 50%';
      widgetContainer.style.backgroundRepeat = 'no-repeat';
      widgetContainer.style.marginBottom = '0';
      widgetContainer.style.border = '3px solid black';

      const iframe = document.createElement('iframe');
      iframe.width = '100%';
      iframe.src = `games.html?league=${league}&season=${season}&date=${currentDate}`;
      iframe.frameBorder = '0';
      iframe.style.height = '500px';
      iframe.style.overflow = 'hidden';
      iframe.style.backgroundSize = 'cover';

      widgetContainer.appendChild(iframe);

      const container = document.getElementById('games-container');
      if (container) {
        container.appendChild(widgetContainer);
      }

      return () => {
        if (container) {
          container.removeChild(widgetContainer);
        }
      };
    };

    // Create widgets for different leagues and seasons with specific background images
    createStandingsWidget('2', '2023', 'url("/images/championsleague.jpg")');
    createStandingsWidget('39', '2023', 'url("/images/england.jpg")');
    createStandingsWidget('140', '2023', 'url("/images/spain.jpg")');
    createStandingsWidget('135', '2023', 'url("/images/italy.jpg")');
    createStandingsWidget('78', '2023', 'url("/images/germany.jpg")');
    createStandingsWidget('61', '2023', 'url("/images/france.jpg")');
    createStandingsWidget('3', '2023', 'url("/images/europaLeague.jpg")');

    // Cleanup function (optional, removes the iframes when the component unmounts)
    return () => {
      const container = document.getElementById('games-container');
      if (container) {
        container.innerHTML = ''; // Clear the container when the component unmounts
      }
    };
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  return (
    <div>
      <HeroSection />
      <div id="games-container" style={{ width: '100%', overflow: 'hidden', margin: '0', padding: '0' }}></div>
    </div>
  );
}

export default Home;
