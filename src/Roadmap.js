import React, { useState } from 'react';
import './index.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Roadmap = () => {
    const [showContent1, setShowContent1] = useState(false);
    const [showContent2, setShowContent2] = useState(false);
    const [showContent3, setShowContent3] = useState(false);
    const [showContent4, setShowContent4] = useState(false);
    const [showContent5, setShowContent5] = useState(false);
    const [showContent6, setShowContent6] = useState(false);
    const [showContent7, setShowContent7] = useState(false);

    const toggleContent1 = () => {
        setShowContent1(!showContent1);
    };

    const toggleContent2 = () => {
        setShowContent2(!showContent2);
    };

    const toggleContent3 = () => {
        setShowContent3(!showContent3);
    };

    const toggleContent4 = () => {
        setShowContent4(!showContent4);
    };

    const toggleContent5 = () => {
        setShowContent5(!showContent5);
    };

    const toggleContent6 = () => {
        setShowContent6(!showContent6);
    };

    const toggleContent7 = () => {
        setShowContent7(!showContent7);
    };

    return (
        <>
            <Navbar />
            <section id="roadmap">
                <div className='roadmap-cnt'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-12 col-sm-12 col-lg-12 timeline">
                            <div className="mx-auto" style={{ textAlign: 'center' }}>
                                <h4 className="subtitle-2" data-aos="zoom-in">
                                    <span className="theme-gradient" style={{ textAlign: 'center' }}>ROADMAP</span>
                                </h4>
                            </div>
                            <p className="touch-head-p mx-auto" style={{ textAlign: 'center' }} data-aos="zoom-in">
                                OUR ROADMAP
                            </p>
                            <p className="roadmap-p" data-aos="zoom-in">
                                Our roadmap outlines a journey of discovery and transformation, marked
                                by key milestones and phases of development. Here's an expanded
                                roadmap incorporating all the development phases for Neurolov
                                Ecosystem.
                            </p>

                            <ul>
                                <li className="in-view">
                                    <div data-aos="fade-right" onClick={toggleContent1}>
                                        <time>
                                            Phase 1 <br />
                                            <span className='roadmap-header-p'> Pre-Sale and Main Sale
                                                
                                            </span><i className={`fa fa-angle-${showContent1 ? 'up' : 'down'} toggle-content`} aria-hidden="true"></i>
                                        </time>

                                        <span className={showContent1 ? 'more-content' : 'more-content hidden'}>
                                            <p className='roadmap-content-border'>
                                                Pre-Sale Kickoff : <span className='roadmap-content'>
                                                    Launch our pre-sale event offering early access to Neurolov tokens at
                                                    discounted rates.
                                                </span>
                                            </p>
                                            <p className='roadmap-content-border'>
                                                Main Sale Launch : <span className='roadmap-content'>
                                                    Open the main sale to the public, allowing a wider audience to
                                                    participate in token acquisition and support the platform's development.
                                                </span>
                                            </p>
                                            <p className='roadmap-content-border'>
                                                Token Distribution : <span className='roadmap-content'>
                                                    Allocate tokens to investors based on their contributions, laying the
                                                    foundation for the platform's ecosystem.
                                                </span>
                                            </p>
                                        </span>
                                    </div>
                                </li>
                                <li className="in-view">
                                    <div data-aos="fade-right" onClick={toggleContent2}>
                                        <time>
                                            Phase 2 <br />
                                            <span className='roadmap-header-p'> Compute DApp Release
                                                
                                            </span><i className={`fa fa-angle-${showContent2 ? 'up' : 'down'} toggle-content`} aria-hidden="true"></i>
                                        </time>

                                        <span className={showContent2 ? 'more-content' : 'more-content hidden'}>
                                            <p className='roadmap-content-border'>
                                                Alpha Development : <span className='roadmap-content'>
                                                    Develop the alpha version of Neurolov's Compute DApp
                                                    (Decentralized Application), focusing on core functionalities such as GPU renting and
                                                    distributed computing.
                                                </span>
                                            </p>
                                            <p className='roadmap-content-border'>
                                                Testing and Feedback : <span className='roadmap-content'>
                                                    Conduct thorough testing of the alpha version, gathering
                                                    feedback from early adopters and community members to refine the user experience
                                                    and identify potential issues.
                                                </span>
                                            </p>
                                            <p className='roadmap-content-border'>
                                                Alpha Release : <span className='roadmap-content'>
                                                    Launch the alpha version of the Compute DApp to a select group of users,
                                                    providing them with exclusive access to the platform's initial features.
                                                </span>
                                            </p>
                                        </span>
                                    </div>
                                </li>

                                <li className="in-view">
                                    <div data-aos="fade-right" onClick={toggleContent3}>
                                        <time >
                                            Phase 3 <br />
                                            <span className='roadmap-header-p'> Distributed Computing Framework
                                                
                                            </span><i className={`fa fa-angle-${showContent3 ? 'up' : 'down'} toggle-content`} aria-hidden="true"></i>
                                        </time>

                                        <span className={showContent3 ? 'more-content' : 'more-content hidden'}>
                                            <p className='roadmap-content-border'>
                                                Framework Design : <span className='roadmap-content'>
                                                    Design the architecture and protocols for Neurolov's Distributed
                                                    Computing Framework (DCF), aiming for scalability, efficiency, and security.
                                                </span>
                                            </p>
                                            <p className='roadmap-content-border'>
                                                Implementation : <span className='roadmap-content'>
                                                    Develop and integrate the DCF into the Compute DApp, allowing users
                                                    to harness the combined power of distributed GPUs for complex computational tasks.
                                                </span>
                                            </p>
                                            <p className='roadmap-content-border'>
                                                Testing and Optimization : <span className='roadmap-content'>
                                                    Conduct extensive testing and optimization of the DCF to
                                                    ensure seamless integration with the platform and optimal resource utilization.
                                                </span>
                                            </p>
                                        </span>
                                    </div>
                                </li>

                                <li className="in-view">
                                    <div data-aos="fade-right" onClick={toggleContent4}>
                                        <time>
                                            Phase 4 <br />
                                            <span className='roadmap-header-p'> Advanced AI Models Integration
                                                
                                            </span><i className={`fa fa-angle-${showContent4 ? 'up' : 'down'} toggle-content`} aria-hidden="true"></i>
                                        </time>

                                        <span className={showContent4 ? 'more-content' : 'more-content hidden'}>
                                            <p className='roadmap-content-border'>
                                                AI Model Research : <span className='roadmap-content'>
                                                    Conduct research and development on advanced AI models tailored
                                                    for Neurolov's platform, focusing on deep learning, reinforcement learning, and other
                                                    AGI methodologies.
                                                </span>
                                            </p>
                                            <p className='roadmap-content-border'>
                                                Integration with DCF : <span className='roadmap-content'>
                                                    Integrate the developed AI models into the Distributed Computing
                                                    Framework, enabling users to leverage powerful AI training capabilities for AGI
                                                    development.
                                                </span>
                                            </p>
                                            <p className='roadmap-content-border'>
                                                Continuous Improvement : <span className='roadmap-content'>
                                                    Continuously refine and enhance the AI models based on
                                                    feedback and performance metrics, ensuring their effectiveness in addressing real-world
                                                    challenges.
                                                </span>
                                            </p>
                                        </span>
                                    </div>
                                </li>

                                <li className="in-view">
                                    <div data-aos="fade-right" onClick={toggleContent5}>
                                        <time >
                                            Phase 5 <br />
                                            <span className='roadmap-header-p'> Data Storage and Access Solutions
                                                
                                            </span><i className={`fa fa-angle-${showContent5 ? 'up' : 'down'} toggle-content`} aria-hidden="true"></i>
                                        </time>

                                        <span className={showContent5 ? 'more-content' : 'more-content hidden'}>
                                            <p className='roadmap-content-border'>
                                                DSA Infrastructure Setup : <span className='roadmap-content'>
                                                    Establish high-capacity, high-speed data storage infrastructure
                                                    capable of handling large volumes of data required for AI training and development.
                                                </span>
                                            </p>
                                            <p className='roadmap-content-border'>
                                                Decentralized Storage Integration : <span className='roadmap-content'>
                                                    Integrate decentralized storage solutions into the
                                                    platform, leveraging blockchain technology for secure, tamper-proof data storage and
                                                    access.
                                                </span>
                                            </p>
                                            <p className='roadmap-content-border'>
                                                Data Management Tools : <span className='roadmap-content'>
                                                    Develop user-friendly data management tools that enable
                                                    efficient data retrieval, sharing, and collaboration across the platform's ecosystem.
                                                </span>
                                            </p>
                                        </span>
                                    </div>
                                </li>


                                <li className="in-view">
                                    <div data-aos="fade-right" onClick={toggleContent6}>
                                        <time >
                                            Phase 6 <br />
                                            <span className='roadmap-header-p'> Platform Expansion and Integration
                                                
                                            </span><i className={`fa fa-angle-${showContent6 ? 'up' : 'down'} toggle-content`} aria-hidden="true"></i>
                                        </time>

                                        <span className={showContent6 ? 'more-content' : 'more-content hidden'}>
                                            <p className='roadmap-content-border'>
                                                Feature Expansion : <span className='roadmap-content'>
                                                    Expand the platform's capabilities by integrating additional AI
                                                    training modules, data analytics tools, and collaboration features.
                                                </span>
                                            </p>
                                            <p className='roadmap-content-border'>
                                                Partnership Development : <span className='roadmap-content'>
                                                    Forge strategic partnerships with industry leaders and
                                                    technology providers to enhance the platform's offerings and reach new markets.
                                                </span>
                                            </p>
                                            <p className='roadmap-content-border'>
                                                Community Engagement : <span className='roadmap-content'>
                                                    Engage with the platform's community of users, developers,
                                                    and stakeholders to gather feedback, foster collaboration, and drive further
                                                    advancements in AI and blockchain technology.
                                                </span>
                                            </p>
                                        </span>
                                    </div>
                                </li>


                                <li className="in-view">
                                    <div data-aos="fade-right" onClick={toggleContent7}>
                                        <time >
                                            Phase 7 <br />
                                            <span className='roadmap-header-p'> AGI Development and Deployment
                                                
                                            </span> <i className={`fa fa-angle-${showContent7 ? 'up' : 'down'} toggle-content`} aria-hidden="true"></i>
                                        </time>

                                        <span className={showContent7 ? 'more-content' : 'more-content hidden'}>
                                            <p className='roadmap-content-border'>
                                                AGI Research and Development : <span className='roadmap-content'>
                                                    Focus on the development and deployment of Artificial
                                                    General Intelligence (AGI) systems, leveraging Neurolov's platform and ecosystem.
                                                </span>
                                            </p>
                                            <p className='roadmap-content-border'>
                                                Industry Applications : <span className='roadmap-content'>
                                                    Explore and deploy AGI applications across various industries
                                                    such as healthcare, finance, and robotics, demonstrating their versatility and potential
                                                    impact.
                                                </span>
                                            </p>
                                            <p className='roadmap-content-border'>
                                                Ethical Considerations : <span className='roadmap-content'>
                                                    Ensure adherence to ethical standards and safety protocols in
                                                    AGI development and deployment, prioritizing the benefits to humanity while mitigating
                                                    potential risks.
                                                </span>
                                            </p>
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <p className="roadmap-p-footer roadmap-p" data-aos="zoom-in">
                        Our commitment to innovation, integrity, and excellence guides us as we navigate the
complexities of this ever-evolving landscape.
While we strive for progress and transformation, it's important to recognize that the
path ahead is not without challenges or uncertainties. The dynamic nature of technology
means that changes can occur, unforeseen obstacles may arise, and adaptations may be
necessary. Yet, it is precisely in these moments of uncertainty that opportunity lies —
opportunity to learn, to grow, and to evolve.
Thank you for joining us on this incredible journey. The future awaits, and together, we
will shape it — one breakthrough at a time.
                            </p>
                    </div>
                </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Roadmap;