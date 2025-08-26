import React, { useEffect, useState } from "react";
import "./style.css"
import { Footer, Navbar, NavbarMenuItems } from "../components/index";
import { ContactHeader } from "../components/index";
import ScrollToTop from "../components/ScrollToTop";
import { useLocation } from "react-router-dom";

const ContactPage = ({ setLoading }) => {

    const [isClick, setIsClick] = useState(false);

    const handleSideMenu = () => {
        setIsClick(!isClick);
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3300);
    }, [])

    // Get Category From URL
    const location = useLocation();

    // Visit To Top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <>
            <div className={`container-full h-screen w-screen ${isClick ? "active overflow-y-clip" : ""}`} style={{ transformStyle: `${isClick ? "preserve-3d" : ""}` }}>
                <Navbar onSideMenuChange={handleSideMenu} isClick={isClick} />
                <div className={`main-container`}>
                    <div className={`main w-full z-[50] origin-left transition-all duration-500 h-screen ${isClick ? "pointer-events-none overflow-y-hidden" : ""}`}>
                        <ContactHeader isClick={isClick} />
                        <div className={`transition-all ease-in ${isClick ? "opacity-0 pointer-events-none" : "opacity-100"
                            }`}>
                            <Footer />
                        </div>
                    </div>

                    <div className={`shadow one`}></div>
                    <div className={`shadow two`}></div>
                </div>

                <NavbarMenuItems isClick={isClick} />
                <ScrollToTop />
            </div>
        </>
    )
}

export default ContactPage
