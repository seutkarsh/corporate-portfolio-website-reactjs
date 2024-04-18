import React from 'react'
import HeroImage from '../../assets/images/hero-image.jpg'
import LetsStartSvg from '../../assets/vectors/lets-start.svg'
import Curve from '../../assets/vectors/hero-curve.svg'
import LeftBox from '../../assets/vectors/left-side-box.svg'
import RightBox from '../../assets/vectors/right-side-box.svg'

const Hero = (): React.ReactElement => {
    return (
        <section className="hero-section">
            <img src={LeftBox} className="hero--left-box" />

            <div>
                <div className="hero--heading">
                    <div className="hero--heading-top">
                        <div>
                            <span>CRE</span>
                            <span>ATIVE</span>
                        </div>
                        <p className="subtitle">
                            We are web designers, developers, project managers,
                            and digital solutions using the latest trends and
                            technologies.
                        </p>
                    </div>
                    <span>DIGITAL MARKETING</span>
                    <span>SOLUTION</span>
                </div>
                <div className="hero--image-container">
                    <img src={LetsStartSvg} alt="Hero Image" />
                    <img src={HeroImage} alt="Hero Image" />
                </div>

                <p className="subtitle hero--para">
                    We never underestimate any parts of each project as they are
                    all essential to meeting the ultimate goal. you will be
                    engaged in with our positive and enthusiastic attitude.
                </p>
            </div>
            <img src={Curve} className="hero--curve" />
            <img src={RightBox} className="hero--right-box" />
        </section>
    )
}

export default Hero
