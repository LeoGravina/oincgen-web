import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Identidade from './components/Sections/Identidade';
import Mercado from './components/Sections/Mercado';
import Swot from './components/Sections/Swot';
import Plano from './components/Sections/Plano';
import Cronograma from './components/Sections/Cronograma';
import Relatorio from './components/Sections/Relatorio';
import Portfolio from './components/Sections/Portfolio';
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