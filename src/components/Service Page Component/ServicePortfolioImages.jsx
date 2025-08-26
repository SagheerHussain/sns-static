import React from 'react';
import portfolioOne from "/Images/Portfolio/service (1).webp";
import portfolioTwo from "/Images/Portfolio/service (2).webp";
import portfolioThree from "/Images/Portfolio/service (3).webp";
import portfolioFour from "/Images/Portfolio/service (4).webp";
import portfolioFive from "/Images/Portfolio/service (5).webp";
import portfolioSix from "/Images/Portfolio/service (6).webp";
import "./css/serviceDetail.css";

const ServicePortfolioImages = () => {

    const servicePortfolio = [
        { id: 1, src: portfolioOne, category: "Web Development" },
        { id: 2, src: portfolioTwo, category: "Web Development" },
        { id: 3, src: portfolioThree, category: "Web Development" },
        { id: 4, src: portfolioFour, category: "Web Development" },
        { id: 5, src: portfolioFive, category: "Web Development" },
        { id: 6, src: portfolioSix, category: "Web Development" }
    ]

    return (
        <>
            <div className="service_portfolio_images flex">
                {/* {
                    servicePortfolio?.map((portfolio) => (
                        <img key={portfolio.id} src={portfolio.src} className='flex-nowrap relative z-[10]' />
                    ))
                } */}
            </div>
        </>
    )
}

export default ServicePortfolioImages
