import React from 'react';
import { 
    Target, 
    Globe, 
    BarChart, 
    Users, 
    Award, 
    Rocket 
} from 'lucide-react';

const MissionSection = () => {
    const missionChallenges = [
        {
            icon: <Globe size={48} className="text-primary mb-3" />,
            title: "Global Connectivity",
            description: "Breaking down communication barriers in WhatsApp commerce"
        },
        {
            icon: <BarChart size={48} className="text-primary mb-3" />,
            title: "Scalable Solutions",
            description: "Providing robust tools for businesses of all sizes"
        },
        {
            icon: <Users size={48} className="text-primary mb-3" />,
            title: "User-Centric Design",
            description: "Simplifying complex commerce interactions"
        }
    ];

    const milestones = [
        {
            icon: <Rocket size={36} className="text-success" />,
            value: "500+",
            label: "Businesses Onboarded"
        },
        {
            icon: <Award size={36} className="text-warning" />,
            value: "2M+",
            label: "Transactions Processed"
        },
        {
            icon: <Target size={36} className="text-danger" />,
            value: "98%",
            label: "Customer Satisfaction"
        }
    ];

    return (
        <section className="mission-section py-5 bg-white">
            <div className="container">
                {/* Mission Statement */}
                <div className="row mb-5">
                    <div className="col-lg-8 mx-auto text-center">
                        <h2 className="display-6 fw-bold mb-4">Our Mission</h2>
                        <p className="lead text-muted mb-4">
                            To revolutionize WhatsApp commerce by providing seamless, 
                            intelligent, and user-friendly solutions that empower businesses 
                            to connect, sell, and grow effortlessly.
                        </p>
                    </div>
                </div>

                {/* Challenges Section */}
                <div className="row mb-5">
                    <div className="col-12 text-center mb-4">
                        <h3 className="h4 fw-bold">Solving WhatsApp Commerce Challenges</h3>
                    </div>
                    {missionChallenges.map((challenge, index) => (
                        <div key={index} className="col-12 col-md-4">
                            <div className="text-center p-4">
                                <div className="mb-3">
                                    {challenge.icon}
                                </div>
                                <h4 className="h5 mb-3">{challenge.title}</h4>
                                <p className="text-muted">{challenge.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Milestones Section */}
                <div className="row bg-light rounded-3 p-4">
                    <div className="col-12 text-center mb-4">
                        <h3 className="h4 fw-bold">Our Achievements</h3>
                    </div>
                    {milestones.map((milestone, index) => (
                        <div key={index} className="col-12 col-md-4 text-center">
                            <div className="p-3">
                                <div className="d-flex justify-content-center align-items-center mb-3">
                                    {milestone.icon}
                                    <span className="display-6 fw-bold ms-3 text-primary">
                                        {milestone.value}
                                    </span>
                                </div>
                                <p className="text-muted">{milestone.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MissionSection;