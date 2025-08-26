import React from 'react';
import { IoLocationOutline } from "react-icons/io5";

const CompanyLocationCard = ({
    data,
    ...props
}) => {
    return (
        <>
            <div className="company_location_card-content mx-2 p-4 z-50">
                <div className={`company_location_card_serial_number`}>
                    <h2 className='text-white text-6xl font-bold opacity-25'>0{data.id}</h2>
                </div>
                <div className="company_location_card_location mt-2">
                    <h3 className={`text-3xl font-bold text_gradient`}>{data.location}</h3>
                </div>
                <div className="company_location_card_client_information">
                    <div className="company_location_card_location">
                        <p className='text-white text-xl mt-4'>{data.description}</p>
                    </div>
                    <div className="company_location_card_client_address lg:flex items-center justify-between bg-white mt-5 px-4 py-2">
                        <div className="clinet_address mt-3 text-lg">
                            <address className='flex items-center'>
                                <IoLocationOutline className='text-sky-500 text-2xl me-2' /> 
                                {data.address}
                            </address>
                        </div>
                        <div className="clinet_phone_number text-2xl text_gradient font-semibold">
                            {data.phone}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompanyLocationCard
