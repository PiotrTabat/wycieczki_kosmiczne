import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="contact-info">
                        <h3>Informacje kontaktowe</h3>
                        <p>
                            Pjoter Holding Sp. z o.o.<br />
                            ul. Kosmiczna 42<br />
                            00-001 Warszawa<br />
                            Polska
                        </p>
                        <p>
                            Telefon: +48 123 456 789<br />
                            E-mail: kontakt@pjoter.t-bat.com
                        </p>
                    </div>
                    <div className="social-media-icons">
                        <div className="social-media-item">
                            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="facebook">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <span>Facebook</span>
                        </div>
                        <div className="social-media-item">
                            <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="twitter">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <span>Twitter</span>
                        </div>
                        <div className="social-media-item">
                            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="instagram">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <span>Instagram</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
