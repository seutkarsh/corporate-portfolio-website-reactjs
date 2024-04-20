import React from 'react'
import Line from '../../assets/vectors/line.svg'
import RectButton from '../../components/RectButton/RectButton'

const Pricing = (): React.ReactElement => {
    const features: string[] = [
        '3 Social Media Account',
        'Free Platform Access',
        '24/7 Customer Support',
        'Weekly Backup',
        'Video Consulting',
    ]
    return (
        <section className="pricing-section">
            <div className="pricing--heading-container">
                <div className="pricing--heading">
                    <span className="subtitle">Client Feedback</span>
                    <h4>Happy Words From Happy Customer</h4>
                </div>
            </div>
            <div className="line--container">
                <img className="pricing--line" src={Line} />
            </div>
            <div className="pricing--duration-container">
                <div className="pricing--duration-tag filled-tag">Monthly</div>
                <div className="pricing--duration-tag">Yearly</div>
            </div>
            <div className="pricing--main-section">
                <div className="pricing--card">
                    <div className="pricing--card-top">
                        <span>Essential</span>
                        <h4>$36.00</h4>
                    </div>
                    <div className="pricing--card-features">
                        {features.map((feature, index) => {
                            return (
                                <div key={index}>
                                    <span>{feature}</span>
                                    <div className="pricing--card-features-line"></div>
                                </div>
                            )
                        })}
                    </div>
                    <RectButton
                        filled={false}
                        text="Join This Plan"
                        size="large"
                        customClasses="pricing--card-button"
                    />
                </div>

                <div className="pricing--card dark-card">
                    <div className="pricing--card-top">
                        <span>Pro</span>
                        <h4>$54.00</h4>
                    </div>
                    <div className="pricing--card-features">
                        {features.map((feature, index) => {
                            return (
                                <div key={index}>
                                    <span>{feature}</span>
                                    <div className="pricing--card-features-line"></div>
                                </div>
                            )
                        })}
                    </div>
                    <RectButton
                        filled={false}
                        text="Join This Plan"
                        size="large"
                        customClasses="pricing--card-button "
                    />
                </div>

                <div className="pricing--card">
                    <div className="pricing--card-top">
                        <span>Business</span>
                        <h4>$89.00</h4>
                    </div>
                    <div className="pricing--card-features">
                        {features.map((feature, index) => {
                            return (
                                <div key={index}>
                                    <span>{feature}</span>
                                    <div className="pricing--card-features-line"></div>
                                </div>
                            )
                        })}
                    </div>
                    <RectButton
                        filled={false}
                        text="Join This Plan"
                        size="large"
                        customClasses="pricing--card-button"
                    />
                </div>
            </div>
        </section>
    )
}

export default Pricing
