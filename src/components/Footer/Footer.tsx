import React from 'react'
import './footer.css'
import BrandLogo from '../../assets/vectors/brand-icon.svg'
import Hero from '../../pages/HomePage/Hero'
const Footer = (): React.ReactElement => {
    return (
        <footer>
            <div className="footer--main">
                <div>
                    <span>
                        <img src={BrandLogo} />
                        Rinoco
                    </span>
                    <span className="subtext">
                        Get your business to the new heights.
                    </span>
                </div>
                <div>
                    <span>sales@Rinico.com</span>
                    <span className="subtext">MON–FRI 9AM–6PM</span>
                </div>
                <div>
                    <span>(123) 456.789.10</span>
                    <span className="subtext">WhatsApp or Call</span>
                </div>
            </div>
            <div className="footer--nav">
                <span className="footer--copyright">
                    Copyright ©2024 Rinico. All rights reserved.
                </span>
                <div className="footer--nav-contents">
                    <a>Home</a>
                    <a>Services</a>
                    <a>Pricing</a>
                    <a>Blogs</a>
                    <a>Contacts</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
