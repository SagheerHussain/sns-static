import React, { useState } from 'react';
import { useCollapse } from "react-collapsed";
import "./css/serviceDetail.css";
import "react-phone-input-2/lib/style.css";
import RequestQuote from '../Contact Us/RequestQuote';

const ServiceDetails = ({ 
    service = { category: null, featured_list: [], title: "", description: "", category: "", service_explanation: [] },
}) => {

    const [openIndex, setOpenIndex] = useState(0);

    const handleToggle = (index) => {
        if (openIndex !== index) {
            setOpenIndex(index);
        }
    };

    return (
        <>
            <section id="service_details" className='bg-[#00042a] py-24'>
                <div className="container">

                    <div className="lg:flex">
                        <div className="service_details_explanation z-[9] lg:w-[60%]">
                            <h1 className='text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-snug'>Seamless Digital Experiences, Tailored for You</h1>
                            <p className='text-white text-[20px] mt-10'>Skynet Silicon is a full-service agency comprised of leading web designers from around the globe. Whether building a website from scratch or redesigning your current digital presence, our web design services include:</p>
                            <div className="service_offers mt-14">
                                {service.service_explanation?.map((offer, index) => {
                                    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({ isExpanded: openIndex === index });
                                    return (
                                        <div className={`service_offer_card mb-10 ${isExpanded ? "isActiveService" : ""}`} key={index}>
                                            <button {...getToggleProps({ onClick: () => handleToggle(index) })} className='text-3xl font-bold text-[#04e4ff]'>
                                                {offer.title}
                                            </button>
                                            <div {...getCollapseProps()} className='service_offer_card_content mt-3'>
                                                <p className='text-white text-[20px] leading-relaxed'>{offer.description}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="service_detail_form relative lg:w-[35%] lg:ml-[5%] bg-white h-full overflow-hidden p-10 after:content-[''] after:w-[30px] after:absolute after:bottom-0 after:right-0 after:border-r-[30px] after:border-b-[30px] after:border-[#ccc]" style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%)" }}>
                            <RequestQuote />
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default ServiceDetails;
