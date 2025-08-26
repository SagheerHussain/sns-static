import React, { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import Swal from "sweetalert2";
import { BeatLoader } from "react-spinners";
import { useParams } from "react-router-dom";

const EditService = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isFetching, setIsFetching] = useState(true);

    // Get Id from URL
    const { id } = useParams();

    // Basic fields
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    // Dynamic Fields (Arrays)
    const [featuredList, setFeaturedList] = useState([]);
    const [serviceExplanation, setServiceExplanation] = useState([]);
    const [whyYouNeed, setWhyYouNeed] = useState([]);
    const [whyChooseUs, setWhyChooseUs] = useState([]);

    // Fetch Service By Id and Pre-fill Form
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/services/id/${id}`);
                const data = await response.json();

                setTitle(data.title || "");
                setDescription(data.description || "");
                setCategory(data.category?._id || ""); // Store ObjectId instead of name

                setFeaturedList(data.featured_list || []);
                setServiceExplanation(data.service_explanation || []);
                setWhyYouNeed(data.why_you_need_service || []);
                setWhyChooseUs(data.why_choose_skynet || []);

                setIsFetching(false);
            } catch (error) {
                console.error("Error fetching service:", error);
                setIsFetching(false);
            }
        })();
    }, [id]);

    // Fetch Categories
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/category`);
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        })();
    }, []);

    // Functions for dynamic fields
    const addFeaturedPoint = () => setFeaturedList([...featuredList, ""]);
    const updateFeaturedPoint = (index, value) => {
        let list = [...featuredList];
        list[index] = value;
        setFeaturedList(list);
    };

    const addServiceExplanation = () => setServiceExplanation([...serviceExplanation, { title: "", description: "" }]);
    const updateServiceExplanation = (index, key, value) => {
        let list = [...serviceExplanation];
        list[index][key] = value;
        setServiceExplanation(list);
    };

    const addWhyYouNeed = () => setWhyYouNeed([...whyYouNeed, { title: "", description: "" }]);
    const updateWhyYouNeed = (index, key, value) => {
        let list = [...whyYouNeed];
        list[index][key] = value;
        setWhyYouNeed(list);
    };

    const addWhyChooseUs = () => setWhyChooseUs([...whyChooseUs, { title: "", description: "" }]);
    const updateWhyChooseUs = (index, key, value) => {
        let list = [...whyChooseUs];
        list[index][key] = value;
        setWhyChooseUs(list);
    };

    // Form Submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            title,
            description,
            category,
            featured_list: featuredList,
            service_explanation: serviceExplanation,
            why_you_need_service: whyYouNeed,
            why_choose_skynet: whyChooseUs,
        };

        setLoading(true);

        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/services/update/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            console.log("Service updated successfully:", data);
            setLoading(false);

            Swal.fire({
                icon: "success",
                text: "Service Updated Successfully!",
            });
            setTimeout(() => {
                navigate("/dashboard/view-service");
            }, 1500);
        } catch (error) {
            console.error("Error updating service:", error);
            setLoading(false);
        }
    };

    return (
        <Layout>
            <section id="editService" className={`${isFetching ? "h-[88vh]" : "h-full"} py-6`}>
                <div className="container py-4">
                    <h1 className="text-[#fff] text-4xl font-bold mb-5">Edit Service</h1>

                    {isFetching ? (
                        <div className="text-white text-xl">Loading service details...</div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            {/* Basic Fields */}
                            <label className="text-[#fff] text-sm">Service Title*</label>
                            <input className='placeholder:text-white text-white bg-transparent focus:border-[#ffffff25] border-1 border-[#ffffff25] form-control focus:shadow-none rounded-none mb-4 mt-1' type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

                            <label className="text-[#fff] text-sm">Service Description</label>
                            <textarea className='placeholder:text-white text-white bg-transparent focus:border-[#ffffff25] border-1 border-[#ffffff25] form-control focus:shadow-none rounded-none mb-4 mt-1' value={description} onChange={(e) => setDescription(e.target.value)} />

                            <label className="text-[#fff] text-sm">Select Category</label>
                            <select className='placeholder:text-white text-white bg-transparent focus:border-[#ffffff25] border-1 border-[#ffffff25] form-control focus:shadow-none rounded-none mb-4 mt-1' onChange={(e) => setCategory(e.target.value)} value={category}>
                                <option hidden>Select Category</option>
                                {categories.map(({ _id, name }) => (
                                    <option key={_id} value={_id} className="bg-zinc-950">{name}</option>  // Using ObjectId instead of name
                                ))}
                            </select>

                            {/* Featured List */}
                            <h3 className="text-[#fff] text-sm">Featured Points</h3>
                            {featuredList.map((feature, index) => (
                                <input className='placeholder:text-white text-white bg-transparent focus:border-[#ffffff25] border-1 border-[#ffffff25] form-control focus:shadow-none rounded-none mb-4 mt-1' key={index} type="text" value={feature} onChange={(e) => updateFeaturedPoint(index, e.target.value)} />
                            ))}
                            <button type="button" className="text-white bg-zinc-700 hover:bg-zinc-800 px-3 py-1 mb-4" onClick={addFeaturedPoint}>+ Add Featured Point</button>

                            {/* Service Explanation */}
                            <h3 className="text-[#fff] text-sm">Service Explanation</h3>
                            {serviceExplanation.map((item, index) => (
                                <div key={index}>
                                    <input className='placeholder:text-white text-white bg-transparent focus:border-[#ffffff25] border-1 border-[#ffffff25] form-control focus:shadow-none rounded-none mb-4 mt-1' type="text" value={item.title} onChange={(e) => updateServiceExplanation(index, "title", e.target.value)} />
                                    <textarea className='placeholder:text-white text-white bg-transparent focus:border-[#ffffff25] border-1 border-[#ffffff25] form-control focus:shadow-none rounded-none mb-4 mt-1' value={item.description} onChange={(e) => updateServiceExplanation(index, "description", e.target.value)} />
                                </div>
                            ))}
                            <button type="button" className="text-white bg-zinc-700 hover:bg-zinc-800 px-3 py-1 mb-4" onClick={addServiceExplanation}>+ Add Explanation</button>

                            {/* Why You Need It */}
                            <h3 className="text-[#fff] text-sm">Why You Need This Service</h3>
                            {whyYouNeed.map((item, index) => (
                                <div key={index}>
                                    <input className='placeholder:text-white text-white bg-transparent focus:border-[#ffffff25] border-1 border-[#ffffff25] form-control focus:shadow-none rounded-none mb-4 mt-1' type="text" value={item.title} onChange={(e) => updateWhyYouNeed(index, "title", e.target.value)} />
                                    <textarea className='placeholder:text-white text-white bg-transparent focus:border-[#ffffff25] border-1 border-[#ffffff25] form-control focus:shadow-none rounded-none mb-4 mt-1' value={item.description} onChange={(e) => updateWhyYouNeed(index, "description", e.target.value)} />
                                </div>
                            ))}
                            <button type="button" className="text-white bg-zinc-700 hover:bg-zinc-800 px-3 py-1 mb-4" onClick={addWhyYouNeed}>+ Add Reason</button>

                            {/* Why Choose Us */}
                            <h3 className="text-[#fff] text-sm">Why Choose Skynet Silicon</h3>
                            {whyChooseUs.map((item, index) => (
                                <div key={index}>
                                    <input className='placeholder:text-white text-white bg-transparent focus:border-[#ffffff25] border-1 border-[#ffffff25] form-control focus:shadow-none rounded-none mb-4 mt-1' type="text" value={item.title} onChange={(e) => updateWhyChooseUs(index, "title", e.target.value)} />
                                    <textarea className='placeholder:text-white text-white bg-transparent focus:border-[#ffffff25] border-1 border-[#ffffff25] form-control focus:shadow-none rounded-none mb-4 mt-1' value={item.description} onChange={(e) => updateWhyChooseUs(index, "description", e.target.value)} />
                                </div>
                            ))}
                            <button type="button" className="text-white bg-zinc-700 hover:bg-zinc-800 px-3 py-1 mb-4" onClick={addWhyChooseUs}>+ Add Benefit</button>
                            <div className="mt-4">
                                <button type="submit" className="primary-white-btn hover:text-white">{loading ? <BeatLoader size={12} color="#1092fd" /> : "Update Service"}</button>
                            </div>
                        </form>
                    )}
                </div>
            </section>
        </Layout>
    );
};

export default EditService;
