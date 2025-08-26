import React, { useState } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Button } from "../index";
import { motion } from "framer-motion"
import "./caseStudies.css";

const CaseStudies = () => {

    const matches = useMediaQuery('(max-width:1024px)');

    // State Variables
    const [value, setValue] = useState('1');

    // Changing Tabs
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <section id="case_studies" className='case_studies py-24 relative h-full'>
                <div className="container">

                    <div className="case_studies_intro relative z-[9] mb-16">
                        <div className="lg:flex">
                            <div className="lg:w-[40%] mb-lg-0 mb-4">
                                <div className="case_studies_intro_title lg:text-end">
                                    <h1 className='text-[3.5rem] font-bold bg-gradient-to-r from-[#009cff] to-[#9536e5] block text-transparent bg-clip-text'>Case Studies</h1>
                                </div>
                            </div>
                            <div className="lg:w-[60%]">
                                <div className="case_studies_intro_description lg:text-end">
                                    <p className='text-2xl font-semibold'>From Concept To Market:</p>
                                    <p className='text-2xl font-semibold'>We Engineer Projects For <span className='text_gradient'>Superior Performance</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <TabContext value={value}>
                        <div className="lg:flex block">
                            <div className="lg:ml-[10%] lg:w-[30%] case_studies_tabs lg:mb-0 mb-5 z-[9]">
                                <div className="case_studies_tabs_list">
                                    <TabList onChange={handleChange} aria-label="lab API tabs example" orientation="vertical">
                                        <Tab {...(matches && { href: '#case_studies_tab_panal-hp' })} className='mt-5' label={<img src="https://www.digitalsilk.com/wp-content/uploads/2022/07/hp-logo.svg" />} value="1" />
                                        <Tab {...(matches && { href: '#case_studies_tab_panal-xerox' })} className='mt-5' label={<img src="https://www.digitalsilk.com/wp-content/uploads/2022/07/xerox-logo.svg" />} value="2" />
                                        <Tab {...(matches && { href: '#case_studies_tab_panal-doForms' })} className='mt-5' label={<img src="https://www.digitalsilk.com/wp-content/uploads/2022/11/doForms-logo-blue.svg" />} value="3" />
                                        <Tab {...(matches && { href: '#case_studies_tab_panal-fieldEdge' })} className='mt-5' label={<img src="https://www.digitalsilk.com/wp-content/uploads/2022/11/FieldEdge-logo-blue.svg" />} value="4" />
                                        <Tab {...(matches && { href: '#case_studies_tab_panal-miami' })} className='mt-5' label={<img src="https://www.digitalsilk.com/wp-content/uploads/2022/11/MCDS-logo-blue.svg" />} value="5" />
                                    </TabList>
                                </div>
                            </div>
                            <div className="lg:w-[60%] case_studies_tabs_content z-[8]">
                                <div className="case_studies_tabs_content_tab_panal case_studies_tabs_content_tab_panal_effect before:content-[''] before:block before:absolute before:top-0 before:left-[32vw] before:w-[68vw] before:h-full before:z-[-1] before:bg-[#efefef]">
                                    <TabPanel value="1" id='case_studies_tab_panal-hp'>
                                        <div className="case_studies_tab_panal_effect case_studies_tab_panal_effect_img_one"></div>
                                        <div className="case_studies_tab_panal_effect_logo case_studies_tab_panal_effect_logo-hp"></div>
                                        <motion.div viewport={{ once: true }} initial={{ y: "200px", opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 }, y: 0 }} className="row gy-5 flex items-center">
                                            <div className="col-lg-3 col-6">
                                                <div className="case_studies_tabs_content_logo">
                                                    <img src="https://www.digitalsilk.com/wp-content/uploads/2022/07/bo-logo-dark.svg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-xl-5 col-lg-4 d-lg-flex d-none">
                                                <div className="effect-design-line"></div>
                                            </div>
                                            <div className="col-xl-4 col-lg-5 col-6">
                                                <div className="case_studies_tabs_content_description">
                                                    <h3 className='text-xl lg:text-lg font-medium'>HP needed to implement a global rewards program.</h3>
                                                    <p className='mt-3'><span className='font-semibold text-xl lg:text-lg'>In 6 months,</span> we achieved:</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                        <motion.div viewport={{ once: true }} initial={{ y: "200px", opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 }, y: 0 }} className="row mt-20">
                                            <div className="col-6">
                                                <div className="case_studies_tab_content_counter">
                                                    <h1 className='text-7xl lg:text-8xl xl:text-9xl text-sky-500 font-semibold'>40 <sub>K</sub></h1>
                                                    <p className='lg:flex justify-center mt-5 text-xl font-semibold'>active members <br /> inside the program</p>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="case_studies_tab_content_counter">
                                                    <h1 className='text-7xl lg:text-8xl xl:text-9xl text-sky-500 font-semibold'>56 <sub>%</sub></h1>
                                                    <p className='lg:flex justify-center mt-5 text-xl font-semibold'>active members <br /> inside the program</p>
                                                </div>
                                            </div>
                                            <div className="col-12 md:flex items-center mt-5">
                                                <div className="case-studies_tab_content_btn">
                                                    <Button className="primary-btn" label={"Read HP Case Study"} />
                                                </div>
                                            </div>
                                        </motion.div>
                                    </TabPanel>
                                    <TabPanel value="2" id='case_studies_tab_panal-xerox'>
                                        <div className="case_studies_tab_panal_effect case_studies_tab_panal_effect_img_two"></div>
                                        <div className="case_studies_tab_panal_effect_logo case_studies_tab_panal_effect_logo-xerox"></div>
                                        <motion.div viewport={{ once: true }} initial={{ y: "200px", opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 }, y: 0 }} className="row gy-5 flex items-center">
                                            <div className="col-lg-3 col-6">
                                                <div className="case_studies_tabs_content_logo">
                                                    <img src="https://www.digitalsilk.com/wp-content/uploads/2022/07/xerox-logo-dark.svg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-xl-5 col-lg-4 d-lg-flex d-none">
                                                <div className="effect-design-line"></div>
                                            </div>
                                            <div className="col-xl-4 col-lg-5 col-6">
                                                <div className="case_studies_tabs_content_description">
                                                    <h3 className='text-xl lg:text-lg font-medium'>Xerox needed to implement a global rewards program.</h3>
                                                    <p className='mt-3'><span className='font-semibold text-xl lg:text-lg'>In 6 months,</span> we achieved:</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                        <motion.div viewport={{ once: true }} initial={{ y: "200px", opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 }, y: 0 }} className="row mt-20">
                                            <div className="col-6">
                                                <div className="case_studies_tab_content_counter">
                                                    <h1 className='text-7xl lg:text-8xl xl:text-9xl text-sky-500 font-semibold'>78 <sub>K</sub></h1>
                                                    <p className='lg:flex justify-center mt-5 text-xl font-semibold'>active members <br /> inside the program</p>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="case_studies_tab_content_counter">
                                                    <h1 className='text-7xl lg:text-8xl xl:text-9xl text-sky-500 font-semibold'>21 <sub>%</sub></h1>
                                                    <p className='lg:flex justify-center mt-5 text-xl font-semibold'>active members <br /> inside the program</p>
                                                </div>
                                            </div>
                                            <div className="col-12 md:flex items-center mt-5">
                                                <div className="case-studies_tab_content_btn">
                                                    <Button className="primary-btn" label={"Read Xerox Case Study"} />
                                                </div>
                                            </div>
                                        </motion.div>
                                    </TabPanel>
                                    <TabPanel value="3" id='case_studies_tab_panal-doForms'>
                                        <div className="case_studies_tab_panal_effect case_studies_tab_panal_effect_img_three"></div>
                                        <div className="case_studies_tab_panal_effect_logo case_studies_tab_panal_effect_logo-doForms"></div>
                                        <motion.div viewport={{ once: true }} initial={{ y: "200px", opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 }, y: 0 }} className="row gy-5 flex items-center">
                                            <div className="col-lg-3 col-6">
                                                <div className="case_studies_tabs_content_logo">
                                                    <img src="https://www.digitalsilk.com/wp-content/uploads/2022/11/doForms-logo-dark-blue.svg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-xl-5 col-lg-4 d-lg-flex d-none">
                                                <div className="effect-design-line"></div>
                                            </div>
                                            <div className="col-xl-4 col-lg-5 col-6">
                                                <div className="case_studies_tabs_content_description">
                                                    <h3 className='text-xl lg:text-lg font-medium'>DoForms needed to implement a global rewards program.</h3>
                                                    <p className='mt-3'><span className='font-semibold text-xl lg:text-lg'>In 6 months,</span> we achieved:</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                        <motion.div viewport={{ once: true }} initial={{ y: "200px", opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 }, y: 0 }} className="row mt-20">
                                            <div className="col-6">
                                                <div className="case_studies_tab_content_counter">
                                                    <h1 className='text-7xl lg:text-8xl xl:text-9xl text-sky-500 font-semibold'>55 <sub>K</sub></h1>
                                                    <p className='lg:flex justify-center mt-5 text-xl font-semibold'>active members <br /> inside the program</p>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="case_studies_tab_content_counter">
                                                    <h1 className='text-7xl lg:text-8xl xl:text-9xl text-sky-500 font-semibold'>13 <sub>%</sub></h1>
                                                    <p className='lg:flex justify-center mt-5 text-xl font-semibold'>active members <br /> inside the program</p>
                                                </div>
                                            </div>
                                            <div className="col-12 md:flex items-center mt-5">
                                                <div className="case-studies_tab_content_btn">
                                                    <Button className="primary-btn" label={"Read doForms Case Study"} />
                                                </div>
                                            </div>
                                        </motion.div>
                                    </TabPanel>
                                    <TabPanel value="4" id='case_studies_tab_panal-fieldEdge'>
                                        <div className="case_studies_tab_panal_effect case_studies_tab_panal_effect_img_four"></div>
                                        <div className="case_studies_tab_panal_effect_logo case_studies_tab_panal_effect_logo-fieldEdge"></div>
                                        <motion.div viewport={{ once: true }} initial={{ y: "200px", opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 }, y: 0 }} className="row gy-5 flex items-center">
                                            <div className="col-lg-3 col-6">
                                                <div className="case_studies_tabs_content_logo">
                                                    <img src="https://www.digitalsilk.com/wp-content/uploads/2022/11/FieldEdge-logo-dark-blue.svg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-xl-5 col-lg-4 d-lg-flex d-none">
                                                <div className="effect-design-line"></div>
                                            </div>
                                            <div className="col-xl-4 col-lg-5 col-6">
                                                <div className="case_studies_tabs_content_description">
                                                    <h3 className='text-xl lg:text-lg font-medium'>FieldEdge needed to implement a global rewards program.</h3>
                                                    <p className='mt-3'><span className='font-semibold text-xl lg:text-lg'>In 6 months,</span> we achieved:</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                        <motion.div viewport={{ once: true }} initial={{ y: "200px", opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 }, y: 0 }} className="row mt-20">
                                            <div className="col-6">
                                                <div className="case_studies_tab_content_counter">
                                                    <h1 className='text-7xl lg:text-8xl xl:text-9xl text-sky-500 font-semibold'>39 <sub>K</sub></h1>
                                                    <p className='lg:flex justify-center mt-5 text-xl font-semibold'>active members <br /> inside the program</p>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="case_studies_tab_content_counter">
                                                    <h1 className='text-7xl lg:text-8xl xl:text-9xl text-sky-500 font-semibold'>77 <sub>%</sub></h1>
                                                    <p className='lg:flex justify-center mt-5 text-xl font-semibold'>active members <br /> inside the program</p>
                                                </div>
                                            </div>
                                            <div className="col-12 md:flex items-center mt-5">
                                                <div className="case-studies_tab_content_btn">
                                                    <Button className="primary-btn" label={"Read FieldEdge Case Study"} />
                                                </div>
                                            </div>
                                        </motion.div>
                                    </TabPanel>
                                    <TabPanel value="5" id='case_studies_tab_panal-miami'>
                                        <div className="case_studies_tab_panal_effect case_studies_tab_panal_effect_img_five"></div>
                                        <div className="case_studies_tab_panal_effect_logo case_studies_tab_panal_effect_logo-miami"></div>
                                        <motion.div viewport={{ once: true }} initial={{ y: "300px", opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 }, y: 0 }} className="row gy-5 flex items-center">
                                            <div className="col-lg-3 col-6">
                                                <div className="case_studies_tabs_content_logo">
                                                    <img src="https://www.digitalsilk.com/wp-content/uploads/2022/11/MCDS-logo-dark-blue.svg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-xl-5 col-lg-4 d-lg-flex d-none">
                                                <div className="effect-design-line"></div>
                                            </div>
                                            <div className="col-xl-4 col-lg-5 col-6">
                                                <div className="case_studies_tabs_content_description">
                                                    <h3 className='text-xl lg:text-lg font-medium'>Miami needed to implement a global rewards program.</h3>
                                                    <p className='mt-3'><span className='font-semibold text-xl lg:text-lg'>In 6 months,</span> we achieved:</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                        <motion.div viewport={{ once: true }} initial={{ y: "300px", opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 }, y: 0 }} className="row mt-20">
                                            <div className="col-6">
                                                <div className="case_studies_tab_content_counter">
                                                    <h1 className='text-7xl lg:text-8xl xl:text-9xl text-sky-500 font-semibold'>40 <sub>K</sub></h1>
                                                    <p className='lg:flex justify-center mt-5 text-xl font-semibold'>active members <br /> inside the program</p>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="case_studies_tab_content_counter">
                                                    <h1 className='text-7xl lg:text-8xl xl:text-9xl text-sky-500 font-semibold'>56 <sub>%</sub></h1>
                                                    <p className='lg:flex justify-center mt-5 text-xl font-semibold'>active members <br /> inside the program</p>
                                                </div>
                                            </div>
                                            <div className="col-12 md:flex items-center mt-5">
                                                <div className="case-studies_tab_content_btn">
                                                    <Button className="primary-btn" label={"Read Miami Case Study"} />
                                                </div>
                                            </div>
                                        </motion.div>
                                    </TabPanel>
                                </div>
                            </div>
                        </div>
                    </TabContext>
                </div>

            </section>
        </>
    )
}

export default CaseStudies
