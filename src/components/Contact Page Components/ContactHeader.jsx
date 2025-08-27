import React from 'react'
import RequestQuote from '../Contact Us/RequestQuote';
import southwestSolar from "/Images/Brands/remove bg brands/7.png"
import southwestRoofers from "/Images/Brands/remove bg brands/5.png"
import unitedRemodeling from "/Images/Brands/remove bg brands/3.png"
import { useMediaQuery } from '@mui/material';

const ContactHeader = ({
    minHeight = "h-screen",
    className = '',
    isClick,
    ...props
}) => {

    const matches = useMediaQuery('(max-width:385px)');

    return (
        <>
            <header className={`header ${isClick ? "h-full lg:h-screen overflow-y-hidden" : "min-h-screen"} relative flex items-center justify-center`}>
                <div className={`absolute w-full h-full bg-gradient-to-r z-[-1] from-[#1a1a1a] to-[#0f0f0f] opacity-100`}></div>
                <div className={`container lg:flex ${matches ? "pt-[100px]" : "pt-[145px]"}`}>
                    <div className="my-4 header_content px-3 lg:w-[45%] w-full lg:mb-0 mb-10">
                        <h3 className='uppercase text-white text-lg font-bold sm:text-center lg:text-left'>Powering the Digital Future</h3>
                        <h2 className={`mt-3 header_primary_heading text-4xl sm:text-5xl xl:text-6xl text-[#00adce] font-bold 2xl:max-w-[1500px] sm:text-center lg:text-left`}>
                            Digitizing Your <br className='xl:block hidden' /> Business Growth
                        </h2>
                        <div className="flex items-center justify-between skynet_features my-14">
                            <div className="feature me-4 relative after:hidden after:content-[''] sm:after:inline-block after:absolute after:top-0 after:right-0 after:w-[1px] after:h-[70px] after:2xl:translate-x-20 after:xl:translate-x-12 after:lg:translate-x-4 after:md:translate-x-20 after:sm:translate-x-14 after:bg-[#ffffff42]">
                                <span className='text-white font-semibold text-[.75rem] sm:text-lg'>Expert</span>
                                <h1 className='text-white font-bold text-[.8rem] sm:text-lg'>Team Members</h1>
                            </div>
                            <div className="feature me-4 relative after:hidden after:content-[''] sm:after:inline-block after:absolute after:top-0 after:right-0 after:w-[1px] after:h-[70px] after:2xl:translate-x-20 after:xl:translate-x-12 after:lg:translate-x-4 after:md:translate-x-20 after:sm:translate-x-14 after:bg-[#ffffff42]">
                                <span className='text-white font-semibold text-[.75rem] sm:text-lg'>Results-Driven</span>
                                <h1 className='text-white font-bold text-[.8rem] sm:text-lg'>Approach</h1>
                            </div>
                            <div className="feature">
                                <span className='text-white font-semibold text-[.75rem] sm:text-lg'>Streamlined</span>
                                <h1 className='text-white font-bold text-[.8rem] sm:text-lg'>Execution</h1>
                            </div>
                        </div>
                        <h3 className='relative uppercase text-white font-bold text-left realtive after:content-[""] after:inline-block after:2xl:w-[40%] after:xl:w-[30%] after:lg:w-[15%] after:md:w-[50%] after:sm:w-[40%] after:bg-[#00adce] after:h-[2px] after:absolute after:right-0 after:top-[50%]'>Premium Digital Agency Recognized by</h3>
                        <div className="logos flex mt-10 justify-center">
                            <div className="brand_logo">
                                <img src={southwestSolar} alt="" />
                            </div>
                            <div className="brand_logo">
                                <img src={southwestRoofers} alt="" />
                            </div>
                            <div className="brand_logo">
                                <img src={unitedRemodeling} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="my-4 header_content_form z-[99] relative lg:w-[45%] lg:ml-[10%] bg-white h-full overflow-hidden p-10 after:content-[''] after:w-[30px] after:absolute after:bottom-0 after:right-0 after:border-r-[30px] after:border-b-[30px] after:border-[#ccc]" style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%)" }}>
                        <RequestQuote />
                    </div>
                    <div className='bottom_text lg:block hidden'>
                        <img src="http://localhost:5173/src/assets/logo-white.png" alt="" />
                    </div>
                </div>
            </header>
        </>
    )
}

export default ContactHeader
