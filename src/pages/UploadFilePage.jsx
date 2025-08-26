import React, { useEffect, useState } from "react";

const UploadFilePage = () => {
    const [file, setFile] = useState(null); // To store the selected file
    const [category, setCategory] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [categories, setCategories] = useState([]);
    const [portfolio, setPortfolio] = useState([]);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission

        if (!file || !title || !description || !category) {
            console.log("All fields are required");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("category", category);

        try {
            const response = await fetch("https://skynetsilicon-website-backend.vercel.app/api/portfolio", {
                method: "POST",
                headers: {},
                body: formData, // Send form data as the request body
            });

            const data = await response.json();
            console.log("Response from backend:", data);

            if (response.ok) {
                setFile(null);
                setTitle("");
                setDescription("");
                setCategory("");
                console.log("File uploaded successfully!");
            }
        } catch (error) {
            console.error("Error uploading file:", error);
        }
    };

    // Categories
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch("https://skynetsilicon-website-backend.vercel.app/api/category");
                const data = await response.json();
                setCategories(data);
                console.log(data)
            } catch (error) {
                console.error("Error uploading file:", error);
            }
        })()
    }, [])

    // Portfolio
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch("https://skynetsilicon-website-backend.vercel.app/api/portfolio");
                const data = await response.json();
                setPortfolio(data);
                console.log(data)
            } catch (error) {
                console.error("Error uploading file:", error);
            }
        })()
    }, [])

    return (
        <>
            <div className="container mx-auto p-4">
                <div className="bg-white shadow-lg rounded-lg p-5 max-w-[800px] mx-auto">
                    <h2 className="text-xl font-semibold mb-4">Upload Files</h2>
                    <div className="border-dashed border-2 border-gray-300 p-4 rounded">
                        <label
                            htmlFor="fileUpload"
                            className="block text-center text-gray-500 cursor-pointer hover:text-gray-700"
                        >
                            Click to choose files
                            <input
                                id="fileUpload"
                                type="file"
                                onChange={handleFileChange}
                                className="hidden"
                            />
                        </label>
                    </div>
                    {file && (
                        <div className="mt-4">
                            <label htmlFor="" className="text-sm text-gray-500 mb-2">Select Category*</label>
                            <select name="" onChange={(e) => setCategory(e.target.value)} className="form-select w-full rounded-none focus:shadow-none " id="">
                                {
                                    categories && categories.map(({ _id, name }) => {
                                        return <option value={name} key={_id}>{name}</option>
                                    })
                                }
                            </select>

                            <label htmlFor="" className="text-sm text-gray-500 mb-2">Title*</label>
                            <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} placeholder="Portfolio Title" className="mb-4 py-3 form-control w-full rounded-none focus:shadow-none" />

                            <label htmlFor="" className="text-sm text-gray-500 mb-2">Description*</label>
                            <textarea name="description" onChange={(e) => setDescription(e.target.value)} placeholder="Portfolio Description" className="h-[100px] py-3 form-control w-full rounded-none focus:shadow-none" id=""></textarea>

                            <div className="flex items-center justify-between bg-gray-100 p-3 rounded">
                                <div>
                                    <p className="text-gray-700">
                                        <strong>File Name:</strong> {file.name}
                                    </p>
                                    <p className="text-gray-600">
                                        <strong>File Size:</strong> {file.size} MB
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <button

                                        className="text-red-500 hover:text-red-700"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>

                            <button
                                onClick={handleSubmit}
                                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-2 shadow-lg mt-4 font-medium w-full"
                            >
                                Upload Your File
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default UploadFilePage;