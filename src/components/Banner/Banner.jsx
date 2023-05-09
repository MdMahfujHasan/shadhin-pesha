/* eslint-disable */
import React from 'react';
import './Banner.css';
import banner from '../../../assets/images/banner.png';

const Banner = () => {
    return (
        <div className='banner-container'>
            <div>
                <h1 className='banner-title'>One Step Closer To Your <span className='dream-job'>Dream Job</span></h1>
                <p className='banner-description'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='btn-common'>Get Started</button>
            </div>
            <div className='banner-img'>
                <img src={banner} alt="Banner image" />
            </div>
        </div>
    );
};

export default Banner;