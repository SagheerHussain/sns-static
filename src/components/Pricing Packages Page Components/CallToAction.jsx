import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../index';

const CallToAction = () => {

    const [categ, setCateg] = useState("");

    // Get Category
    const { category } = useParams();

    useEffect(() => {
        const newCategory = category.split("-").map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');
        setCateg(newCategory);
    }, [category])

    return (
        <>
            <section id="call_to_action" className='bg-gradient-to-r from-[#0e4793] to-[#452189] py-20'>
                <div className="container">
                    <div className="call_to_action_content text-center">
                        <h1 className='text-white text-3xl md:text-4xl lg:text-5xl font-bold'>Seeking a Quote on your {categ} project?</h1>
                        <p className='text-white text-xl mt-[2rem]'>Speak to our experts to ask for recommendations</p>
                        <Button link='/contact' className='primary-btn text-white mt-10' label={"Request a Quote"} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default CallToAction
