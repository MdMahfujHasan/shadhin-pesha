/*eslint-disable*/
import React from 'react';
import './Job.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faBangladeshiTakaSign } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

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
            <p className='job-text'>
                <FontAwesomeIcon icon={faLocationDot} style={{ marginRight: '5px' }} />
                {location}
            </p>
            <p className='job-text'>
                <FontAwesomeIcon icon={faBangladeshiTakaSign} style={{ marginRight: '5px' }} />
                Salary: {salaryRange[0]}k-{salaryRange[1]}k</p>
            <Link to={`/job/${id}`}>
                <button className='btn-common'>View Details</button>
            </Link>
        </div>
    );
};

export default Job;