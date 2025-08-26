import React, { useState } from 'react';
import { Layout } from '../index';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AddCategory = () => {

    const [category, setCategory] = useState("");
    const [slug, setSlug] = useState("");

    const navigate = useNavigate();

    const handleAddCategory = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/category`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", // Ensure JSON data is sent
                },
                body: JSON.stringify({ name: category, slug: slug }) // Convert JS object to JSON string
            });

            const data = await response.json();
            // Success Notification
            Swal.fire({
                icon: "success",
                text: "Successfully Add New Category",
            });
            setTimeout(() => {
                navigate("/dashboard/view-category");
            }, 1500);
        } catch (error) {
            console.error("Error uploading file:", error);
        }
    }

    return (
        <>
            <Layout>
                <section id="addCategory" className={`h-[88vh] py-6`}>
                    <div className="container py-4">
                        <h1 className='text-[#fff] text-4xl font-bold mb-5'>Add New Category</h1>
                        <form action="" onSubmit={handleAddCategory}>
                            <label htmlFor="" className='text-zinc-300 text-sm'>Category Name</label>
                            <input type="text" name='category' onChange={(e) => setCategory(e.target.value)} placeholder='Category' className='form-control placeholder:text-zinc-300 mt-2 bg-transparent text-white rounded-none focus:shadow-none focus:border-zinc-700 border-zinc-700' />
                            <label htmlFor="" className='text-zinc-300 text-sm mt-4'>Category Slug</label>
                            <input type="name" onChange={(e) => setSlug(e.target.value)} name='slug' placeholder='Enter Category Slug' className='form-control placeholder:text-zinc-300 mt-2 bg-transparent text-white rounded-none focus:shadow-none focus:border-zinc-700 border-zinc-700' />
                            <button className='primary-white-btn mt-4 hover:text-white'>Add Category</button>
                        </form>
                    </div>
                </section>
            </Layout>
        </>
    )
}

export default AddCategory
