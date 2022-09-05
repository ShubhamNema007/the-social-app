import React from "react";
import './Footer.scss';
import { image } from '../../Config/Image'

const Footer = () => {
    return (
        <footer className="the-social-question-footer">
            <div className="container">
                <div className="footer-menu">
                    <div className="footer-image">
                        <img src={image.footerimg} className="footer-img" alt="footer-img" />
                    </div>
                    <div className="menu-list">
                        <ul className="items">
                            <li>
                                <a href="#" className="items-css">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="items-css">
                                    Terms & Conditions
                                </a>
                            </li>
                            <li>
                                <a href="#" className="items-css">
                                    Security
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="copy-right">
                        <p className="copyright">
                            © Copyright 2022, All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;