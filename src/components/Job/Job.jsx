/*eslint-disable*/
import React from 'react';
import './Job.css';

const Job = ({ job }) => {
    const { id, img, title, company, place, location, salaryRange } = job;
    return (
        <div className='job-container'>
            <img src={img} alt="Company logo" />
            <h3 className='job-title'>{title}</h3>
            <p className='job-text'>{company}</p>
            <p>
                <span className='job-place'>{place[0]}</span>
                <span className='job-place'>{place[1]}</span>
            </p>
            <p className='job-text'>{location}</p>
            <p className='job-text'>Salary: {salaryRange[0]}k - {salaryRange[1]}k</p>
            <button className='btn-common'>View Details</button>
        </div>
    );
};

export default Job;