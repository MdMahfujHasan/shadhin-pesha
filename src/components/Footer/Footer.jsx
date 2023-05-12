/* eslint-disable */
import React from 'react';
import socialMedia from '../../../assets/icons/social-media.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-info'>
                <div>
                    <h3>Shadhin Pesha</h3>
                    <small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit id cupiditate quo quos dolorum perspiciatis.</small>
                    <img src={socialMedia} alt="" />
                </div>
                <div>
                    <h4>Company</h4>
                    <small>About Us</small>
                    <small>Work</small>
                    <small>Latest News</small>
                    <small>Careers</small>
                </div>
                <div>
                    <h4>Product</h4>
                    <small>Prototype</small>
                    <small>Plans and Pricing</small>
                    <small>Customers</small>
                    <small>Integration</small>
                </div>
                <div>
                    <h4>Support</h4>
                    <small>Help Desk</small>
                    <small>Sales</small>
                    <small>Become a Partner</small>
                    <small>Developers</small>
                </div>
                <div>
                    <h4>Contact</h4>
                    <small>House #12, Road #5, Block-B, Niketon, Gulshan-1, Dhaka, Bangladesh.</small>
                    <small>+6742-258-1378</small>
                </div>
            </div>
            <hr />
            <div className='copyright'>
                <small>@2023 Shadhin Pesha. All Rights Reserved.</small>
                <small>Powered by Shadhin Pesha</small>
            </div>
        </div>
    );
};

export default Footer;