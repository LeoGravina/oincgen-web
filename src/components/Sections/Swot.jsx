import React from 'react';

function Swot() {
  return (
    <section id="swot" className="active">
      <h2>Análise SWOT</h2>
      <div className="card swot-card">
        {/* Container principal que usará CSS Grid */}
        <div className="swot-grid-container">

          {/* Quadrante 1: Forças */}
          <div className="swot-quadrant">
            <div className="swot-header">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23 10a2 2 0 0 0-2-2h-6.32l.96-4.57c.02-.1.03-.21.03-.32 0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10a2 2 0 0 0 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"></path></svg>
              <span>Forças</span>
            </div>
            <div className="swot-content">
              <ul>
                <li>Genética de alta qualidade e foco em bem-estar animal</li>
                <li>Equipe técnica qualificada e comprometida</li>
                <li>Estrutura planejada e biossegura</li>
                <li>Potencial para certificações e rastreabilidade</li>
              </ul>
            </div>
          </div>

          {/* Quadrante 2: Fraquezas */}
          <div className="swot-quadrant">
            <div className="swot-header">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1 14a2 2 0 0 0 2 2h6.32l-.96 4.57c-.02.1-.03.21-.03.32 0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5a2 2 0 0 0-2-2H5c-.83 0-1.54.5-1.84 1.22L.14 11.27c-.09.23-.14.47-.14.73v2z"></path></svg>
              <span>Fraquezas</span>
            </div>
            <div className="swot-content">
              <ul>
                <li>Alto custo inicial e manutenção tecnológica</li>
                <li>Marca nova, com pouca visibilidade</li>
                <li>Dependência de insumos externos</li>
                <li>Necessidade de capital de giro constante</li>
              </ul>
            </div>
          </div>

          {/* Quadrante 3: Oportunidades */}
          <div className="swot-quadrant">
            <div className="swot-header">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v2h-2v-2zm0 4h2v6h-2v-6z"></path></svg>
              <span>Oportunidades</span>
            </div>
            <div className="swot-content">
              <ul>
                <li>Valorização do bem-estar e sustentabilidade</li>
                <li>Aumento da demanda por carne suína e genética</li>
                <li>Parcerias com empresas de engorda e frigoríficos</li>
                <li>Incentivos a tecnologias verdes e energia renovável</li>
              </ul>
            </div>
          </div>

          {/* Quadrante 4: Ameaças */}
          <div className="swot-quadrant">
            <div className="swot-header">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5.99 19.53 19H4.47L12 5.99M12 2 1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"></path></svg>
              <span>Ameaças</span>
            </div>
            <div className="swot-content">
              <ul>
                <li>Flutuação no preço do milho e soja</li>
                <li>Doenças como Peste Suína Africana</li>
                <li>Concorrência de grandes grupos consolidados</li>
                <li>Instabilidade econômica e política</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Swot;