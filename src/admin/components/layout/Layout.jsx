import React from 'react'
import { Navbar, Footer, Sidebar } from '../index';
import "../dashboard.css";

const Layout = ({ children }) => {
    return (
        <>
            <div className="flex overflow-x-hidden relative">
                <div className='lg:w-[25vw] xl:w-[20vw] 2xl:w-[15vw] fixed top-0 h-screen '>
                    <Sidebar />
                </div>
                <div className={`lg:ms-[25vw] xl:ms-[20vw] 2xl:ms-[15vw]`}>
                    <Navbar />
                    <div className="bg-[#17171a]">
                        {children}
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Layout
