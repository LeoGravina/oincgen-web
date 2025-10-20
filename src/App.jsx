import React, { useState } from 'react'; // <<< Importe o useState aqui
import { Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ContatoPage from './pages/ContatoPage';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // --- O "CÉREBRO" FICA AQUI ---
  const [activeSection, setActiveSection] = useState('identidade');

  return (
    <div className="site-container">
      {/* O Header só aparece na HomePage e agora precisa da função para trocar de seção */}
      {isHomePage && <Header showSection={setActiveSection} />}
      
      <main>
        <Routes>
          {/* A HomePage agora recebe qual seção deve mostrar */}
          <Route path="/" element={<HomePage activeSection={activeSection} />} />
          <Route path="/contato" element={<ContatoPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;