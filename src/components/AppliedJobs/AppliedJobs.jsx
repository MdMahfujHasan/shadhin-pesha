/*eslint-disable*/
import React from 'react';
import Cart from '../Cart/Cart';

const AppliedJobs = ({ cart }) => {

    return (
        <div>
            <h3>Applied Job</h3>
            {
                cart.map(job => <Cart
                    key={job.id}
                    job={job}
                ></Cart>)
            }
        </div>
    );
};

export default AppliedJobs;