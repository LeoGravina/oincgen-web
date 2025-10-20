// Em: App.jsx

// 1. Importe useRef e useEffect
import React, { useState, useRef, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ContatoPage from './pages/ContatoPage';

const sections = [
  'identidade', 
  'mercado', 
  'swot', 
  'plano', 
  'cronograma', 
  'relatorio', 
  'portfolio'
];

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [[activeIndex, direction], setActiveState] = useState([0, 0]);

  // 2. Altere o useEffect para usar 'window.scrollTo'
  useEffect(() => {
    // Rola a janela inteira para o topo suavemente
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [activeIndex]); // A dependência continua a mesma

  const setActiveSection = (newIndex) => {
    if (newIndex === activeIndex) return; 
    const newDirection = newIndex > activeIndex ? 1 : -1;
    setActiveState([newIndex, newDirection]);
  };

  return (
    <div className="site-container">
      <Header
        sections={sections} 
        setActiveSection={setActiveSection}
        isHomePage={isHomePage}
      />
      
      {/* 3. Remova a referência 'ref={mainRef}' do main */}
      <main>
        <Routes>
          <Route 
            path="/" 
            element={<HomePage activeIndex={activeIndex} direction={direction} sections={sections} />} 
          />
          <Route path="/contato" element={<ContatoPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;