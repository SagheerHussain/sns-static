import React from 'react';
import officeTeam from "/Images/about/team-experts.webp"

const About = () => {
    return (
        <>
            <section id="about" className='py-20'>
                <div className="container">
                    <div className="md:flex items-center">
                        <div className="md:w-[45%]">
                            <img src={officeTeam} className='img-fluid' alt="" />
                        </div>
                        <div className="md:ml-[5%] md:w-1/2">
                            <h5 className='text-gray-400 uppercase font-bold text-xl'>OUR TEAM</h5>
                            <h1 className='text-3xl md:text-5xl font-bold mt-2'>Meet Our Multidisciplinary <br className='lg:block hidden' />
                                Team of Experts</h1>
                            <p className='text-gray-500 text-lg mt-10'>Our team comprises proficient experts who provide a broad range of services, such as graphic design, UI/UX, online and mobile app development, and software engineering. With our experience, we offer top-notch mobile apps, user-friendly websites, aesthetically pleasing interfaces, custom software solutions, and breathtaking graphic material. In close collaboration with our clients, we provide outstanding services and all-inclusive solutions tailored to their particular requirements.
                            </p>
                            <a href="#contact">
                                <button className='hover:text-white primary-btn mt-10 after:bg-[radial-gradient(circle,_rgba(26,8,152,1)_0%,_rgba(24,12,75,1)_64%)]'>TALK TO US</button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
