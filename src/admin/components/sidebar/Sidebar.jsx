import React, { useState } from 'react';
import { Logo } from "../../../components/index";
import logoSrc from "/Images/logo-white.svg";
import { Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { HiOutlineChevronRight, HiOutlineChevronDown } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaImages } from "react-icons/fa";
import { IoPricetagsOutline } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";
import { GoDot } from "react-icons/go";

const Sidebar = () => {

    const [services, setServices] = useState(false);
    const [portfolio, setPortfolio] = useState(false);
    const [categories, setCategories] = useState(false);
    const [pricing, setPricing] = useState(false);

    const handleService = () => {
        setServices(!services);
    };
    const handlePortfolio = () => {
        setPortfolio(!portfolio);
    };
    const handleCategories = () => {
        setCategories(!categories);
    };
    const handlePricing = () => {
        setPricing(!pricing);
    };

    return (
        <>
            <aside id='sidebar' className='sidebar bg-zinc-950 h-full'>
                <div className="sidbar_logo flex justify-center">
                    <Logo src={logoSrc} />
                </div>
                <div className="sidebar_menus">
                    <List>
                        <ListItem disablePadding className='my-[.75rem] border-1 border-transparent border-b-[#ffffff24]'>
                            <div className="px-[.75rem]">
                                <ListItemButton>
                                    <ListItemIcon className='-mr-4'>
                                        <IoMdHome className='text-white text-xl' />
                                    </ListItemIcon>
                                    <Link className='text-white' to={`/dashboard`}>Home</Link>
                                </ListItemButton>
                            </div>
                        </ListItem>

                        {/* Services */}
                        <div className='text-white border-1 border-transparent border-b-[#ffffff24] mb-[.75rem]'>
                            <div className="px-[.75rem]">
                                <ListItemButton onClick={handleService} >
                                    <ListItemIcon className='-mr-4'>
                                        <MdOutlineDesignServices className='text-white text-xl' />
                                    </ListItemIcon>
                                    <h6>Services</h6>
                                    {services ? <HiOutlineChevronDown className='ms-auto' /> : <HiOutlineChevronRight className='ms-auto' />}
                                </ListItemButton>

                                <Collapse in={services} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemIcon className='-mr-4'>
                                                <GoDot className='text-white' />
                                            </ListItemIcon>
                                            <Link className='text-white' to={`/dashboard/add-service`}>Add Service</Link>
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemIcon className='-mr-4'>
                                                <GoDot className='text-white' />
                                            </ListItemIcon>
                                            <Link className='text-white' to={`/dashboard/view-services`}>View Services</Link>
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                            </div>
                        </div>

                        {/* Portfolio */}
                        <div className='text-white border-1 border-transparent border-b-[#ffffff24] mb-[.75rem]'>
                            <div className="px-[.75rem]">
                                <ListItemButton onClick={handlePortfolio} className='text-white relative before:content-[""] before:block before:absolute before:bottom-0 before:left-0 before:bg-slate-50'>
                                    <ListItemIcon className='-mr-4'>
                                        <FaImages className='text-white text-xl' />
                                    </ListItemIcon>
                                    <h6>Portfolio</h6>
                                    {portfolio ? <HiOutlineChevronDown className='ms-auto' /> : <HiOutlineChevronRight className='ms-auto' />}
                                </ListItemButton>
                                <Collapse in={portfolio} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemIcon className='-mr-4'>
                                                <GoDot className='text-white' />
                                            </ListItemIcon>
                                            <Link className='text-white text-lg' to={`/dashboard/add-portfolio`}>Add Portfolio</Link>
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemIcon className='-mr-4'>
                                                <GoDot className='text-white text-lg' />
                                            </ListItemIcon>
                                            <Link className='text-white' to={`/dashboard/view-portfolio`}>View Portfolio</Link>
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                            </div>
                        </div>

                        {/* Categories */}
                        <div className='text-white border-1 border-transparent border-b-[#ffffff24] mb-[.75rem]'>
                            <div className="px-[.75rem]">
                                <ListItemButton onClick={handleCategories} className='text-white relative before:content-[""] before:block before:absolute before:bottom-0 before:left-0 before:bg-slate-50'>
                                    <ListItemIcon className='-mr-4'>
                                        <BiCategory className='text-white text-xl' />
                                    </ListItemIcon>
                                    <h6>Categories</h6>
                                    {categories ? <HiOutlineChevronDown className='ms-auto' /> : <HiOutlineChevronRight className='ms-auto' />}
                                </ListItemButton>
                                <Collapse in={categories} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemIcon className='-mr-4'>
                                                <GoDot className='text-white' />
                                            </ListItemIcon>
                                            <Link className='text-white text-lg' to={`/dashboard/add-category`}>Add Category</Link>
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemIcon className='-mr-4'>
                                                <GoDot className='text-white' />
                                            </ListItemIcon>
                                            <Link className='text-white text-lg' to={`/dashboard/view-category`}>View Categories</Link>
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                            </div>
                        </div>
                    </List>
                </div>
            </aside>
        </>
    )
}

export default Sidebar
