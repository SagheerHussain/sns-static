import React, { useEffect, useState } from 'react';
import { Button } from "../components/index";

const UploadCategory = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const [category, setCategory] = useState("");
    const [slug, setSlug] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://skynetsilicon-website-backend.vercel.app/api/category", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", // Ensure JSON data is sent
                },
                body: JSON.stringify({ name: category, slug: slug }) // Convert JS object to JSON string
            });
    
            const data = await response.json();
            console.log("Category added successfully:", data);
        } catch (error) {
            console.error("Error uploading file:", error);
        }
    }

    return (
        <>
            <div className="container py-4">
                <form action="">
                    <label htmlFor="" className='text-gray-500 text-sm mb-2'>Category Name*</label>
                    <input type="name" onChange={(e) => setCategory(e.target.value)} name='category' placeholder='Enter Category Name' className='py-3 mb-4 form-control focus:shadow-none rounded-none' />
                    <input type="name" onChange={(e) => setSlug(e.target.value)} name='slug' placeholder='Enter Category Slug' className='py-3 mb-4 form-control focus:shadow-none rounded-none' />
                    <button onClick={handleSubmit} className="primary-btn text-[.9rem] hover:text-[#fff] py-3 px-4 after:bg-[radial-gradient(circle,_rgba(26,8,152,1)_0%,_rgba(24,12,75,1)_64%)]">Create Category</button>
                </form>
            </div>
        </>
    )
}

export default UploadCategory
