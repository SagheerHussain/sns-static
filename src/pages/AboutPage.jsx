import React, { useEffect, useState } from "react";
import {
  About,
  Header,
  Navbar,
  NavbarMenuItems,
  SkynetMean,
  SkynetVision,
  ServiceOffers,
  ValueAddition,
  Contact,
  Footer,
} from "../components/index";
import ScrollToTop from "../components/ScrollToTop";
import "./style.css";
import { useLocation } from "react-router-dom";
import { HeroParallaxEffect } from "../components/HeroParallaxEffect";
import OurTeam from "../components/About Us Page Components/OurTeam";

const AboutPage = ({ setLoading }) => {
  const [isClick, setIsClick] = useState(false);

  const handleSideMenu = () => {
    setIsClick(!isClick);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3300);
  }, []);

  // Get Category From URL
  const location = useLocation();

  // Visit To Top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <div
        className={`container-full h-screen w-screen ${
          isClick ? "active overflow-y-clip" : ""
        }`}
        style={{ transformStyle: `${isClick ? "preserve-3d" : ""}` }}
      >
        <Navbar onSideMenuChange={handleSideMenu} isClick={isClick} />

        <div className={`main-container `}>
          <div
            className={`main w-full z-[999] origin-left border-[#ffffff66] transition-all duration-500 h-screen`}
          >
            <HeroParallaxEffect isClick={isClick} />
            {/* <Header isHeroImagesContained={false} bgColor="bg-[#2b1360]" title={`About Skynet Silicon`} subTitle="Skynet has a digital heart and a technological mind." /> */}
            <main
              id="main_sections"
              className={`transition-all ease-in bg-[#fff] ${
                isClick
                  ? "pointer-events-none overflow-hidden h-0 opacity-0"
                  : "opacity-100 h-full"
              }`}
            >
              <SkynetMean />
              <OurTeam />
              <About />
              <SkynetVision />
              <ServiceOffers />
              <ValueAddition />
              <Contact />
              <Footer />
            </main>
          </div>

          <div className={`shadow one`}></div>
          <div className={`shadow two`}></div>
        </div>

        <NavbarMenuItems isClick={isClick} />
        <ScrollToTop />
      </div>
    </>
  );
};

export default AboutPage;
