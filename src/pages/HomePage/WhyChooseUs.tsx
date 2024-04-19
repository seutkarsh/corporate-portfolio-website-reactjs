import React from 'react'
import Pic1 from '../../assets/images/wcu-pic1.png'
import Pic2 from '../../assets/images/wcu-pic2.png'
import Pic3 from '../../assets/images/wcu-pic3.png'
import Pic4 from '../../assets/images/wcu-pic4.png'
import Play from '../../assets/vectors/play.svg'

const WhyChooseUs = (): React.ReactElement => {
    return (
        <section className="why-choose-us-section">
            <div className="why-choose-us--heading-container">
                <div className="why-choose-us--heading">
                    <span className="subtitle">Why Choose Us </span>
                    <h4>Building a design easy for business</h4>
                </div>
                <p>
                    We never underestimate any parts of each project as they are
                    all essential to meeting the ultimate goal. you will be
                    engaged in with our positive and enthusiastic attitude.
                </p>
            </div>
            <div className="why-choose-us--img-section">
                <div className="stat-img">
                    <div className="stat">
                        <div>
                            <span>90</span>
                            <span>+</span>
                        </div>
                        <span className="subtitle">Projects Completed</span>
                    </div>
                    <div className="list">
                        <img src={Pic1} />
                        <img src={Pic2} />
                        <img src={Pic3} />
                        <img src={Pic4} />
                        <span>+</span>
                    </div>
                </div>
                <div className="main-img">
                    <img src={Play} />
                    <h5>HOW WE WORK</h5>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs
