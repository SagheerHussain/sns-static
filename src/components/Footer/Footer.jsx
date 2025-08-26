import React from 'react';
import "./footer.css";
import { Link } from 'react-router-dom';
import logoSrc from "../../assets/logo-white.svg"
import Logo from '../Logo';

const Footer = ({ className }) => {
    return (
        <>
            <footer id="footer" className={`py-20 ${className}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-5">
                            <div className="footer-heading">
                                <h1 className='text-4xl md:text-5xl lg:text-6xl text-white font-bold'>Let's Grow Your Brand</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-5">
                        <div className="col-lg-4 col-sm-6">
                            <div className="footer-menus-links relative ml-[2rem]">
                                <h3 className='text-white font-bold text-[1.4rem]'>Main Services</h3>
                                <div className="footer-menus mt-[2rem]">
                                    <Link to="/service/web-development" className='text-white block font-normal mt-[.7rem] text-[1.2rem]'>Web Development</Link>
                                    <Link to="/service/wordpress-development" className='text-white block font-normal mt-[.7rem] text-[1.2rem]'>Wordpress Development</Link>
                                    <Link to="/service/ecommerce-development" className='text-white block font-normal mt-[.7rem] text-[1.2rem]'>Ecommerce Development</Link>
                                    <Link to="/service/graphic-design" className='text-white block font-normal mt-[.7rem] text-[1.2rem]'>Graphic Design</Link>
                                    <Link to="/service/app-development" className='text-white block font-normal mt-[.7rem] text-[1.2rem]'>Mobile App Development</Link>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-lg-4 col-sm-6">
                            <div className="footer-menus-links relative ml-[2rem]">
                                <h3 className='text-white font-bold text-[1.4rem]'>Apps & Development</h3>
                                <div className="footer-menus mt-[2rem]">
                                    <Link to="/pricing-package/web-development" className='text-white block font-normal mt-[.7rem] text-[1.2rem]'>Website Cost Calculator</Link>
                                    <Link to="/pricing-package/app-development" className='text-white block font-normal mt-[.7rem] text-[1.2rem]'>App Cost Calculator</Link>
                                    <Link to="/pricing-package/ecommerce-development" className='text-white block font-normal mt-[.7rem] text-[1.2rem]'>Ecommerce Cost Calculator</Link>
                                    <Link to="/pricing-package/wordpress-development" className='text-white block font-normal mt-[.7rem] text-[1.2rem]'>Wordpress Cost Calculator</Link>
                                    <Link to="/pricing-package/graphic-design" className='text-white block font-normal mt-[.7rem] text-[1.2rem]'>Graphic Design Cost Calculator</Link>
                                    <Link to="/pricing-package/search-engine-optimization" className='text-white block font-normal mt-[.7rem] text-[1.2rem]'>SEO Cost Calculator</Link>
                                </div>
                            </div>
                        </div> */}
                       
                        <div className="col-lg-4 col-sm-6">
                            <div className="footer-menus-links relative ml-[2rem]">
                                <h3 className='text-white font-bold text-[1.4rem]'>Company</h3>
                                <div className="footer-menus mt-[2rem]">
                                    <Link to="/about-us" className='text-white block font-normal mt-[.7rem] text-[1.2rem]'>About Us</Link>
                                    {/* <Link to="/case-studies" className='text-white block font-normal mt-[.7rem] text-[1.2rem]'>Case Studies</Link>
                                    <Link to="/digital-trends" className='text-white block font-normal mt-[.7rem] text-[1.2rem]'>Digital Trends</Link>
                                    <Link to="/top-companies" className='text-white block font-normal mt-[.7rem] text-[1.2rem]'>Top Companies</Link>
                                    <Link to="/reviews" className='text-white block font-normal mt-[.7rem] text-[1.2rem]'>Reviews</Link>
                                    <Link to="/sitemap" className='text-white block font-normal mt-[.7rem] text-[1.2rem]'>Sitemap</Link>
                                    <Link to="/locations" className='text-white block font-normal mt-[.7rem] text-[1.2rem]'>Locations</Link> */}
                                    <Link to="/contact" className='text-white block font-normal mt-[.7rem] text-[1.2rem]'>Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-40 flex items-center">
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5 col-6">
                            <Logo src={logoSrc} />
                        </div>
                        <div className="col-xl-10 col-lg-9 col-md-8 col-sm-7 col-6">
                            <div className="effect-design-line"></div>
                        </div>
                    </div>
                    <div className="row mt-4 g-4">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="footer-company-location mx-[1rem] footer-company-location-one flex items-center">
                                <div className="footer-company-location-logo text-[#04e4ff] text-[4rem] font-extrabold">
                                    <h1 className="logo">KH</h1>
                                </div>
                                <div className="footer-company-location-address mt-[1rem] ms-4">
                                    <address className='text-sm text-white'>B 106 near Jauhar Chowrangi,
                                        <h6 className='text-sm text-white'>Gulistan-e-jouhar</h6>
                                        Karachi.</address>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12">
                            <div className="effect-design-line"></div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12">
                            <div className="footer-extra-menus md:flex items-center text-center">
                                <p className='text-white text-sm'>©2025 Skynet Silicon. All rights reserved</p>
                                <div className="footer-extra-menus-links md:ms-8 lg:ms-20">
                                    {/* <Link to="/privacy-policy" className='text-white me-4 text-sm'>Privacy Policy</Link>
                                    <Link to="/accessibility" className='text-white me-4 text-sm'>Accessibility</Link> */}
                                    <Link to="tel:+923313908443" className='text-white me-4 text-sm'>Call us at (+92) 3313908443</Link>
                                    <Link to="mailto:info@skynetsilicon.com" className='text-white me-4 text-sm'>info@skynetsilicon.com</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer