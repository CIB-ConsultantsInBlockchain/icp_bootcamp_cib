import React, { useEffect, useRef } from 'react';

function MapContainer() {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.src = 'https://staticm.cib.lat/viewer/index.php?code=6712ab9ab081d';
    }
  }, []);

  return (
    <div className="map-container">
      <h2>Visor de Poblaciones Indígenas</h2>
      <iframe 
        ref={iframeRef}
        allow="accelerometer; camera; display-capture; fullscreen; geolocation; gyroscope; magnetometer; microphone; midi; xr-spatial-tracking;"
        width="100%" 
        height="600px" 
        title="Mapa de Poblaciones Indígenas"
      ></iframe>
    </div>
  );
}

export default MapContainer;