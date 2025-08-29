import React, { useState } from "react";
import "./projects.css";
import FilterProjects from "./FilterProjects";
import { categories } from "../projects";
import { IoFilterSharp } from "react-icons/io5";

const Projects = ({ isClick }) => {

   const [selectedCategories, setSelectedCategories] = useState([]);

  const handleFilterProjects = (category) => {
    setSelectedCategories(
      (prev) =>
        prev.includes(category)
          ? prev.filter((c) => c !== category) // Remove category if already selected
          : [...prev, category] // Add category if not selected
    );
  };

  return (
    <>
      <section
        id="featured_projects"
        className={`bg-[#000] pt-[170px] md:pt-[240px] pb-[100px] overflow-hidden relative ${
          isClick ? "max-h-screen" : "min-h-full"
        }`}
      >
        <div className="container mx-auto">
          <h1 className="text-4xl text-white font-bold uppercase mb-10">
            Projects
          </h1>

          <div className="border-[1px] rounded-[25px] border-white/20 lg:block hidden h-full mb-4 px-4 py-3">
            <h5 className="mb-4 fw-bold d-flex align-items-center text-zinc-300">
              Filters <IoFilterSharp className="ms-2" />
            </h5>

            {/* <h6 className="text-zinc-200 mb-2 text-sm">Categories</h6> */}
            <div className="flex justify-between items-center">
              {categories?.map((category, ind) => (
                <div className=" checkbox-wrapper py-3">
                  <input
                    type="checkbox"
                    value={category.slug}
                    onChange={(e) => handleFilterProjects(e.target.value)}
                    id={category._id}
                    className=""
                  />
                  <label
                    htmlFor={category._id}
                    className="text-white"
                    key={ind}
                    // style={{ fontSize: "0.85rem" }}
                  >
                    {category?.name}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <FilterProjects isClick={isClick} selectedCategories={selectedCategories} handleFilterProjects={handleFilterProjects}  />
        </div>
      </section>
    </>
  );
};

export default Projects;
