import React from 'react';

// Importe todos os componentes
import Identidade from '../components/Sections/Identidade';
import Mercado from '../components/Sections/Mercado';
import Swot from '../components/Sections/Swot';
import Plano from '../components/Sections/Plano';
import Cronograma from '../components/Sections/Cronograma';
import Relatorio from '../components/Sections/Relatorio';
import Portfolio from '../components/Sections/Portfolio';
import ScrollArrow from '../components/UI/ScrollArrow';

function HomePage({ activeSection }) {
  // --- LÓGICA ATUALIZADA ---
  // Função para verificar se a seção atual deve ter a seta
  const shouldShowArrow = activeSection === 'plano' || activeSection === 'portfolio';

  const renderSection = () => {
    switch (activeSection) {
      case 'mercado':
        return <Mercado />;
      case 'swot':
        return <Swot />;
      case 'plano':
        // Agora o Plano também pode ter a seta
        return <Plano />; 
      case 'cronograma':
        return <Cronograma />;
      case 'relatorio':
        return <Relatorio />;
      case 'portfolio':
        // O Portfólio também pode ter a seta
        return <Portfolio />; 
      case 'identidade':
      default:
        // A seta foi removida daqui
        return <Identidade />;
    }
  };

  return (
    <>
      {renderSection()}
      {/* A seta será renderizada aqui fora, mas apenas se a condição for verdadeira */}
      {shouldShowArrow && <ScrollArrow />}
    </>
  );
}

export default HomePage;