/*eslint-disable*/
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './JobDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBangladeshiTakaSign, faCalendarCheck, faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const JobDetails = () => {
    const job = useLoaderData();
    console.log(job);
    const { title, salaryRange, description, responsibility, education, experienceRange, phone, email, address } = job;
    return (
        <div className='job-details-container'>
            <div>
                <p>
                    <b>Job Description: </b>
                    <span className='common-description'>{description}</span>
                </p>
                <p>
                    <b>Job Responsibility: </b>
                    <span className='common-description'>{responsibility}</span>
                </p>
                <p>
                    <b>Educational Requirements: </b>
                    <span className='common-description'>{education}</span>
                </p>
                <p>
                    <b>Experiences: </b>
                    <span className='common-description'>{experienceRange[0]}-{experienceRange[1]} years in this field.</span>
                </p>
            </div>
            <div className='job-details-info'>
                <h4>Job Details</h4>
                <hr />
                <p>
                    <FontAwesomeIcon icon={faBangladeshiTakaSign} className='icon' />
                    <b>Salary: </b>
                    {salaryRange[0]}k-{salaryRange[1]}k per month
                </p>
                <p>
                    <FontAwesomeIcon icon={faCalendarCheck} className='icon' />
                    <b>Job Title: </b>
                    {title}
                </p>
                <h4>Contact Information</h4>
                <hr />
                <p>
                    <FontAwesomeIcon icon={faPhone} className='icon' />
                    <b>Phone: </b>
                    {phone}
                </p>
                <p>
                    <FontAwesomeIcon icon={faEnvelope} className='icon' />
                    <b>Email: </b>
                    {email}
                </p>
                <p>
                    <FontAwesomeIcon icon={faLocationDot} className='icon' />
                    <b>Address: </b>
                    {address}
                </p>
            </div>
        </div >
    );
};

export default JobDetails;