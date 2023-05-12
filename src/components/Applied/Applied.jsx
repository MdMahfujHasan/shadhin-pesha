/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { getJobsCart } from '../../../utilities/fakedb';

const Applied = ({ jobsId }) => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('https://pesha6.free.beeceptor.com/jobs')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div>
            <h3>Job No. <span style={{ fontSize: '30px', margin: '0 5px', color: 'skyblue' }}>{jobsId}</span> applied!</h3>
        </div>
    );
};

export default Applied;