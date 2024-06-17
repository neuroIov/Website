import React from 'react';
import './index.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Policy = () => {
    return(
        <>
            <Navbar />
            <section id='privacy'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-1 col-12 col-sm-12 col-lg-1'>

                        </div>
                        <div className='col-md-10 col-12 col-sm-12 col-lg-10'>
                            <h1 className='privacy-h1' data-aos="fade-up">
                                Privacy Policy
                            </h1>
                            <p className='privacy-h1-p' data-aos="fade-up">
                            This Privacy Policy describes how Neurolov ("we", "us", or "our") collects, uses, and protects your personal information when you use our website, products, and services.
                            </p>

                            <div className='privacy-second'>
                                <h2 className='privacy-h2' data-aos="fade-up">
                                    Information We Collect
                                </h2>
                                <ol data-aos="fade-up">
                                    <li>
                                        <strong className='privacy-span'>Personal Information: </strong> We may collect personal information that you voluntarily provide to us when you interact with our website, register for an account, participate in our token sale, subscribe to our newsletter, or contact us for support. This may include your name, email address, contact details, and KYC (Know Your Customer) information required for compliance purposes.
                                    </li>

                                    <li>
                                        <strong className='privacy-span'>Usage Information: </strong> We automatically collect information about how you interact with our website and services, including your IP address, browser type, operating system, pages visited, and actions taken. We may use cookies, web beacons, and similar technologies to collect this information.
                                    </li>

                                    <li>
                                        <strong className='privacy-span'>Transaction Information: </strong> If you make a purchase or transaction on our platform, we may collect information related to the transaction, such as payment details and transaction history.
                                    </li>
                                </ol>

                                <h2 className='privacy-h2' data-aos="fade-up">
                                How We Use Your Information
                                </h2>
                                <p className='privacy-h2-p' data-aos="fade-up">
                                    We may use the information we collect for the following purposes:
                                </p>
                                <ol data-aos="fade-up">
                                    <li>
                                    To provide, maintain, and improve our website, products, and services, including enhancing user experience and optimizing performance.
                                    </li>

                                    <li>
                                    To process transactions, facilitate token sales, and fulfill your requests.
                                    </li>

                                    <li>
                                    To communicate with you, including sending important updates, newsletters, marketing materials, and other relevant information related to Neurolov and the nLOV token.
                                    </li>

                                    <li>
                                    To personalize your experience and tailor content and advertisements to your interests.
                                    </li>

                                    <li>
                                    To detect, prevent, and investigate fraudulent or illegal activities.
                                    </li>

                                    <li>
                                    To comply with legal obligations and enforce our terms of service.
                                    </li>
                                </ol>

                                <h2 className='privacy-h2' data-aos="fade-up">
                                How We Share Your Information
                                </h2>
                                <p className='privacy-h2-p' data-aos="fade-up">
                                We may share your information with third parties under the following circumstances:
                                </p>
                                <ol data-aos="fade-up">
                                    <li>
                                        <strong className='privacy-span'>Service Providers: </strong>  We may disclose your information to trusted third-party service providers who assist us in operating our website, conducting business, or servicing you. These may include payment processors, marketing agencies, analytics providers, and technical support providers.
                                    </li>

                                    <li>
                                        <strong className='privacy-span'>Legal Compliance: </strong> We may disclose your information in response to lawful requests by public authorities, including to meet national security or law enforcement requirements, or as otherwise required by law.
                                    </li>

                                    <li>
                                        <strong className='privacy-span'>Business Transfers: </strong> In the event of a merger, acquisition, reorganization, or sale of assets, your information may be transferred or disclosed as part of the transaction.
                                    </li>
                                </ol>

                                <h2 className='privacy-h2' data-aos="fade-up">
                                Data Security
                                </h2>
                                
                                <ul data-aos="fade-up">
                                    <li>
                                         We take reasonable measures to protect your information from unauthorized access, alteration, disclosure, or destruction. We implement technical, administrative, and physical safeguards to safeguard your data. However, please note that no method of transmission over the internet or electronic storage is 100% secure.
                                    </li>
                                </ul>

                                <h2 className='privacy-h2' data-aos="fade-up">
                                Your Rights
                                </h2>
                                
                                <ul data-aos="fade-up">
                                    <li>
                                    You have certain rights regarding your personal information, including the right to access, correct, or delete your information. You may also have the right to object to or restrict certain processing activities. If you have any questions or requests regarding your information, please contact us using the information provided below.
                                    </li>
                                </ul>

                                <h2 className='privacy-h2' data-aos="fade-up">
                                Changes to This Privacy Policy
                                </h2>
                                
                                <ul data-aos="fade-up">
                                    <li>
                                    We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any updates will be posted on this page, and the revised date will be indicated at the top of the page. We encourage you to review this Privacy Policy periodically for any updates.
                                    </li>
                                </ul>

                                <h2 className='privacy-h2' data-aos="fade-up">
                                Contact Us
                                </h2>
                                
                                <ul data-aos="fade-up">
                                    <li>
                                    If you have any questions, concerns, or feedback regarding this Privacy Policy or our privacy practices, please contact us at <a className='mail' href='mailto:neurolov.ai'>info@neurolov.ai</a> or visit our website at <a className='mail' href='https://neurolov.ai'>neurolov.ai</a>
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

export default Policy;