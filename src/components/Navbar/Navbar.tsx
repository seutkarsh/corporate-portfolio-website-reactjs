import React from 'react'
import './navbar.css'
import { brandName } from '../../config/constants'
import BrandIcon from '../../assets/vectors/brand-icon.svg'
import RectButton from '../RectButton/RectButton'

const Navbar = (): React.ReactElement => {
    return (
        <nav>
            <div>
                <img src={BrandIcon} alt="Brand-Logo" className="brand-logo" />
                <span>{brandName}</span>
            </div>
            <div>
                <a href="#">Home</a>
                <a href="#">Services</a>
                <a href="#">Pricing</a>
                <a href="#">Blog</a>
                <a href="#">Contact Us</a>
            </div>
            <RectButton filled={false} text="Let's Talk" size="medium" />
        </nav>
    )
}

export default Navbar
