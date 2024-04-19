import React from 'react'
import './homepage.css'
import Navbar from '../../components/Navbar/Navbar'
import Hero from './Hero'
import WhyChooseUs from './WhyChooseUs'

const HomePage = (): React.ReactElement => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <WhyChooseUs />
            </main>
        </>
    )
}

export default HomePage
