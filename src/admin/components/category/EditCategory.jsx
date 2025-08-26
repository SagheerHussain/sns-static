import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Layout } from '../index';
import Swal from 'sweetalert2';

const EditCategory = () => {

    // State Variables
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState(null);
    const [newCategory, setNewCategory] = useState("");
    const [slug, setSlug] = useState("");

    const { id } = useParams();

    const navigate = useNavigate();

    const fetchCategory = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/category/get/${id}`);
            if (!response.ok) throw new Error("Something went wrong");
            const data = await response.json();
            setCategory(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchCategory();
    }, [])

    // Edit Category
    const handleEditCategory = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/category/update/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: newCategory ? newCategory : category.name, slug: slug ? slug : category.slug })
            });
            if (!response.ok) throw new Error("Something Went Wrong");
            const editData = await response.json();
            Swal.fire({
                icon: "success",
                text: "Category Updated Successfully!",
            })
            setTimeout(() => {
                navigate("/dashboard/view-category")
            }, 1500);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Layout>
                <section id="editCategory" className={`h-[88vh] py-10`}>
                    <div className="container">
                        <h1 className="text-4xl font-semibold mb-4 text-zinc-300">Edit Category</h1>
                        <form action="" onSubmit={handleEditCategory}>
                            <label htmlFor="" className='text-zinc-300 text-sm'>Category Name</label>
                            <input type="text" onChange={(e) => setNewCategory(e.target.value)} name='category' defaultValue={category && category.name} placeholder='Category' className='form-control placeholder:text-zinc-300 mt-2 bg-transparent text-white rounded-none focus:shadow-none focus:border-zinc-700 border-zinc-700' />
                            <label htmlFor="" className='text-zinc-300 text-sm mt-4'>Slug</label>
                            <input type="name" onChange={(e) => setSlug(e.target.value)} name='slug' defaultValue={category && category.slug} placeholder='Enter Category Slug' className='form-control placeholder:text-zinc-300 mt-2 bg-transparent text-white rounded-none focus:shadow-none focus:border-zinc-700 border-zinc-700' />
                            <button className='primary-white-btn mt-4 hover:text-white'>Edit Category</button>
                        </form>
                    </div>
                </section>
            </Layout>
        </>
    )
}

export default EditCategory
