import React from "react";
import './Description.css'
import { image } from '../../Config/Image'

const Description = () => {
    return (
        <section class="next-genration-section">
            <div class="container">
                <div class="next-genration-main">
                    <div class="next-genration-img">
                        <img src={image.nextgenration} class="next-genration-image" alt="next-genration-image" />
                    </div>
                    <div class="next-genration-content">
                        <h3 class="next-genration-head">
                            Next Generation of Social Engagement
                        </h3>
                        <p class="next-genration-para">
                            Learn more about your audience with a brand new transcription service.
                        </p>
                        <p class="next-genration-para">
                            Before now, you may have felt overwhelmed with optimizing the responses to your Q&A stickers.
                            With this new transcription tool you can download the content to use for blog posts, content
                            creation, and more. Looking for a new way to monetize? The Social Question also partners with
                            brands for #paidpartnerships with Question Hosts to take your engagement to the next level.
                        </p>
                        <button class="next-genration-btn">
                            Learn More: Question Hosts
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Description;