import React from 'react';

function Identidade() {
  return (
    // A tag <section> agora tem um ID para a navegação por âncora funcionar
    <section id="identidade">
      <h2>Identidade da Empresa</h2>

      {/* --- NOVO: Aplicando o layout de duas colunas --- */}
      <div className="layout-duas-colunas">
        
        {/* Coluna 1: Texto de impacto */}
        <div className="coluna-texto-impacto">
          <h3>Os Pilares que nos Guiam.</h3>
          <p>Nossos valores são a base para uma suinocultura moderna, ética e sustentável, garantindo excelência do início ao fim.</p>
        </div>

        {/* Coluna 2: O card original */}
        <div className="card">
          <p><strong>Missão:</strong> Atuar na produção de leitões de alta qualidade genética, respeitando o bem estar animal e o tempo das matrizes, para atender às demandas de empresas de engorda, abate e reprodução. Oferecer animais mais saudáveis, produtivos e sustentáveis, contribuindo para uma suinocultura moderna e responsável.</p>
          <br/>
          <p><strong>Visão:</strong> Ser referência em bem-estar, qualidade genética e inovação na produção de leitões, consolidando a OincGen como símbolo de excelência e responsabilidade no setor.</p>
          <br/>
          <p><strong>Valores:</strong> Bem-estar animal, qualidade genética, sustentabilidade, inovação e produtividade responsável.</p>
        </div>
      </div>
    </section>
  );
}

export default Identidade;