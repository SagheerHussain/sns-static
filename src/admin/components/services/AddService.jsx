import React, { useState, useEffect } from 'react'
import Layout from '../layout/Layout';
import Swal from 'sweetalert2';
import { BeatLoader } from 'react-spinners';

const AddService = () => {

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    // Basic fields
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    // Dynamic Fields (Arrays)
    const [featuredList, setFeaturedList] = useState([]);
    const [serviceExplanation, setServiceExplanation] = useState([]);
    const [whyYouNeed, setWhyYouNeed] = useState([]);
    const [whyChooseUs, setWhyChooseUs] = useState([]);

    // Handle Adding Featured Points
    const addFeaturedPoint = () => setFeaturedList([...featuredList, ""]);
    const updateFeaturedPoint = (index, value) => {
        let list = [...featuredList];
        list[index] = value;
        setFeaturedList(list);
    };

    // Handle Adding Service Explanation
    const addServiceExplanation = () => setServiceExplanation([...serviceExplanation, { title: "", description: "" }]);
    const updateServiceExplanation = (index, key, value) => {
        let list = [...serviceExplanation];
        list[index][key] = value;
        setServiceExplanation(list);
    };

    // Handle Adding Why You Need It
    const addWhyYouNeed = () => setWhyYouNeed([...whyYouNeed, { title: "", description: "" }]);
    const updateWhyYouNeed = (index, key, value) => {
        let list = [...whyYouNeed];
        list[index][key] = value;
        setWhyYouNeed(list);
    };

    // Handle Adding Why Choose Us
    const addWhyChooseUs = () => setWhyChooseUs([...whyChooseUs, { title: "", description: "" }]);
    const updateWhyChooseUs = (index, key, value) => {
        let list = [...whyChooseUs];
        list[index][key] = value;
        setWhyChooseUs(list);
    };

    // Submitting Form
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            title,
            description,
            category,
            featured_list: featuredList,
            service_explanation: serviceExplanation,
            why_you_need_service: whyYouNeed,
            why_choose_skynet: whyChooseUs
        };

        setLoading(true);

        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/services`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            console.log("Service added successfully:", data);
            setLoading(false);

            // Success Notification
            Swal.fire({
                icon: "success",
                text: "Successfully Add New Service",
            });

            setTimeout(() => {
                navigate("/dashboard/view-service");
            }, 1500);

        } catch (error) {
            console.error("Error adding service:", error);
            setLoading(false);
        }
    };

    // Fetching Categories
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/category`);
                const data = await response.json();
                setCategories(data);
                console.log(data)
            } catch (error) {
                console.error("Error uploading file:", error);
            }
        })()
    }, [])

    return (
        <>
            <Layout>
                <section id="addService" className={`h-full py-6`}>
                    <div className="container py-4">

                        <h1 className='text-[#fff] text-4xl font-bold mb-5'>Add New Service</h1>

                        <form action=''>
                            {/* Basic Fields */}
                            <label className='text-[#fff] text-sm'>Service Title*</label>
                            <input type="text" className='placeholder:text-white text-white bg-transparent focus:border-[#ffffff25] border-1 border-[#ffffff25] form-control focus:shadow-none rounded-none mb-4 mt-1' value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Service Title" />

                            <label className='text-[#fff] text-sm'>Service Description</label>
                            <textarea value={description} className='placeholder:text-white text-white bg-transparent focus:border-[#ffffff25] border-1 border-[#ffffff25] form-control focus:shadow-none rounded-none mb-4 mt-1' onChange={(e) => setDescription(e.target.value)} placeholder="Service Description"></textarea>

                            <label className='text-[#fff] text-sm'>Select Category</label>
                            <select name="" onChange={(e) => setCategory(e.target.value)} className='placeholder:text-white text-white bg-transparent focus:border-[#ffffff25] border-1 border-[#ffffff25] form-control focus:shadow-none rounded-none mb-4 mt-1 ' id="">
                                <option selected hidden>Select Category</option>
                                {
                                    categories && categories.map(({ _id, name, slug }) => {
                                        return <option value={name} className='bg-[#00042a]' key={_id}>{name}</option>
                                    })
                                }
                            </select>

                            {/* Featured List */}
                            <h3 className='text-[#eee]'>Featured Points</h3>
                            {featuredList.map((feature, index) => (
                                <input key={index} type="text" value={feature} className='placeholder:text-white text-white bg-transparent focus:border-[#ffffff25] border-1 border-[#ffffff25] form-control focus:shadow-none rounded-none mb-4 mt-1' onChange={(e) => updateFeaturedPoint(index, e.target.value)} placeholder="Enter Featured Point" />
                            ))}
                            <button type="button" className='bg-gray-500 hover:bg-gray-600 text-sm text-white px-2 py-1 mb-4 mt-3' onClick={addFeaturedPoint}>+ Add Featured Point</button>

                            {/* Service Explanation */}
                            <h3 className='text-[#eee]'>Service Explanation</h3>
                            {serviceExplanation.map((item, index) => (
                                <div key={index}>
                                    <input type="text" value={item.title} className='placeholder:text-white text-white bg-transparent focus:border-[#ffffff25] border-1 border-[#ffffff25] form-control focus:shadow-none rounded-none mb-4 mt-1' onChange={(e) => updateServiceExplanation(index, "title", e.target.value)} placeholder="Service Title" />
                                    <textarea className='placeholder:text-white text-white bg-transparent focus:border-[#ffffff25] border-1 border-[#ffffff25] form-control focus:shadow-none rounded-none mb-4 mt-1' value={item.description} onChange={(e) => updateServiceExplanation(index, "description", e.target.value)} placeholder="Service Description"></textarea>
                                </div>
                            ))}
                            <button type="button" className='bg-gray-500 hover:bg-gray-600 text-sm text-white px-2 py-1 mb-4 mt-3' onClick={addServiceExplanation}>+ Add Service Explanation</button>

                            {/* Why You Need It */}
                            <h3 className='text-[#eee]'>Why You Need This Service</h3>
                            {whyYouNeed.map((item, index) => (
                                <div key={index}>
                                    <input type="text" value={item.title} className='placeholder:text-white text-white bg-transparent focus:border-[#ffffff25] border-1 border-[#ffffff25] form-control focus:shadow-none rounded-none mb-4 mt-1' onChange={(e) => updateWhyYouNeed(index, "title", e.target.value)} placeholder="Reason Title" />
                                    <textarea className='placeholder:text-white text-white bg-transparent focus:border-[#ffffff25] border-1 border-[#ffffff25] form-control focus:shadow-none rounded-none mb-4 mt-1' value={item.description} onChange={(e) => updateWhyYouNeed(index, "description", e.target.value)} placeholder="Reason Description"></textarea>
                                </div>
                            ))}
                            <button type="button" className='bg-gray-500 hover:bg-gray-600 text-sm text-white px-2 py-1 mb-4 mt-3' onClick={addWhyYouNeed}>+ Add Reason</button>

                            {/* Why Choose Us */}
                            <h3 className='text-[#eee]'>Why Choose Skynet Silicon</h3>
                            {whyChooseUs.map((item, index) => (
                                <div key={index}>
                                    <input type="text" value={item.title} className='placeholder:text-white text-white bg-transparent focus:border-[#ffffff25] border-1 border-[#ffffff25] form-control focus:shadow-none rounded-none mb-4 mt-1' onChange={(e) => updateWhyChooseUs(index, "title", e.target.value)} placeholder="Benefit Title" />
                                    <textarea className='placeholder:text-white text-white bg-transparent focus:border-[#ffffff25] border-1 border-[#ffffff25] form-control focus:shadow-none rounded-none mb-4 mt-1' value={item.description} onChange={(e) => updateWhyChooseUs(index, "description", e.target.value)} placeholder="Benefit Description"></textarea>
                                </div>
                            ))}
                            <button type="button" className='bg-gray-500 hover:bg-gray-600 text-sm text-white px-2 py-1 mb-4 mt-3' onClick={addWhyChooseUs}>+ Add Benefit</button> <br />

                            <button className='primary-white-btn border-2 border-[#006cae] hover:text-[#fff]' onClick={handleSubmit}>{loading ? <BeatLoader size={12} color='#1092fd' /> : "Submit"}</button>
                        </form>
                    </div>
                </section>
            </Layout>
        </>
    )
}

export default AddService
