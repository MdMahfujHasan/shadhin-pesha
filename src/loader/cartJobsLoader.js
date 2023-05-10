import { getJobsCart } from "../../utilities/fakedb";

/* eslint-disable */
const cartProductsLoader = async () => {
    const loadedJobs = await fetch('products.json');
    const jobs = await loadedJobs.json();

    // if cart data is in database, you have to use async await
    const storedCart = getJobsCart();
    const savedCart = [];
    for (const id in storedCart) {
        const addedJobs = jobs.find(j => j.id === id);
        if (addedJobs) {
            const quantity = storedCart[id];
            addedJobs.quantity = quantity;
            savedCart.push(addedJobs);
        }
    }
    return savedCart;
}

export default cartProductsLoader;