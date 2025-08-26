import React, { useEffect, useState } from 'react';
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
    const [isScrollY, setIsScrollY] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrollY(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed transition-all duration-300 bottom-[30px] right-[30px] scroll_to_top bg-[#1092fd] hover:bg-[#38a4fc] ${isScrollY ? "opacity-100 visible" : "opacity-0 invisible"} shadow-lg`}
        >
            <FaArrowUp className='text-white text-[2.5rem] p-[10px]' />
        </button>
    );
};

export default ScrollToTop;