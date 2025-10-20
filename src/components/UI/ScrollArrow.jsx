// Em: src/components/UI/ScrollArrow.jsx
import React, { useState, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';

function ScrollArrow() {
  const [isVisible, setIsVisible] = useState(true);

  // 1. Efeito para esconder a seta, agora escutando a 'window'
  useEffect(() => {
    const handleScroll = () => {
      // Usa 'window.scrollY' para pegar a posição de rolagem da página
      if (window.scrollY > 50) { 
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    // Adiciona o listener de evento diretamente na 'window'
    window.addEventListener('scroll', handleScroll);

    // Limpa o evento da 'window' quando o componente é desmontado
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Função de clique, agora rolando a 'window'
  const handleArrowClick = () => {
    // Rola a janela por uma quantidade igual à sua altura visível
    window.scrollBy({
      top: window.innerHeight, 
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="scroll-arrow-container" onClick={handleArrowClick}>
      <FaChevronDown size={30} />
    </div>
  );
}

export default ScrollArrow;