import React, { useState, useEffect } from 'react';
import logoSrc from "/Images/logo-white.svg"
import { Button, Logo } from "../index";

const Navbar = ({
    onSideMenuChange
}) => {

    const [isScrollingUp, setIsScrollingUp] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isAtTop, setIsAtTop] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 200) {
                // Scroll Down -> Hide Navbar
                setIsScrollingUp(false);
                setIsAtTop(false);
            } else if (currentScrollY === 0) {
                setIsAtTop(true);
            } else {
                // Scroll Up -> Show Navbar
                setIsScrollingUp(true);
                setIsAtTop(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <>
            <nav id='navbar' className={`navbar w-full fixed top-0 min-h-[10vh] left-0 z-[999] transition-all duration-500 ease-in-out border-b border-b-[#ffffff22]
                ${isScrollingUp ? `translate-y-0 ${isAtTop ? "" : "bg-[#111]/50 backdrop-blur-[10px] shadow-lg"}` : "-translate-y-full"} 
            `}>
                <div className="container-fluid flex items-center justify-between px-4 sm:px-8 py-2">
                    <div className="logo">
                        <Logo src={logoSrc} />
                    </div>
                    <div className="ml-[auto] navbar_request_btn sm:block hidden">
                        <a href="/coming-soon">
                            <Button link="/contact" className="text-white secondary-button" label="Request a Quote" />
                        </a>
                    </div>
                    <div className='navbar_hamburger_menu flex items-center' onClick={onSideMenuChange}>
                        <div className="hamburger-menu sm:h-[4rem] w-[2rem] sm:w-[3rem] cursor-pointer flex items-center justify-end">
                            <div className="bar relative transition-all duration-500 bg-[#eee] rounded-sm h-[3px] w-[1.4rem]"></div>
                        </div>
                        <h3 className="mx-4 uppercase text-base sm:text-xl font-semibold text-white cursor-pointer">Menu</h3>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
