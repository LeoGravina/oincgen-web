import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        {/* Lado esquerdo: Copyright do projeto */}
        <span className="footer-copyright">
          © 2025 OincGen – Genética e bem-estar que transformam a suinocultura.
        </span>

        {/* Lado direito: Sua divulgação sutil */}
        <span className="footer-developer-credit">
          Desenvolvido por Leonardo Gravina. 
          <Link to="/contato">Vamos criar seu projeto?</Link>
        </span>
      </div>
    </footer>
  );
}

export default Footer;