import React from 'react';

function Plano() {
  return (
    <section id="plano" className="active">
      <h2>Plano Estratégico</h2>
      <div className="card">
        <p>
          O plano estratégico da OincGen busca consolidar a empresa como referência em genética suína e bem-estar animal. As metas incluem aumento da taxa de prenhez, redução da mortalidade, melhoria do ganho de peso e diminuição dos custos de produção.
        </p>

        <h3 className="titulo-azul">Metas e Indicadores (KPIs)</h3>
        
        {/* NOVA ESTRUTURA PARA A LISTA DE KPIS */}
        <div className="kpi-list-container">
          
          {/* Item 1 */}
          <div className="kpi-item">
            <div className="kpi-content kpi-meta">
              <span className="kpi-label">Meta</span>
              <p>Aumentar taxa de prenhez em 10%</p>
            </div>
            <div className="kpi-content kpi-indicador">
              <span className="kpi-label">Indicador</span>
              <p>Taxa de prenhez (%)</p>
            </div>
            <div className="kpi-content kpi-responsavel">
              <span className="kpi-label">Responsável</span>
              <p>Médico-veterinário</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="kpi-item">
            <div className="kpi-content kpi-meta">
              <span className="kpi-label">Meta</span>
              <p>Reduzir mortalidade neonatal &lt;5%</p>
            </div>
            <div className="kpi-content kpi-indicador">
              <span className="kpi-label">Indicador</span>
              <p>Mortalidade (%)</p>
            </div>
            <div className="kpi-content kpi-responsavel">
              <span className="kpi-label">Responsável</span>
              <p>Técnico de maternidade</p>
            </div>
          </div>
          
          {/* Item 3 */}
          <div className="kpi-item">
            <div className="kpi-content kpi-meta">
              <span className="kpi-label">Meta</span>
              <p>Melhorar ganho médio diário em 5%</p>
            </div>
            <div className="kpi-content kpi-indicador">
              <span className="kpi-label">Indicador</span>
              <p>Ganho de peso (g/dia)</p>
            </div>
            <div className="kpi-content kpi-responsavel">
              <span className="kpi-label">Responsável</span>
              <p>Zootecnista</p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="kpi-item">
            <div className="kpi-content kpi-meta">
              <span className="kpi-label">Meta</span>
              <p>Reduzir custo de produção em 8%</p>
            </div>
            <div className="kpi-content kpi-indicador">
              <span className="kpi-label">Indicador</span>
              <p>R$/kg suíno</p>
            </div>
            <div className="kpi-content kpi-responsavel">
              <span className="kpi-label">Responsável</span>
              <p>Gerente de produção</p>
            </div>
          </div>

          {/* Item 5 */}
          <div className="kpi-item">
            <div className="kpi-content kpi-meta">
              <span className="kpi-label">Meta</span>
              <p>Garantir 100% protocolos sanitários</p>
            </div>
            <div className="kpi-content kpi-indicador">
              <span className="kpi-label">Indicador</span>
              <p>% de protocolos</p>
            </div>
            <div className="kpi-content kpi-responsavel">
              <span className="kpi-label">Responsável</span>
              <p>Médico-veterinário</p>
            </div>
          </div>

        </div>

        <h3 className="titulo-azul">Identificação de Estratégia</h3>
        <p>
          Para alcançar as metas estabelecidas e consolidar a OincGen como referência em genética e em bem-estar animal, algumas estratégias foram definidas:
        </p>

        <ul className="estrategias">
          {/* ... O restante do conteúdo continua o mesmo ... */}
        </ul>
      </div>
    </section>
  );
}

export default Plano;