import React from "react";
import "./projects.css";
import FilterProjects from "./FilterProjects";

const Projects = ({ isClick }) => {
  return (
    <>
      <section
        id="featured_projects"
        className={`bg-[#000] pt-[170px] md:pt-[240px] pb-[100px] overflow-hidden relative ${
          isClick ? "max-h-screen" : "min-h-full"
        }`}
      >
        <div className="container mx-auto">
          <h1 className="text-4xl text-white font-bold uppercase mb-10">Projects</h1>
          <FilterProjects isClick={isClick} />
        </div>
      </section>
    </>
  );
};

export default Projects;
