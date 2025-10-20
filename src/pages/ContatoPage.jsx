// src/pages/ContatoPage.jsx
// O seu código original já está ótimo. Apenas o coloco aqui para confirmar.

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMail, FiPhone, FiLinkedin, FiGithub } from 'react-icons/fi';

function ContatoPage() {
    const navigate = useNavigate();

    return (
        // A classe 'contato-page-content' será usada para centralizar
        <div className="contato-page-content">
            <div className="card contato-card">
                <h1 className="contato-title">Leonardo Gravina</h1>
                <p className="contato-subtitle">Desenvolvedor de Software</p>

                <div className="contato-info-list">
                    <a href="mailto:leonardocarlos807@gmail.com" className="contato-item">
                        <FiMail size={20} />
                        <span>leonardocarlos807@gmail.com</span>
                    </a>
                    <a href="https://wa.me/5532984057124" target="_blank" rel="noopener noreferrer" className="contato-item">
                        <FiPhone size={20} />
                        <span>(32) 98405-7124</span>
                    </a>
                    <a href="https://www.linkedin.com/in/leonardo-gravina-a770bb237" target="_blank" rel="noopener noreferrer" className="contato-item">
                        <FiLinkedin size={20} />
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://github.com/LeoGravina" target="_blank" rel="noopener noreferrer" className="contato-item">
                        <FiGithub size={20} />
                        <span>GitHub</span>
                    </a>
                </div>

                <button className="secondary-btn" onClick={() => navigate('/')}>
                    Voltar para OincGen
                </button>
                
            </div>
        </div>
    );
}

export default ContatoPage;