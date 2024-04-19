import React from 'react'
import Client from '../../assets/images/client.png'
import Arrow from '../../assets/vectors/arrow-right.svg'
import Curve from '../../assets/images/client-curve.png'
import DesignElement from '../../assets/images/client-feedback-design-element.png'

const ClientFeedback = (): React.ReactElement => {
    return (
        <section className="feedback-section">
            <img className="feedback--curve" src={Curve} />
            <img className="feedback--design-element" src={DesignElement} />
            <div className="feedback--heading-container">
                <div className="feedback--heading">
                    <span className="subtitle">Client Feedback</span>
                    <h4>Happy Words From Happy Customer</h4>
                </div>
            </div>
            <div className="feedback--main-section">
                <p>
                    “I am so impressed by your dedication to learning. I know it
                    was not easy when that technology solution you presented did
                    not work out.”
                </p>
                <img className="feedback--client-img" src={Client} />
                <div className="feedback--client-info">
                    <h6>Bessie Cooper</h6>
                    <span>Marketing Coordinator, HCAB</span>
                </div>
                <div className="portfolio--button-section client--button-section">
                    <a>
                        <img src={Arrow} />
                    </a>
                    <a>
                        <img src={Arrow} />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default ClientFeedback
