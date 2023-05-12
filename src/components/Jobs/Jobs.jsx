/*eslint-disable*/
import React, { useState } from 'react';
import './Jobs.css';
import { useLoaderData } from 'react-router-dom';
import Job from '../Job/Job';

const Jobs = () => {
    const jobs = useLoaderData();
    return (
        <div>
            <div style={{ textAlign: 'center' }}>
                <h2 className='common-title'>Featured Jobs</h2>
                <p className='common-description'>Explore thousands of job opportunities with all the information you need. It's your future.</p>
            </div>
            <div className='jobs-container'>
                {
                    jobs.map(job => <Job
                        key={job.id}
                        job={job}
                    ></Job>)
                }
            </div>
        </div>
    );
};

export default Jobs;