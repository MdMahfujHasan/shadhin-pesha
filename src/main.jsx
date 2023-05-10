/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main.jsx';
import Home from './components/Home/Home.jsx';
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blogs from './components/Blogs/Blogs';
import JobDetails from './components/JobDetails/JobDetails';
import NotFound from './components/NotFound/NotFound';
import Cart from './components/Cart/Cart';
import Jobs from './components/Jobs/Jobs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://peshaa.free.beeceptor.com/jobs')
      },
      {
        path: "job/:jobId",
        element: <JobDetails></JobDetails>,
        loader: ({ params }) => fetch(`https://peshaa.free.beeceptor.com/job/${params.jobId}`)
      },
      {
        path: "apply",
        element: <Cart></Cart>
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "jobs",
        element: <h3>jobs</h3>
      },
      {
        path: "applied",
        element: <h3>applied</h3>
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "*",
        element: <NotFound></NotFound>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
