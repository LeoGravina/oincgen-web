import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Identidade from './components/Sections/Identidade.jsx';
import Mercado from './components/Sections/Mercado.jsx';
import Swot from './components/Sections/Swot.jsx';
import Plano from './components/Sections/Plano.jsx';
import Cronograma from './components/Sections/Cronograma.jsx';
import Relatorio from './components/Sections/Relatorio.jsx';
import Portfolio from './components/Sections/Portfolio.jsx';
import './styles/global.css';

function App() {
  const [activeSection, setActiveSection] = useState('identidade');

  const showSection = (id) => {
    setActiveSection(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="site-container"> 
      <Header showSection={showSection} />
      <main>
        {activeSection === 'identidade' && <Identidade />}
        {activeSection === 'mercado' && <Mercado />}
        {activeSection === 'swot' && <Swot />}
        {activeSection === 'plano' && <Plano />}
        {activeSection === 'cronograma' && <Cronograma />}
        {activeSection === 'relatorio' && <Relatorio />}
        {activeSection === 'portfolio' && <Portfolio />}
      </main>
      <Footer />
    </div> 
  );
}

export default App;