import React, { useEffect, useState } from 'react';
import { Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

const TeamSection = () => {
    const [teamSectionData, setTeamSectionData] = useState([]);
    const [activeTeamMember, setActiveTeamMember] = useState(null);

    useEffect(() => {
        fetch('/assets/TestimonialData.json')
            .then((response) => response.json())
            .then((data) => setTeamSectionData(data.teamSectionData))
            .catch((error) => console.error('Error loading team data:', error));
    }, []);

    const handleMouseEnter = (memberId) => {
        setActiveTeamMember(memberId);
    };

    const handleMouseLeave = () => {
        setActiveTeamMember(null);
    };

    return (
        <section className="team-section py-5 bg-light">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-lg-6 mx-auto text-center">
                        <h2 className="display-6 fw-bold mb-3">Meet Our Innovative Team</h2>
                        <p className="lead text-muted">
                            Our diverse and talented professionals are dedicated to driving innovation and excellence.
                        </p>
                    </div>
                </div>

                <div className="row g-4">
                    {teamSectionData.map((member) => (
                        <div 
                            key={member.id} 
                            className="col-12 col-md-6 col-lg-3"
                            onMouseEnter={() => handleMouseEnter(member.id)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div 
                                className={`team-member-card position-relative overflow-hidden rounded-4 shadow-sm transition-all duration-300 ${
                                    activeTeamMember === member.id ? 'scale-105' : ''
                                }`}
                            >
                                <div className="position-relative">
                                    <img 
                                        src={member.image} 
                                        alt={`${member.firstName} ${member.lastName}`} 
                                        className="img-fluid w-100 object-cover"
                                        style={{ height: '350px', objectPosition: 'center top' }}
                                    />
                                    <div 
                                        className={`team-overlay position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex flex-column justify-content-center align-items-center text-white p-4 transition-all duration-300 ${
                                            activeTeamMember === member.id ? 'opacity-100' : 'opacity-0'
                                        }`}
                                    >
                                        <p className="text-center mb-3">{member.bioData}</p>
                                        <div className="social-links d-flex gap-3">
                                            <a href="#" className="text-white"><Linkedin size={24} /></a>
                                            <a href="#" className="text-white"><Twitter size={24} /></a>
                                            <a href="#" className="text-white"><Instagram size={24} /></a>
                                            <a href="#" className="text-white"><Mail size={24} /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-member-info p-3 text-center">
                                    <h3 className="h5 mb-1">
                                        {member.firstName} {member.lastName}
                                    </h3>
                                    <p className="text-muted mb-2">{member.designation}</p>
                                    <a 
                                        href="#" 
                                        className="btn btn-outline-primary btn-sm mt-2"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;