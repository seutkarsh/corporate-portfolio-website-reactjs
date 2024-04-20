import React from 'react'
import './homepage.css'
import Navbar from '../../components/Navbar/Navbar'
import Hero from './Hero'
import WhyChooseUs from './WhyChooseUs'
import Services from './Services'
import Portfolio from './Portfolio'
import Team from './Team'
import ClientFeedback from './ClientFeedback'
import Pricing from './Pricing'
import Blogs from './Blogs'
import Contact from './Contact'

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
                <ClientFeedback />
                <Pricing />
                <Blogs />
                <Contact />
            </main>
        </>
    )
}

export default HomePage
