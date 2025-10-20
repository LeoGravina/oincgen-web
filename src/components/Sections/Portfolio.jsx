import React from 'react';
import equipeImg from '../../assets/equipe.png';

// --- NOVO: Importando os ícones ---
import { FaEnvelope, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';

function Portfolio() {
  return (
    <section id="portfolio">
      <h2>Portfólio da OincGen</h2>
      <div className="content-wrapper">
      <div className="card portfolio">
        <div className="portfolio-imagem">
          <img src={equipeImg} alt="Equipe OincGen" />
        </div>

        <p className="slogan"><strong>Slogan:</strong> Genética e bem-estar que transformam a suinocultura.</p>

        <p>
          A OincGen é uma empresa dedicada à inovação na produção de leitões, unindo ciência, tecnologia e respeito animal.
          Nosso propósito é garantir uma suinocultura ética, eficiente e sustentável.
        </p>

        {/* --- ALTERADO: Seção de contato com ícones --- */}
        <div className="contato-icones">
          <a href="mailto:contato@oincgen.com.br">
            <FaEnvelope /> <span>contato@oincgen.com.br</span>
          </a>
          <a href="https://instagram.com/oincgen" target="_blank" rel="noopener noreferrer">
            <FaInstagram /> <span>@oincgen</span>
          </a>
          <div>
            <FaMapMarkerAlt /> <span>Zona Rural – MG</span>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Portfolio;