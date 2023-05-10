/*eslint-disable*/
import React from 'react';
import Banner from '../Banner/Banner';
import JobCategoryList from '../JobCategoryList/JobCategoryList';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import Jobs from '../Jobs/Jobs';
import Footer from '../Footer/Footer';
import Statistics from '../Statistics/Statistics';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobCategoryList></JobCategoryList>
            <FeaturedJobs></FeaturedJobs>
            <Jobs></Jobs>
            <Statistics></Statistics>
            <Footer></Footer>
        </div>
    );
};

export default Home;