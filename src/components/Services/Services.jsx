import React from "react";
import { TbDeviceDesktopStar } from "react-icons/tb";
import { VscSettingsGear } from "react-icons/vsc";
import { MdOutlineSendToMobile, MdOutlineDesignServices } from "react-icons/md";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { RiLuggageCartLine } from "react-icons/ri";
import custom_web_image from "/Images/Services/custom_web_design-min.webp";
import responsive_web_image from "/Images/Services/responsive_design-min.webp";
import seo_web_image from "/Images/Services/seo-min.webp";
import uiux_web_image from "/Images/Services/ux_ui_design-min.webp";
import redesign_web_image from "/Images/Services/website_redesign-min.webp";
import ecommerce_web_image from "/Images/Services/e_commerce_design-min.webp";
import "./services.css";
import { Link } from "react-router-dom";

const Services = ({ title, description, services = [], ...props }) => {
  return (
    <>
      <section
        id="services"
        className="py-20 bg-[#00042a] relative overflow-clip"
      >
        <div className="container">
          <div className="lg:flex g-4">
            <div className="w-full lg:w-2/5 service-intro-column">
              <div className="service-intro sticky top-0 p-[2rem]">
                <h3 className="text-sky-500 font-semibold text-xl mb-4">
                  WHY SKYNET SILICON?
                </h3>
                <h1 className="text-white font-bold text-3xl md:text-4xl xl:text-6xl">
                  {title}
                </h1>
                <p className="text-white text-lg mt-5">{description}</p>
                <img
                  className="img-fluid mt-20"
                  src="https://www.digitalsilk.com/wp-content/uploads/2024/09/Explore-Our-Web-Design-Services-1.png.webp"
                  alt=""
                />
              </div>
            </div>
            <div className="service_detail_before_effect w-full lg:w-3/5">
              <Link to="/service/web-design">
                <div className="service-detail group mb-4 bg-[#070b30] px-[4rem] py-[3rem] relative overflow-hidden w-full z-[999] hover:w-[60vw] cursor-pointer">
                  <div
                    className="service-detail-wrapper block absolute top-0 left-0 w-full h-full z-[-1] invisible transition-all duration-300 opacity-0 bg-white"
                    style={{ background: `url(${custom_web_image})` }}
                  ></div>
                  <TbDeviceDesktopStar className="text-white text-8xl border-2 border-sky-500 rounded-full p-3" />
                  <h3 className="text-white font-bold text-3xl sm:text-4xl my-3 group-hover:text-[#00042a]">
                    Unique Web Design
                  </h3>
                  <p className="text-white font-semibold text-lg mt-8 group-hover:text-[#00042a] w-[100%] lg:w-[485px] xl:w-[625px] 2xl:w-[770px]">
                    Our carefully designed websites offer a completely original
                    online experience that is customized to your company. Our
                    talented designers turn your idea into a vibrant, unique
                    design that increases brand awareness, encourages
                    interaction, and increases conversions. Your website will
                    stand out and establish a strong connection with your
                    audience when you work with us.{" "}
                  </p>

                  <div className="overlay-circle-one block rounded-full absolute blur-2xl invisible opacity-0 transition-all duration-300 ease-in-out w-[320px] h-[320px] bg-[#7e57c2] right-0 bottom-[-50%]"></div>
                  <div className="overlay-circle-two block rounded-full absolute blur-2xl invisible opacity-0 transition-all duration-300 ease-in-out w-[270px] h-[270px] bg-[#00b9ff] right-[-10%] top-[20%]"></div>
                </div>
              </Link>
              <Link to="/service/redesign-identity">
                <div className="service-detail mb-4 bg-[#070b30] px-[4rem] py-[3rem] relative overflow-hidden w-full z-[999] hover:w-[60vw] cursor-pointer">
                  <div
                    className="service-detail-wrapper block absolute top-0 left-0 w-full h-full z-[-1] invisible transition-all duration-300 opacity-0 bg-white"
                    style={{ background: `url(${redesign_web_image})` }}
                  ></div>

                  <VscSettingsGear className="text-white text-8xl border-2 border-sky-500 rounded-full p-3" />
                  <h3 className="text-white font-bold text-3xl sm:text-4xl my-3">
                    Redesigning a Website
                  </h3>
                  <p className="text-white font-semibold text-lg mt-8 w-[100%] lg:w-[485px] xl:w-[625px] 2xl:w-[770px]">
                    We examine your website's problems and possibilities to
                    boost your online visibility, whether you require a redesign
                    or a redesign. The functionality, user experience, and
                    visual appeal of your website will all be improved by our
                    award-winning web designers. What was the outcome? a
                    cutting-edge, vibrant website that boosts traffic and
                    enhances your industry's brand.
                  </p>

                  <div className="overlay-circle-one block rounded-full absolute blur-2xl invisible opacity-0 transition-all duration-300 ease-in-out w-[320px] h-[320px] bg-[#7e57c2] right-0 bottom-[-50%]"></div>
                  <div className="overlay-circle-two block rounded-full absolute blur-2xl invisible opacity-0 transition-all duration-300 ease-in-out w-[270px] h-[270px] bg-[#00b9ff] right-[-10%] top-[20%]"></div>
                </div>
              </Link>
              {/* <div className="service-detail mb-4 bg-[#070b30] px-[4rem] py-[3rem] relative overflow-hidden w-full z-[999] hover:w-[60vw] cursor-pointer">
                <div
                  className="service-detail-wrapper block absolute top-0 left-0 w-full h-full z-[-1] invisible transition-all duration-300 opacity-0 bg-white"
                  style={{ background: `url(${responsive_web_image})` }}
                ></div>

                <MdOutlineSendToMobile className="text-white text-8xl border-2 border-sky-500 rounded-full p-3" />
                <h3 className="text-white font-bold text-3xl sm:text-4xl my-3">
                  Designing Responsively
                </h3>
                <p className="text-white font-semibold text-lg mt-8 w-[100%] lg:w-[485px] xl:w-[625px] 2xl:w-[770px]">
                  Across all platforms, we provide flawless user experiences.
                  Your website will not only meet but beyond user expectations
                  thanks to our responsive designs, which seamlessly adjust to
                  any screen size. Regardless of how a visitor arrives at your
                  website, we guarantee a consistent, captivating experience
                  from strategy to design and production.
                </p>

                <div className="overlay-circle-one block rounded-full absolute blur-2xl invisible opacity-0 transition-all duration-300 ease-in-out w-[320px] h-[320px] bg-[#7e57c2] right-0 bottom-[-50%]"></div>
                <div className="overlay-circle-two block rounded-full absolute blur-2xl invisible opacity-0 transition-all duration-300 ease-in-out w-[270px] h-[270px] bg-[#00b9ff] right-[-10%] top-[20%]"></div>
              </div> */}
              <Link to="/service/search-engine-optimization">
                <div className="service-detail mb-4 bg-[#070b30] px-[4rem] py-[3rem] relative overflow-hidden w-full z-[999] hover:w-[60vw] cursor-pointer">
                  <div
                    className="service-detail-wrapper block absolute top-0 left-0 w-full h-full z-[-1] invisible transition-all duration-300 opacity-0 bg-white"
                    style={{ background: `url(${seo_web_image})` }}
                  ></div>

                  <FaMagnifyingGlassChart className="text-white text-8xl border-2 border-sky-500 rounded-full p-3" />
                  <h3 className="text-white font-bold text-3xl sm:text-4xl my-3">
                    Search Engine Optimization
                  </h3>
                  <p className="text-white font-semibold text-lg mt-8 w-[100%] lg:w-[485px] xl:w-[625px] 2xl:w-[770px]">
                    We offer a comprehensive range of services designed to boost
                    your website’s ranking and attract organic, non-paid Google
                    search traffic. Our team can conduct a thorough SEO audit of
                    your website, providing actionable insights and strategies
                    to enhance your organic reach and visibility on search
                    engines.
                  </p>

                  <div className="overlay-circle-one block rounded-full absolute blur-2xl invisible opacity-0 transition-all duration-300 ease-in-out w-[320px] h-[320px] bg-[#7e57c2] right-0 bottom-[-50%]"></div>
                  <div className="overlay-circle-two block rounded-full absolute blur-2xl invisible opacity-0 transition-all duration-300 ease-in-out w-[270px] h-[270px] bg-[#00b9ff] right-[-10%] top-[20%]"></div>
                </div>
              </Link>
              <Link to="/service/graphic-designing">
                <div className="service-detail mb-4 bg-[#070b30] px-[4rem] py-[3rem] relative overflow-hidden w-full z-[999] hover:w-[60vw] cursor-pointer">
                  <div
                    className="service-detail-wrapper block absolute top-0 left-0 w-full h-full z-[-1] invisible transition-all duration-300 opacity-0 bg-white"
                    style={{ background: `url(${uiux_web_image})` }}
                  ></div>

                  <MdOutlineDesignServices className="text-white text-8xl border-2 border-sky-500 rounded-full p-3" />
                  <h3 className="text-white font-bold text-3xl sm:text-4xl my-3">
                    Graphic Design
                  </h3>
                  <p className="text-white font-semibold text-lg mt-8 w-[100%] lg:w-[485px] xl:w-[625px] 2xl:w-[770px]">
                    Our award-winning designers use trusted methods and
                    innovative approaches to create engaging visual experiences
                    and seamless user journeys. Whether you’re looking to build
                    a custom UX/UI or redesign your current one, we’ll enhance
                    your visual identity and ensure your website is both
                    aesthetically pleasing and highly functional.
                  </p>

                  <div className="overlay-circle-one block rounded-full absolute blur-2xl invisible opacity-0 transition-all duration-300 ease-in-out w-[320px] h-[320px] bg-[#7e57c2] right-0 bottom-[-50%]"></div>
                  <div className="overlay-circle-two block rounded-full absolute blur-2xl invisible opacity-0 transition-all duration-300 ease-in-out w-[270px] h-[270px] bg-[#00b9ff] right-[-10%] top-[20%]"></div>
                </div>
              </Link>
              <Link to={`/service/ecommerce-development`}>
                <div className="service-detail mb-4 bg-[#070b30] px-[4rem] py-[3rem] relative overflow-hidden w-full z-[999] hover:w-[60vw] cursor-pointer">
                  <div
                    className="service-detail-wrapper block absolute top-0 left-0 w-full h-full z-[-1] invisible transition-all duration-300 opacity-0 bg-white"
                    style={{ background: `url(${ecommerce_web_image})` }}
                  ></div>

                  <RiLuggageCartLine className="text-white text-8xl border-2 border-sky-500 rounded-full p-3" />
                  <h3 className="text-white font-bold text-3xl sm:text-4xl my-3">
                    Design and Development for Ecommerce
                  </h3>
                  <p className="text-white font-semibold text-lg mt-8 w-[100%] lg:w-[485px] xl:w-[625px] 2xl:w-[770px]">
                    We carefully build each website to provide a completely
                    original online experience that is customized to your
                    company. Your idea is turned into a dynamic, unique design
                    by our talented designers, which increases brand awareness,
                    encourages interaction, and increases conversions. Working
                    with us will make your website unique and establish a strong
                    connection with your target audience.
                  </p>

                  <div className="overlay-circle-one block rounded-full absolute blur-2xl invisible opacity-0 transition-all duration-300 ease-in-out w-[320px] h-[320px] bg-[#7e57c2] right-0 bottom-[-50%]"></div>
                  <div className="overlay-circle-two block rounded-full absolute blur-2xl invisible opacity-0 transition-all duration-300 ease-in-out w-[270px] h-[270px] bg-[#00b9ff] right-[-10%] top-[20%]"></div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
