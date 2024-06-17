import React from 'react';
import './index.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Terms = () => {
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
                                Terms of Service
                            </h1>
                            <p className='privacy-h1-p' data-aos="fade-up">
                                These Terms of Service ("Terms") govern your use of the Neurolov presale website (the "Website") and the purchase of nLOV tokens ("Tokens"). By accessing or using the Website and participating in the presale, you agree to be bound by these Terms.
                            </p>

                            <div className='privacy-second'>
                                <h2 className='privacy-h2' data-aos="fade-up">
                                    Eligibility
                                </h2>

                                <ul data-aos="fade-up">
                                    <li>
                                        You must be at least 18 years old and legally capable of entering into contracts to participate in the presale and purchase Tokens. By accessing the Website, you represent and warrant that you meet these eligibility requirements.
                                    </li>
                                </ul>

                                <h2 className='privacy-h2' data-aos="fade-up">
                                    Token Sale
                                </h2>

                                <ol data-aos="fade-up">
                                    <li>
                                        <strong className='privacy-span'>Participation: </strong>  To participate in the presale and purchase Tokens, you must register for an account on the Website and complete the necessary Know Your Customer (KYC) verification process. Only registered users who have successfully completed KYC verification are eligible to participate.
                                    </li>

                                    <li>
                                        <strong className='privacy-span'>Token Price: </strong> The price of Tokens during the presale will be specified on the Website. By participating in the presale, you agree to purchase Tokens at the specified price.
                                    </li>

                                    <li>
                                        <strong className='privacy-span'>Payment: </strong> Payment for Tokens must be made in the accepted cryptocurrencies or fiat currencies specified on the Website. You agree to provide accurate and complete payment information and authorize Neurolov to process your payment.
                                    </li>

                                    <li>
                                        <strong className='privacy-span'>Token Distribution: </strong> Tokens purchased during the presale will be distributed to your designated wallet address after the presale period ends, subject to successful completion of the presale and any applicable lock-up periods.
                                    </li>
                                </ol>

                                <h2 className='privacy-h2' data-aos="fade-up">
                                    Risks
                                </h2>

                                <ol data-aos="fade-up">
                                    <li>
                                        <strong className='privacy-span'>Regulatory Risks: </strong> The purchase and ownership of Tokens may be subject to regulatory restrictions in certain jurisdictions. It is your responsibility to ensure compliance with applicable laws and regulations in your jurisdiction.

                                    </li>

                                    <li>
                                        <strong className='privacy-span'>Market Risks: </strong> The value of Tokens may fluctuate and can be volatile. Neurolov makes no guarantees regarding the future value or performance of Tokens, and you acknowledge and accept the risks associated with purchasing and holding Tokens.
                                    </li>
                                </ol>

                                <h2 className='privacy-h2' data-aos="fade-up">
                                Intellectual Property
                                </h2>

                                <ul data-aos="fade-up">
                                    <li>
                                    All content, trademarks, logos, and intellectual property on the Website are the property of Neurolov or its licensors. You may not use, reproduce, or distribute any content from the Website without prior written permission from Neurolov.
                                    </li>
                                </ul>

                                <h2 className='privacy-h2' data-aos="fade-up">
                                Limitation of Liability
                                </h2>

                                <ul data-aos="fade-up">
                                    <li>
                                    To the fullest extent permitted by law, Neurolov shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in connection with your use of the Website or purchase of Tokens, including but not limited to loss of profits, data, or goodwill.
                                    </li>
                                </ul>

                                <h2 className='privacy-h2' data-aos="fade-up">
                                Governing Law
                                </h2>

                                <ul data-aos="fade-up">
                                    <li>
                                    These Terms shall be governed by and construed in accordance with the laws of [jurisdiction], without regard to its conflict of law principles. Any dispute arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of [jurisdiction].
                                    </li>
                                </ul>

                                <h2 className='privacy-h2' data-aos="fade-up">
                                Changes to Terms
                                </h2>

                                <ul data-aos="fade-up">
                                    <li>
                                    Neurolov reserves the right to amend or update these Terms at any time without prior notice. Any changes to these Terms will be posted on the Website. Your continued use of the Website after the posting of revised Terms constitutes acceptance of such changes.
                                    </li>
                                </ul>

                                <h2 className='privacy-h2' data-aos="fade-up">
                                    Contact Us
                                </h2>

                                <ul data-aos="fade-up">
                                    <li>
                                        If you have any questions, concerns, or feedback regarding this Terms, please contact us at <a className='mail' href='mailto:neurolov.ai'>info@neurolov.ai</a> or visit our website at <a className='mail' href='https://neurolov.ai'>neurolov.ai</a>
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

export default Terms;