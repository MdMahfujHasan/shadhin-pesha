/* eslint-disable */
import React, { useContext } from 'react';
import { AppliedJobsContext } from '../JobDetails/JobDetails';
import AppliedJobs3 from '../AppliedJobs3/AppliedJobs3';

const AppliedJobs2 = () => {
    const appliedJobs = useContext(AppliedJobsContext);
    return (
        <div>
            <h3>All applied jobs down below:</h3>
            {
                appliedJobs.map(job => <AppliedJobs3
                    key={job.id}
                    job={job}
                ></AppliedJobs3>)
            }
        </div>
    );
};

export default AppliedJobs2;