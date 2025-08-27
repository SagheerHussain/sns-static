import React from 'react';
import serviceOfferImage from "/Images/about/provide-services.webp";
import { IoMdCheckmark } from "react-icons/io";

const ServiceOffers = () => {
    return (
        <>
            <section id="service_offers" className='py-24'>
                <div className="container">
                    <div className="lg:flex">
                        <div className="lg:w-[40%] mb-10">
                            <img src={serviceOfferImage} className='img-fluid' alt="" />
                        </div>
                        <div className="lg:w-[60%] lg:ml-[5%]">
                            <h1 className='text-3xl sm:text-4xl md:text-5xl leading-tight font-bold text-[#00042a] mb-10'>Empower Your Business with Our Wide Range of Services </h1>
                            <div className="services">
                                <div className="sm:flex">
                                    <div className="service_offer flex py-[1rem] sm:py-0">
                                        <div className="service-detail-icon me-2 mt-[3px]">
                                            <IoMdCheckmark className='text-[#00adce]' />
                                        </div>
                                        <div className="service-detail-description">
                                            <h5 className='text-sm font-bold mb-3'>Web Development</h5>
                                            <p className='text-sm'>Use our professional web development services to optimize your internet visibility. Excellent website development, programming, and design services are provided by our web development company.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="service_offer flex pb-4">
                                        <div className="service-detail-icon me-2 mt-[3px]">
                                            <IoMdCheckmark className='text-[#00adce]' />
                                        </div>
                                        <div className="service-detail-description">
                                            <h5 className='text-sm font-bold mb-3'>App Development</h5>
                                            <p className='text-sm'>Our expert developers build high-performance mobile and web apps tailored to your needs, ensuring seamless functionality, intuitive UI, and engaging user experiences.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:flex lg:my-10">
                                    <div className="service_offer flex pb-4">
                                        <div className="service-detail-icon me-2 mt-[3px]">
                                            <IoMdCheckmark className='text-[#00adce]' />
                                        </div>
                                        <div className="service-detail-description">
                                            <h5 className='text-sm font-bold mb-3'>Web Designing</h5>
                                            <p className='text-sm'>We create stunning, user-friendly, and responsive websites that captivate visitors, enhance user experience, and drive conversions, ensuring your online presence stands out.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="service_offer flex pb-4">
                                        <div className="service-detail-icon me-2 mt-[3px]">
                                            <IoMdCheckmark className='text-[#00adce]' />
                                        </div>
                                        <div className="service-detail-description">
                                            <h5 className='text-sm font-bold mb-3'>Wordpress Development</h5>
                                            <p className='text-sm'>We design and develop custom WordPress websites, optimizing speed, security, and SEO while ensuring easy content management and a powerful digital presence.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:flex mb-10">
                                    <div className="service_offer flex pb-4">
                                        <div className="service-detail-icon me-2 mt-[3px]">
                                            <IoMdCheckmark className='text-[#00adce]' />
                                        </div>
                                        <div className="service-detail-description">
                                            <h5 className='text-sm font-bold mb-3'>Graphic Designing</h5>
                                            <p className='text-sm'>Our creative team crafts visually appealing logos, branding, and marketing materials that strengthen your identity and leave a lasting impression on your audience.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="service_offer flex pb-4">
                                        <div className="service-detail-icon me-2 mt-[3px]">
                                            <IoMdCheckmark className='text-[#00adce]' />
                                        </div>
                                        <div className="service-detail-description">
                                            <h5 className='text-sm font-bold mb-3'>Digital Marketing</h5>
                                            <p className='text-sm'>We provide result-driven SEO, social media, PPC, and content marketing strategies to boost brand awareness, generate leads, and increase online engagement.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServiceOffers
