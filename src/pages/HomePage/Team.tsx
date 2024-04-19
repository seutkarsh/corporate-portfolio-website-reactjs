import React from 'react'
import Team1 from '../../assets/images/team-1.png'
import Team2 from '../../assets/images/team-2.png'
import Team3 from '../../assets/images/team-3.png'
import PlusIcon from '../../assets/vectors/plus.svg'

interface ITeam {
    name: string
    position: string
    image: string
}
const Team = (): React.ReactElement => {
    const team: ITeam[] = [
        { name: 'Jenny Wilson', position: 'Developer', image: Team1 },
        { name: 'Esther Howard', position: 'Graphic Designer', image: Team2 },
        { name: 'Jacob Jones', position: 'Product Designer', image: Team3 },
    ]
    return (
        <section className="team-section">
            <div className="team--heading-container">
                <div className="team--heading">
                    <span className="subtitle">MEET OUR TEAM MEMBERS</span>
                    <h4>Meet the professional team behind the success</h4>
                </div>
            </div>
            <div className="team--main-section">
                {team.map((member, index) => {
                    return (
                        <div key={index} className="team--card">
                            <div className="team--info">
                                <h6>{member.name}</h6>
                                <span>{member.position}</span>
                            </div>
                            <img className="person-image" src={member.image} />
                            <a className="team--icon-button">
                                <img className="team--icon" src={PlusIcon} />
                            </a>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Team
