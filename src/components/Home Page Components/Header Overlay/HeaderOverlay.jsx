import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";

const HeaderOverlay = React.memo(() => {
  
  const portfolio = [
    { id: 1, src: "/Images/Home Images/159.webp" },
    { id: 2, src: "/Images/Home Images/160.webp" },
    { id: 3, src: "/Images/Home Images/161.webp" },
    { id: 4, src: "/Images/Home Images/162.webp" },
    { id: 5, src: "/Images/Home Images/163.webp" },
    { id: 6, src: "/Images/Home Images/164.webp" },
    { id: 7, src: "/Images/Home Images/165.webp" },
    { id: 8, src: "/Images/Home Images/166.webp" },
    { id: 9, src: "/Images/Home Images/167.webp" },
    { id: 10, src: "/Images/Home Images/168.webp" },
  ];

  // Three Columns for Image Overlays
  const heroImagesOverlayColumn = [portfolio.slice(0, 5), portfolio.slice(6, 10), portfolio.slice(3, 7)];

  return (
    <div className="hero_section_images_overlays flex md:flex-row flex-col scale-125">
      {heroImagesOverlayColumn.map((column, index) => (
        <motion.div
          key={index}
          className="hero_section_images_overlay_box"
          initial={{ y: 0 }}
          animate={{ y: index % 2 === 0 ? "-200px" : "200px" }}
          transition={{ ease: "linear", repeat: Infinity, repeatType: "loop", duration: 13 }}
          style={{ overflow: "hidden", willChange: "transform" }} // GPU Optimization
        >
          {column.map(({ _id, src }) => (
            <img
              key={_id}
              src={`${src}`}
              alt="Portfolio Image"
              className="p-1 rounded-[10px] object-cover object-left-top w-[600px] h-[400px]"
              loading="lazy" // Lazy loading for performance boost
            />
          ))}
        </motion.div>
      ))}
    </div>
  );
});

export default HeaderOverlay;

