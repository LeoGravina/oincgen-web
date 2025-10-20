// src/components/UI/ScrollArrow.jsx
import React, { useState, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';

function ScrollArrow() {
  const [isVisible, setIsVisible] = useState(true);

  // Efeito para esconder a seta quando o usuário rolar a página
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Esconde depois de rolar 50 pixels
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Limpa o evento quando o componente é desmontado
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) {
    return null; // Não renderiza nada se não for visível
  }

  return (
    <div className="scroll-arrow-container">
      <FaChevronDown size={30} />
    </div>
  );
}

export default ScrollArrow;