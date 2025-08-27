import React from 'react';
import EyeRotate from "./EyeRotate";
import { Link } from 'react-router-dom';

const ReadyToStartProject = () => {
    return (
        <>
            <section id="ready_to_start_project" className='py-20 bg-[#000] relative'>
                <div className="container">
                    <div className="read_project_title relative">
                        <div className="lg:block hidden lg:absolute lg:top-[0%] lg:left-[50%] lg:-translate-x-[50%] lg:-translate-y-[0%]">
                            <EyeRotate margin='lg:mt-0 mt-[5%]' w_1="w-[100px] sm:w-[150px] lg:w-[100px]" h_1="h-[100px] sm:h-[150px] lg:h-[100px]" w_2="w-[70px] sm:w-[100px] lg:w-[60px]" h_2="h-[70px] sm:h-[100px] lg:h-[60px]" />
                        </div>
                        {["Ready", "", "To Start?"].map((string, index) => (
                            <h1 className={`${index === 0 ? "lg:pt-[7rem]" : " pt-0"} text-[#eee] text-[3rem] sm:text-[5rem] md:text-[6rem] lg:text-[8rem] xl:text-[9rem] 2xl:text-[7rem] -tracking-[.2rem] sm:-tracking-[.4rem] leading-[3rem] sm:leading-[5rem] md:leading-[6rem] lg:leading-[8rem] xl:leading-[9rem] 2xl:leading-[7rem] text-center uppercase font-semibold`}>{string}</h1>
                        ))}
                    </div>


                    <div className="ready_project_btn text-center mt-10">
                        <Link to={`/contact`} >
                            <button className='secondary-button text-[#fff]'>START THE PROJECT</button>
                        </Link>
                    </div>

                </div>
            </section>
        </>
    )
}

export default ReadyToStartProject
