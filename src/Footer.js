import React from 'react';
import './index.css';
import logo from './componentns/logo.png'
import Bottom from './Bottom';
import bgShape from './componentns/bg-shape-01.png';
import team from './componentns/team-01.png';
import twitter from './componentns/twitter.png';
import discord from './componentns/discord.png';
import join from './componentns/join.mp4'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const Footer = () => {
    return (
        <>
            <Bottom />
            <section id="join">
                
                <div className='row'>
                    <div className='col-md-1 col-12 col-sm-12 sol-lg-1'>

                    </div>
                    <div className='col-md-10 col-12 col-sm-12 sol-lg-10 join-box' data-aos="fade-up">
                        <div className='row'>
                            <div className='col-md-12 col-12 col-sm-12 col-lg-6 join-box-col-1'>
                                <p className="touch-head-p mx-auto join-h1">
                                    Join our Experts Community
                                </p>
                                <p className=" join-p">
                                    At Neurolov, we believe that innovation thrives in a collaborative environment. Our community
                                    is at the heart of everything we do, driving advancements in AI and blockchain technologies. By
                                    joining our community, you become part of a dynamic network of researchers, developers,
                                    investors, and enthusiasts who are passionate about pushing the boundaries of technology.
                                </p>
                            </div>
                            <div className='col-md-12 col-12 col-sm-12 col-lg-3'>
                                {/* <img src={bgShape} className='bg-shape'></img>
                                 */}
                                 <video autoPlay muted loop className='join-vid'>
                                <source src={join} type="video/mp4" />
                                Your browser does not support HTML5 video.
                            </video>
                            </div>
                            <div className='col-md-12 col-12 col-sm-12 col-lg-3 join-box-col-3' style={{ textAlign: 'center' }} >
                                <img src={team} className='bg-shape team'></img> <br></br>
                                <a href="https://discord.gg/8HXdDDMJ" className="gradient-btn node-btn join-btn">
                                    Join Us Now
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-1 col-12 col-sm-12 sol-lg-1'>

                    </div>
                
                </div>
            </section>
            <section id="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 col-12 col-sm-12 col-lg-12" data-aos="fade-up">
                            <img src={logo} class="footer-logo logo" />
                            {/* <p class="footer-p">
                    Our decentralized platform combines the power of GPU sharing, large language models, and blockchain technology to revolutionize AI research and development.
                    </p> */}
                            <div className='footer-link-div'>
                                <Link to="/about" className='footer-policy'>About </Link>
                                <Link to="/roadmap" className='footer-policy'> Roadmap </Link>
                                <Link to="/faq" className='footer-policy'> FAQ </Link>
                                <a href="#" className='footer-policy'> Docs </a>
                                <a href="#" className='footer-policy'> Whitepaper </a>
                            </div>
                            <div class="social-link">
                                <a href="https://discord.gg/8HXdDDMJ" class="social-link" target='_blank'>
                                    <img src={discord} className='social-icon' alt="Discord" />
                                </a>
                                <a href="#" class="social-link" target='_blank'>
                                    {/* <i class="fa fa-twitter" aria-hidden="true"></i> */}
                                    <img src={twitter} className='social-icon' alt="Twitter" />
                                </a>
                                <a href="#" class="social-link" target='_blank'>
                                    <i class="fa fa-reddit-alien" aria-hidden="true"></i>
                                </a>
                                <a href="#" class="social-link" target='_blank'>
                                    <i class="fa fa-telegram" aria-hidden="true"></i>
                                </a>

                            </div>
                        </div>

                        {/* <div class="col-md-2 col-12 col-sm-12 col-lg-2 useful-links-col" data-aos="fade-up">
                    <h1 class="footer-h1">
                        Useful Links
                    </h1>
                    <ul class="footer-ul">
                        <Link to="/about">
                            <li class="footer-li">
                                <i class="fa fa-angle-right" aria-hidden="true"></i>   About
                            </li>
                        </Link>
                        <Link to="/roadmap">
                            <li class="footer-li">
                                <i class="fa fa-angle-right" aria-hidden="true"></i>  Roadmap
                            </li>
                        </Link>
                        <Link to="/faq">
                            <li class="footer-li">
                                <i class="fa fa-angle-right" aria-hidden="true"></i>  FAQ
                            </li>
                        </Link>
                        <a href="#faq">
                            <li class="footer-li">
                                <i class="fa fa-angle-right" aria-hidden="true"></i>  Docs
                            </li>
                        </a>
                        <a href="#whitepaper">
                            <li class="footer-li">
                                <i class="fa fa-angle-right" aria-hidden="true"></i>  Whitepaper
                            </li>
                        </a>
                    </ul>
                </div> */}
                        {/* <div class="col-md-1 col-12 col-sm-12 col-lg-1">
                   
                   </div> */}
                        {/* <div class="col-md-5 col-12 col-sm-12 col-lg-5" data-aos="fade-up">
                    <h1 class="footer-h1">
                       Firm Details
                    </h1>
                
                    <ul class="footer-ul">
                        <a href="#about">
                            <li class="footer-li">
                                <i class="fa fa-angle-right" aria-hidden="true"></i>   For Queries : <a class="footer-link" href="mailto:support@neurolov.ai">support@neurolov.ai</a>
                            </li>
                        </a>
                        <a href="#value-proposition">
                            <li class="footer-li">
                                <i class="fa fa-angle-right" aria-hidden="true"></i>  Email Us At : <a class="footer-link" href="mailto:offic@neurolov.ai">office@neurolov.ai</a>
                            </li>
                        </a>

                        <a href="#roadmap">
                            <li class="footer-li">
                                <i class="fa fa-angle-right" aria-hidden="true"></i>  Location :
                            </li>
                        </a>

                        <a href="#roadmap">
                            <li class="footer-li">
                                <i class="fa fa-angle-right" aria-hidden="true"></i>  Contact :
                            </li>
                        </a>

                        <a href="#roadmap">
                            <li class="footer-li">
                                <i class="fa fa-angle-right" aria-hidden="true"></i>  Registered Name : Neurolov Technologies Inc.
                            </li>
                        </a>

                        <a href="#roadmap">
                            <li class="footer-li">
                                <i class="fa fa-angle-right" aria-hidden="true"></i>  Registration Number :
                            </li>
                        </a>
                        
                    </ul>
                    </div> */}

                    </div>
                    <div class="separator-animated animated-true mt--50 mb--50"></div>
                    <div class="copyright">
                        <Link to="/privacy_policy" className='footer-policy'>Privacy Policy </Link>
                        <Link to="/terms_conditions" className='footer-policy'> Terms & Conditions </Link>
                        <Link to="/disclaimer" className='footer-policy'> Disclaimer </Link>
                        <p className='copyright-p'>
                            Copyright © 2024, Neurolov. All rights reserved. Neurolov Team</p>
                    </div>
                </div>

            </section>

            


            {/* <div class="social-links">
                <a href="#"><i class="fa fa-twitter social-link" aria-hidden="true"></i></a><br/>
                <a href="#"><i class="fa fa-facebook social-link" aria-hidden="true"></i></a><br/>
                <a href="#"><i class="fa fa-linkedin social-link" aria-hidden="true"></i></a><br/>
                <a href="#"><i class="fa fa-pinterest social-link" aria-hidden="true"></i></a><br/>

		    </div> */}


        </>
    )
}

export default Footer;