import React from 'react';

function Mercado() {
  return (
    <section id="mercado" className="active">
      <h2>Análise de Mercado</h2>
      <div className="card">
        <h3>Antes da Porteira</h3>
        <p> A OincGen é influenciada por fatores externos como clima, preço de commodities e políticas públicas. Condições climáticas extremas afetam a produção de grãos, elevando o custo da ração. Políticas governamentais, legislações ambientais e a demanda global por carne suína impactam diretamente os custos e oportunidades de produção.</p>
        <h3>Dentro da Porteira</h3>
        <p> Internamente, destacam-se os investimentos em genética, biossegurança e bem estar animal. A capacitação da equipe, nutrição adequada e controle sanitário são fundamentais para garantir a produtividade e a saúde dos leitões.</p>
        <h3>Depois da Porteira</h3>
        <p>Após a produção, fatores logísticos, de comercialização e regulamentação sanitária influenciam a entrega dos leitões. O transporte e as certificações de qualidade impactam a competitividade e a imagem da OincGen perante o mercado</p>
      </div>
    </section>
  );
}

export default Mercado;