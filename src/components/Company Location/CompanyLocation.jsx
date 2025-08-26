import React, { useState } from 'react'
import CompanyLocationCard from './CompanyLocationCard';
import "./companyLocation.css";

const CompanyLocation = () => {

    const [selectedIndex, setSelectedIndex] = useState(0);

    // Comapny Info
    const companyLocation = [
        {
            id: 1,
            location: "Karachi",
            description: "Founded in Karachi, Skynet Silicon is a leading technology company committed to helping businesses grow their brands in the digital world. With ur head office based in Karachi, Pakistan, we provide innovative and reliable solutions to clients across the country and beyond. Our team of skilled professionals specializes in front-end and back-end development, graphics designing, and app development, ensuring that businesses achieve their goals with cutting-edge technology and creative strategies. At Skynet Silicon, we are dedicated to empowering brands and driving success in an ever-evolving digital landscape.",
            address: "office address Hunaid City A-104, Block 17, Gulistan E Johar, Karachi",
            phone: "(+92) 3313908443",
            bgImg: "https://www.digitalsilk.com/wp-content/uploads/2023/12/miami-1.jpg"
        },
        // {
        //     id: 2,
        //     location: "Karachi",
        //     description: "Founded in Karachi, Skynet Siliconhelps Floridian businesses grow their brands online. Our services stem from a Miami-Dade County hub, while our global team serves brands from across the U.S. and internationally.",
        //     clientLocation: "Miami Country Day School, Arnold Jewelers, FieldEdge, Rollink, Barton G",
        //     address: "17975 Collins Avenue Sunny Isles Beach, FL 33160",
        //     phone: "(800) 9781625319",
        //     bgImg: "https://www.digitalsilk.com/wp-content/uploads/2023/12/miami-1.jpg"
        // },
        // {
        //     id: 3,
        //     location: "Karachi",
        //     description: "Founded in Karachi, Skynet Siliconhelps Floridian businesses grow their brands online. Our services stem from a Miami-Dade County hub, while our global team serves brands from across the U.S. and internationally.",
        //     clientLocation: "Miami Country Day School, Arnold Jewelers, FieldEdge, Rollink, Barton G",
        //     address: "17975 Collins Avenue Sunny Isles Beach, FL 33160",
        //     phone: "(800) 9781625319",
        //     bgImg: "https://www.digitalsilk.com/wp-content/uploads/2023/12/miami-1.jpg"
        // },
        // {
        //     id: 4,
        //     location: "Jordan",
        //     description: "Founded in Karachi, Skynet Siliconhelps Floridian businesses grow their brands online. Our services stem from a Miami-Dade County hub, while our global team serves brands from across the U.S. and internationally.",
        //     clientLocation: "Miami Country Day School, Arnold Jewelers, FieldEdge, Rollink, Barton G",
        //     address: "17975 Collins Avenue Sunny Isles Beach, FL 33160",
        //     phone: "(800) 9781625319",
        //     bgImg: "https://www.digitalsilk.com/wp-content/uploads/2023/12/miami-1.jpg"
        // }
    ]

    // Handle Selected Card
    const handleSelectedCard = (id) => {
        setSelectedIndex((prevIndex) => (prevIndex === id ? null : id)); // Toggle selection
    };

    return (
        <>
            <section id="company_location" className='bg-gradient-to-r from-[#4887e7] to-[#723fc7] py-24'>
                <div className="container">

                    <div className="company_location_intro text-center mb-5">
                        <h2 className='text-white font-bold text-6xl'>Locations</h2>
                        <p className='text-white text-xl mt-3'>With multiple locations throughout the United States, Skynet Silicon delivers <br className='lg:block hidden' />
                        localized strategies that complement your brand’s national presence.</p>
                    </div>

                    <div className="flex items-center lg:flex-row flex-col">
                        {
                            companyLocation?.map((company) => (
                                <div
                                    key={company.id}
                                    className={`w-full company_location_card relative flex justify-center flex-col my-4 transition-all duration-500 mx-2 company_location_card_before_effect`}
                                    style={{
                                        // flexBasis: selectedIndex === company.id ? "70%" : "30%",
                                        height: "100%",
                                        background: `url('${company.bgImg}') no-repeat center/cover`,
                                    }}
                                    onClick={() => handleSelectedCard(company.id)}
                                >
                                    <CompanyLocationCard data={company} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default CompanyLocation;
