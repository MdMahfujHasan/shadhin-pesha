/*eslint-disable*/
import React from 'react';
import Banner from '../Banner/Banner';
import JobCategoryList from '../JobCategoryList/JobCategoryList';
import Jobs from '../Jobs/Jobs';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobCategoryList></JobCategoryList>
            <Jobs></Jobs>
            <Footer></Footer>
        </div>
    );
};

export default Home;