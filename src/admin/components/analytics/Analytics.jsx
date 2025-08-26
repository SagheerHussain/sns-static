import React, { useEffect, useState } from 'react'
import { BreadCrumb } from '../../../components/index'

const Analytics = () => {
    return (
        <>
            <section id='analytics' className='h-[88vh]'>
                <div className="container-fluid p-10">
                    <BreadCrumb page={"Dashboard"} color='text-white' category={""} />
                </div>
            </section>
        </>
    )
}

export default Analytics
