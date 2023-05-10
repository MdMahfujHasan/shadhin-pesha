/* eslint-disable */
import React from 'react';
import socialMedia from '../../../assets/icons/social-media.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-info'>
                <div>
                    <h2>Shadhin Pesha</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit id cupiditate quo quos dolorum perspiciatis!</p>
                    <img src={socialMedia} alt="" />
                </div>
                <div>
                    <h3>Company</h3>
                    <p>About Us</p>
                    <p>Work</p>
                    <p>Latest News</p>
                    <p>Careers</p>
                </div>
                <div>
                    <h3>Product</h3>
                    <p>Prototype</p>
                    <p>Plans and Pricing</p>
                    <p>Customers</p>
                    <p>Integration</p>
                </div>
                <div>
                    <h3>Support</h3>
                    <p>Help Desk</p>
                    <p>Sales</p>
                    <p>Become a Partner</p>
                    <p>Developers</p>
                </div>
                <div>
                    <h3>Contact</h3>
                    <p>House #12, Road #5, Block-B, Niketon, Gulshan-1, Dhaka, Bangladesh.</p>
                    <p>+6742-258-1378</p>
                </div>
            </div>
            <hr />
            <div className='copyright'>
                <p>@2023 Shadhin Pesha. All Rights Reserved.</p>
                <p>Powered by Shadhin Pesha</p>
            </div>
        </div>
    );
};

export default Footer;