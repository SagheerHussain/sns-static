import React, { useEffect, useState } from 'react'
import { Footer, Navbar, NavbarMenuItems, PricingPackage, ScrollToTop, CallToAction } from '../components/index';
import { useLocation, useParams } from 'react-router-dom';

const PricingPage = () => {

  const [isClick, setIsClick] = useState(false);

  // Handle Side Animation
  const handleSideMenu = () => {
    setIsClick(!isClick);
  }

  // Get Category From URL
  const location = useLocation();

  // Visit To Top
  useEffect(() => {
    window.scrollTo(0, 350);
  }, [location.pathname]);

  return (
    <>
      <div className={`container-full h-screen w-screen ${isClick ? "active overflow-y-clip" : ""}`} style={{ transformStyle: `${isClick ? "preserve-3d" : ""}` }}>
        <Navbar onSideMenuChange={handleSideMenu} isClick={isClick} />

        <div className={`main-container`}>
          <div className={`main w-full z-50 origin-left transition-all duration-500 h-screen`}>
            <PricingPackage isClick={isClick} />
            <div className={`transition-all ease-in ${isClick ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}>
              <CallToAction />
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

export default PricingPage
