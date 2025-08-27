
import React, { useEffect, useState } from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Button } from "../index";
import { Link, useLocation } from 'react-router-dom';

const NavbarMenuItems = ({
  isClick,

}) => {

  const [activeLink, setActiveLink] = useState(""); // Active link state
  const [isSubMenu, setIsSubMenu] = useState(false);

  // Get Location
  const location = useLocation();

  // Function to handle click on links
  const handleLinkClick = (link) => {
    setActiveLink((prev) => (prev === link ? "" : link)); // Toggle active link
    setIsSubMenu(!isSubMenu);
  };

  // Pre Loader


  return (
    <>
      <div className={`navbar_menu_links h-full mt-[20vh] lg:absolute w-[40%] transition-all duration-200 ease-in-out flex justify-start ${activeLink === "services" || activeLink === "workHistory" ? "top-[0]" : "top-[0]"} right-0 z-20 ${isClick ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <ul className='list-none w-full'>
          <li>
            <Link to="/about-us" className='nav_menu_link text-[#eee] py-[.7rem] inline-block text-[1.5rem] lg:text-[2rem] uppercase font-bold tracking-[1px] transition-all duration-300 hover:text-[#00adce]' style={{ "--i": "0.05s" }}>About</Link>
          </li>
          <li className='relative'>
            <a
              href="#"
              onClick={() => handleLinkClick("services")}
              className={`active_menu_link nav_menu_link ms-[2.5rem] lg:ms-0 text-[#eee] py-[.7rem] lg:py-[.7rem] text-center flex items-center text-[1.5rem] lg:text-[2rem] uppercase font-bold tracking-[1px] transition-all duration-300 hover:text-[#00adce]`}
              style={{ "--i": "0.1s" }}
            >
              Services <MdOutlineKeyboardArrowDown className={`ms-3 transition-all duration-300 ease-in-out ${activeLink === "services" && "rotate-[-180deg]"}`} />
            </a>
            <div className={`navbar_sub_menu flex ${activeLink === "services" ? "visible opacity-100" : "invisible opacity-0"} transition-all duration-300 linear items-start ${activeLink === "services" ? "lg:h-[240px] h-[140px] overflow-y-auto overflow-x-hidden" : "h-0 overflow-hidden"}`}>
              <div className="sub_menu">
                <h3 className='lg:text-white text-[#00adce] text-lg uppercase font-bold my-3'>Marketing</h3>
                <Link to='/service/branding-service' className='text-white transition-all duration-300 block mb-2 font-semibold text-[.8rem] 2xl:text-base'>Branding Service</Link>
                <Link to='/service/brand-identity' className='text-white transition-all duration-300 block mb-2 font-semibold text-[.8rem] 2xl:text-base cursor-pointer'>Brand Identity</Link>
                <Link to='/service/brand-marketing' className='text-white transition-all duration-300 block mb-2 font-semibold text-[.8rem] 2xl:text-base cursor-pointer'>Brand Marketing</Link>
                <Link to='/service/social-media-marketing' className='text-white transition-all duration-300 block mb-2 font-semibold text-[.8rem] 2xl:text-base cursor-pointer'>Social Media Marketing</Link>
                <Link to='/service/search-engine-optimization' className='text-white transition-all duration-300 block mb-2 font-semibold text-[.8rem] 2xl:text-base cursor-pointer'>SEO</Link>
              </div>
              <div className="sub_menu lg:mx-[1.5rem]">
                <h3 className='lg:text-white text-[#00adce] text-lg uppercase font-bold my-3'>Design</h3>
                <Link to='/service/web-design' className='text-white transition-all duration-300  block mb-2 font-semibold text-[.8rem] 2xl:text-base cursor-pointer'>Web Design</Link>
                <Link to='/service/redesign-identity' className='text-white transition-all duration-300  block mb-2 font-semibold text-[.8rem] 2xl:text-base cursor-pointer'>Redesign Identity</Link>
                <Link to='/service/graphic-designing' className='text-white transition-all duration-300  block mb-2 font-semibold text-[.8rem] 2xl:text-base cursor-pointer'>Graphic Design</Link>
                <Link to='/service/logo-design' className='text-white transition-all duration-300  block mb-2 font-semibold text-[.8rem] 2xl:text-base cursor-pointer'>Logo Design</Link>
              </div>
              <div className="sub_menu">
                <h3 className='lg:text-white text-[#00adce] text-lg uppercase font-bold my-3'>Development</h3>
                <Link to='/service/app-development' className='text-white transition-all duration-300 block mb-2 font-semibold text-[.8rem] 2xl:text-base cursor-pointer'>App Development</Link>
                <Link to='/service/web-development' className='text-white transition-all duration-300 block mb-2 font-semibold text-[.8rem] 2xl:text-base cursor-pointer'>Web Development</Link>
                <Link to='/service/appsheet-development' className='text-white transition-all duration-300 block mb-2 font-semibold text-[.8rem] 2xl:text-base cursor-pointer'>Appsheet Development</Link>
                <Link to='/service/wordpress-development' className='text-white transition-all duration-300 block mb-2 font-semibold text-[.8rem] 2xl:text-base cursor-pointer'>Wordpress Development</Link>
                <Link to='/service/ecommerce-development' className='text-white transition-all duration-300 block mb-2 font-semibold text-[.8rem] 2xl:text-base cursor-pointer'>eCommerce Development</Link>
              </div>
            </div>
          </li>
          <li>
            <Link to="/projects" style={{ "--i": "0.15s" }} className='nav_menu_link text-[#eee] py-[.7rem] inline-block text-[1.5rem] lg:text-[2rem] uppercase font-bold tracking-[1px] transition-all duration-300 hover:text-[#00adce]'>Projects</Link>
          </li>
          <li>
            <Link to="/pricing-package/web-development" style={{ "--i": "0.2s" }} className='nav_menu_link text-[#eee] py-[.7rem] inline-block text-[1.5rem] lg:text-[2rem] uppercase font-bold tracking-[1px] transition-all duration-300 hover:text-[#00adce]'>Pricing</Link>
          </li>
          <li>
            <Link to="/contact" style={{ "--i": "0.25s" }} className='nav_menu_link text-[#eee] py-[.7rem] inline-block text-[1.5rem] lg:text-[2rem] uppercase font-bold tracking-[1px] transition-all duration-300 hover:text-[#00adce]'>Contact</Link>
          </li>
          <div className="quote mt-10">
            <Button link="/contact" className="text-white secondary-button" label="Request a Quote" />
          </div>
        </ul>

      </div>
    </>
  )
}

export default NavbarMenuItems
