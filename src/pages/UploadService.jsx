import React, { useEffect, useState } from 'react';
import { Button } from "../components/index";

const UploadService = () => {

    const [categories, setCategories] = useState([]);

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

        console.log(formData)

        try {
            const response = await fetch("https://skynetsilicon-website-backend.vercel.app/api/services", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            console.log("Service added successfully:", data);
        } catch (error) {
            console.error("Error adding service:", error);
        }
    };

    // Fetching Categories
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

    return (
        <>
            <div className="container py-4 bg-gray-300">
                <form action=''>
                    {/* Basic Fields */}
                    <label className='text-gray-500 text-sm'>Service Title*</label>
                    <input type="text" className='form-control focus:shadow-none rounded-none mb-4 mt-1' value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Service Title" />

                    <label className='text-gray-500 text-sm'>Service Description</label>
                    <textarea value={description} className='form-control rounded-none focus:shadow-none mb-4 mt-1' onChange={(e) => setDescription(e.target.value)} placeholder="Service Description"></textarea>

                    <label className='text-gray-500 text-sm'>Select Category</label>
                    <select name="" onChange={(e) => setCategory(e.target.value)} className='form-select focus:shadow-none rounded-none mb-4 mt-1' id="">
                        <option selected hidden>Select Category</option>
                        {
                            categories && categories.map(({_id, name, slug}) => {
                                return <option value={name} key={_id}>{name}</option>
                            })
                        }
                    </select>

                    {/* Featured List */}
                    <h3 className='text-gray-800'>Featured Points</h3>
                    {featuredList.map((feature, index) => (
                        <input key={index} type="text" value={feature} className='form-control focus:shadow-none rounded-none mt-1' onChange={(e) => updateFeaturedPoint(index, e.target.value)} placeholder="Enter Featured Point" />
                    ))}
                    <button type="button" className='bg-gray-500 hover:bg-gray-600 text-sm text-white px-2 py-1 mb-4 mt-3' onClick={addFeaturedPoint}>+ Add Featured Point</button>

                    {/* Service Explanation */}
                    <h3 className='text-gray-800'>Service Explanation</h3>
                    {serviceExplanation.map((item, index) => (
                        <div key={index}>
                            <input type="text" value={item.title} className='form-control focus:shadow-none rounded-none mt-1 mb-3' onChange={(e) => updateServiceExplanation(index, "title", e.target.value)} placeholder="Service Title" />
                            <textarea className='form-control rounded-none focus:shadow-none' value={item.description} onChange={(e) => updateServiceExplanation(index, "description", e.target.value)} placeholder="Service Description"></textarea>
                        </div>
                    ))}
                    <button type="button" className='bg-gray-500 hover:bg-gray-600 text-sm text-white px-2 py-1 mb-4 mt-3' onClick={addServiceExplanation}>+ Add Service Explanation</button>

                    {/* Why You Need It */}
                    <h3 className='text-gray-800'>Why You Need This Service</h3>
                    {whyYouNeed.map((item, index) => (
                        <div key={index}>
                            <input type="text" value={item.title} className='form-control focus:shadow-none rounded-none mt-1 mb-3' onChange={(e) => updateWhyYouNeed(index, "title", e.target.value)} placeholder="Reason Title" />
                            <textarea className='form-control rounded-none focus:shadow-none' value={item.description} onChange={(e) => updateWhyYouNeed(index, "description", e.target.value)} placeholder="Reason Description"></textarea>
                        </div>
                    ))}
                    <button type="button" className='bg-gray-500 hover:bg-gray-600 text-sm text-white px-2 py-1 mb-4 mt-3' onClick={addWhyYouNeed}>+ Add Reason</button>

                    {/* Why Choose Us */}
                    <h3 className='text-gray-800'>Why Choose Skynet Silicon</h3>
                    {whyChooseUs.map((item, index) => (
                        <div key={index}>
                            <input type="text" value={item.title} className='form-control focus:shadow-none rounded-none mt-1 mb-3' onChange={(e) => updateWhyChooseUs(index, "title", e.target.value)} placeholder="Benefit Title" />
                            <textarea className='form-control rounded-none focus:shadow-none' value={item.description} onChange={(e) => updateWhyChooseUs(index, "description", e.target.value)} placeholder="Benefit Description"></textarea>
                        </div>
                    ))}
                    <button type="button" className='bg-gray-500 hover:bg-gray-600 text-sm text-white px-2 py-1 mb-4 mt-3' onClick={addWhyChooseUs}>+ Add Benefit</button> <br />

                    <button className='primary-white-btn hover:text-[#fff]' onClick={handleSubmit}>Create Service</button>
                </form>
            </div>
        </>
    )
}

export default UploadService
