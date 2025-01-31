import React, { useState, useEffect, useRef } from "react";

import './Footer.css';

const Footer = () => {
    const [visible, setVisible] = useState(true);
    const hideTimeoutRef = useRef(null); // Store timeout reference


    useEffect(() => {
        startHideTimer();
        return () => clearTimeout(hideTimeoutRef.current); // Cleanup on unmount
    }, []);

    const startHideTimer = () => {
        clearTimeout(hideTimeoutRef.current); // Clear any existing timer
        hideTimeoutRef.current = setTimeout(() => setVisible(false), 10000); // Hide after 10s
    };

    const handleMouseEnter = () => {
   
        setVisible(true); // Show when mouse is over
        clearTimeout(hideTimeoutRef.current); // Stop hiding
    };

    const handleMouseLeave = () => {
        startHideTimer(); // Restart the 10s timer when mouse leaves
    };
    return (
        <footer className={`footer-container ${visible ? "visible" : "hidden"}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="footer">
                <div className="footer__text">
                    <p><span>Testar o premium de graça</span></p>
                    <p>Inscreva-se para curtir música ilimitada e podcasts só com alguns anúncios. Não precisa de cartão de
                        crédito.</p>
                </div>
                <button className="footer__button">Inscreva-se grátis</button>
            </div>
        </footer>
    )
}

export default Footer;