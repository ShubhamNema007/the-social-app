import React from 'react'
import './Hero.scss'
import { image } from '../../Config/Image'

const Hero = () => {
    return (
        <section className="hero-wapper">
            <div className="container">
                <div className="the-social-questions-flex">
                    <div className="hero-main-content">
                        <h3 className="social-question-head">
                            The Social Question
                        </h3>
                        <p className="social-question-para">
                            Transcribe Your Instagram Q&A Response Stickers
                        </p>
                        <button className="sign-up">
                            Sign Up
                        </button>
                    </div>
                    <div className="hero-main-img">
                        <a href="#">
                            <img src={image.heromainimg} class="hero-main-image" alt="hero-main-image" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;