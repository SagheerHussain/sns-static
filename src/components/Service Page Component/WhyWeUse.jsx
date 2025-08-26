import React from 'react';
import { GlowingEffect } from '../ui/glowing-effect'

const WhyWeUse = ({
    service = { category: null, featured_list: [], title: "", description: "", category: "" },
}) => {
    return (
        <>
            {service = {} &&
                <section id="why_we_use" className='py-24'>
                    <div className="container text-center">
                        <div className="why_we_use_content">

                            <h2 className='text-4xl font-bold mb-10'>Why Choose <span className='text-[#1092fd]'>Skynet Silicon For {service.category.name || "Loading Service..."}</span></h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                                {
                                    service.why_choose_skynet?.map(({ _id, title, description, }, ind) => (
                                        <div className={`relative text-center h-[200px] rounded-none flex items-center flex-col justify-center m-px ${ind % 2 !== 0 ? "bg-[#1092fd]" : "bg-[#181818]"} p-3`}>
                                            <GlowingEffect
                                                blur={1}
                                                spread={50}
                                                borderWidth={5}
                                                glow={true}
                                                disabled={false}
                                                proximity={64}
                                                inactiveZone={0.01}
                                            />
                                            <h2 className='text-white text-2xl font-semibold'>{title}</h2>
                                            <p className='text-white mt-6 text-sm'>{description}</p>
                                        </div>
                                    ))
                                }
                            </div>

                        </div>
                    </div>
                </section>
            }
        </>
    )
}

export default WhyWeUse

