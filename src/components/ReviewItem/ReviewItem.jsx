/* eslint-disable */
import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';


const ReviewItem = ({ job, handleRemoveFromCart }) => {
    const { id, img, title } = job;
    return (
        <div className='review-item'>
            <img src={img} alt="Company icon" />
            <h3>{title}</h3>
            <button onClick={() => handleRemoveFromCart(id)}>
                <FontAwesomeIcon icon={faTrashCan} />
            </button>
        </div>
    );
};

export default ReviewItem;