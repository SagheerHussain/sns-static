import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


const ProjectCard = ({ project, index }) => {
    return (
        <>
            <div className="feature_project_card mb-6 relative">
                <div className="feature_project_title">
                    <h4 className='text-[#fff] flex items-center mb-4 text-lg uppercase'>
                        <span className='h-[12px] w-[12px] block rounded-full bg-[#fff] me-2 mb-[2px]'></span>
                        {project.title}
                    </h4>
                </div>


                <div className="relative  hover:scale-[1] transition-transform duration-500 hover:duration-700">
                    <a className="relative mb-15 block group group--no-event anchor" href={project.link} target="_blank">
                        {/* Image container */}
                        <div className="feature_project_img relative rounded-[20px] transition-transform group-hover:scale-95  duration-500 group-hover:duration-700 overflow-hidden">
                            <img src={project.src} className="w-[550px] h-[316px] px-2 rounded-[20px] transition-transform group-hover:scale-110 duration-500 group-hover:duration-1000 " loading="lazy" alt="image description" />
                            <div className="overlay group-hover:backdrop-blur-[3px] absolute top-0 left-0 w-full h-0 group-hover:h-[100%] group-hover:bg-[#00000095] transition duration-500 group-hover:duration-1000"></div>
                        </div>
                        {/* Animated heading */}
                        <h2
                            className={`text-5xl sm:text-6xl md:text-7xl lg:text-4xl overflow-hidden text-[#00adce] m-0 uppercase font-semibold absolute top-1/2 whitespace-nowrap featured-project__headline pointer-events-none ${index % 2 === 0 ? "right-[50%]" : "left-[50%]"}`}
                            style={{ transform: index % 2 === 0 ? "translate(50%, -50%)" : "translate(-50%, -50%)" }}
                        >
                            <div className="splitter-wrap">
                                {project.title.split("").map((char, charIndex) => (
                                    <div
                                        key={charIndex}
                                        style={{ position: 'relative', display: 'inline-block', transitionDelay: `${(charIndex + 1) * 0.02}s` }}
                                        className="is-char"
                                    >
                                        {char}
                                    </div>
                                ))}
                            </div>
                        </h2>
                    </a>
                </div>
            </div>
        </>
    )
}

export default ProjectCard
