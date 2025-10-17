import React from 'react';
import logoImg from '../assets/logo.png'; // Use a sua logo com fundo aqui

function Header({ showSection }) {
  return (
    <header>
      <div className="header-content">
        <div className="logo-area">
          {/* NOVO CONTAINER PARA O EFEITO DE HOVER */}
          <div className="logo-container-with-tooltip">
            <div className="logo-wrapper">
              <img src={logoImg} alt="Logo OincGen" className="logo-img" />
            </div>
            {/* O TEXTO QUE IRÁ APARECER */}
            <span className="logo-tooltip">
              Genética e bem-estar que transformam a suinocultura.
            </span>
          </div>
          <h1>OincGen</h1>
        </div>
        
        <nav>
          {/* ... seus botões de navegação continuam aqui ... */}
          <button onClick={() => showSection('identidade')}>Identidade</button>
          <button onClick={() => showSection('mercado')}>Mercado</button>
          <button onClick={() => showSection('swot')}>SWOT</button>
          <button onClick={() => showSection('plano')}>Plano</button>
          <button onClick={() => showSection('cronograma')}>Cronograma</button>
          <button onClick={() => showSection('relatorio')}>Relatório</button>
          <button onClick={() => showSection('portfolio')}>Portfólio</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;