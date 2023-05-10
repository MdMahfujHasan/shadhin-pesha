/* eslint-disable */
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteJobsCart, removeFromDb } from '../../../utilities/fakedb';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';

const Applied = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);
    const handleRemoveFromCart = id => {
        // console.log(id);
        const remaining = cart.filter(job => job.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }
    const handleClearCart = () => {
        setCart([]);
        deleteJobsCart();
    }
    return (
        <div>
            <div className='review-container'>
                {
                    cart.map(job => <ReviewItem
                        key={job.id}
                        job={job}
                        handleRemoveFromCart={handleRemoveFromCart}
                    ></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                    handleClearCart={handleClearCart}
                >
                    <button className="btn-common">Proceed Checkout</button>
                </Cart>
            </div>
        </div>
    );
};

export default Applied;