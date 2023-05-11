/* eslint-disable */
import React from 'react';
import { getJobsCart } from '../../../utilities/fakedb';
import Applied from '../Applied/Applied';

const AppliedJobs3 = () => {
    const jobsCart = getJobsCart();
    // console.log(jobsCart);
    // console.log(Object.keys(jobsCart))
    const jobsIds = Object.keys(jobsCart);
    return (
        <div>
            {
                jobsIds.map(jobsId => <Applied jobsId={jobsId}></Applied>)
            }
        </div>
    );
};

export default AppliedJobs3;