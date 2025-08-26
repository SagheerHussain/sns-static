import React from 'react';
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const InfiniteMovingBrands = ({
    height = "h-[10vh]",
    className = "",
    brand = [],
    bgColor = "bg-[#00042a]",
    ...props
}) => {
    return (
        <>
            <div className={`${height} items-center justify-center relative overflow-hidden ${bgColor}`}>
                <InfiniteMovingCards
                    items={brand}
                    direction="left"
                    speed="slow"
                    // className={`${bgColor}`}
                    itemClass={`${className}`}
                />
            </div>
        </>
    )
}

export default InfiniteMovingBrands

