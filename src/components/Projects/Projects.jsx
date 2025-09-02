import React, { useState } from "react";
import "./projects.css";
import FilterProjects from "./FilterProjects";
import { categories } from "../projects";
import { IoFilterSharp } from "react-icons/io5";

const ALL = "all";

const Projects = ({ isClick }) => {
  const [selectedCategories, setSelectedCategories] = useState([ALL]); // default: All selected

  const handleFilterProjects = (value) => {
    setSelectedCategories((prev) => {
      // If ALL clicked -> only ALL
      if (value === ALL) return [ALL];

      // If ALL is selected, start from empty
      let next = prev.includes(ALL) ? [] : [...prev];

      // Toggle value
      if (next.includes(value)) {
        next = next.filter((v) => v !== value);
      } else {
        next.push(value);
      }

      // If nothing left, revert to ALL
      if (next.length === 0) return [ALL];
      return next;
    });
  };

  // Effective filters to pass down (ALL means no filter)
  const effectiveSelected = selectedCategories.includes(ALL)
    ? []
    : selectedCategories;

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

            <div className="flex flex-wrap items-center justify-between gap-3">
              {/* ALL chip */}
              {(() => {
                const id = "cat-all";
                const isChecked = selectedCategories.includes(ALL);
                return (
                  <div key={id} className="py-2">
                    <input
                      id={id}
                      type="checkbox"
                      value={ALL}
                      checked={isChecked}
                      onChange={() => handleFilterProjects(ALL)}
                      className="peer sr-only"
                    />
                    <label
                      htmlFor={id}
                      className="
                        block text-sm text-center px-20 py-2 rounded-full font-semibold transition duration-300 cursor-pointer
                        text-white hover:bg-zinc-800 hover:text-white border-1 border-[#ffffff3a]
                        peer-checked:border-[#ffffff3a] peer-checked:bg-[#222]
                        peer-checked:text-white
                      "
                    >
                      All
                    </label>
                  </div>
                );
              })()}

              {/* Category chips */}
              {categories?.map((category, ind) => {
                const id = `cat-${category._id || category.slug || ind}`;
                const value = category.slug;
                const isAllOn = selectedCategories.includes(ALL);
                const isChecked =
                  !isAllOn && selectedCategories.includes(value);

                return (
                  <div key={id} className="py-2">
                    <input
                      id={id}
                      type="checkbox"
                      value={value}
                      checked={isChecked}
                      onChange={() => handleFilterProjects(value)}
                      className="peer sr-only"
                    />
                    <label
                      htmlFor={id}
                      className="
                        block text-sm text-center px-20 py-2 rounded-full font-semibold transition duration-300 cursor-pointer
                        text-white hover:bg-zinc-800 hover:text-white border-1 border-[#ffffff3a]
                        peer-checked:border-[#ffffff3a] peer-checked:bg-[#222]
                        peer-checked:text-white
                      "
                    >
                      {category?.name}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>

          <FilterProjects
            isClick={isClick}
            selectedCategories={effectiveSelected}
            handleFilterProjects={handleFilterProjects}
          />
        </div>
      </section>
    </>
  );
};

export default Projects;
