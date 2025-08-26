import React, { useContext, useEffect, useState } from 'react';
import video from "../../../assets/Videos/video.mp4";
import { IoPlayOutline } from "react-icons/io5";
import { ModalVideo } from '../../index';
import "./info.css";
import { OpenMenuContext } from '../../../context/MenuContext';

const CompanyIntroVideo = () => {

    const { modalIsOpen, setModalIsOpen } = useContext(OpenMenuContext);

    // React Modal
    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    return (
        <>
            <div id="company_intro_video" className='bg-[#000] relative overflow-x-hidden company_intro_video company_intro_video_after after:content-[""] after:block after:absolute after:top-[50%] after:left-0 after:translate-x-[320px] after:translate-y-[-50%] after:w-screen after:h-[70px] z-0 after:bg-gradient-to-r from-[#101010] to-[rgba(143,53,225,0)]'>
                <div className="container company_intro_video_container info-video-container">
                    <div className="row flex items-center g-0">
                        <div className="col-12 company_intro_video_content info-video-content z-50 flex items-center">
                            <div className="company_intro_video_thumb video-thumb w-[250px] h-[120px] relative p-0" >
                                <video autoPlay loop muted src={video} className='absolute top-0 left-0 w-full h-full cursor-pointer' onClick={openModal}></video>
                                <div className="company_intro_video_thumb_icon info-video-icon absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#113766] text-[2rem] text-white rounded-full hover:text-[#113766] p-[.5rem] w-[50px] h-[50px] flex items-center justify-center border-2 border-[#fff] shadow-[rgba(255, 255, 255, 0.36) 0px 4px 15px 1px] z-[999]  before:content-[''] before:absolute before:top-[50%] before:left-[50%] before:w-[70px] before:h-[70px] before:bg-white before:z-[-1] before:rounded-full before:translate-x-[-50%] before:translate-y-[-50%] before:transition-all before:duration-300 before:linear before:shadow-[rgb(17, 55, 102, .5) 0px 6px 12px 1px] before:opacity-0 before:invisible group-hover:before:opacity-100 group-hover:before:visible z-10">
                                    <IoPlayOutline />
                                    <ModalVideo closeModal={closeModal} isOpen={modalIsOpen} />
                                </div>
                            </div>
                            <div className="company_intro_video_description info-video-content-description ms-4">
                                <h4 className='text-xl text-white font-semibold'>See Our Work In Action</h4>
                                <h5 className='text-md text-white'>1 Minute</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompanyIntroVideo;
