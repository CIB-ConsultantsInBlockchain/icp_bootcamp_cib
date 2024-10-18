import { useState } from 'react';
import { metamuseum_backend } from 'declarations/metamuseum_backend';

function App() {
  const [message, setMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const email = event.target.elements.email.value;
    metamuseum_backend.subscribeToUpdates(email).then((response) => {
      setMessage(response);
    });
    return false;
  }

  return (
    <div className="container">
      <img src="/logo.png" alt="Museo NFT Inmersivo logo" className="logo" />
      <h1>Museo NFT para la Preservación Cultural y Ecológica de los Pueblos Indígenas</h1>
      
      <div className="mission-statement">
        <h2>Nuestra Misión</h2>
        <p>Proteger el patrimonio cultural y ecológico de los pueblos indígenas mediante NFTs, ICP blockchain, y tecnología inmersiva.</p>
      </div>
      
      <div className="features-container">
    <h2>Características Clave</h2>
      <div className="features">
        <div className="feature-item">
          <h3>NFTs Marketplace</h3>
          <p>Para autenticidad y trazabilidad</p>
        </div>
        <div className="feature-item">
          <h3>ICP Blockchain</h3>
          <p>Para registros de identidad</p>
        </div>
        <div className="feature-item">
          <h3>Realidad Virtual y Aumentada</h3>
          <p>Para experiencias inmersivas</p>
        </div>
        <div className="feature-item">
          <h3>Geolocalización en ICP</h3>
          <p>Para proteger territorios y biodiversidad</p>
        </div>
      </div>
    </div>
    
    {/* se necesita incrustar mapa, sin embargo hay problemas con CORS */}

{/*       <div className="map-container">
      <h2>Visor de Poblaciones Indígenas</h2>
      <iframe id="sml_iframe_6712ab9ab081d" allow="accelerometer; camera; display-capture; fullscreen; geolocation; gyroscope; magnetometer; microphone; midi; xr-spatial-tracking;" width="100%" height="600px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="/iframe/viewer/index.php?code=6712ab9ab081d"></iframe>
    </div> */}

      <div className="cta-section">
        <h2>Únete a Nuestra Misión</h2>
        <p>Ayúdanos a lanzar y escalar el primer Museo NFT Inmersivo para la preservación cultural y ecológica de los Pueblos Originarios del Mundo en ICP.</p>
        
        <form onSubmit={handleSubmit}>
          <input id="email" type="email" placeholder="Tu correo electrónico" required />
          <button type="submit">Suscribirse</button>
        </form>

        {message && <div id="message">{message}</div>}
      </div>
    </div>
  );
}

export default App;