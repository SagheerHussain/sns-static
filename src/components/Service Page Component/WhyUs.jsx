import React from 'react';
import { GlowingEffect } from '../ui/glowing-effect'

const WhyUs = ({
    service = { category: null, featured_list: [], title: "", description: "", category: "" },
}) => {

    return (
        <>
            <section id="why_us" className='py-24'>
                <div className="container text-center">
                    <div className="why_we_use_content">

                        <h2 className='text-4xl font-bold mb-10'>For a Top-Performing, You Need <span className='text-[#1092fd]'>{service.category.name || "Loading Service..."}.</span> <br /> Here’s Why</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                            {
                                service.why_you_need_service?.slice(0, 6).map((serv, index, arr) => {
                                    console.log(arr)
                                    return (
                                        <div className={`relative text-center why_us_content ${index % 2 !== 0 ? "bg-[#1092fd]" : "bg-[#222]"} rounded-[0px] p-10`}>
                                            <GlowingEffect
                                                blur={1}
                                                spread={50}
                                                borderWidth={5}
                                                glow={true}
                                                disabled={false}
                                                proximity={64}
                                                inactiveZone={0.01}
                                            />
                                            <h2 className={` text-white  text-2xl font-semibold`}>{serv.title}</h2>
                                            <p className={`text-white mt-6 text-sm`}>{serv.description}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyUs
