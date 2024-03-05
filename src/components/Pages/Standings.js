import React, { useEffect } from 'react';
import '../../App.css';

function Standings() {
  useEffect(() => {
    const createStandingsWidget = (league, season, height) => {
      const widgetContainer = document.createElement('div');
      widgetContainer.style.backgroundColor = '#264160'; // Set background color
      widgetContainer.style.marginBottom = '0'; // No margin between widgets
      widgetContainer.style.border = '3px solid black'; // Add a white border

      const iframe = document.createElement('iframe');
      iframe.width = '100%';
      iframe.src = `standings.html?league=${league}&season=${season}`;
      iframe.frameBorder = '0';
      iframe.style.height = `${height}px`; // Set the height based on the parameter
      iframe.style.overflow = 'hidden'; // Ensure no scrolling in the iframe

      widgetContainer.appendChild(iframe);

      const container = document.getElementById('standings-container');
      if (container) {
        container.appendChild(widgetContainer);
      }

      return () => {
        if (container) {
          container.removeChild(widgetContainer);
        }
      };
    };

    // Create widgets for different leagues and seasons with customizable heights
    createStandingsWidget('39', '2023', 760);
    createStandingsWidget('140', '2023', 760);
    createStandingsWidget('135', '2023', 775);
    createStandingsWidget('78', '2023', 680);
    createStandingsWidget('61', '2023', 710);

    // Cleanup function (optional, removes the iframes when the component unmounts)
    return () => {
      const container = document.getElementById('standings-container');
      if (container) {
        container.innerHTML = ''; // Clear the container when the component unmounts
      }
    };
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  return (
    <div>
      <h1 className='standings-header'>STANDINGS</h1>
      <div id="standings-container" style={{ width: '100%', overflow: 'hidden', margin: '0', padding: '0' }}></div>
    </div>
  );
}

export default Standings;
