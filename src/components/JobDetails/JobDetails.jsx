/*eslint-disable*/
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './JobDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBangladeshiTakaSign, faCalendarCheck, faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const JobDetails = () => {
    const job = useLoaderData();
    console.log(job);
    const { img, title, company, place, location, salaryRange, description, responsibility, education, experienceRange, phone, email, address } = job;
    return (
        <div className='job-details-container'>
            <div>
                <p><b>Job Description: </b>{description}</p>
                <p><b>Job Responsibility: </b>{responsibility}</p>
                <p><b>Educational Requirements: </b>{education}</p>
                <p><b>Experiences: </b>{experienceRange[0]}-{experienceRange[1]} years in this field.</p>
            </div>
            <div>
                <h4>Job Details</h4>
                <hr />
                <p>
                    <FontAwesomeIcon icon={faBangladeshiTakaSign} style={{ marginRight: '5px' }} />
                    <b>Salary: </b>
                    {salaryRange[0]}k-{salaryRange[1]}k
                </p>
                <p>
                    <FontAwesomeIcon icon={faCalendarCheck} style={{ marginRight: '5px' }} />
                    <b>Job Title: </b>
                    {title}
                </p>
                <h4>Contact Information</h4>
                <hr />
                <p>
                    <FontAwesomeIcon icon={faPhone} style={{ marginRight: '5px' }} />
                    <b>Phone: </b>
                    {phone}
                </p>
                <p>
                    <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '5px' }} />
                    <b>Email: </b>
                    {email}
                </p>
                <p>
                    <FontAwesomeIcon icon={faLocationDot} style={{ marginRight: '5px' }} />
                    <b>Address: </b>
                    {address}
                </p>
            </div>
        </div >
    );
};

export default JobDetails;