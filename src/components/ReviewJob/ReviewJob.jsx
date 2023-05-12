/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { getJobsCart } from '../../../utilities/fakedb';

const ReviewJob = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('')
            .then(res => res.json())
            .then(data => setJobs(data))
    })

    const appliedJobs = getJobsCart();
    let savedJobs = [];
    for (const id in appliedJobs) {
        // const storedJobs = jobs.find(job => job.id === id);
        // if (savedJobs) {
        //     savedJobs.push([...jobs, storedJobs]);
        // }
        console.log(id)
    }
    // console.log(savedJobs);
    return (
        <div>
            <h1>{savedJobs.length}</h1>
        </div>
    );
};

export default ReviewJob;