import React from 'react';
import "./comingSoon.css";
import { Link } from 'react-router-dom';
import { GoArrowSwitch } from "react-icons/go";

const ComingSoon = () => {
  return (
    <>
      <div id="comingSoon">
        <div className="coming-soon-effect"></div>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="coming-soon-logo">
                <Link to={`/`}>
                  <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                    <image href="../../public/Images/SNS-White.svg" width="200" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="col-12">
              <div className="coming-soon-content">
                <h5 className='text-white'>Our New Site Is</h5>
                <h1>COMING SOON</h1>
                <p>From automation of people processes to creating <br className='d-lg-block d-none' /> an engaged and driven culture.</p>
                {/* <div className="mt-4 coming-soon-button">
                  <a href={`/`} className='flex items-center p-3 font-bold'>
                    <span className='text-xl'>Go Back To Home</span>
                    <GoArrowSwitch className='bg-dark text-white p-2 text-3xl rounded-full ms-3' />
                  </a>
                </div> */}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default ComingSoon
