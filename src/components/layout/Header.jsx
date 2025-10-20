import React from 'react';
import { Link } from 'react-router-dom'; // <<< Manter o Link para a logo
import logoImg from '../../assets/logo.png';

// Recebemos a função 'showSection' como prop
function Header({ showSection }) {
  return (
    <header>
      <div className="header-content">
        {/* O link na logo agora também reseta para a seção inicial */}
        <Link to="/" className="logo-area-link" onClick={() => showSection('identidade')}>
          <div className="logo-area">
            <div className="logo-container-with-tooltip">
              <div className="logo-wrapper">
                <img src={logoImg} alt="Logo OincGen" className="logo-img" />
              </div>
              <span className="logo-tooltip">
                Genética e bem-estar que transformam a suinocultura.
              </span>
            </div>
            <h1>OincGen</h1>
          </div>
        </Link>
        
        <nav>
          {/* --- ALTERADO: Voltamos a usar <button> com onClick --- */}
          <button className="nav-button" onClick={() => showSection('identidade')}>Identidade</button>
          <button className="nav-button" onClick={() => showSection('mercado')}>Mercado</button>
          <button className="nav-button" onClick={() => showSection('swot')}>SWOT</button>
          <button className="nav-button" onClick={() => showSection('plano')}>Plano</button>
          <button className="nav-button" onClick={() => showSection('cronograma')}>Cronograma</button>
          <button className="nav-button" onClick={() => showSection('relatorio')}>Relatório</button>
          <button className="nav-button" onClick={() => showSection('portfolio')}>Portfólio</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;