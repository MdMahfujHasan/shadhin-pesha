/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteJobsCart, getJobsCart, removeFromDb } from '../../../utilities/fakedb';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';

const Applied = () => {
    // const savedCart = useLoaderData();
    // console.log(savedCart)
    // const [cart, setCart] = useState(savedCart);
    // const handleRemoveFromCart = id => {
    //     // console.log(id);
    //     const remaining = cart.filter(job => job.id !== id);
    //     setCart(remaining);
    //     removeFromDb(id);
    // }
    // const handleClearCart = () => {
    //     setCart([]);
    //     deleteJobsCart();
    // }
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('https://pesha.free.beeceptor.com/jobs')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    // if cart data is in database, you have to use async await
    const storedCart = getJobsCart();
    const savedCart = [];
    for (const id in storedCart) {
        const addedJobs = jobs.find(job => job.id === id);
        if (addedJobs) {
            const quantity = storedCart[id];
            addedJobs.quantity = quantity;
            savedCart.push(addedJobs);
        }
    }
    console.log(savedCart)

    return (
        <div>
            {/* <div className='review-container'>
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
            </div> */}
        </div>
    );
};

export default Applied;