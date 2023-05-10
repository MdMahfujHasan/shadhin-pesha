/*eslint-disable*/
import React from 'react';
import './List.css';

const List = ({ list }) => {
    const { title, available, icon } = list;
    return (
        <div className='list-item'>
            {/* <img src={icon} alt="Icon" /> */}
            <h4 className='job-category-title'>{title}</h4>
            <p className='job-category-description'>{available} Jobs Available</p>
        </div>
    );
};

export default List;