import React from 'react'
import './homepage.css'
import Navbar from '../../components/Navbar/Navbar'
import Hero from './Hero'
import WhyChooseUs from './WhyChooseUs'
import Services from './Services'

const HomePage = (): React.ReactElement => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <WhyChooseUs />
                <Services />
            </main>
        </>
    )
}

export default HomePage
