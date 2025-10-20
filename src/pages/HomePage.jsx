import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Importe todos os seus componentes de seção
import Identidade from '../components/Sections/Identidade';
import Mercado from '../components/Sections/Mercado';
import Swot from '../components/Sections/Swot';
import Plano from '../components/Sections/Plano';
import Cronograma from '../components/Sections/Cronograma';
import Relatorio from '../components/Sections/Relatorio';
import Portfolio from '../components/Sections/Portfolio';
import ScrollArrow from '../components/UI/ScrollArrow';

// 1. Crie o "mapa" de componentes na MESMA ORDEM do App.jsx
const sectionComponents = [
  <Identidade />,
  <Mercado />,
  <Swot />,
  <Plano />,
  <Cronograma />,
  <Relatorio />,
  <Portfolio />
];

// 2. As variantes direcionais (deslizar) - CORRIGIDAS
const variants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%', // Entra da direita (se avançando) ou esquerda (se voltando)
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction > 0 ? '-100%' : '100%', // Sai para a esquerda (se avançando) ou direita (se voltando)
    opacity: 0
  })
};

// 3. A transição "bonita" e LEVE (ease)
const slideTransition = {
  type: "spring",
  stiffness: 255, // Quão "dura" é a mola
  damping: 30       // Quanta fricção/resistência (evita oscilar muito)
};
function HomePage({ activeIndex, direction, sections }) {
  
  // Lógica da seta
  const showArrow = activeIndex === 3 || activeIndex === 6;

  return (
    <AnimatePresence 
      initial={false}
      custom={direction}
      mode="wait" // <<< MUDANÇA: 'exitBeforeEnter' foi substituído por 'mode="wait"'
    >
      <motion.div
        key={activeIndex} // A chave é essencial para o AnimatePresence funcionar
        custom={direction}
        variants={variants} // <<< USA AS VARIANTS CORRIGIDAS
        initial="enter"
        animate="center"
        exit="exit"
        transition={slideTransition}
      >
        {sectionComponents[activeIndex]}
        {showArrow && <ScrollArrow />}
      </motion.div>
    </AnimatePresence>
  );
}

export default HomePage;