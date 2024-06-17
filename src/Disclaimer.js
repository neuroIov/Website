import React from 'react';
import './index.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Disclaimer = () => {
    return (
        <>
            <Navbar />
            <section id='privacy'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-1 col-12 col-sm-12 col-lg-1'>

                        </div>
                        <div className='col-md-10 col-12 col-sm-12 col-lg-10'>
                            <h1 className='privacy-h1' data-aos="fade-up">
                                Disclaimer
                            </h1>
                           

                            <div className='privacy-second'>
                            

                                <ul>
                                    <li data-aos="fade-up">
                                    This document, along with the information contained herein, is presented for informational purposes only
and should not be considered a source of investment, financial, technical, tax, or legal advice. The
Neurolov project, as described in this document, is not an offer to sell or a solicitation of an offer to buy
any securities in any jurisdiction where such offer or solicitation would be unlawful.
                                    </li>
                                    <li data-aos="fade-up">
                                    Investing in nLOV Tokens involves a high degree of risk. Potential purchasers should be aware of these risks
and should make a decision to invest only after careful consideration and, if necessary, consultation with
their legal, financial, tax, and other advisors. The nLOV Token project is in its early development stage, and
while we are committed to achieving all outlined objectives, there is no assurance that these goals will be
met.
                                    </li>
                                    <li data-aos="fade-up">
                                    The future development stages of the Neurolov, including the implementation of its technology and the
utility of nLOV Tokens, are subject to numerous risks and uncertainties. There can be no assurance that the
project or the nLOV Tokens will be fully developed as planned or that they will have any utility as
proposed.
                                    </li>
                                    <li data-aos="fade-up">
                                    Additionally, the advancement of Artificial General Intelligence (AGI) poses unique challenges and
uncertainties. While Neurolov is dedicated to the responsible development of AI technologies, including
AGI, the realization of AGI carries inherent risks, including but not limited to ethical considerations,
societal impacts, and technical feasibility.
                                    </li>
                                    <li data-aos="fade-up">
                                    The purchase of nLOV Tokens should be considered only by individuals or entities that understand the
risks associated with digital assets and who are in a position to bear these risks. Prospective purchasers
should not construe the contents of this document as legal, tax, investment, or other advice. Each
prospective purchaser is urged to consult with their own advisors concerning such matters.
                                    </li>
                                    <li data-aos="fade-up">
                                    The regulatory status of nLOV Tokens and digital assets is uncertain and may change rapidly. It is the
responsibility of each token purchaser to understand how cryptocurrencies and blockchain technology are
regulated in their jurisdiction and to comply with all applicable laws and regulations in their area.
                                    </li>
                                    <li data-aos="fade-up">
                                    No representations or warranties, express or implied, are made by the Neurolov project team or any of its
affiliates regarding the accuracy, completeness, or suitability of this document or the nLOV Token for any
purpose. Any reliance on the information in this document is at the user's own risk.</li>

<li data-aos="fade-up">
By participating in the Neurolov Project, including purchasing nLOV Tokens, users acknowledge that they
have read, understood, and agree to the terms outlined in this disclaimer.
</li>
                                </ul>

                               
                               
                            </div>
                        </div>
                        <div className='col-md-1 col-12 col-sm-12 col-lg-1'>

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Disclaimer;