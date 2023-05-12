import { getJobsCart } from "../../utilities/fakedb";

const cartJobsLoader = async () => {
    const loadedJobs = await fetch('https://pesha6.free.beeceptor.com/jobs');
    const jobs = await loadedJobs.json();

    const storedCart = getJobsCart();
    const savedCart = [];
    for (const id in storedCart) {
        const addedJob = jobs.find(job => job.id === id);
        if (addedJob) {
            const quantity = storedCart[id];
            addedJob.quantity = quantity;
            savedCart.push(addedJob);
        }
    }
    return savedCart;
}

export default cartJobsLoader;