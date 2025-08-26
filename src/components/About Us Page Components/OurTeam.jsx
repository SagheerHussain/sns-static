import React from "react";
import { FaLink, FaLinkedinIn } from "react-icons/fa";
import sagheerImg from "/Images/Team/sagheer.jpg";
import adeelImg from "/Images/Team/adeel.jpeg";
import { useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const OurTeam = () => {
  const matches = useMediaQuery("(max-width:425px)");

  return (
    <>
      <section id="our-team" className="py-10">
        <div className="container">
          <div
            className={`skynet_founder px-3 lg:flex justify-between items-center pb-20`}
          >
            <div className="founder_description me-[2%] lg:w-[60%]">
              <h1 className="text-[#111] text-[1.5rem] font-bold leading-8">
                <span className="text-base pb-[40px] text_gradient text-[2rem] ps-2">
                  (FOUNDER)
                </span>{" "}
                <br />
                <span className="text_gradient text-[2.5rem] sm:text-[3rem] pb-4 pt-3 inline-block">
                  Adeel Jabbar{" "}
                </span>{" "}
                <br /> Dynamic Professional with 25+ years of expertise in
                Finance, Sales, Marketing & Business Development.
              </h1>
              <p className="text-[#222] pt-4 text-justify">
                Highly accomplished and seasoned developer with an impressive
                25+ years of experience in Web Development, App Development,
                AppSheet Development, and WordPress Development. His extensive
                knowledge and hands-on expertise have enabled him to craft
                powerful, scalable, and innovative digital solutions for
                businesses across various industries.
              </p>
              <p className="text-[#222] py-4 text-justify">
                With a strong background in custom web applications, mobile app
                development, and no-code/low-code platforms like AppSheet, Adeel
                specializes in building efficient, user-friendly, and
                high-performance applications tailored to meet business needs.
                His ability to seamlessly integrate technology with business
                requirements makes him a go-to expert for custom website
                development, mobile apps, and workflow automation.
              </p>
              <p className="text-[#222] pb-4 text-justify">
                His WordPress development skills cover everything from custom
                theme and plugin development to WooCommerce solutions, API
                integrations, and performance optimization. Whether it's
                creating complex web platforms, automating business processes
                with AppSheet, or developing high-quality mobile applications,
                Adeel’s strategic approach ensures robust, scalable, and
                future-ready solutions.
              </p>
            </div>
            <div className="founder_img flex lg:justify-end justify-center lg:w-[40%]">
              <div
                className={`${
                  matches ? "h-[340px] w-[340px]" : "h-[400px] w-[400px]"
                }   overflow-hidden rounded-full`}
              >
                <img src={adeelImg} className="" alt="" />
              </div>
            </div>
          </div>
          <div
            className={`skynet_founder px-3 flex lg:flex-row flex-col justify-between items-center`}
          >
            <div className="founder_image lg:w-[40%] flex lg:justify-start justify-center">
              <img src={sagheerImg} className="rounded-full" alt="" />
            </div>
            <div className="founder_description ms-[2%] lg:w-[60%]">
              <h1 className="text-[#111] text-[1.5rem] font-bold leading-8">
                <span className="text-base pb-[40px] text_gradient text-[2rem] ps-2">
                  (CO FOUNDER)
                </span>{" "}
                <br />
                <span className="text_gradient text-[2.5rem] sm:text-[3rem] pb-4 pt-3 inline-block">
                  Sagheer Hussain{" "}
                </span>{" "}
                <br /> Expert Full Stack Developer with 10 Years of Experience
              </h1>
              <p className="text-[#222] pt-4 text-justify">
                A highly skilled and innovative full-stack developer with over
                10 years of experience in building dynamic, high-performance
                digital solutions. With expertise spanning front-end and
                back-end development, he has successfully delivered a diverse
                range of projects, including sleek websites, complex web
                applications, and scalable mobile apps tailored to meet client
                needs.His deep passion for technology and creativity drives him
                to explore the latest advancements, ensuring that every project
                aligns with modern industry standards. Sagheer excels in turning
                complex ideas into intuitive, functional, and visually
                compelling products.
              </p>
              <p className="text-[#222] py-4 text-justify">
                As the driving force behind Skynetsilicon, he is committed to
                delivering precision and excellence in every aspect of
                development. Whether it’s performance optimization, API
                integrations, or security enhancements, Sagheer brings a
                problem-solving mindset and a detail-oriented approach to help
                businesses thrive in the digital world.
              </p>
              <p className="text-[#222] pb-4 text-justify">
                With a reputation for quality work, meeting deadlines, and
                providing exceptional client support, Sagheer Hussain is a
                trusted name in the tech industry — turning visions into
                reality, one project at a time.
              </p>
            </div>
          </div>
        </div>

        <div className="skynet_team_members mt-10">
          <Swiper
            spaceBetween={30}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            grabCursor={true}
            slidesPerView={4}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          ></Swiper>
        </div>
      </section>
    </>
  );
};

export default OurTeam;
