import React from 'react';
import equipeImg from '../../assets/equipe.png';

function Portfolio() {
  return (
    <section id="portfolio" className="active">
      <h2>Portfólio da OincGen</h2>
      <div className="card portfolio">
        <div className="portfolio-imagem">
          <img src={equipeImg} alt="Equipe OincGen" />
        </div>

        <p className="slogan"><strong>Slogan:</strong> Genética e bem-estar que transformam a suinocultura.</p>

        <p>
          A OincGen é uma empresa dedicada à inovação na produção de leitões, unindo ciência, tecnologia e respeito animal.
          Nosso propósito é garantir uma suinocultura ética, eficiente e sustentável.
        </p>

        <p className="contato">
          <strong>Contatos:</strong> contato@oincgen.com.br |
          <strong>Instagram:</strong> <a href="https://instagram.com/oincgen" target="_blank" rel="noopener noreferrer">@oincgen</a><br />
          <strong>Localização:</strong> Zona Rural – MG
        </p>
      </div>
    </section>
  );
}

export default Portfolio;