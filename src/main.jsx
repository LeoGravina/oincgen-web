import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// Não esqueça de importar seu CSS aqui se já não estiver em App.jsx
import './Styles/global.css'; 
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* O BrowserRouter habilita o roteamento em todo o app */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);