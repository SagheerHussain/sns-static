import React from 'react';
import HeaderOverlay from '../Home Page Components/Header Overlay/HeaderOverlay';
import ColourfulText from "../ui/colourful-text";
import "./header.css";

const Header = ({
    bgColor = "",
    minHeight = "h-[90vh]",
    isHeroImagesContained = true,
    titleMaxWidth = "",
    isColorfulText = false,
    title = "",
    subTitle,
    isActive,
    bgImg = "",
    ...props
}) => {
    return (
        <header id='header' className={`header ${minHeight} overflow-hidden relative flex items-center justify-center`} style={{ background: `url(${bgImg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>

            <div className={`absolute w-full h-full ${bgColor} z-[2] opacity-80`}></div>

           

            <div className="header_content text-center z-[9] mt-[10vh] px-3">
                <h2 className={`header_primary_heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white font-bold leading-tight 2xl:max-w-[1500px]`}>{title}</h2>
                <h1 className="header_secondary_heading text-2xl lg:text-3xl xl:text-4xl text-white font-bold mt-4">{subTitle} {isColorfulText && <ColourfulText text="SKYNET SILICON" />}</h1>
            </div>
            {
                isHeroImagesContained && <div className="header_overlay_images absolute z-[1] opacity-[.6] lg:max-w-[80vw] max-w-[100vw]">
                    <HeaderOverlay />
                </div>
            }
        </header>
    )
}

export default Header
