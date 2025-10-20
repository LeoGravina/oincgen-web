import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importe componentes de layout e páginas
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContatoPage from './pages/ContatoPage';

function App() {
  return (
    <div className="site-container">
      {/* O Header agora é exibido em TODAS as páginas */}
      <Header />
      
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contato" element={<ContatoPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;