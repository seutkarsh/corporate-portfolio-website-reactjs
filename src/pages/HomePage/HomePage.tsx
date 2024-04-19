import React from 'react'
import './homepage.css'
import Navbar from '../../components/Navbar/Navbar'
import Hero from './Hero'
import WhyChooseUs from './WhyChooseUs'
import Services from './Services'
import Portfolio from './Portfolio'
import Team from './Team'

const HomePage = (): React.ReactElement => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <WhyChooseUs />
                <Services />
                <Portfolio />
                <Team />
            </main>
        </>
    )
}

export default HomePage
