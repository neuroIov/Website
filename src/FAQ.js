import React, { useState } from 'react';
import './index.css';
import Navbar from './Navbar';
import Footer from './Footer';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const FAQ = () => {
    const [visibleAnswers, setVisibleAnswers] = useState({
        a1: false,
        a2: false,
        a3: false,
        a4: false,
        a5: false,
        a6: false,
        a7: false,
        a8: false,
        a9: false,
        a10: false,
        a11: false,
        a12: false,
        a13: false,
        a14: false,
        a15: false,
        a16: false,
        a17: false,
        a18: false,
       
    });

    const toggleAnswer = (key) => {
        setVisibleAnswers((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };
    return (
        <>
            <Navbar />
            <section id="faq">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-12 col-sm-12 col-lg-2">

                        </div>
                        <div className="col-md-12 col-12 col-sm-12 col-lg-8">
                            <div className="mx-auto" style={{ textAlign: 'center' }}>
                                <h4 className="subtitle-2" data-aos="zoom-in">
                                    <span className="theme-gradient" style={{ textAlign: 'center' }}>Accordion</span>
                                </h4>
                                <p className="touch-head-p mx-auto" style={{ textAlign: 'center' }} data-aos="zoom-in">
                                    Frequently Asked Questions
                                </p>

                                <p className="subtitle faq-subtitle" data-aos="fade-up">
                                    Welcome to our FAQ section—your one-stop destination for answers to all your burning
                                    questions!
                                </p>


                                <h3 id="q1" onClick={() => toggleAnswer('a1')} className="question mt-5" data-aos="fade-up">
                                    <i id="first" className={`fa ${visibleAnswers.a1 ? 'fa-angle-up' : 'fa-angle-down'}`} />
                                    What is Neurolov?

                                    {visibleAnswers.a1 && <p id="a1" className="answer">Neurolov is a cutting-edge platform that integrates AI and blockchain technologies tooffer GPU renting, distributed computing, advanced AI training modules, and secure
                                        data management, ultimately aiming to develop and deploy Artificial General
                                        Intelligence (AGI).</p>}

                                </h3>

                                <h3 id="q2" onClick={() => toggleAnswer('a2')} className="question" data-aos="fade-up">
                                    <i id="second" className={`fa ${visibleAnswers.a2 ? 'fa-angle-up' : 'fa-angle-down'}`} />
                                    How does the GPU Renting Program work?

                                    {visibleAnswers.a2 && <p id="a2" className="answer">Users can rent GPU resources through an intuitive interface with clear pricing and
                                        availability. The program ensures secure payments and efficient resource management
                                        using blockchain technology.</p>}

                                </h3>

                                <h3 id="q3" onClick={() => toggleAnswer('a3')} className="question" data-aos="fade-up">
                                    <i id="third" className={`fa ${visibleAnswers.a3 ? 'fa-angle-up' : 'fa-angle-down'}`} />
                                    What is the Distributed Computing Framework (DCF)?

                                    {visibleAnswers.a3 && <p id="a3" className="answer">The DCF leverages the combined power of multiple rented GPUs across a distributednetwork, providing scalable and efficient computational solutions. It ensures secure, decentralized coordination of resources through blockchain.</p>}

                                </h3>

                                <h3 id="q4" onClick={() => toggleAnswer('a4')} className="question" data-aos="fade-up">
                                    <i id="fourth" className={`fa ${visibleAnswers.a4 ? 'fa-angle-up' : 'fa-angle-down'}`} />
                                    How do Advanced AI Training Modules (AITM) enhance AI development?

                                    {visibleAnswers.a4 && <p id="a4" className="answer">To participate in the pre-sale, AITM focuses on deep learning, reinforcement learning, and other AI methodologies
                                        essential for AGI. These modules utilize distributed computing power to develop scalable, adaptable AI algorithms and systems.</p>}

                                </h3>

                                <h3 id="q4" onClick={() => toggleAnswer('a4')} className="question" data-aos="fade-up">
                                    <i id="fourth" className={`fa ${visibleAnswers.a4 ? 'fa-angle-up' : 'fa-angle-down'}`} />
                                    What are the key features of Neurolov’s Data Storage and Access (DSA) solutions?

                                    {visibleAnswers.a4 && <p id="a4" className="answer">DSA provides high-capacity, high-speed storage solutions capable of handling large
                                        datasets quickly. It includes efficient data retrieval and management systems with
                                        decentralized storage for enhanced reliability and security.</p>}

                                </h3>

                                <h3 id="q5" onClick={() => toggleAnswer('a5')} className="question" data-aos="fade-up">
                                    <i id="fifth" className={`fa ${visibleAnswers.a5 ? 'fa-angle-up' : 'fa-angle-down'}`} />
                                    What makes Neurolov's AGI development unique?

                                    {visibleAnswers.a5 && <p id="a5" className="answer">Neurolov integrates GPU renting, distributed computing, advanced AI training, and
                                        blockchain technology to develop AGI that can perform a wide range of tasks with
                                        human-like cognitive abilities. The approach ensures scalability, security, and ethical
                                        development.</p>}

                                </h3>

                                <h3 id="q6" onClick={() => toggleAnswer('a6')} className="question" data-aos="fade-up">
                                    <i id="sixth" className={`fa ${visibleAnswers.a6 ? 'fa-angle-up' : 'fa-angle-down'}`} />
                                    What are the benefits of joining the Neurolov community?

                                    {visibleAnswers.a6 && <p id="a6" className="answer">Community members gain access to cutting-edge tools and resources, collaboration
                                        opportunities, exclusive rewards, and the ability to influence project direction throughgovernance participation. They also benefit from continuous learning and development
                                        opportunities.</p>}

                                </h3>

                                <h3 id="q7" onClick={() => toggleAnswer('a7')} className="question" data-aos="fade-up">
                                    <i id="seventh" className={`fa ${visibleAnswers.a7 ? 'fa-angle-up' : 'fa-angle-down'}`} />
                                    How can I participate in Neurolov’s governance?

                                    {visibleAnswers.a7 && <p id="a7" className="answer">
                                        By holding and staking Neurolov tokens, community members can vote on key decisions
                                        and proposals, ensuring the project aligns with their interests and vision.</p>}

                                </h3>

                                <h3 id="q8" onClick={() => toggleAnswer('a8')} className="question" data-aos="fade-up">
                                    <i id="eight" className={`fa ${visibleAnswers.a8 ? 'fa-angle-up' : 'fa-angle-down'}`} />
                                    What are Neurolov’s plans for investor attraction?

                                    {visibleAnswers.a8 && <p id="a8" className="answer">Neurolov offers various initiatives such as staking programs, liquidity mining, yield
                                        farming, referral programs, token buyback and burn, governance participation, and
                                        exclusive access and benefits for loyal investors.</p>}

                                </h3>

                                <h3 id="q9" onClick={() => toggleAnswer('a9')} className="question" data-aos="fade-up">
                                    <i id="nine" className={`fa ${visibleAnswers.a9 ? 'fa-angle-up' : 'fa-angle-down'}`} />
                                    How does Neurolov use blockchain technology?

                                    {visibleAnswers.a9 && <p id="a9" className="answer">Blockchain technology is integrated across the platform to ensure secure, transparent
                                        transactions, decentralized coordination of resources, and tamper-proof operations. It
                                        also plays a crucial role in data management and security.</p>}

                                </h3>

                                <h3 id="q10" onClick={() => toggleAnswer('a10')} className="question" data-aos="fade-up">
                                    <i id="ten" className={`fa ${visibleAnswers.a10 ? 'fa-angle-up' : 'fa-angle-down'}`} />
                                    What is the roadmap for Neurolov’s development?

                                    {visibleAnswers.a9 && <p id="a10" className="answer">The roadmap includes platform development and beta launch, full platformlaunch andmarketing, expansion and integration of additional modules. For complete Lifecycle
                                        please check the <Link className='faq-link' to="/roadmap">Roadmap</Link></p>}

                                </h3>

                                <h3 id="q11" onClick={() => toggleAnswer('a11')} className="question" data-aos="fade-up">
                                    <i id="eleven" className={`fa ${visibleAnswers.a11 ? 'fa-angle-up' : 'fa-angle-down'}`} />
                                    How does Neurolov ensure ethical AI development?

                                    {visibleAnswers.a9 && <p id="a11" className="answer">Neurolov adheres to ethical standards and safety protocols, ensuring that AI
                                        technologies are developed and deployed responsibly to benefit humanity without
                                        posing risks. Blockchain ensures compliance and transparency.
                                    </p>}

                                </h3>

                                <h3 id="q12" onClick={() => toggleAnswer('a12')} className="question" data-aos="fade-up">
                                    <i id="twelve" className={`fa ${visibleAnswers.a12 ? 'fa-angle-up' : 'fa-angle-down'}`} />
                                    How does Neurolov ensure ethical AI development?

                                    {visibleAnswers.a9 && <p id="a12" className="answer">You can join the Neurolov community by participating in our <a href='' className='faq-link'>Discord</a> & <a href='' className='faq-link'>Twitter</a> and engaging in governance, attending events and webinars, and following us
                                        on all social media.
                                    </p>}

                                </h3>

                                <h3 id="q13" onClick={() => toggleAnswer('a13')} className="question" data-aos="fade-up">
                                    <i id="thirteen" className={`fa ${visibleAnswers.a13 ? 'fa-angle-up' : 'fa-angle-down'}`} />
                                    What are the unique selling propositions (USPs) of Neurolov?

                                    {visibleAnswers.a9 && <p id="a13" className="answer">Neurolov’s USPs include its integrated approach to GPU renting, distributed computing,
                                        advanced AI training, and blockchain technology, offering a comprehensive and secureplatform for AGI development and deployment.
                                    </p>}

                                </h3>

                                <h3 id="q14" onClick={() => toggleAnswer('a14')} className="question" data-aos="fade-up">
                                    <i id="fourteen" className={`fa ${visibleAnswers.a14 ? 'fa-angle-up' : 'fa-angle-down'}`} />
                                    What is the Neurolov token (nLOV)?

                                    {visibleAnswers.a14 && <p id="a14" className="answer">The Neurolov token (nLOV) is the native cryptocurrency of the Neurolov platform, facilitating transactions, rewarding participants, and enabling governance within the
                                        ecosystem.
                                    </p>}

                                </h3>

                                <h3 id="q15" onClick={() => toggleAnswer('a15')} className="question" data-aos="fade-up">
                                    <i id="fifteen" className={`fa ${visibleAnswers.a15 ? 'fa-angle-up' : 'fa-angle-down'}`} />
                                    How can I acquire Neurolov tokens?

                                    {visibleAnswers.a15 && <p id="a15" className="answer">You can acquire Neurolov tokens through the pre-sale or ICO intially. Afterwards throughstaking programs, liquidity mining, yield farming, cryptocurrency exchanges, and referral
                                        programs.
                                    </p>}

                                </h3>


                                <h3 id="q16" onClick={() => toggleAnswer('a16')} className="question" data-aos="fade-up">
                                    <i id="sixteen" className={`fa ${visibleAnswers.a9 ? 'fa-angle-up' : 'fa-angle-down'}`} />
                                    What are the benefits of staking? 

                                    {visibleAnswers.a16 && <p id="a16" className="answer">Staking Neurolov tokens provides passive income, incentivizes long-termholding, grants
                                        governance participation, and enhances network security.
                                    </p>}

                                </h3>

                                <h3 id="q17" onClick={() => toggleAnswer('a17')} className="question" data-aos="fade-up">
                                    <i id="seventeen" className={`fa ${visibleAnswers.a17 ? 'fa-angle-up' : 'fa-angle-down'}`} />
                                    How does the Neurolov token buyback and burn mechanism work?

                                    {visibleAnswers.a17 && <p id="a17" className="answer">The buyback and burn mechanism involves using a portion of the project’s revenue tobuy back nLOV tokens from the market and permanently removing themfromcirculation to reduce supply and potentially increase value.
                                    </p>}

                                </h3>

                                <h3 id="q18" onClick={() => toggleAnswer('a18')} className="question" data-aos="fade-up">
                                    <i id="eighteen" className={`fa ${visibleAnswers.a18 ? 'fa-angle-up' : 'fa-angle-down'}`} />
                                    How can I use Neurolov tokens within the platform?

                                    {visibleAnswers.a18 && <p id="a18" className="answer">Neurolov tokens can be used to pay for GPU rentals, access AI training modules, participate in governance voting, earn rewards, and gain exclusive access to newfeatures and products within the platform.
                                    </p>}

                                </h3>

                                <p className="subtitle faq-subtitle faq-subtitle-2" data-aos="fade-up">
                                If you have any more questions or need further assistance, please feel free to reach out to our
team. You can join our community on Discord where you can engage directly with our
developers and other community members. Alternatively, you can email us at <a href='maito:support@neurolov.io' className='faq-link'>support@neurolov.io</a>
, and we’ll be happy to assist you. Your participation and feedback are
crucial to our continuous improvement and success, so don’t hesitate to get in touch!
                                </p>
{/* 
                                <Link to="/FAQ#navbar" className="gradient-btn node-btn learn-more doubt" data-aos="zoom-in">
                                    Contact Us
                                </Link> */}
                            </div>
                        </div>
                        <div className="col-md-2 col-12 col-sm-12 col-lg-2">

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default FAQ;