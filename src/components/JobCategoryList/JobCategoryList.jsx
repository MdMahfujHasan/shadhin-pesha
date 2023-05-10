/*eslint-disable*/
import React from 'react';
import './JobCategoryList.css';
import accounts from '../../../assets/icons/accounts.png';
import business from '../../../assets/icons/business.png';
import chip from '../../../assets/icons/chip.png';
import social from '../../../assets/icons/social.png';

const JobCategoryList = () => {
    return (
        <div>
            <div style={{ textAlign: 'center' }}>
                <h2 className='common-title'>Job Category List</h2>
                <p className='common-description'>Explore thousands of job opportunities with all the information you need. Its your future.</p>
            </div>
            <div className='list-container'>
                <div className='list-item'>
                    <img src={accounts} alt="Accounts icon" />
                    <h4 className='job-category-title'>Account & Finance</h4>
                    <p className='job-category-description'>300 Jobs Available</p>
                </div>
                <div className='list-item'>
                    <img src={business} alt="Business icon" />
                    <h4 className='job-category-title'>Creative Design</h4>
                    <p className='job-category-description'>100 Jobs Available</p>
                </div>
                <div className='list-item'>
                    <img src={chip} alt="Chip icon" />
                    <h4 className='job-category-title'>Marketing & Sales</h4>
                    <p className='job-category-description'>150 Jobs Available</p>
                </div>
                <div className='list-item'>
                    <img src={social} alt="Social icon" />
                    <h4 className='job-category-title'>Engineering Job</h4>
                    <p className='job-category-description'>224 Jobs Available</p>
                </div>
            </div>
        </div>
    );
};

export default JobCategoryList;