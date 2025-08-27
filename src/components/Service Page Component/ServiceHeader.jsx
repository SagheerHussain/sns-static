import React from "react";
import { useParams } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import { GiVibratingShield } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./css/serviceHeader.css";

import { BreadCrumb, Button } from "../index";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

import serviceOne from "/Images/Portfolio/service (7).webp";
import serviceTwo from "/Images/Portfolio/service (8).webp";
import serviceThree from "/Images/Portfolio/service (9).webp";
import ParticleNetwork from "../ParticleNetworkAnimation";

const ServiceHeader = ({
  service,
  isClick,
  minHeight = "h-[100vh]",
  className = "",
  ...props
}) => {
  // Get Category From URL
  const { category } = useParams();

  return (
    <>
      <header
        className={`header ${
          isClick ? "md:h-screen overflow-hidden" : "md:min-h-screen"
        } h-[fit-content] relative flex items-center justify-center`}
      >
        <ParticleNetwork
          className="z-[0]"
          options={{
            velocity: 1,
            density: 15000,
            netLineDistance: 200,
            netLineColor: "#929292",
            particleColors: ["#aaa"],
            spawnQuantity: 3,
          }}
        />

        {/* <div
          className={`absolute w-full h-full bg-gradient-to-r z-[-1] from-[#161616] to-[rgba(1,1,1,1)] opacity-100`}
        ></div> */}

        <div className="container md:flex pt-[185px] z-[0]">
          <div className="header_content px-3 md:w-[60%] w-full">
            <BreadCrumb category={service.category.name} page={"Service"} />
            <h2
              className={`inline-block mt-6 header_primary_heading text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white font-bold 2xl:max-w-[1500px]`}
            >
              {service.title || "Loading Service..."}
            </h2>
            <p className="text-white text-lg mt-10 inline-block">
              {service.description || "Loading Service..."}
            </p>
            <ul className="mt-10 inline-block">
              {service?.featured_list?.map((list, index) => (
                <li
                  key={index}
                  className="text-white mb-3 text-lg font-medium flex items-center"
                >
                  <MdKeyboardDoubleArrowRight className="text-[#00adce] me-2 text-xl mt-px" />
                  <span>{list}</span>
                </li>
              ))}
            </ul>
            <div className="service_header_btn mt-10">
              <Button
                link="/contact"
                className="secondary-button text-white"
                label="REQUEST A QUOTE"
              />
            </div>

            <div className="short_company_info_ratings flex items-center my-10">
              <div className="short_company_ratings_icon">
                <GiVibratingShield className="text-5xl text-[#00adce]" />
              </div>
              <div className="short_company_ratings_description ms-3">
                <h4 className="text-white font-medium mb-2 text-lg">
                  5 Star DesignRush Reviews
                </h4>
                <div className="short_company_ratings_stars flex items-center">
                  <IoStar className="text-yellow-400 text-xl me-1" />
                  <IoStar className="text-yellow-400 text-xl me-1" />
                  <IoStar className="text-yellow-400 text-xl me-1" />
                  <IoStar className="text-yellow-400 text-xl me-1" />
                  <IoStar className="text-yellow-400 text-xl me-1" />
                </div>
              </div>
            </div>
          </div>

          <div className="z-[20] md:ml-[5%] md:w-[35%] ">
            <Swiper
              spaceBetween={30}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              grabCursor={true}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={serviceOne} loading="lazy" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={serviceTwo} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={serviceThree} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </header>
    </>
  );
};

export default ServiceHeader;
