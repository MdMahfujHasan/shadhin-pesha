/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import List from '../../components/List/List';
import './JobCategoryList.css';

const JobCategoryList = () => {
    const jobCategoryList = [
        {
            id: 1,
            title: "Account & Finance",
            available: 300,
            icon: "icon 1"
        },
        {
            id: 2,
            title: "Creative Design",
            available: 100,
            icon: "icon 2"
        },
        {
            id: 3,
            title: "Marketing & Sales",
            available: 150,
            icon: "icon 3"
        },
        {
            id: 4,
            title: "Engineering Job",
            available: 224,
            icon: "icon 4"
        }
    ]
    return (
        <div>
            <div style={{ textAlign: 'center' }}>
                <h2 className='common-title'>Job Category List</h2>
                <p className='common-description'>Explore thousands of job opportunities with all the information you need. Its your future.</p>
            </div>
            <div className='list-container'>
                {
                    jobCategoryList.map(list => <List
                        key={list.id}
                        list={list}></List>)
                }
            </div>
        </div>
    );
};

export default JobCategoryList;