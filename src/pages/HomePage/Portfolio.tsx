import React from 'react'
import Arrow from '../../assets/vectors/arrow-right.svg'
import RectButton from '../../components/RectButton/RectButton'
import Project1 from '../../assets/images/project-1.png'
import Project2 from '../../assets/images/project-2.png'

const Portfolio = (): React.ReactElement => {
    return (
        <section className="portfolio-section">
            <div className="portfolio--heading-container">
                <div className="portfolio--heading">
                    <span className="subtitle">OUR PORTFOLIO</span>
                    <h4>Explore our new recently completed projects</h4>
                </div>
                <p>
                    We are web designers, developers, project managers, and
                    digital solutions using the latest trends and technologies.
                </p>
            </div>
            <div className="portfolio--button-section">
                <a>
                    <img src={Arrow} />
                </a>
                <a>
                    <img src={Arrow} />
                </a>
            </div>
            <div className="portfolio--project-section">
                <div className="project-card">
                    <img src={Project1} />
                    <div className="project-info">
                        <div>
                            <h6>SaaS Website</h6>
                            <span>Development. Jan 19, 2022</span>
                        </div>
                        <RectButton
                            filled={true}
                            text="See Project →"
                            size="large"
                        />
                    </div>
                </div>
                <div className="project-card">
                    <img src={Project2} />
                    <div className="project-info">
                        <div>
                            <h6>Car Dealership App</h6>
                            <span>UI/UX. Mar 25, 2023</span>
                        </div>
                        <RectButton
                            filled={true}
                            text="See Project →"
                            size="large"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio
