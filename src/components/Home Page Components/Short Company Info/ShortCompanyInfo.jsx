import React from 'react';
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { CompanyIntroVideo } from "../../index";
import { GiVibratingShield } from "react-icons/gi";
import { IoStar } from "react-icons/io5";
import solutionImg from "/Images/web-designs-with-trophy.png.webp";
import "./info.css";

const Info = () => {

    const words = ["Your Vision, Our Technology – Limitless Possibilities", "Innovate, Elevate, Dominate – With Skynet Silicon", "Smart Solutions for a Smarter Digital World", "Transforming Ideas into Digital Success"];

    return (
        <>
            <section id="short_company_info" className='py-16 bg-[#00042a] overflow-x-hidden'>
                <div className="container">
                    <div className="lg:flex">
                        <div className="lg:w-1/2 w-full">
                            <h1 className='text-3xl sm:text-4xl md:text-5xl text-white font-bold'>Innovate, Elevate, Dominate – With Skynet Silicon</h1>
                            <div className="info-service mt-5">
                                <p className='text-2xl text-white mb-4 flex items-center'>
                                    <IoCheckmarkDoneSharp className='me-2 text-cyan-500' />
                                    <p>Solutions For Custom Web Design <span className='text_gradient ms-1'> That Increase Conversions</span></p>
                                </p>
                                <p className='text-2xl text-white mb-4 flex items-center'>
                                    <IoCheckmarkDoneSharp className='me-2 text-cyan-500' />
                                    <p>Successful Marketing Initiatives  <span className='text_gradient ms-1'> To Promote Growth</span></p>
                                </p>
                                <p className='text-2xl text-white mb-4 flex items-center'>
                                    <IoCheckmarkDoneSharp className='me-2 text-cyan-500' />
                                    <p>Customized Branding Techniques <span className='text_gradient ms-1'>To Increase Involvement</span></p>
                                </p>
                            </div>
                            <p className='text-xl text-white mt-5'>Skynet Silicon is a web design company & digital marketing agency focused on growing brands online.
                                The goal of the web design and digital marketing firm Skynet Silicon is to help brands expand their online presence. To increase brand engagement and conversions, we provide digital marketing solutions, successful brand strategies, and unique site design and development. To guarantee that every project satisfies our clients' brand standards and commercial objectives, we collaborate closely with them. We also offer technical and marketing know-how to guarantee the best outcomes.</p>
                        </div>
                        <div className="lg:w-1/2 w-full lg:mt-0 mt-[2rem]">
                            <img src={solutionImg} alt="" />
                        </div>
                    </div>
                </div>

                <CompanyIntroVideo />

                <div className="container pt-10">
                    <div className="short_company_info_ratings flex items-center me-5 mb-4">
                        <div className="short_company_ratings_icon">
                            <GiVibratingShield className='text-5xl text-cyan-500' />
                        </div>
                        <div className="short_company_ratings_description ms-3">
                            <h4 className='text-white font-medium mb-2 text-lg'>5 Star DesignRush Reviews</h4>
                            <div className="short_company_ratings_stars flex items-center">
                                <IoStar className='text-yellow-400 text-xl me-1' />
                                <IoStar className='text-yellow-400 text-xl me-1' />
                                <IoStar className='text-yellow-400 text-xl me-1' />
                                <IoStar className='text-yellow-400 text-xl me-1' />
                                <IoStar className='text-yellow-400 text-xl me-1' />
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Info
