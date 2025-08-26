import React from 'react';
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { testimonials } from '../testimonial';

const Testimonials = () => {

    const slideOne = testimonials.slice(0, 4);
    const slideTwo = testimonials.slice(5, 8);

    return (
        <>
            <section id="testimonials" className='py-20' style={{ background: 'linear-gradient(90deg, rgb(16,5,51) 3%, rgba(28,5,55) 50%, rgb(16,5,51) 75%)' }}>
                <div className="container mb-14">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="top-brands-info text-center">
                                <h4 className='sm:text-5xl xl:text-6xl text-3xl text-white uppercase font-bold my-3'>Testimonials</h4>
                                <h5 className='text-lg text-white uppercase font-bold'>Clients Acroos World</h5>
                                <p className='text-white mt-3 text-lg'>Global voices united in trust, celebrating unmatched excellence and transformative impact.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="testimonial_moving_card [mask-image:linear-gradient(to_right,transparent,black_25%,black_75%,transparent)]">
                    <InfiniteMovingCards bgColor='' pauseOnHover={true} speed={"slow"} items={slideOne} itemClass={'min-w-[600px]'} />
                </div>
                <br />
                <div className="testimonial_moving_card [mask-image:linear-gradient(to_right,transparent,black_25%,black_75%,transparent)]">
                    <InfiniteMovingCards bgColor='' direction={"right"} pauseOnHover={true} speed={"slow"} items={slideTwo} itemClass={'min-w-[600px]'} />
                </div>
            </section>
        </>
    )
}

export default Testimonials
