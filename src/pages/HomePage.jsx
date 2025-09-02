import React, { useEffect, useState } from "react";
import "./style.css";
import {
  Header,
  Navbar,
  NavbarMenuItems,
  ShortCompanyInfo,
  Services,
  Timeline,
  Contact,
  Footer,
  CompanyLocation,
  PricingObjectives,
  Subscribe,
  TopBrands,
  Testimonials,
  Projects,
  ReadyToStartProject,
} from "../components/index";
import ScrollToTop from "../components/ScrollToTop";
import InfiniteMovingBrands from "../components/Brands/InfiniteMovingBrands";
import { heroBrands } from "../components/brandItems";
import { portfolios } from "../components/projects";
import ProjectCard from "../components/Projects/ProjectCard";

const HomePage = ({ setLoading }) => {
  const [isClick, setIsClick] = useState(false);

  const handleSideMenu = () => {
    setIsClick(!isClick);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3300);
  }, []);

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
            <Header
              bgColor="bg-gradient-to-r from-[#000] to-[#000]"
              titleMaxWidth="w-[1500px]"
              title={`Transforming Ideas into Digital Success Stories`}
              subTitle={`Innovate. Inspire. Achieve – with`}
              isColorfulText={true}
            />
            <InfiniteMovingBrands brand={heroBrands} />
            <main
              id="main_sections"
              className={`transition-all ease-in ${
                isClick ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
            >
              <ShortCompanyInfo />

              <section id="portfolio" className="bg-[#000] py-10">
                <div className="container">
                  <div className="top-brands-info text-center pb-20">
                    <h4 className="sm:text-5xl xl:text-6xl text-3xl text-white uppercase font-bold">
                      Featured Deliverables
                    </h4>
                    {/* <h5 className='text-lg text-white uppercase font-bold'>Clients Acroos World</h5> */}
                    <p className="text-white mt-3 text-lg">
                      High-impact modules and end-to-end builds. Security,
                      localization, and CI/CD baked in.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 p-3">
                    {portfolios?.map((project, ind) => (
                      <ProjectCard project={project} index={ind + 1} />
                    ))}
                  </div>
                </div>
              </section>

              <TopBrands />
              <Services
                title={"Explore Our Experience as a Web Design Firm"}
                description={
                  "Being a full-service web design firm, we take care of all your online requirements in one location. In-depth planning and research, unique designs, and digital tactics that expand your audience, increase traffic, and promote interaction are all part of our custom web design services."
                }
              />
              <Timeline />
              {/* <Projects /> */}

              {/* <CaseStudies />
              <ServiceTab /> */}
              <PricingObjectives />
              <Testimonials />
              <Subscribe />
              {/* <CompanyLocation /> */}
              <ReadyToStartProject />
              <Contact />
            </main>

            <Footer />
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

export default HomePage;
