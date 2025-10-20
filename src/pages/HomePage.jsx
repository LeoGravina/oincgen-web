// src/pages/HomePage.jsx

import React from 'react';

// Importe todas as suas seções
import Identidade from '../components/Sections/Identidade';
import Mercado from '../components/Sections/Mercado';
import Swot from '../components/Sections/Swot';
import Plano from '../components/Sections/Plano';
import Cronograma from '../components/Sections/Cronograma';
import Relatorio from '../components/Sections/Relatorio';
import Portfolio from '../components/Sections/Portfolio';
import ScrollArrow from '../components/UI/ScrollArrow';

function HomePage() {
  return (
    // Usamos um fragment <> pois o <main> já estará em App.jsx
    <>
      <Identidade />
      <ScrollArrow />
      <Mercado />
      <Swot />
      <Plano />
      <Cronograma />
      <Relatorio />
      <Portfolio />
    </>
  );
}

export default HomePage;