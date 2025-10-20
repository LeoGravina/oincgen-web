import React from 'react';

function Cronograma() {
  return (
    <section id="cronograma" className="active">
      <div className="content-wrapper">
      <h2>Cronograma de Implementação</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Fase 1</h3>
            <p><strong>Período:</strong> 0–2 meses</p>
            <p>Estruturação da empresa e implantação dos protocolos sanitários.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Fase 2</h3>
            <p><strong>Período:</strong> 3–6 meses</p>
            <p>Treinamento da equipe e início da produção genética e operacional.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Fase 3</h3>
            <p><strong>Período:</strong> 7–12 meses</p>
            <p>Obtenção de certificações de qualidade, biossegurança e bem-estar animal.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Fase 4</h3>
            <p><strong>Período:</strong> Ano 2+</p>
            <p>Expansão da operação e revisão estratégica para novas metas de crescimento.</p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Cronograma;