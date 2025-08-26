import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { Space, Switch } from "antd";
import { pricing } from "../Pricing";

type Tab = {
    title: string;
    value: string;
    features: any;
    content?: string | React.ReactNode | any;
};

export const Tabs = ({
    tabs: propTabs,
    containerClassName,
    activeTabClassName,
    tabClassName,
    contentClassName,
}: {
    tabs: Tab[];
    containerClassName?: string;
    activeTabClassName?: string;
    tabClassName?: string;
    contentClassName?: string;
}) => {
    const [active, setActive] = useState<Tab>(propTabs[0]);
    const [tabs, setTabs] = useState<Tab[]>(propTabs);

    const moveSelectedTabToTop = (idx: number) => {
        const newTabs = [...propTabs];
        const selectedTab = newTabs.splice(idx, 1);
        newTabs.unshift(selectedTab[0]);
        setTabs(newTabs);
        setActive(newTabs[0]);
    };

    const [hovering, setHovering] = useState(true);

    return (
        <>
            <div
                className={cn(
                    "row flex justify-center text-center bg-gradient-to-r from-[rgba(15,73,144,1)] to-[rgba(70,35,134,1)] p-4 mb-4 rounded-[25px] relative max-w-full w-full",
                    containerClassName
                )}
            >
                <h1 className="pb-5 text-center text-white text-3xl">Budget Smartly With Category-Based Pricing!</h1>
                {propTabs.map((tab, idx) => (
                    <div className="col-sm-6 col-lg-4 col-xl-3">
                        <button
                            key={tab.title}
                            onClick={() => {
                                moveSelectedTabToTop(idx);
                            }}
                            onMouseEnter={() => setHovering(true)}
                            onMouseLeave={() => setHovering(false)}
                            className={cn("relative px-4 py-[2px] rounded-full", tabClassName)}
                            style={{
                                transformStyle: "preserve-3d",
                            }}
                        >
                            {active.value === tab.value && (
                                <motion.div
                                    layoutId="clickedbutton"
                                    transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                                    className={cn(
                                        "absolute inset-0 bg-[#1092fd] dark:bg-zinc-800 rounded-full ",
                                        activeTabClassName
                                    )}
                                />
                            )}

                            <span className={`relative block text-white m-2 text-[.9rem]`}>
                                {tab.value}
                            </span>
                        </button>
                    </div>
                ))}
            </div>
            <FadeInDiv
                tabs={tabs}
                active={active}
                key={active.value}
                hovering={hovering}
                className={cn("mt-10", contentClassName)}
            />
        </>
    );
};

export const FadeInDiv = ({
    className,
    tabs,
    hovering,
}: {
    className?: string;
    key?: string;
    tabs: Tab[];
    active: Tab;
    hovering?: boolean;
}) => {
    const isActive = (tab: Tab) => {
        return tab.value === tabs[0].value;
    };

    type Feature = {
        isChecked: boolean;
        price: number;
        quantity: number;
        hours: number;
    };

    interface PricingCategory {
        category: string;
        features: Feature[];
    }


    const [pricingFeatures, setPricingFeatures] = useState<Feature[]>([]);

    // // Filter Pricing
    // useEffect(() => {
    //     const updateCategory: string = tabs[0]?.value
    //         .split("-")
    //         .map((categ) => categ[0].toUpperCase() + categ.slice(1))
    //         .join(" ");



    //     const filterPricing: PricingCategory | undefined = pricing.find(
    //         (price) => price.category === updateCategory
    //     );

    //     setPricingFeatures(filterPricing?.features || []);
    // }, [tabs]);

    // Calculate Grand Total
    const totalPrize: number = pricingFeatures.reduce((acc: number, currVal: Feature) => {
        return currVal.isChecked ? acc + currVal.price * currVal.quantity : acc;
    }, 0);

    // Calculate Total Hours
    const totalHours: number = pricingFeatures.reduce((acc: number, currVal: Feature) => {
        return currVal.isChecked ? acc + currVal.hours * currVal.quantity : acc;
    }, 0);

    return (
        <div className="relative w-full h-full">
            {tabs.map((tab, idx) => {
                return (
                    <>
                        <motion.div
                            key={tab.value}
                            layoutId={tab.value}
                            transition={{ type: "spring", stiffness: 120, damping: 20, duration: 0.7 }}
                            style={{
                                scale: 1 - idx * 0.1,
                                zIndex: -idx,
                                opacity: idx < 3 ? 1 - idx * 0.1 : 0,
                                transform: hovering ? `translateY(${idx * -15}px)` : "translateY(0px)", // Lifts when hovering
                            }}
                            animate={{
                                y: isActive(tab) ? [0, 40, 0] : 0,
                            }}
                            className={cn("w-full bg-[#131848] h-full absolute top-0 left-0 p-14 rounded-[25px]", className)}
                        >
                            <h2 className='text-white text-3xl font-bold mb-14'><span className='text-[#0ad5f1]'>{tab.value}</span> Cost Calculator</h2>
                            {tab.features.map((feature, index) => {
                                return (
                                    <>
                                        <div className="pricing_package_check_list_box mb-[1rem] border-b-[1px] border-b-[#1092fd] border-dashed row flex items-center" key={index}>
                                            <div className="feature_button order-2 order-md-1 col-6 col-md-2 col-xl-1">
                                                <Space direction="vertical">
                                                    <Switch checkedChildren="Yes" unCheckedChildren="No" checked={feature.isChecked} />
                                                </Space>
                                            </div>
                                            <div className={`feature_text order-1 order-md-2 col-12 col-md-7 col-xl-8 ${feature.isQuantity && "flex items-center"}`}>
                                                <h3 className='text-white text-xl font-semibold'>{feature.title}</h3>
                                                {
                                                    feature.isQuantity && feature.isChecked && <input type="number" min={1} defaultValue={feature.quantity} className='focus:bg-[#1b2c5c] focus:shadow-none text-lg w-[100px] form-control bg-[#1b2c5c] ms-[1rem] mb-[.7rem] px-4 py-[12px] rounded-[25px] text-white border-none cursor-pointer' />
                                                }
                                            </div>
                                            <div className="feature_price order-3 col-6 col-md-3 flex items-center p-[16px] justify-between">
                                                <div className="hours me-[1rem] sm:me-10 w-[50%] text-center">
                                                    <h5 className={`text-white text-sm  sm:text-xl font-semibold`}>{feature.isChecked ? (feature.hours * feature.quantity) : 0} Hr</h5>
                                                </div>
                                                <div className="price w-[50%] text-center">
                                                    <h5 className={`text-white text-sm sm:text-xl font-semibold`}>${feature.isChecked ? (feature.price * feature.quantity) : 0}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}

                            <div className="pricing_package_check_list_total grid grid-cols-1 sm:grid-cols-2  mt-10">
                                <div className="total_title ">
                                    <h1 className='text-[#fff] text-3xl font-bold me-10'>Estimated Price:</h1>
                                </div>
                                <div className="total_prize sm:justify-end flex items-center">
                                    <h2 className='text-[#04e4ff] text-2xl font-bold me-10'>{totalHours}Hr</h2>
                                    <h2 className='text-[#04e4ff] text-2xl font-bold'>${totalPrize.toFixed(2)}</h2>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )
            })}
        </div>
    );
};
