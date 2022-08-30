import React from 'react'
import './Header.css'
import { image } from '../../Config/Image';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="the-social-flex-box">
                    <div className="the-social-questions">
                        <a href="#">
                            <img src={image.thesocial} class="header-image"
                                alt="the-social-question-icon" />
                        </a>
                    </div>
                    <div className="back-to-tsq-btn">
                        <button className="back-to-tsq">
                            Back to TSQ.com
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
