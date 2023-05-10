/*eslint-disable*/
import React from 'react';
import Banner from '../Banner/Banner';
import JobCategoryList from '../JobCategoryList/JobCategoryList';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import Jobs from '../Jobs/Jobs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobCategoryList></JobCategoryList>
            <FeaturedJobs></FeaturedJobs>
            <Jobs></Jobs>
        </div>
    );
};

export default Home;