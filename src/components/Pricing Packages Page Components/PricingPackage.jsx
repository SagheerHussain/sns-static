import React, { useCallback, useEffect, useState } from 'react'
import { BreadCrumb, CategorySelection } from '../index';
import { Space, Switch } from 'antd';
import "./css/pricingPackage.css"
import { pricing } from '../Pricing';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { categories } from '../categories';

const PricingPackage = ({
    minHeight = "h-full",
    className = "",
    isClick,
    ...props
}) => {

    // State Variables
    const [pricingFeatures, setPricingFeatures] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("Web Development");

    const { category } = useParams();

    const navigate = useNavigate();
    const location = useLocation();

    // Category Change
    const handleCategory = (slug) => {
        setSelectedCategory(slug);
        const updateSlug = slug.split(" ").map((word) => word.toLowerCase()).join("-");
        navigate(`/pricing-package/${updateSlug}`)
    }

    // Filter Pricing
    useEffect(() => {
        const updateCategory = category
            .split("-")
            .map((categ) => categ[0].toUpperCase() + categ.slice(1))
            .join(" ");
        setSelectedCategory(updateCategory);
        const filterPricing = pricing.find((price) => price.category === updateCategory);
        setPricingFeatures(filterPricing.features);
    }, [category, location.pathname]);

    // Calculate Grand Total
    const totalPrize = pricingFeatures?.reduce((acc, currVal) => {
        return currVal.isChecked ? acc + (currVal.price * currVal.quantity) : acc;
    }, 0);

    // Calculate Total Hours
    const totalHours = pricingFeatures?.reduce((acc, currVal) => {
        return currVal.isChecked ? acc + (currVal.hours * currVal.quantity) : acc;
    }, 0);

    // Toggle Switch  
    const handleChange = (index, isCheckedVal, isQuantityVal, qty = 1) => {
        const updatedFeatures = [...pricingFeatures];
        if (isCheckedVal) {
            updatedFeatures[index].isChecked = !updatedFeatures[index].isChecked;
        }
        if (isQuantityVal) {
            updatedFeatures[index].quantity = Number(qty);
        }
        setPricingFeatures(updatedFeatures);
    }

    // Media Query
    const isMatch = useMediaQuery("(max-width:768px)");
    const isHeading = useMediaQuery("(max-width:450px)")

    return (
        <>
            <section id='pricing_section' className={`${isClick ? "h-full overflow-hidden" : "min-h-[100%]"} z-[9] bg-[#00042a] relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[50vh] before:z-[-1] before:bg-gradient-to-r from-[rgba(72,135,231,1)] to-[rgba(135,63,231,1)] masked-image  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[40vh] after:z-[-1] after:bg-gradient-to-r`}>
                <div className="container max-w-[1280px]">
                    <div className="pricing_package_content pt-[200px] pb-[80px]">
                        <div className="pricing_package_intro flex flex-col items-center mt-16 text-center">
                            <h1 className='text-white text-[2.7rem] font-bold'>Transparent Pricing for All Digital Services</h1>
                            <p className='text-white text-xl font-semibold mt-[16px] max-w-[1000px]'>Get transparent pricing for web design, development, and marketing with Skynet Silicon. Estimate costs effortlessly and start your digital journey today</p>
                        </div>
                        <div className="flex lg:flex-row flex-col pricing_package_features_list mt-14 ">
                            <div className="max-w-full lg:max-w-[25%] rounded-[25px] lg:me-[2%] max-h-fit pricing_package_select_feature relative bg-gradient-to-r from-[rgba(15,73,144,1)] to-[rgba(70,35,134,1)] p-4 mb-4">
                                <CategorySelection onCategoryChange={handleCategory} selectedCategory={selectedCategory} categories={categories} />
                            </div>

                            <div className="max-w-full lg:w-[75%] rounded-[25px] pricing_package_check_list  bg-[#131848] py-10 px-sm-14 px-10">

                                <h2 className='text-white text-3xl font-bold mb-14'><span className='text-[#0ad5f1]'>{selectedCategory}</span> Cost Calculator</h2>

                                <div className="pricing_package_check_list_title mb-[20px] flex items-center justify-between row">
                                    <div className="select_title col-6 col-md-9">
                                        <h4 className={`text-[#04e4ff] ${isHeading ? "text-sm" : "text-base"} sm:text-base lg:text-xl uppercase font-bold me-4`}>Select:</h4>
                                    </div>
                                    <div className="price_title flex items-center col-6 col-md-3 justify-center">
                                        <h4 className={`text-[#04e4ff] ${isHeading ? "text-sm" : "text-base"} sm:text-base lg:text-xl w-[50%] uppercase font-bold  text-center`}>Hours:</h4>
                                        <h4 className={`text-[#04e4ff] ${isHeading ? "text-sm" : "text-base"} sm:text-base lg:text-xl w-[50%] uppercase font-bold text-center`}>Price:</h4>
                                    </div>
                                </div>

                                {
                                    pricingFeatures.map((feature, index) => {
                                        return (
                                            <div className="pricing_package_check_list_box mb-[1rem] border-b-[1px] border-b-[#1092fd] border-dashed row flex items-center" key={index}>
                                                <div className="feature_button order-2 order-md-1 col-6 col-md-2 col-xl-1">
                                                    <Space direction="vertical">
                                                        <Switch onChange={() => handleChange(index, true, false)} checkedChildren="Yes" unCheckedChildren="No" checked={feature.isChecked} />
                                                    </Space>
                                                </div>
                                                <div className={`feature_text order-1 order-md-2 col-12 col-md-7 col-xl-8 ${feature.isQuantity && "flex items-center"}`}>
                                                    <h3 className='text-white text-xl font-semibold'>{feature.title}</h3>
                                                    {
                                                        feature.isQuantity && feature.isChecked && <input type="number" onChange={(e) => handleChange(index, false, true, e.target.value)} min={1} defaultValue={feature.quantity} className='focus:bg-[#1b2c5c] focus:shadow-none text-lg w-[100px] form-control bg-[#1b2c5c] ms-[1rem] mb-[.7rem] px-4 py-[12px] rounded-[25px] text-white border-none cursor-pointer' />
                                                    }
                                                </div>
                                                <div className="feature_price order-3 col-6 col-md-3 flex items-center p-[16px] justify-between">
                                                    <div className="hours me-[1rem] sm:me-10 w-[100%] text-center">
                                                        <h5 className={`text-white ${isHeading ? "text-sm" : "text-base"}  sm:text-xl font-semibold`}>{feature.isChecked ? (feature.hours * feature.quantity) : 0} Hr</h5>
                                                    </div>
                                                    <div className="price w-[100%] text-center">
                                                        <h5 className={`text-white ${isHeading ? "text-sm" : "text-base"} sm:text-xl font-semibold`}>${feature.isChecked ? (feature.price * feature.quantity) : 0}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                                <div className="pricing_package_check_list_total grid grid-cols-1 sm:grid-cols-2  mt-10">
                                    <div className="total_title ">
                                        <h1 className='text-[#fff] text-3xl font-bold me-10'>Estimated Price:</h1>
                                    </div>
                                    <div className="total_prize sm:justify-end flex items-center">
                                        <h2 className='text-[#04e4ff] text-2xl font-bold me-10'>{totalHours}Hr</h2>
                                        <h2 className='text-[#04e4ff] text-2xl font-bold'>${totalPrize.toFixed(2)}</h2>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* <PackageTabs /> */}
        </>
    )
}

export default PricingPackage