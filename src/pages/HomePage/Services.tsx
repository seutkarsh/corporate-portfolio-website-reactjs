import React from 'react'
import Curve from '../../assets/vectors/services-line.svg'

interface IService {
    title: string
    info: string
    link: string
}
const Services = (): React.ReactElement => {
    const services: IService[] = [
        {
            title: 'Website Development',
            info: 'Digital agency is an high test for business website work',
            link: '',
        },
        {
            title: 'Product Design',
            info: 'Digital agency is an high test for business website work',
            link: '',
        },
        {
            title: 'Ui/Ux Design',
            info: 'Digital agency is an high test for business website work',
            link: '',
        },
    ]
    return (
        <section className="services-section">
            <img src={Curve} />
            <div className="services--heading">
                <span className="subtitle">OUR SERVICES</span>
                <h4>Explore what services we’re offering</h4>
            </div>
            <div className="services--main-section">
                {services.map((service, index) => {
                    return (
                        <div key={index} className="services--card">
                            <span>{index + 1}</span>
                            <div className="services--card-info">
                                <span>{service.title}</span>
                                <p>{service.info}</p>
                                <a href={service.link}>Learn More +</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Services
