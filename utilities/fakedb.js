const getJobsCart = () => {
    let jobsCart = {};
    const storedCart = localStorage.getItem('jobs-cart');
    if (storedCart) {
        jobsCart = JSON.parse(storedCart);
    }
    return jobsCart;
}

const addToDb = id => {
    let jobsCart = getJobsCart();
    const quantity = jobsCart[id];
    if (!quantity) {
        jobsCart[id] = 1;
    }
    else {
        jobsCart[id] = quantity + 1;
    }
    localStorage.setItem('jobs-cart', JSON.stringify(jobsCart));
}

const removeFromDb = id => {
    const jobsCart = getJobsCart();
    if (id in jobsCart) {
        delete jobsCart[id];
        localStorage.setItem('jobs-cart', JSON.stringify(jobsCart));
    }
}

const deleteJobsCart = () => {
    localStorage.removeItem('jobs-cart');
}

export {
    getJobsCart,
    addToDb,
    removeFromDb,
    deleteJobsCart
}