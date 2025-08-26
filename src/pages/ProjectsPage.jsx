import React, { useEffect, useState } from "react";
import {
  Footer,
  Navbar,
  NavbarMenuItems,
  ProjectHeader,
  Projects,
  ReadyToStartProject,
} from "../components/index";
import { useLocation } from "react-router-dom";

const ProjectsPage = () => {
  const [isClick, setIsClick] = useState(false);

  // Handle Side Animation
  const handleSideMenu = () => {
    setIsClick(!isClick);
  };

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

        <div className={`main-container`}>
          <div
            className={`main w-full z-50 origin-left transition-all duration-500 h-screen`}
          >
            {/* <ProjectHeader /> */}
            <Projects isClick={isClick} />
            <main
              id="main_sections"
              className={`transition-all ease-in ${
                isClick
                  ? "h-[0vh] overflow-hidden pointer-events-none"
                  : "opacity-100"
              }`}
            >
              <Footer />
            </main>
          </div>
          <div className={`shadow one`}></div>
          <div className={`shadow two`}></div>
        </div>

        <NavbarMenuItems isClick={isClick} />
      </div>
    </>
  );
};

export default ProjectsPage;
