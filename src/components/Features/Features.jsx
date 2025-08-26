import React from 'react';
import "./features.css";

const Features = ({
    ...props
}) => {
    return (
        <>
            <section id="features_section" className='py-20 bg-white'>
                <div className="container">
                    <div className="row mb-20">
                        <div className="col-xl-5 col-lg-6">
                            <div className="features-section_title">
                                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-sky-950'>Why Choose <span className='text_gradient'>Professional</span> Web Design Company?</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-5">
                        <div className="col-lg-6">
                            <div className="features_section_content flex">
                                <div className="features_section_content_counter">
                                    <h1 className='font-bold text-3xl me-3 text_gradient'>01</h1>
                                </div>
                                <div className="features_section_content_description">
                                    <h2 className='text-sky-950 font-bold text-3xl'>Have A Clear Web Strategy</h2>
                                    <p className='text-sky-950 text-lg font-medium mt-3'>Before launching your digital presence, having a well-defined plan is crucial. Our experts conduct thorough research on your industry, competitors, and target market to develop a tailored digital strategy that aligns with your goals. This strategic approach ensures a strong foundation for your website’s success.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="features_section_content flex">
                                <div className="features_section_content_counter">
                                    <h1 className='font-bold text-3xl me-3 text_gradient'>02</h1>
                                </div>
                                <div className="features_section_content_description">
                                    <h2 className='text-sky-950 font-bold text-3xl'>Build A Strong Online Presence</h2>
                                    <p className='text-sky-950 text-lg font-medium mt-3'>Establishing a strong and professional online presence positions you as a leader in your industry. We’ve successfully guided numerous clients in building their online authority and are ready to help you achieve the same.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 d-lg-block d-none">
                            <div className="effect-design-line"></div>
                        </div>
                        <div className="col-lg-6">
                            <div className="features_section_content flex">
                                <div className="features_section_content_counter">
                                    <h1 className='font-bold text-3xl me-3 text_gradient'>03</h1>
                                </div>
                                <div className="features_section_content_description">
                                    <h2 className='text-sky-950 font-bold text-3xl'>Boost Conversion Rates With User-Centric Design</h2>
                                    <p className='text-sky-950 text-lg font-medium mt-3'>Before launching your digital presence, having a well-defined plan is crucial. Our experts conduct thorough research on your industry, competitors, and target market to develop a tailored digital strategy that aligns with your goals. This strategic approach ensures a strong foundation for your website’s success.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="features_section_content flex">
                                <div className="features_section_content_counter">
                                    <h1 className='font-bold text-3xl me-3 text_gradient'>04</h1>
                                </div>
                                <div className="features_section_content_description">
                                    <h2 className='text-sky-950 font-bold text-3xl'>Increase User Engagement</h2>
                                    <p className='text-sky-950 text-lg font-medium mt-3'>Professional website design keeps visitors on your site longer, reducing bounce rates. Our designers create intuitive, easy-to-navigate websites that enhance user engagement and improve conversion rates.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 d-lg-block d-none">
                            <div className="effect-design-line "></div>
                        </div>
                        <div className="col-lg-6">
                            <div className="features_section_content flex">
                                <div className="features_section_content_counter">
                                    <h1 className='font-bold text-3xl me-3 text_gradient'>05</h1>
                                </div>
                                <div className="features_section_content_description">
                                    <h2 className='text-sky-950 font-bold text-3xl'>Create A Custom eCommerce Design for Better Performance</h2>
                                    <p className='text-sky-950 text-lg font-medium mt-3'>Our award-winning designers craft e-Stores with user interfaces that captivate your customers and maximize your revenue. We ensure your online store not only attracts but retains customers effectively.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="features_section_content flex">
                                <div className="features_section_content_counter">
                                    <h1 className='font-bold text-3xl me-3 text_gradient'>06</h1>
                                </div>
                                <div className="features_section_content_description">
                                    <h2 className='text-sky-950 font-bold text-3xl'>Optimize For Search Engines</h2>
                                    <p className='text-sky-950 text-lg font-medium mt-3'>We implement proven SEO strategies to enhance your website’s search engine ranking and drive organic traffic, helping you reach a broader audience.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 d-lg-block d-none">
                            <div className="effect-design-line "></div>
                        </div>
                        <div className="col-lg-6">
                            <div className="features_section_content flex">
                                <div className="features_section_content_counter">
                                    <h1 className='font-bold text-3xl me-3 text_gradient'>07</h1>
                                </div>
                                <div className="features_section_content_description">
                                    <h2 className='text-sky-950 font-bold text-3xl'>Improve Your Load Times And Retain More Visitors</h2>
                                    <p className='text-sky-950 text-lg font-medium mt-3'>Our experts optimize your website’s load times, ensuring fast performance that keeps visitors engaged and boosts your conversion rates.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="features_section_content flex">
                                <div className="features_section_content_counter">
                                    <h1 className='font-bold text-3xl me-3 text_gradient'>08</h1>
                                </div>
                                <div className="features_section_content_description">
                                    <h2 className='text-sky-950 font-bold text-3xl'>Receive Ongoing Support And Maintenance</h2>
                                    <p className='text-sky-950 text-lg font-medium mt-3'>With professional website design services, you benefit from continuous support and maintenance. Our team is committed to ensuring your website remains optimized and performs at its best long after launch.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 d-lg-block d-none">
                            <div className="effect-design-line "></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features
