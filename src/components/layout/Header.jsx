import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.png';

// 1. Recebe as novas props
function Header({ sections, setActiveSection, isHomePage }) {
  
  // Função para capitalizar os nomes (ex: 'identidade' -> 'Identidade')
  const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

  return (
    <header>
      <div className="header-content">
        <Link 
          to="/" 
          className="logo-area-link" 
          // 2. O logo sempre leva para a seção 0 ('identidade')
          onClick={() => isHomePage && setActiveSection(0)}
        >
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
        
        {/* 3. Renderiza os botões dinamicamente */}
        {isHomePage && (
          <nav>
            {sections.map((id, index) => (
              <button
                key={id}
                className="nav-button"
                onClick={() => setActiveSection(index)} // Seta o índice
              >
                {capitalize(id)}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;