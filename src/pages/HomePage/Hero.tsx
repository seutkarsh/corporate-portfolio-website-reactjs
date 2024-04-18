import React from 'react'
import HeroImage from '../../assets/images/hero-image.jpg'

const Hero = (): React.ReactElement => {
    return (
        <section className="hero-section">
            <div>
                <div className="hero--heading">
                    <div>
                        <span>CRE</span>
                        <span>ATIVE</span>
                    </div>
                    <span>DIGITAL MARKETING</span>
                    <span>SOLUTION</span>
                </div>
                <div className="hero--image-container">
                    <img src={HeroImage} alt="Hero Image" />
                </div>
            </div>
        </section>
    )
}

export default Hero
