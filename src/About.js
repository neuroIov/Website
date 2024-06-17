import React, { useState } from 'react';
import './index.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Top from './Top';
import about_us from './componentns/about-us.png';
import about_bottom from './componentns/about-bottom.png';
import about_us_2 from './componentns/about-us-2.png';
import feature1 from './componentns/feature1.png';
import feature2 from './componentns/feature2.png';
import feature3 from './componentns/feature3.png';
import seperator from './componentns/top-01.svg';
import mission from './componentns/mission.png';
import GPU from './componentns/GPU-ABOUT.mp4'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const About = () => {
    const [visibleAnswers, setVisibleAnswers] = useState({
        a1: true,
        a2: false,
        a3: false,
    });

    const toggleAnswer = (key) => {
        setVisibleAnswers((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };
    return (
        <>


            <section id='About'>
                <div className='about-class'>
                    <Navbar />
                    <div className='about-cnt' data-aos="zoom-in">
                        <h1 className='gradient-text about-h1'>
                            About Us
                        </h1>
                        <div className='about-link'>
                            <Link to="/" className='title'>Home > </Link>  <Link className='title' href='/'>
                                About Us
                            </Link>
                        </div>
                    </div>
                </div>

            </section>

            <img src={seperator} className="first-one" alt="Top Seperator" />

            <section id="value-proposition">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 col-12 col-sm-12 col-lg-2">

                        </div>
                        <div className="col-md-8 col-12 col-sm-12 col-lg-8">
                            <div className="mx-auto" style={{ textAlign: 'center' }}>
                                <h4 className="subtitle-2 about-subtitle" data-aos="zoom-in">
                                    <span className="theme-gradient" style={{ textAlign: 'center' }}>About Neurolov</span>
                                </h4>
                            </div>
                            <p className="touch-head-p mx-auto" style={{ textAlign: 'center' }} data-aos="zoom-in">
                                About Neurolov
                            </p>
                            {/* <p className="subtitle" data-aos="zoom-in">
                                Unlock the Potential of AGI in the Metaverse
                            </p> */}
                        </div>
                        <div className="col-md-2 col-12 col-sm-12 col-lg-2">

                        </div>
                    </div>


                    <div className="row value-proposition-2">
                        <div className="col-md-12 col-12 col-sm-12 col-lg-6" data-aos="fade-up">
                            {/* <img src={about_us} className="value-proposition" alt="Value Proposition" /> */}
                            <video autoPlay muted loop className='value-proposition'>
                                <source src={GPU} type="video/mp4" />
                                Your browser does not support HTML5 video.
                            </video>
                        </div>

                        <div className="col-md-12 col-12 col-sm-12 col-lg-6 value-proposition-col-2" data-aos="fade-up">
                            <h1 className="value-proposition-h1">
                                Transforming Industries with General Intelligence
                            </h1>
                            <p className="value-proposition-p mobile-p">

                                Neurolov is at the forefront of technological innovation, pioneering the convergence of blockchain technology, artificial intelligence, and distributed computing. By integrating these cutting-edge domains, Neurolov is transforming the landscape of computational power and AI development.
                            </p>

                            <p className='value-proposition-p mobile-p'>
                                Our platform leverages the immense potential of distributed computing to harness idle GPU resources from around the globe. This decentralized network of computational power enables unprecedented efficiency and scalability, driving the rapid advancement of Artificial General Intelligence (AGI). By tapping into otherwise unused computational capacity, we ensure that every GPU cycle is utilized to its fullest potential, contributing to a collective goal of creating more advanced and capable AI systems.
                            </p>

                            <a href="#about-section-2" className="gradient-btn node-btn learn-more">
                                Our Story
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about-section-2">
                <div className='about-section-2-cnt'>
                    <div className="container">



                        <div className="row value-proposition-2 about-us-row-2">


                            <div className='col-md-12 col-12 col-sm-12 col-lg-12'>
                                <div data-aos="fade-up" class="economy__block first-block" >
                                    <div class="economy__block-content">
                                        <div class="section-header section-header--white section-header--tire section-header--small-margin">

                                            <h2 class="gradient-text determine">Our Story
                                            </h2>
                                        </div>
                                        <div data-aos="fade-up" class="about__animated-content" >



                                            <p className='about-content-p'>
                                                Neurolov was founded by a team of visionary technologists and AI
                                                researchers who shared a common vision of leveraging blockchain and
                                                distributed computing to accelerate AI development. Since our inception,
                                                we have been at the forefront of innovation, driving progress towards the
                                                creation of AGI while empowering individuals to participate in the AI
                                                revolution.
                                            </p>

                                            <div className='row about-us-row-2'>
                                                <div className='col-md-12 col-12 col-sm-12 col-lg-4' data-aos="fade-up">
                                                    <img src={feature1} className='feature-icon' />
                                                    <h4 className='about-us-feature gradient-text'>
                                                        Blockchain
                                                    </h4>
                                                    <p className='feature-p'>
                                                        Clownfish catfish antenna codlet alfonsino squirrelfish deepwater flathead sea lamprey.
                                                    </p>
                                                </div>

                                                <div className='col-md-12 col-12 col-sm-12 col-lg-4' data-aos="fade-up">
                                                    <img src={feature2} className='feature-icon' />
                                                    <h4 className='about-us-feature gradient-text'>
                                                        Cloud Computing
                                                    </h4>
                                                    <p className='feature-p'>
                                                        Clownfish catfish antenna codlet alfonsino squirrelfish deepwater flathead sea lamprey.
                                                    </p>
                                                </div>

                                                <div className='col-md-12 col-12 col-sm-12 col-lg-4' data-aos="fade-up">
                                                    <img src={feature3} className='feature-icon' />
                                                    <h4 className='about-us-feature gradient-text'>
                                                        GPU Renting
                                                    </h4>
                                                    <p className='feature-p'>
                                                        Clownfish catfish antenna codlet alfonsino squirrelfish deepwater flathead sea lamprey.
                                                    </p>
                                                </div>
                                            </div>


                                            <a href="#about-section-3" className="gradient-btn node-btn learn-more" data-aos="fade-up">
                                                Our Mission
                                            </a>

                                        </div>
                                    </div>

                                </div>
                            </div>




                        </div>

                    </div>
                </div>
            </section>


            <section id="about-section-3">
                <div className='container'>

                    <div className="row">

                        <div className="col-md-12 col-12 col-sm-12 col-lg-12">
                            <div className="mx-auto" style={{ textAlign: 'center' }}>
                                <h4 className="subtitle-2 about-subtitle" data-aos="fade-up">
                                    <span className="theme-gradient" style={{ textAlign: 'center' }}>Mission, Vision & Platform </span>
                                </h4>
                            </div>
                            <p className="touch-head-p mx-auto" style={{ textAlign: 'center' }} data-aos="fade-up">
                                Our Mission, Vision & Platform
                            </p>
                            {/* <p className="subtitle" data-aos="zoom-in">
                                Unlock the Potential of AGI in the Metaverse
                            </p> */}
                        </div>



                        <div className='col-md-12 col-12 col-sm-12 col-lg-7'>

                            <div className="mx-auto" style={{ textAlign: 'center' }}>

                                <h3 id="q1" onClick={() => toggleAnswer('a1')} className="question mt-5" data-aos="fade-up">
                                    <i id="first" className={`fa ${visibleAnswers.a1 ? 'fa-angle-up' : 'fa-angle-down'}`} />
                                    Our Mission

                                    {visibleAnswers.a1 && <p id="a1" className="answer">
                                        At Neurolov, our mission is twofold: to democratize access to
                                        high-performance computing resources and to advance the frontier of
                                        artificial intelligence. By enabling individuals and organizations to buy and
                                        rent idle GPU power through our platform, we aim to make computational
                                        resources more accessible and affordable. Simultaneously, we are dedicated
                                        to pushing the boundaries of AI research and development, with the
                                        ultimate goal of creating AGI that benefits humanity as a whole.
                                    </p>}

                                </h3>

                                <h3 id="q2" onClick={() => toggleAnswer('a2')} className="question" data-aos="fade-up">
                                    <i id="second" className={`fa ${visibleAnswers.a2 ? 'fa-angle-up' : 'fa-angle-down'}`} />
                                    Our Vision

                                    {visibleAnswers.a2 && <p id="a2" className="answer">
                                        We envision a future where computational power is democratized and AI
                                        technologies are harnessed for the greater good of society. Through our
                                        innovative platform, we seek to empower individuals and organizations to
                                        participate in the development of AGI, driving progress towards a more
                                        intelligent and equitable world.
                                    </p>}

                                </h3>

                                <h3 id="q3" onClick={() => toggleAnswer('a3')} className="question" data-aos="fade-up">
                                    <i id="third" className={`fa ${visibleAnswers.a3 ? 'fa-angle-up' : 'fa-angle-down'}`} />
                                    Our Platform

                                    {visibleAnswers.a3 && <p id="a3" className="answer">
                                        Neurolov's platform allows users to monetize their idle GPU resources by
                                        renting them out to others in exchange for $nLOV tokens, our native
                                        cryptocurrency. By tapping into this decentralized network of
                                        computational power, researchers and developers can access the resources
                                        they need to accelerate AI development, while GPU owners can earn
                                        passive income from their hardware.
                                    </p>}

                                </h3>


                                {/* <Link to="/FAQ#navbar" className="gradient-btn node-btn learn-more doubt" data-aos="zoom-in">
                                    Contact Us
                                </Link> */}
                            </div>

                        </div>

                        <div className='col-md-5 col-12 col-sm-12 col-lg-5'>
                            <img src={mission} className="value-proposition mission-img" alt="Value Proposition" />
                        </div>
                    </div>
                </div>
            </section>

            <section id='firm-details'>
                <div className='container'>
                    <div className='row'>
                        <div className="col-md-12 col-12 col-sm-12 col-lg-12">
                            <div className="mx-auto" style={{ textAlign: 'center' }}>
                                <h4 className="subtitle-2 about-subtitle" data-aos="fade-up">
                                    <span className="theme-gradient" style={{ textAlign: 'center' }}>Firm Details </span>
                                </h4>
                            </div>
                            <p className="touch-head-p mx-auto" style={{ textAlign: 'center' }} data-aos="fade-up">
                                Firm Details
                            </p>
                        </div>
                    </div>
                    <div className='content-row' data-aos="fade-up">
                    <div className='row'>
                        <div className='col-md-12 col-12 col-lg-4 col-sm-12 firm-col' data-aos="fade-up">
                            <h1 className='firm-h1'>
                            For Queries
                            </h1>
                            <a class="footer-link" href="mailto:support@neurolov.ai">support@neurolov.ai</a>
                        </div>
                        <div className='col-md-12 col-12 col-lg-4 col-sm-12 firm-col' data-aos="fade-up">
                        <h1 className='firm-h1'>
                            Location
                            </h1>
                            <p class="footer-firm-p">Gandhinagar, Gujarat, India</p>
                        </div>
                        <div className='col-md-12 col-12 col-lg-4 col-sm-12' data-aos="fade-up">
                        <h1 className='firm-h1'>
                            Contact US
                            </h1>
                            <a class="footer-link" href="tel:+91123456789">+91 12345 67891</a>
                        </div>
                    </div>

                    <div class="separator-animated animated-true mt--50 mb--50 seperat"></div>

                    <div className='row firm-row-2'>
                        <div className='col-md-12 col-12 col-lg-2 col-sm-12'>
                            
                        </div>
                        <div className='col-md-12 col-12 col-lg-4 col-sm-12 firm-col' data-aos="fade-up">
                        <h1 className='firm-h1'>
                            Registered Name
                            </h1>
                            <p class="footer-firm-p">Neurolov Technologies Inc.</p>
                        </div>

                        <div className='col-md-12 col-12 col-lg-4 col-sm-12' data-aos="fade-up">
                        <h1 className='firm-h1'>
                            Registered Number
                            </h1>
                            <p class="footer-firm-p">45623987</p>
                        </div>
                        <div className='col-md-12 col-12 col-lg-2 col-sm-12'>
                           
                        </div>
                    </div>
                    </div>
                </div>
            </section>


            <a href="#navbar"><i className="fa fa-angle-up footer-up" aria-hidden="true"></i></a>
            <Footer />
        </>

    )
}

export default About;