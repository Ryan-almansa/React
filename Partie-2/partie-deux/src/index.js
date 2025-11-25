import React from 'react';
import ReactDOM from 'react-dom/client';
import BoutonAlmansa from './component/BoutonAlmansa'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Utilisation correcte du composant : <Bouton /> */}
    <BoutonAlmansa couleur={'red'} />
  </React.StrictMode>
);