import React from 'react'
import Arrow from '../../assets/vectors/arrow-right.svg'
import PersonIcon from '../../assets/vectors/person.svg'
import CommentIcon from '../../assets/vectors/comment.svg'
import BlogThumbnail from '../../assets/images/blog.png'

const Blogs = (): React.ReactElement => {
    return (
        <section className="blogs-section">
            <div className="portfolio--heading-container">
                <div className="portfolio--heading">
                    <span className="subtitle">Blog & News</span>
                    <h4>Read Our Latest Blog & Get Every Updates</h4>
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
            <div className="blogs--main-section">
                <div className="blogs--card">
                    <img src={BlogThumbnail} className="blogs--img" />
                    <div className="blogs--info">
                        <span>
                            <img src={PersonIcon} /> By: Admin
                        </span>
                        <span>●</span>
                        <span>
                            <img src={CommentIcon} /> 83 Comments
                        </span>
                    </div>
                    <div className="pricing--card-features-line"></div>
                    <h6>Wins 2023 good design London Award</h6>
                    <div className="blogs--bottom">
                        <span className="blogs--link">Read More ↗</span>
                        <div className="blogs--date">
                            <span>16</span>
                            <span>August</span>
                        </div>
                    </div>
                </div>
                <div className="blogs--card">
                    <img src={BlogThumbnail} className="blogs--img" />
                    <div className="blogs--info">
                        <span>
                            <img src={PersonIcon} /> By: Admin
                        </span>
                        <span>●</span>
                        <span>
                            <img src={CommentIcon} /> 83 Comments
                        </span>
                    </div>
                    <div className="pricing--card-features-line"></div>
                    <h6>Wins 2023 good design London Award</h6>
                    <div className="blogs--bottom">
                        <span className="blogs--link">Read More ↗</span>
                        <div className="blogs--date">
                            <span>16</span>
                            <span>August</span>
                        </div>
                    </div>
                </div>
                <div className="blogs--card">
                    <img src={BlogThumbnail} className="blogs--img" />
                    <div className="blogs--info">
                        <span>
                            <img src={PersonIcon} /> By: Admin
                        </span>
                        <span>●</span>
                        <span>
                            <img src={CommentIcon} /> 83 Comments
                        </span>
                    </div>
                    <div className="pricing--card-features-line"></div>
                    <h6>Wins 2023 good design London Award</h6>
                    <div className="blogs--bottom">
                        <span className="blogs--link">Read More ↗</span>
                        <div className="blogs--date">
                            <span>16</span>
                            <span>August</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blogs
