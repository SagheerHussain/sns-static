import React, { useEffect, useState } from "react";
import { Box, Divider, Button, Drawer } from "@mui/material";
import { IoFilterSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { ProjectCard } from "../index";
import { portfolios } from "../projects";
import { categories } from "../projects";

function FilterProjects({ isClick }) {
  // State Variables
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [open, setOpen] = useState(false);
  
  // Handle Drawer
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  //   Filter Projects
  const handleFilterProjects = (category) => {
    setSelectedCategories(
      (prev) =>
        prev.includes(category)
          ? prev.filter((c) => c !== category) // Remove category if already selected
          : [...prev, category] // Add category if not selected
    );
  };

  const filteredProjects =
    selectedCategories.length === 0
      ? portfolios
      : portfolios?.filter((project) =>
          project.categories?.some((cat) =>
            selectedCategories.includes(cat.slug)
          )
        );

  return (
    <div className="filter_projects">
      <div className="flex">
        <div className="lg:w-[30%] xl:w-[25%] lg:block hidden border-1 border-[#c9c9c936] h-full p-4">
          <h5 className="mb-4 fw-bold d-flex align-items-center text-zinc-300">
            Filters <IoFilterSharp className="ms-2" />
          </h5>

          <h6 className="text-zinc-200 mb-2 text-sm">Categories</h6>
          {categories?.map((category, ind) => (
            <div className=" checkbox-wrapper py-3">
              <input
                type="checkbox"
                value={category.slug}
                onChange={(e) => handleFilterProjects(e.target.defaultValue)}
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

        <div className="w-full lg:w-[70%] xl:w-[75%] ms-[2%]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-white">
                {filteredProjects?.length > 0
                  ? `${filteredProjects?.length} items found`
                  : "No Items Found"}
              </p>
            </div>
            <div className="lg:hidden block text-end">
              <Button onClick={toggleDrawer(!open)}>
                <IoFilterSharp
                  className="text-white"
                  style={{
                    fontSize: "1.8rem",
                    marginTop: "-1.5rem",
                    color: "#222",
                  }}
                />
              </Button>
              <Drawer open={open} className="bg-[#00000057] z-[9999999]">
                <Box
                  sx={{
                    width: 300,
                    height: "100vh",
                    padding: "2rem 1rem",
                    backgroundColor: "#00042a",
                    zIndex: 99999,
                  }}
                  role="presentation"
                >
                  <div className="text-end mx-3 flex justify-end">
                    <RxCross2
                      style={{
                        color: "#999",
                        fontSize: "1.8rem",
                        cursor: "pointer",
                      }}
                      onClick={toggleDrawer(!open)}
                    />
                  </div>
                  <h5 className="fw-bold mb-4 text-white">Filters</h5>
                  <h6 className="text-white mb-4 text-sm">Categories</h6>
                  {categories?.map((categ, ind) => (
                    <div className=" checkbox-wrapper py-3">
                      <input
                        type="checkbox"
                        value={categ.slug}
                        onChange={(e) =>
                          handleFilterProjects(e.target.defaultValue)
                        }
                        id={categ?._id}
                        className=""
                      />
                      <label
                        htmlFor={categ?._id}
                        className="text-white"
                        key={ind}
                        // style={{ fontSize: "0.85rem" }}
                      >
                        {categ.slug
                          ?.split("-")
                          .map((word) => word[0].toUpperCase() + word.slice(1))
                          .join(" ")}
                      </label>
                    </div>
                  ))}
                </Box>
              </Drawer>
            </div>
          </div>

          <Divider style={{ backgroundColor: "#999" }} className="my-2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 p-3">
            {filteredProjects?.map((project, ind) => (
              <ProjectCard project={project} index={ind + 1} />
            ))}
          </div>

          {filteredProjects?.length === 0 && (
            <p className="text-white text-center">
              There is No Projects Right Now For This Category.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default FilterProjects;
