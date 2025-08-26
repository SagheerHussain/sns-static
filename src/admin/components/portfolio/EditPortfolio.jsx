import React, { useEffect, useState } from "react";
import { Layout } from "../index";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: "100%",
    },
  },
};

function getStyles(name, categoryName, theme) {
  return {
    fontWeight: categoryName.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

const EditPortfolio = () => {
  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState([]);
  const [portfolio, setPortfolio] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categoryName, setCategoryName] = useState([]);
  const [link, setLink] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();

  // Fetch Portfolio By Id
  const fetchPortfolioById = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/portfolio/id/${id}`
      );
      if (!response.ok) throw new Error("Something Went Wrong");
      const data = await response.json();
      console.log("portfolio", data);
      setPortfolio(data.portfolio);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPortfolioById();
  }, []);

  const handleSubmit = async () => {
    let categories = [];
    portfolio.categories.forEach((category) => {
      categories.push(category._id);
    });

    const formData = new FormData();
    formData.append("image", file ? file : portfolio.src); // Ensure key matches backend `upload.single("image")`
    formData.append("title", title ? title : portfolio.title);
    formData.append("description", description ? description : portfolio.description);
    formData.append("categories", categoryName.length > 0 ? categoryName : categories);
    formData.append("link", link ? link : portfolio.link);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/portfolio/update/${id}`,
        {
          method: "PUT",
          body: formData,
        }
      );
      if (!response.ok) throw new Error("Failed to update");
      Swal.fire({
        icon: "success",
        text: "Portfolio Updated Successfully!",
      });
      setTimeout(() => {
        navigate("/dashboard/view-portfolio");
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };

  // Categories
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/category`);
        const data = await response.json();
        setCategories(data);
        console.log(data);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    })();
  }, []);

  const handleCategoryChange = (event) => {
    const {
      target: { value },
    } = event;
    setCategoryName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const theme = useTheme();
  return (
    <Layout>
      <section id="editPortfolio" className="h-full">
        <div className="container mx-auto p-4">
          <div className="bg-zinc-950 shadow-lg rounded-lg p-5 mx-auto">
            <h2 className="text-xl font-semibold mb-4 text-zinc-300">
              Edit Portfolio
            </h2>
            <div className="border-dashed border-2 border-gray-500 p-4 rounded">
              <label
                htmlFor="fileUpload"
                className="block text-center text-gray-300 cursor-pointer hover:text-gray-400"
              >
                Click to choose files
                <input
                  id="fileUpload"
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="hidden"
                />
              </label>
            </div>
            {portfolio && (
              <img
                src={`${portfolio.src}`}
                alt="Portfolio"
                className="my-4 w-[300px] object-contain"
              />
            )}

            <label className="text-sm text-zinc-300 mb-2 mt-4">
              Previous Categories
            </label>
            <div className="grid grid-cols-2 gap-4">
              {portfolio?.categories?.map((category) => (
                <input
                  type="text"
                  className="form-control bg-transparent border-[#ffffff20] rounded-none text-zinc-500 mb-4 py-3"
                  disabled
                  value={category?.name}
                />
              ))}
            </div>

            <label htmlFor="" className="text-sm text-zinc-300 mb-2">
              Select Categories*
            </label>
            <FormControl
              sx={{
                width: "100%",
                border: "1px solid #ccc",
                borderRadius: "2px",
              }}
            >
              <InputLabel id="demo-multiple-name-label" sx={{ color: "#ccc" }}>
                Name
              </InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={categoryName}
                onChange={handleCategoryChange}
                className="border-zinc-300 placeholder:text-zinc-300 text-white focus:border-zinc-300 focus:shadow-non"
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
              >
                {categories?.map(({ _id, name }) => (
                  <MenuItem
                    key={_id}
                    value={_id}
                    style={getStyles(name, categoryName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <label className="text-sm text-zinc-300 mb-2 mt-4">Title*</label>
            <input
              type="text"
              name="title"
              defaultValue={portfolio && portfolio.title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Portfolio Title"
              className="mb-4 py-3 form-control w-full rounded-none bg-transparent border-zinc-300 text-white"
            />
            <label className="text-sm text-zinc-300 mb-2">Description*</label>
            <textarea
              name="description"
              defaultValue={portfolio && portfolio.description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Portfolio Description"
              className="h-[100px] py-3 form-control w-full rounded-none bg-transparent border-zinc-300 text-white placeholder:text-zinc-300"
            />

            <label htmlFor="" className="text-sm text-zinc-300 mb-2 mt-4">
              Link*
            </label>
            <input
              type="text"
              name="link"
              defaultValue={portfolio && portfolio.link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="Portfolio Link"
              className="mb-4 py-3 form-control w-full rounded-none focus:shadow-none bg-transparent border-zinc-300 placeholder:text-zinc-300 text-white"
            />

            {file && (
              <div className="flex items-center justify-between bg-transparent p-3 rounded">
                <div>
                  <p className="text-zinc-300">
                    <strong>File Name:</strong> {file.name}
                  </p>
                  <p className="text-zinc-300">
                    <strong>File Size:</strong> {file.size} MB
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="text-red-500 hover:text-red-700">
                    Remove
                  </button>
                </div>
              </div>
            )}

            <button
              onClick={handleSubmit}
              className="primary-white-btn hover:text-white text-xl mt-4"
            >
              Update Portfolio
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EditPortfolio;
