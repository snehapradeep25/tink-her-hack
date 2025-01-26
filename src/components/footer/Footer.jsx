import React from "react";
import './Footer.css';
import footer_logo from '../../Assets/logo_big.png';
import instagram_icon from '../../Assets/instagram_icon.png';
import pintester_icon from '../../Assets/pintester_icon.png';
import whatsapp_icon from '../../Assets/whatsapp_icon.png';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-logo">
                    <img src={footer_logo} alt="HYPE Logo" />
                    <p>HYPE</p>
                </div>
                <ul className="footer-links">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Book a Band</li>
                    <li>Contact Us</li>
                </ul>
                <div className="footer-social-icon">
                    <div className="footer-icon-container">
                        <img src={instagram_icon} alt="Instagram" />
                    </div>
                    <div className="footer-icon-container">
                        <img src={pintester_icon} alt="Pinterest" />
                    </div>
                    <div className="footer-icon-container">
                        <img src={whatsapp_icon} alt="WhatsApp" />
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <hr />
                <p>Copyright © 2023 - All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;