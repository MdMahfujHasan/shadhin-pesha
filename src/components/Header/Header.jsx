/* eslint-disable */
import React from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';
import './Header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <h3 className='header-title'>Shadhin Pesha</h3>
            <nav>
                <ActiveLink to="/">Home</ActiveLink>
                <ActiveLink to="/statistics">Statistics</ActiveLink>
                <ActiveLink to="/applied">Applied Jobs</ActiveLink>
                <ActiveLink to="/blogs">Blogs</ActiveLink>
                <ActiveLink to="/">Jobs</ActiveLink>
            </nav>
            <button className='btn-common'>Start Applying</button>
        </div>
    );
};

export default Header;