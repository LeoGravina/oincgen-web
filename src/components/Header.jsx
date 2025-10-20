import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Importe Link e useLocation
import logoImg from '../assets/logo.png';

function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Função para lidar com o clique nos links de navegação
  const handleNavClick = (hash) => {
    if (!isHomePage) {
      // Se não estiver na home, o link cuidará da navegação
      return;
    }
    // Se já estiver na home, role suavemente
    const element = document.getElementById(hash.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <div className="header-content">
        {/* --- NOVO: A área da logo agora é um link para a Home --- */}
        <Link to="/" className="logo-area-link">
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
          {/* --- ALTERADO: Os links agora apontam para a home + âncora --- */}
          {/* O onClick é para garantir o scroll suave quando já estamos na home */}
          <Link to="/#identidade" className="nav-button" onClick={() => handleNavClick('#identidade')}>Identidade</Link>
          <Link to="/#mercado" className="nav-button" onClick={() => handleNavClick('#mercado')}>Mercado</Link>
          <Link to="/#swot" className="nav-button" onClick={() => handleNavClick('#swot')}>SWOT</Link>
          <Link to="/#plano" className="nav-button" onClick={() => handleNavClick('#plano')}>Plano</Link>
          <Link to="/#cronograma" className="nav-button" onClick={() => handleNavClick('#cronograma')}>Cronograma</Link>
          <Link to="/#relatorio" className="nav-button" onClick={() => handleNavClick('#relatorio')}>Relatório</Link>
          <Link to="/#portfolio" className="nav-button" onClick={() => handleNavClick('#portfolio')}>Portfólio</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;