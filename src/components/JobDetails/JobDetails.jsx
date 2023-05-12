/*eslint-disable*/
import React, { createContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './JobDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBangladeshiTakaSign, faCalendarCheck, faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { addToDb, getJobsCart } from '../../../utilities/fakedb'
import AppliedJobs from '../AppliedJobs/AppliedJobs';
import AppliedJobs2 from '../AppliedJobs2/AppliedJobs2';

export const AppliedJobsContext = createContext([]);

const JobDetails = () => {
    const job = useLoaderData();
    const [jobs, setJobs] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://pesha6.free.beeceptor.com/jobs')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    useEffect(() => {
        const storedCart = getJobsCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedJobs = jobs.find(job => job.id === id);
            if (addedJobs) {
                const quantity = storedCart[id];
                addedJobs.quantity = quantity;
                savedCart.push(addedJobs);
            }
        }
        setCart(savedCart);
    }, [jobs])

    useEffect(() => {
        const storedCart = getJobsCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedJobs = jobs.find(job => job.id === id);
            if (addedJobs) {
                const quantity = storedCart[id];
                addedJobs.quantity = quantity;
                savedCart.push(addedJobs);
            }
        }
        setCart(savedCart);
    }, [jobs])

    const handleAddToCart = job => {
        // console.log(job);
        let newCart = [];
        const exist = cart.find(j => j.id === job.id);
        if (!exist) {
            job.quantity = 1;
            newCart = [...cart, job];
        }
        else {
            exist.quantity += 1;
            const remaining = cart.filter(j => j.id !== job.id);
            newCart = [...remaining, exist];
        }
        setCart(newCart);
        addToDb(job.id);
    }

    // const handleClearCart = () => {
    //     setCart([]);
    //     deleteJobsCart();
    // }

    const { id, title, salaryRange, description, responsibility, education, experienceRange, phone, email, address } = job;
    return (
        <div className='job-details-container'>
            <div>
                <h2 style={{ textAlign: 'center' }}>Job Details</h2>
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
                <h4 className='job-details-title'>Job Details</h4>
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
                <h4 className='job-details-title'>Contact Information</h4>
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
                <button onClick={() => handleAddToCart(job)} className='btn-common'>Apply Now</button>
            </div>
            <AppliedJobs cart={cart} ></AppliedJobs>
            <AppliedJobsContext.Provider value={cart}>
                <AppliedJobs2></AppliedJobs2>
            </AppliedJobsContext.Provider>
        </div >
    );
};

export default JobDetails;