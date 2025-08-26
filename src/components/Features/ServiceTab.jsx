import React from 'react';
import "./features.css";
import { Button } from '../index';

const ServiceTab = () => {
    return (
        <>
            <section id="service_tab_section" className='service_tab_section py-24'>
                <div className="container">

                    <div className="service_tab_section_intro text-center mb-20">
                        <h3 className='text-white font-bold text-2xl uppercase'>Our Experts Have Won Industry Awards</h3>
                        <h1 className='text-white font-bold text-5xl mt-3'>Recognized Web Design Experts</h1>
                    </div>

                    <ul class="nav nav-pills mb-5 w-100 flex items-center justify-around service_tab_section_tab" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">AWARDS</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">RECOGNITION</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">EXPERTISE</button>
                        </li>
                    </ul>
                    <div class="tab-content service_tab_section_tab_content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                            <div className="row g-4">
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="service_tab_section_content flex justify-center">
                                        <ul>
                                            <li>Brand Strategy</li>
                                            <li>Communication Strategy</li>
                                            <li>Logo & Graphic Design</li>
                                            <li>UI & UX Design</li>
                                            <li>Package Design</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="service_tab_section_content flex justify-center">
                                        <ul>
                                            <li>Custom Web Design</li>
                                            <li>eCommerce Development</li>
                                            <li>Mobile App Development</li>
                                            <li>Software & AI Development</li>
                                            <li>ERP Portal Integration</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="service_tab_section_content flex justify-center">
                                        <ul>
                                            <li>Marketing Strategy</li>
                                            <li>Social Media Marketing</li>
                                            <li>Search Engine Optimization</li>
                                            <li>Paid Media Marketing</li>
                                            <li>Email Marketing</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="service_tab_section_content flex justify-center">
                                        <ul>
                                            <li>Creative Copywriting</li>
                                            <li>Content Marketing</li>
                                            <li>Influencer Marketing</li>
                                            <li>Aﬃliate Marketing</li>
                                            <li>B2B Direct Marketing</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                            <div className="row g-4">
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="service_tab_section_content flex justify-center">
                                        <ul>
                                            <li>Brand Strategy</li>
                                            <li>Communication Strategy</li>
                                            <li>Logo & Graphic Design</li>
                                            <li>UI & UX Design</li>
                                            <li>Package Design</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="service_tab_section_content flex justify-center">
                                        <ul>
                                            <li>Custom Web Design</li>
                                            <li>eCommerce Development</li>
                                            <li>Mobile App Development</li>
                                            <li>Software & AI Development</li>
                                            <li>ERP Portal Integration</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="service_tab_section_content flex justify-center">
                                        <ul>
                                            <li>Marketing Strategy</li>
                                            <li>Social Media Marketing</li>
                                            <li>Search Engine Optimization</li>
                                            <li>Paid Media Marketing</li>
                                            <li>Email Marketing</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="service_tab_section_content flex justify-center">
                                        <ul>
                                            <li>Creative Copywriting</li>
                                            <li>Content Marketing</li>
                                            <li>Influencer Marketing</li>
                                            <li>Aﬃliate Marketing</li>
                                            <li>B2B Direct Marketing</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
                            <div className="row g-4">
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="service_tab_section_content flex justify-center">
                                        <ul>
                                            <li>Brand Strategy</li>
                                            <li>Communication Strategy</li>
                                            <li>Logo & Graphic Design</li>
                                            <li>UI & UX Design</li>
                                            <li>Package Design</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="service_tab_section_content flex justify-center">
                                        <ul>
                                            <li>Custom Web Design</li>
                                            <li>eCommerce Development</li>
                                            <li>Mobile App Development</li>
                                            <li>Software & AI Development</li>
                                            <li>ERP Portal Integration</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="service_tab_section_content flex justify-center">
                                        <ul>
                                            <li>Marketing Strategy</li>
                                            <li>Social Media Marketing</li>
                                            <li>Search Engine Optimization</li>
                                            <li>Paid Media Marketing</li>
                                            <li>Email Marketing</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="service_tab_section_content flex justify-center">
                                        <ul>
                                            <li>Creative Copywriting</li>
                                            <li>Content Marketing</li>
                                            <li>Influencer Marketing</li>
                                            <li>Aﬃliate Marketing</li>
                                            <li>B2B Direct Marketing</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mt-5 service_tab_section_btn lg:mb-44">
                        <Button className="primary-btn" label="REQUEST A QUOTE"></Button>
                    </div>

                </div>

                <div className='bottom_text'>
                    <img src="http://localhost:5173/src/assets/logo-white.png" alt="" />
                </div>

            </section >
        </>
    )
}

export default ServiceTab
