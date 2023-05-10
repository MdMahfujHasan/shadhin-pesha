/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import './Jobs.css';
import { useLoaderData } from 'react-router-dom';
import Job from '../Job/Job';

const Jobs = () => {
    const jobs = useLoaderData();
    return (
        <div className='jobs-container'>
            {
                jobs.map(job => <Job
                    key={job.id}
                    job={job}
                ></Job>)
            }
        </div>
    );
};

export default Jobs;