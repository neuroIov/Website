import React, { useState } from 'react';
import './index.css';
import value from './componentns/Neuro2.png';
import video from './componentns/video.mp4';
import Navbar from './Navbar';
import Top from './Top';
import Bottom from './Bottom';
import Footer from './Footer';
import why from './componentns/why.png';
import seperator from './componentns/top-01.svg';
import NeurolovVid from './componentns/Neurolov.mp4'
import GPU from './componentns/GPU.mp4'

const Neurolov = () => {
    return (
        <>
            <video autoPlay muted loop id="background-video">
                <source src={video} type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>
            <div className="overlay"></div>
            <Navbar />
            <section id="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-1 col-12 col-sm-12 col-lg-1">

                        </div>
                        <div className="col-md-10 col-12 col-sm-12 col-lg-10">
                            <div className='content'>
                                <h1 className="banner-h1" data-aos="zoom-in">
                                    <span className="gradient-text">GPU is the Fuel for AI</span>
                                </h1>

                                <p className="banner-p" data-aos="zoom-in">
                                    Transforming Industries with General Intelligence
                                </p>
                                <div className="buttons" data-aos="zoom-in">
                                    <a href="https://discord.gg/8HXdDDMJ" className="gradient-btn node-btn ">
                                        Join the Future
                                    </a>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-md-1 col-12 col-sm-12 col-lg-1">

                        </div>
                    </div>
                </div>

                {/* <img src="../static/Images/gpu.png" className="gpu-img"> */}
            </section>


            <img src={seperator} className="first-one" alt="Top Seperator" />

            <section id="value-proposition">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 col-12 col-sm-12 col-lg-2">

                        </div>
                        <div className="col-md-8 col-12 col-sm-12 col-lg-8">
                            <div className="mx-auto" style={{ textAlign: 'center' }}>
                                <h4 className="subtitle-2 about-subtitle" data-aos="fade-up">
                                    <span className="theme-gradient" style={{ textAlign: 'center' }}>Discover Neurolov</span>
                                </h4>
                            </div>
                            <p className="touch-head-p mx-auto" style={{ textAlign: 'center' }} data-aos="fade-up">
                                Discover Neurolov
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
                            {/* <img src={value} className="value-proposition" alt="Value Proposition" />
                             */}
                            <video autoPlay muted loop className='value-proposition'>
                                <source src={GPU} type="video/mp4" />
                                Your browser does not support HTML5 video.
                            </video>
                        </div>
                        {/* <div className="col-md-6 col-12 col-sm-12 col-lg-6 value-proposition-col-2" data-aos="fade-left">
                            <h1 className="value-proposition-h1">
                                Pioneering AGI through high-performance compute
                            </h1>
                            <p className="value-proposition-p">
                                Neurolov is designed with a comprehensive set of features that leverage advanced technologies
                                to provide a robust and user-friendly platform for AI development and deployment. Here are
                                some key features:-
                            </p>
                            <ul className="value-proposition-ul">
                                <li>
                                    User-Friendly GPU Renting Interface
                                </li>
                                <li>
                                    Secure Payment Systems
                                </li>
                                <li>
                                    Efficient Resource Management
                                </li>
                                <li>
                                    High-Capacity Data Storage Solutions
                                </li>
                                <li>
                                    Collaboration Tools for AI Development
                                </li>
                            </ul>
                            <a href="#" className="gradient-btn node-btn learn-more">
                                Learn More
                            </a>
                        </div> */}
                        <div className="col-md-12 col-12 col-sm-12 col-lg-6 value-proposition-col-2" data-aos="fade-up">
                            <h1 className="value-proposition-h1">
                                Blockchain GPU Sharing for AI
                            </h1>
                            <p className="value-proposition-p mobile-p">
                                Neurolov emphasizes democratizing high-performance computing, scalable AI training, and
                                secure transactions through blockchain, transforming how GPU resources are shared and utilized
                                in the digital economy. By providing a secure, efficient, and transparent platform, users can rent
                                out their idle computing power or access high-performance GPU resources on demand, using
                                Neurolov tokens ($nLOV) as the medium of exchange.
                            </p>

                            <p className='value-proposition-p mobile-p'>
                                Neurolov's platform allows users to monetize their idle GPU resources by
                                renting them out to others in exchange for $nLOV tokens, our native
                                cryptocurrency. By tapping into this decentralized network of
                                computational power, researchers and developers can access the resources
                                they need to accelerate AI development, while GPU owners can earn
                                passive income from their hardware.
                            </p>

                            <div>
                                <div className='learn-more-btn'>
                                    <a href="#" className="gradient-btn node-btn learn-more">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Bottom />

            <section id="touch">
                <div className="container">
                    <div className="mx-auto" style={{ textAlign: 'center' }}>
                        <h4 className="subtitle-2" data-aos="fade-up">
                            <span className="theme-gradient" style={{ textAlign: 'center' }}>OUR ECOSYSTEM</span>
                        </h4>
                    </div>
                    <p className="touch-head-p mx-auto" style={{ textAlign: 'center' }} data-aos="fade-up">
                        Ecosystem
                    </p>
                    <p className="subtitle" data-aos="fade-up">
                        NeuroLov, the platform for Artificial General Intelligence (AGI) exploration. Our decentralized platform combines the power of GPU sharing, large language models (LLMs), and blockchain technology to revolutionize AI research and development.
                    </p>
                    <div className="row touch-col-row">

                        <div className="col-md-12 col-12 col-sm-12 col-lg-4 touch-col" data-aos="fade-up">
                            <h3 className="touch-h3">
                            Compute DApp
                            </h3>
                            <p className="touch-p">
                                Streamlined Compute Sharing Marketplace
                            </p>
                        </div>
                        <div className="col-md-12 col-12 col-sm-12 col-lg-4 touch-col touch-col-2" data-aos="fade-up">
                            <h3 className="touch-h3">
                                Distributed Computing Framework
                            </h3>
                            <p className="touch-p">
                                Optimized load balancing and Resource sharing
                            </p>
                            
                        </div>
                        <div className="col-md-12 col-12 col-sm-12 col-lg-4 touch-col touch-col-3" data-aos="fade-up">
                            <h3 className="touch-h3">
                                Advanced AI Training Modules
                            </h3>
                            <p className="touch-p">
                                Automous Agents focused on reinforced learning
                            </p>
                            
                        </div>

                      
                    </div>
                    <div className='doc-btn' data-aos="fade-up">
                                    <a href="#" className="gradient-btn node-btn learn-more">
                                        Docs
                                    </a>
                                </div>
                </div>
            </section>

            <Top />

            <section id="discover">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 col-12 col-sm-12 col-lg-2">

                        </div>
                        <div className="col-md-8 col-12 col-sm-12 col-lg-8">
                            <div className="mx-auto" style={{ textAlign: 'center' }}>
                                <h4 className="subtitle-2 about-subtitle" data-aos="fade-up">
                                    <span className="theme-gradient" style={{ textAlign: 'center' }}>Why Neurolov</span>
                                </h4>
                            </div>
                            <p className="touch-head-p mx-auto" style={{ textAlign: 'center' }} data-aos="fade-up">
                                Why Neurolov?
                            </p>

                        </div>
                        <div className="col-md-2 col-12 col-sm-12 col-lg-2">

                        </div>
                    </div>

                    <div className="row value-proposition-2 second-value-proposition">
                    <div className="col-md-12 col-12 col-sm-12 col-lg-6 mobile" data-aos="fade-up">
                            {/* <img src={why} className="value-proposition second-img" alt="Value Proposition" /> */}
                            <video autoPlay muted loop className='value-proposition'>
                                <source src={NeurolovVid} type="video/mp4" />
                                Your browser does not support HTML5 video.
                            </video>
                        </div>
                        <div className="col-md-12 col-12 col-sm-12 col-lg-6 value-proposition-col-2 why-neurolov" data-aos="fade-up">
                            <h1 className="value-proposition-h1 why-h1">
                                Pioneering AGI
                            </h1>
                            <p className="value-proposition-p mobile-p">
                                Neurolov is designed with a comprehensive set of features that leverage advanced technologies
                                to provide a robust and user-friendly platform for AI development and deployment. Here are
                                some key features:-
                            </p>
                            <ul className="value-proposition-ul">
                                <li>
                                    User-Friendly GPU Renting Interface
                                </li>
                                <li>
                                    Secure Payment Systems
                                </li>
                                <li>
                                    Efficient Resource Management
                                </li>
                                <li>
                                    High-Capacity Data Storage Solutions
                                </li>
                                <li>
                                    Collaboration Tools for AI Development
                                </li>
                            </ul>
                            <a href="#" className="gradient-btn node-btn learn-more">
                                Learn More
                            </a>
                        </div>

                        <div className="col-md-12 col-12 col-sm-12 col-lg-6 desktop" data-aos="fade-up">
                            {/* <img src={why} className="value-proposition second-img" alt="Value Proposition" /> */}
                            <video autoPlay muted loop className='value-proposition'>
                                <source src={NeurolovVid} type="video/mp4" />
                                Your browser does not support HTML5 video.
                            </video>
                        </div>

                    </div>
                </div>
            </section>



            <a href="#navbar"><i className="fa fa-angle-up footer-up" aria-hidden="true"></i></a>

            <Footer />
        </>
    )
}

export default Neurolov;