/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBangladeshiTakaSign, faCalendarCheck, faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ job }) => {
    const { img, title, company, place, location, salaryRange } = job;
    return (
        <div className='cart-container'>
            <div className='cart-info-container'>
                <div>
                    <img src={img} alt="Company icon" />
                </div>
                <div>
                    <h3 className='job-title'>{title}</h3>
                    <p style={{ margin: '8px 0 16px 0' }} className='job-text'>{company}</p>
                    <p>
                        <span className='job-place'>{place[0]}</span>
                        <span className='job-place'>{place[1]}</span>
                    </p>
                    <p style={{ margin: '0' }} className='common-description'>{location}</p>
                    <p>
                        <FontAwesomeIcon icon={faBangladeshiTakaSign} className='icon' />
                        <b>Salary: </b>
                        {salaryRange[0]}k-{salaryRange[1]}k per month
                    </p>
                </div>
            </div>
            <Link to="/">
                <button className='btn-common'>View Details</button>
            </Link>
        </div>
    );
};

export default Cart;