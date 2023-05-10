/*eslint-disable*/
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const job = useLoaderData();
    console.log(job);
    const { img, title, company, place, location, salaryRange } = job;
    return (
        <div>
            <img src={img} alt="" />
            <h3>{title}</h3>
            <p>{company}</p>
            <p>
                <span>{place[0]}</span>
                <span>{place[1]}</span>
            </p>
            <p>{location}</p>
            <p>{salaryRange[0]}k - {salaryRange[1]}k</p>
        </div>
    );
};

export default JobDetails;