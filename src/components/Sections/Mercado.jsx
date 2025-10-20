// src/components/Sections/Mercado.jsx
import React from 'react';

function Mercado() {
  return (
    // Adicionamos a classe 'parallax-section' aqui
    <section id="mercado" className="parallax-section">
      <h2>Análise de Mercado</h2>
      <div className="card">
        <h3>Antes da Porteira</h3>
        <p> A OincGen é influenciada por fatores externos como clima, preço de commodities e políticas públicas...</p>
        <h3>Dentro da Porteira</h3>
        <p> Internamente, destacam-se os investimentos em genética, biossegurança e bem estar animal...</p>
        <h3>Depois da Porteira</h3>
        <p>Após a produção, fatores logísticos, de comercialização e regulamentação sanitária influenciam a entrega...</p>
      </div>
    </section>
  );
}

export default Mercado;